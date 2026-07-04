/**
 * Port verifying that a request comes from a human (not a bot), given the
 * challenge token produced by the client-side widget. Implementations throw a
 * {@link HumanVerificationError} when verification does not pass.
 */
export interface HumanVerifier {
  verify(token: string): Promise<void>;
}
