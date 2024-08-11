export abstract class PortfolioError extends Error {
  constructor(message: string, cause?: unknown) {
    super(message);
    this.cause = cause;

    Object.setPrototypeOf(this, PortfolioError.prototype);
  }

  public abstract get key(): string;
}
