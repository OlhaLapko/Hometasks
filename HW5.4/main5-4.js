let count = true;
while (count) {
    const num = prompt("Введіть число N:");

    if (num === null) {
        break;
    }

    const N = Number(num);

    if (isNaN(N)) {
        alert("Будь ласка, введіть коректне число.");
    } else {
        let primeNum = true;
        if (N <= 1) {
            primeNum = false;
        } else {
            for (let i = 2; i <= Math.sqrt(N); i++) {
                if (N % i === 0) {
                    primeNum = false;
                    break;
                }
            }
        }
        const res = primeNum ? "є простим числом." : "не є простим числом.";
        alert(`Число ${N} ${res}`);
    }

   count = confirm("Можливо прорахувати ще одне число?");
}