// array destructuring

let fruits = ['apple', 'banana', 'orange', 'mango', 'kiwi'];

let [first, second, ...rest] = fruits;

console.log(first, second, rest);

// object destructuring

let user = { username: 'Ricardo', age: 23, country: 'MX' };

let { username, age, country } = user;

console.log(username, age, country);