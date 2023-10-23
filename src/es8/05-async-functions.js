const fnAsync = () => {
    return new Promise((resolve, reject) => {
        console.log('Start Async Function');
        (true)
            ? setTimeout(() => resolve('Async Function'), 3000)
            : reject(new Error('Error Async Function'))
    })
}

const anotherFn = async () => {
    const somehitng = await fnAsync();

    console.log(somehitng);
    console.log('End Async Function');
}

console.log('Start');
anotherFn();
console.log('End');