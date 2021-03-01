export default class JWT {
  header: string;
  payload: string;
  signature: string;

  constructor(token: string) {
    const [header, payload, signature] = token.split('.');
    this.header = header;
    this.payload = payload;
    this.signature = signature;
  }

  decodedHeader() {
    return window.atob(this.header);
  }

  decodedPayload() {
    return window.atob(this.payload);
  }
}