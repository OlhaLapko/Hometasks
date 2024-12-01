function sum(number) {
    let total = number;
    return function(nextNum) {
        total += nextNum;
        return total;
    };
}
const addNum = sum(4);
console.log(addNum(6));
console.log(addNum(10));
console.log(addNum(7));