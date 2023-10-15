var lastName = 'David';
lastName = 'Smith';
console.log(lastName); // Smith

let fruit = 'apple';
fruit = 'banana';
console.log(fruit); // banana

const animal = 'dog';
animal = 'cat';
console.log(animal); // TypeError: Assignment to constant variable.

const fruits = () => {
    if (true){
        var fruit1 = 'apple'; // function scope
        let fruit2 = 'banana'; // block scope
        const fruit3 = 'kiwi'; // block scope
    }

    console.log(fruit1); // apple
    console.log(fruit2); // ReferenceError: fruit2 is not defined
    console.log(fruit3); // ReferenceError: fruit3 is not defined
}

fruits();

