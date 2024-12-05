const company = {
    sales: [
        { name: 'Jhon', salary: 1000 },
        { name: 'Alice', salary: 600 },
        { name: 'Bob', salary: 1200 }
    ],
    development: {
        web: [
            { name: 'Peter', salary: 2000 },
            { name: 'Alex', salary: 1800 },
            { name: 'Max', salary: 600 },
        ],
        internals: [
            { name: 'Jack', salary: 1300 }
        ]
    }
};
function totalSales(company) {
    let total = 0;
    for (let key in company) {
        if(Array.isArray(company[key])) {
            for (let employee of company[key]) {
                  total += employee.salary;
            }
        } else if (typeof company[key] === 'object') {
            total += totalSales(company[key]);
        }
    }
    return total;

}
const total = totalSales(company);
console.log(total);