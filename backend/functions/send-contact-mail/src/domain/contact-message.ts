import { Sender } from "./sender";

export interface ContactMessageProps {
  subject: string;
  body: string;
  sender: Sender;
}

export class ContactMessage {
  private _props: ContactMessageProps;

  constructor(props: ContactMessageProps) {
    this._props = props;
  }

  public get subject(): string {
    return this._props.subject;
  }

  public get body(): string {
    return this._props.body;
  }

  public get sender(): Sender {
    return this._props.sender;
  }
}
