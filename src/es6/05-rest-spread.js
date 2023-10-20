// array destructuring

let fruits = ['apple', 'banana', 'orange', 'mango', 'kiwi'];

let [first, second, ...rest] = fruits;

console.log(first, second, rest);

// object destructuring

let user = { username: 'Ricardo', age: 23, country: 'MX' };

let { username, age } = user;

console.log(username, age);

// spread operator

let person = { name: 'Ricardo', age: 23 };

let country = { country: 'MX' };

let data = { id: 1, ...person, ...country };

console.log(data);

// rest operator

function sum(num, ...values) {
    return num + values.reduce((a, b) => a + b, 0);
}

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
