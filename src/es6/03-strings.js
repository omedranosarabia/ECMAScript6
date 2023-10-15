let hello = 'Hello';
let world = 'World';

// ES5
let phrase = hello + ' ' + world;

// ES6 Template Literals
let phrase2 = `${hello} ${world}`;

console.log(phrase2); // Hello World

// ES5
let lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. \n' + 'Vestibulum nec odio ipsum. \n' + 'Suspendisse potenti.';

// ES6 Template Literals
let lorem2 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Vestibulum nec odio ipsum.
Suspendisse potenti.`;

console.log(lorem2);
