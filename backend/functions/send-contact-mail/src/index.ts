import { SESClient } from "@aws-sdk/client-ses";
import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { SendContactMailRequest } from "backend/apis/send-contact-mail";
import { HumanVerifier } from "./domain/human-verifier";
import { MailSender } from "./domain/mail-sender";
import { MessageFormatter } from "./domain/message-formatter";
import { AwsMailSender } from "./infrastructure/aws-mail-sender";
import { CloudflareTurnstileVerifier } from "./infrastructure/cloudflare-turnstile-verifier";
import { SendContactMailUseCase } from "./use-case";

const turnstileSecret = process.env.TURNSTILE_SECRET;
if (!turnstileSecret) {
  throw new Error(
    "TURNSTILE_SECRET is required (use a Cloudflare Turnstile test secret for local development)."
  );
}

const sesClient = new SESClient({});
const messageFormatter = new MessageFormatter();
const mailSender: MailSender = new AwsMailSender(sesClient, messageFormatter);
const humanVerifier: HumanVerifier = new CloudflareTurnstileVerifier(
  turnstileSecret
);

const useCase = new SendContactMailUseCase(humanVerifier, mailSender);

export const handler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  let httpResponse: APIGatewayProxyResult;

  try {
    httpResponse = await unsafeHandler(event);
  } catch (error) {
    console.error(error);
    return {
      body: JSON.stringify(error),
      statusCode: 403,
    };
  }

  addCorsHeaders(httpResponse);
  return httpResponse;
};

async function unsafeHandler(event: APIGatewayProxyEvent) {
  const request: SendContactMailRequest = JSON.parse(event.body || "{}");

  await useCase.sendContactMail(request);

  return {
    statusCode: 201,
    body: "",
  };
}

function addCorsHeaders(httpResponse: APIGatewayProxyResult) {
  if (!httpResponse.headers) {
    httpResponse.headers = {};
  }
  httpResponse.headers["Access-Control-Allow-Origin"] = "*";
  httpResponse.headers["Access-Control-Allow-Credentials"] = true;
}
