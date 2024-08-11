import { PortfolioError } from "./portfolio-error";

export class MailSendingError extends PortfolioError {
  constructor(message: string, cause?: unknown) {
    super(message, cause);
    Object.setPrototypeOf(this, MailSendingError.prototype);
  }

  public get key(): string {
    return "server.mail-sending-error";
  }
}
