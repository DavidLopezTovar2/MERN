const {newUser, newCompany, newUserAndCompany} = require('../controllers/api.controller');

module.exports = (app) => {
    app.get('/api/users/new', newUser);
    app.get('/api/user/company', newUserAndCompany)
    app.get('/api/companies/new', newCompany)
}