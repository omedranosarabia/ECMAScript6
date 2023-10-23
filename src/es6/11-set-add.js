const list = new Set();

list.add(1);
list.add(2);
list.add(3);
list.add(4).add(5).add(6).add(7).add(8).add(9).add(10);

console.log(list);
console.log(list.has(1)); // true

list.delete(1);
console.log(list);
console.log(list.has(1)); // false

list.clear();
console.log(list);

// Set from array

const list2 = new Set([1, 1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

console.log(list2);