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
// Generics interface
// Enum
var RType;
(function (RType) {
    RType[RType["SUCCESS"] = 0] = "SUCCESS";
    RType[RType["FAILURE"] = 1] = "FAILURE";
    RType[RType["UNAUTHENTICATED"] = 2] = "UNAUTHENTICATED";
    RType[RType["FORBIDDEN"] = 3] = "FORBIDDEN";
})(RType || (RType = {}));
const res1 = {
    status: 200,
    type: RType.SUCCESS,
    data: {
        name: "test",
        something: 300,
    },
};
