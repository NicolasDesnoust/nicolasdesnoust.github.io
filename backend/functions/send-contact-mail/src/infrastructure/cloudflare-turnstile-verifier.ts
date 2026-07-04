import { HumanVerificationError } from "../domain/human-verification-error";
import { HumanVerifier } from "../domain/human-verifier";

const SITEVERIFY_URL =
  "https://challenges.cloudflare.com/turnstile/v0/siteverify";

interface SiteverifyResponse {
  success: boolean;
  "error-codes"?: string[];
}

/**
 * Verifies a Cloudflare Turnstile token against the siteverify endpoint.
 * Fails closed: any non-success outcome raises a {@link HumanVerificationError}.
 */
export class CloudflareTurnstileVerifier implements HumanVerifier {
  constructor(private readonly secret: string) {}

  public async verify(token: string): Promise<void> {
    if (!token) {
      throw new HumanVerificationError("Error: missing Turnstile token.");
    }

    const result = await this.requestSiteverify(token);
    if (!result.success) {
      throw new HumanVerificationError(
        "Error: Turnstile verification failed.",
        result["error-codes"]
      );
    }
  }

  private async requestSiteverify(token: string): Promise<SiteverifyResponse> {
    try {
      const response = await fetch(SITEVERIFY_URL, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ secret: this.secret, response: token }),
      });
      return (await response.json()) as SiteverifyResponse;
    } catch (error) {
      throw new HumanVerificationError(
        "Error: the Turnstile verification service could not be reached.",
        error
      );
    }
  }
}
