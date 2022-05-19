const person = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
    createdAt: 1543945177623
};

const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];

// DESPUÉS DE ES6
const { email } = person;
const [firstAnimal] = animals;
console.log(email);
// => bob@marley.com
console.log(firstAnimal);
// => horse


//when the name of the variable is already in use
const password = '12345';
const { password: hashedPassword } = person;


//Nested object
const person = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
    addresses: [
        {
            address: '1600 Pennsylvania Avenue',
            city: 'Washington, D.C.',
            zipcode: '20500',
        },
        {
            address: '221B Baker St.',
            city: 'London',
            zipcode: 'WC2N 5DU',
        }
    ],
    createdAt: 1543945177623
};

const { addresses: [whiteHouse, sherlock] } = person;

const { addresses: [ , { city: london }] } = person;
console.log(london);
// => London


