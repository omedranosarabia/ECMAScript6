// Declaration of a class
// class User{};


class User {
    greeting() {
        return 'Hello World';
    }
}

const user = new User();
console.log(user.greeting());
const developer = new User();

// constructor method
class User {
    constructor(name) {
        this.name = name;
    }
    greeting() {
        return `Hello my name is ${this.name}`;
    }
}

const user2 = new User('Jorge');
console.log(user2.greeting());

// this
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greeting() {
        return `Hello my name is ${this.name} and I am ${this.age} years old`;
    }
}

const user3 = new User('Jorge', 27);
console.log(user3.greeting());

// getters y setters
class User {
    constructor(name, age) {
        console.log("Constructor");
        this._name = name;
        this._age = age;
    }
    get name() {
        console.log("Get name");
        return this._name;
    }
    set name(value) {
        console.log("Set name");
        this._name = value;
    }
    get age() {
        console.log("Get age");
        return this._age;
    }
    set age(value) {
        console.log("Set age");
        this._age = value;
    }
}

const user4 = new User('Jorge', 27);
console.log(user4.name);
user4.name = 'Luis';
console.log(user4.name);
