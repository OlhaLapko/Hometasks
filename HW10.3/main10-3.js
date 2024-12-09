const contacts = [
    {
        id: 1,
        name: "Serhii",
        phone: "+380999999999",
        email: "example@email.com",
    },
];

function Contact({ id, name, phone, email }) {
    this.id = id;
    this.name = name;
    this.phone = phone;
    this.email = email;
}

function Book(contacts) {
    this.contacts = contacts;
}

Book.prototype.find = function (name) {
    return this.contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase()) || null;
};


Book.prototype.add = function (contact) {
    this.contacts.push(contact);
};

Book.prototype.remove = function (id) {
    this.contacts = this.contacts.filter(contact => contact.id !== id);
};

Book.prototype.update = function (id, newData) {
    const contact = this.find(newData.name);
    if (contact) {
        contact.phone = newData.phone || contact.phone;
        contact.email = newData.email || contact.email;
    }
};

const mappedContacts = contacts.map((el) => new Contact(el));

const book = new Book(mappedContacts);
console.log(book);

book.add(new Contact({ id: 4, name: "Semen", phone: "+380988889456", email: "semen@email.com" }));
console.log(book);

const foundContact = book.find("Serhii");
console.log(foundContact);

book.remove(1);
console.log(book);

book.update(4, { name: "Semen", phone: "+380681523450", email: "semen99@email.com" });

console.log(book);