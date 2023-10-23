import { getData } from './api.js';

function solution() {
    return getData();
}

console.log(await solution());