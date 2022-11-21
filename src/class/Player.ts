import { IsPlayer } from "../interfaces/isPlayer.js";

export class Player implements IsPlayer {
  constructor(
    public name: string,
    private age: number,
    readonly country: string
  ) {}

  getProperty() {
    return this.age;
  }

  play() {
    console.log(`${this.name} from ${this.country} is Player`);
  }
}

// Generics

const addID = <T extends { name: string; age: number }>(obj: T) => {
  let id = Math.floor(Math.random() * 100);
  return { ...obj, id };
};

let user = addID({
  name: "Mahsrafi",
  age: 38,
  country: "Bangladesh",
});

addID(user);
