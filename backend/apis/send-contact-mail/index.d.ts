export type SendContactMailRequest = {
  subject: string;
  body: string;
  sender: SendContactMailRequest.SenderDto;
};

export namespace SendContactMailRequest {
  export type SenderDto = {
    name: string;
    emailAddress: string;
  };
}
