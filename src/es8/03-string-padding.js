const greeting = 'Hello';

// padStart - adds padding to the start of the string based on the length provided
console.log(greeting.padStart(18, '1234567890')); // 12345Hello
// padEnd - adds padding to the end of the string based on the length provided
console.log(greeting.padEnd(18, '1234567890')); // Hello1234567890123