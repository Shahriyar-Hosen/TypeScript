export class Player {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    getProperty() {
        return this.age;
    }
    play() {
        console.log(`${this.name} from ${this.country} is Player`);
    }
}
// Generics
const addID = (obj) => {
    let id = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { id });
};
let user = addID({
    name: "Mahsrafi",
    age: 38,
    country: "Bangladesh",
});
addID(user);
