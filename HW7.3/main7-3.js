function printChoice() {
    let lastNum;
    for (let i=0; i<10; i++){
        const choice = prompt("Введіть число більше 100: ");
        if (choice === null) {
            console.log('Операцію відмінено');
            return;
        }
        const number = Number(choice);

        if (isNaN(number) || number <= 100) {
            console.log('Невірно введено число. Будь ласка, введіть число, що більше 100');
            continue;
        }
        lastNum = number;
        break;
    }
    if (lastNum !== undefined) {
        console.log(lastNum);
    }else{
        console.log("Ви не ввели число.");
    }
}
printChoice();