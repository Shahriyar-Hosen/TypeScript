export class Player {
  constructor(
    private name: string,
    public age: number,
    readonly country: string
  ) {}

  Play() {
    console.log(`${this.name} from ${this.country} is Player`);
  }
}
