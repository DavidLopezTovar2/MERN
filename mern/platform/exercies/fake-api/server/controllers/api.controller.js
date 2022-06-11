const { faker } = require('@faker-js/faker');

class User {
    contructor() {
        this._id = faker.datatype.number(),
            this.firstName = faker.name.firstName(),
            this.lastName = faker.name.lastName(),
            this.number = faker.phone.phoneNumber(),
            this.email = faker.internet.email(),
            this.password = faker.datatype.number()
    }
}

module.exports.newUser = (req, res) => {
    res.json({
        _id: faker.datatype.number(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        number: faker.phone.phoneNumber(),
        email: faker.internet.email(),
        password: faker.internet.password()
    });
}

module.exports.newCompany = (req, res) => {
    res.json({
        _id: faker.datatype.number(),
        name: faker.company.companyName(),
        address: {
            street: faker.address.street(),
            city: faker.address.city(),
            state: faker.address.state(),
            postal_code: faker.address.zipCode(),
            contry: faker.address.country()
        }
    });
}

module.exports.newUserAndCompany = (req, res) => {
    res.json([{
        _id: faker.datatype.number(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        number: faker.phone.phoneNumber(),
        email: faker.internet.email(),
        password: faker.internet.password()
    }, {
        _id: faker.datatype.number(),
        name: faker.company.companyName(),
        address: {
            street: faker.address.street(),
            city: faker.address.city(),
            state: faker.address.state(),
            postal_code: faker.address.zipCode(),
            contry: faker.address.country()
        }
    }]);
}