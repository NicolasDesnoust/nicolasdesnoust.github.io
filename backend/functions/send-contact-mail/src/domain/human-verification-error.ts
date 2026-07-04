import { PortfolioError } from "./portfolio-error";

export class HumanVerificationError extends PortfolioError {
  constructor(message: string, cause?: unknown) {
    super(message, cause);
    Object.setPrototypeOf(this, HumanVerificationError.prototype);
  }

  public get key(): string {
    return "client.human-verification-error";
  }
}
