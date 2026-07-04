import { execFileSync } from "node:child_process";
import {
  writeFileSync,
  readFileSync,
  copyFileSync,
  existsSync,
  readdirSync,
  renameSync,
  rmdirSync,
} from "node:fs";
import { createRequire } from "node:module";
import { dirname, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { parseArgs } from "node:util";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const distDir = resolve(scriptDir, "dist/portfolio/browser");
const indexHtmlPath = resolve(distDir, "index.html");
const runtimeConfigPath = resolve(distDir, "runtime-config.json");
const headersPath = resolve(distDir, "_headers");

const { values: args } = parseArgs({
  options: {
    env: { type: "string" },
    "api-base-url": { type: "string" },
    "turnstile-site-key": { type: "string" },
    "project-name": { type: "string" },
    branch: { type: "string" },
  },
});

const env = args.env;
if (env !== "dev" && env !== "prod") {
  console.error("Usage: node deploy.mjs --env=dev|prod");
  process.exit(1);
}

const perEnv = {
  dev: {
    project: "portfolio-dev",
    robots: "robots.nonprod.txt",
    // Public sitekey of the dev Turnstile widget (02-cloudflare, domains=[dev.nicolasdesnoust.com]).
    turnstileSiteKey: "0x4AAAAAADvmGf2NmB4f51R3",
  },
  prod: {
    project: "portfolio",
    robots: "robots.prod.txt",
    // Public sitekey of the prod Turnstile widget (02-cloudflare, domains=[nicolasdesnoust.com]).
    turnstileSiteKey: "0x4AAAAAADvmGtcu-in9JKwL",
  },
}[env];

// The backend is the AWS API Gateway execute-api URL produced by
// `iac/01-portfolio` (terraform output backend_url). It changes per environment,
// so it is injected at deploy time rather than hardcoded.
const apiBaseUrl = args["api-base-url"] || process.env.BACKEND_URL;
const turnstileSiteKey =
  args["turnstile-site-key"] ||
  process.env.TURNSTILE_SITE_KEY ||
  perEnv.turnstileSiteKey;
const projectName = args["project-name"] || perEnv.project;
const branch = args.branch || "main";

if (!apiBaseUrl) {
  console.error(
    "Missing backend URL. Pass --api-base-url=<url> or set BACKEND_URL " +
      "(the iac/01-portfolio `backend_url` terraform output).",
  );
  process.exit(1);
}

if (!turnstileSiteKey) {
  console.error(
    `Missing Turnstile site key for ${env}. Pass --turnstile-site-key=<sitekey> or set ` +
      `perEnv.${env}.turnstileSiteKey in deploy.mjs (public sitekey from \`task iac:cloudflare:output\`).`,
  );
  process.exit(1);
}

for (const key of ["CLOUDFLARE_API_TOKEN", "CLOUDFLARE_ACCOUNT_ID"]) {
  if (!process.env[key]) {
    console.error(`Missing ${key}. Set it locally (dotenv) or as a CI secret.`);
    process.exit(1);
  }
}

console.log(`Deploying portfolio to Cloudflare Pages (${env})`);
console.log(`  project:      ${projectName}`);
console.log(`  branch:       ${branch}`);
console.log(`  backend_url:  ${apiBaseUrl}`);

if (!existsSync(indexHtmlPath)) {
  console.error(
    `Missing build artefact: ${indexHtmlPath}. Run \`task front:build\` first.`,
  );
  process.exit(1);
}

writeRuntimeConfig();
patchHeadersConnectSrc();
placeRobots();
flattenPrerenderedRoutes();
deployToPages();

console.log("Deploy complete.");

function writeRuntimeConfig() {
  const config = { backendUrl: apiBaseUrl, turnstileSiteKey };
  writeFileSync(runtimeConfigPath, JSON.stringify(config), "utf8");
  console.log("✓ Wrote runtime-config.json");
}

function patchHeadersConnectSrc() {
  if (!existsSync(headersPath)) {
    throw new Error(
      `Missing ${headersPath} — public/_headers should be copied into the build.`,
    );
  }
  const original = readFileSync(headersPath, "utf8");
  const patched = original.replace(
    /(connect-src 'self')[^;]*/,
    `$1 ${apiBaseUrl}`,
  );
  if (!patched.includes(`connect-src 'self' ${apiBaseUrl}`)) {
    throw new Error(
      "Could not patch connect-src in _headers — check the CSP format.",
    );
  }
  writeFileSync(headersPath, patched, "utf8");
  console.log(`✓ Patched _headers connect-src -> ${apiBaseUrl}`);
}

function placeRobots() {
  const src = resolve(scriptDir, perEnv.robots);
  if (!existsSync(src)) {
    throw new Error(`Missing robots source: ${src}`);
  }
  copyFileSync(src, resolve(distDir, "robots.txt"));
  console.log(`✓ Placed robots.txt (from ${perEnv.robots})`);
}

// Angular prerenders each route to `<route>/index.html`, which Cloudflare Pages
// serves at the trailing-slash URL (redirecting the no-slash form). Flatten them
// to `<route>.html` so routes resolve at their no-slash URL — matching the
// Angular router and the client-rendered routes — with no redirect hop.
//
// The root index.html is left untouched: because the app's '' route redirects to
// 'home', it prerenders to an empty `<desn-root></desn-root>` shell — exactly the
// route-agnostic document the SPA fallback (`/* /index.html 200`) needs to boot
// client-rendered / parameterised routes on their real URL.
function flattenPrerenderedRoutes() {
  const indexFiles = readdirSync(distDir, {
    recursive: true,
    withFileTypes: true,
  })
    .filter((entry) => entry.isFile() && entry.name === "index.html")
    .map((entry) => resolve(entry.parentPath, entry.name))
    .filter((file) => dirname(file) !== distDir)
    // Deepest first so a nested route is flattened before its parent directory.
    .sort((left, right) => right.length - left.length);

  for (const indexFile of indexFiles) {
    const routeDir = dirname(indexFile);
    renameSync(indexFile, `${routeDir}.html`);
    if (readdirSync(routeDir).length === 0) {
      rmdirSync(routeDir);
    }
    console.log(
      `✓ Flattened ${relative(distDir, routeDir)}/ -> ${relative(distDir, routeDir)}.html`,
    );
  }
}

function deployToPages() {
  const require = createRequire(import.meta.url);
  const wranglerBin = resolve(
    dirname(require.resolve("wrangler/package.json")),
    "bin/wrangler.js",
  );
  execFileSync(
    process.execPath,
    [
      wranglerBin,
      "pages",
      "deploy",
      distDir,
      "--project-name",
      projectName,
      "--branch",
      branch,
    ],
    { stdio: "inherit", cwd: scriptDir },
  );
  console.log("✓ wrangler pages deploy complete");
}
