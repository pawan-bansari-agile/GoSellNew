export class User {
  constructor(
    public name: string,
    public email: string,
    public phone: number,
    public password: string,
    public verified: boolean
  ) {}
}
