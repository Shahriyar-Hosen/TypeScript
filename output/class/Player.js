export class Player {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    Play() {
        console.log(`${this.name} from ${this.country} is Player`);
    }
}
