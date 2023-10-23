function* getId() {
    let id = 0;
    while (true) {
        yield id++;
    }
}

const idIterator = getId();
console.log(idIterator.next().value); // 0
console.log(idIterator.next().value); // 1
console.log(idIterator.next().value); // 2
console.log(idIterator.next().value); // 3
console.log(idIterator.next().value); // 4
console.log(idIterator.next().value); // 5
console.log(idIterator.next().value); // 6
console.log(idIterator.next().value); // 7
console.log(idIterator.next().value); // 8