export interface SenderProps {
  name: string;
  emailAddress: string;
}

export class Sender {
  private _props: SenderProps;

  constructor(props: SenderProps) {
    this._props = props;
  }

  public get name(): string {
    return this._props.name;
  }

  public get emailAddress(): string {
    return this._props.emailAddress;
  }
}
