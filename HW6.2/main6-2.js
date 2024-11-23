const array = [{}, 1, 2, 3, 4, 5, 6, 'string', null];

function foo(array) {
    let sum = 0;
    let count = 0;

    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number') {
            sum += array[i];
            count++;
        }
    }

    return count > 0 ? sum / count : 0;
}

const result = foo(array);
console.log(result);