const Configuration = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "scope-enum": [2, "always", ["iac", "front", "back"]],
  },
};

module.exports = Configuration;
