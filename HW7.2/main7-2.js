function product(number) {
    return function (num){
        return number * num;
    }
}
const result = product(5)(2);
console.log(result)