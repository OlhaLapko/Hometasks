const N = +prompt("Введіть ціле число N:");
if (isNaN(N)) {
    console.log("Будь ласка, введіть коректне число.");
} else {
    console.log(`Цілі числа від 1 до 100, квадрат яких не перевищує ${N}:`);
    for (let i = 1; i <= 100; i++) {
        if (i * i <= N) {
            console.log(i);
        }
    }
}