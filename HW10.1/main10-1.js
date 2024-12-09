function User(name, surname, age, position) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.position = position;
}

User.prototype.getInfo = function() {
    return {
        name: this.name,
        surname: this.surname,
        age: this.age,
        position: this.position
    }
}

const user1 = new User('David', 'Hrolenko', 25, 'Administrator');
const user2 = new User('Anna', 'Fedkova', 30, 'Manager');
const user3 = new User('Oleksandr', 'Tertuk', 40, 'Developer');

console.log(user1.getInfo());
console.log(user2.getInfo());
console.log(user3.getInfo());
