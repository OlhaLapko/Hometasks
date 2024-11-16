const num = +prompt("Enter your 3 digits number: ");
const n3 = num % 10;
const n2 = Math.floor((num / 10) % 10);
const n1 = Math.floor(num / 100);
const numEqual = (n1 === n2) && (n2 === n3);
console.log(numEqual);
const digitSame = (n1 === n2) || (n2 === n3) || (n1 === n3);
console.log(digitSame);






