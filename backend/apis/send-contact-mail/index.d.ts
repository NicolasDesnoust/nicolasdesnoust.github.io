export type SendContactMailRequest = {
  subject: string;
  body: string;
  sender: SendContactMailRequest.SenderDto;
  turnstileToken: string;
};

export namespace SendContactMailRequest {
  export type SenderDto = {
    name: string;
    emailAddress: string;
  };
}
