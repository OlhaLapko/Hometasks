const exRateDol  = 26;
const koefEuro = 0.94;
const money = prompt("Введіть валюту (uah, usd, euro)").toLowerCase();
for (let dollars = 10; dollars <= 100; dollars += 10) {
    let newValue;
    switch (money) {
        case 'uah':
            newValue = dollars * exRateDol;
            console.log(`${dollars}$ = ${newValue}₴`);
            break;
        case 'usd':
            console.log(`${dollars}$ = ${dollars}$`);
            break;
        case 'euro':
            newValue = Math.round(dollars * exRateDol * koefEuro);
            console.log(`${dollars}$ = ${newValue}€`);
            break;
        default:
            console.log("Невідома валюта. Введіть 'uah' - гривні, 'usd'-доллари або 'euro'- євро.");
            break;
    }
}