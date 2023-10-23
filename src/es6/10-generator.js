// Generator function is a special type of function that works as a factory for iterators.
function* iterate(array) {
    for (let i = 0; i < array.length; i++) {
        yield array[i];
    }
}

const iterator = iterate(["a", "b", "c"]);

console.log(iterator.next().value); // { value: 'a', done: false }
console.log(iterator.next().value); // { value: 'b', done: false }
console.log(iterator.next().value); // { value: 'c', done: false }
console.log(iterator.next().value); // { value: undefined, done: true }
