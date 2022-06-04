const {getAllDojos, createDojo, addIntructorsToDojo, getStudents} = require('../controllers/dojos.controllers');

module.exports = (app) => {
    app.get('/api/dojos', getAllDojos);
    app.post('/api/dojos', createDojo);
    app.put('/api/dojos/intructors/:id', addIntructorsToDojo);
    app.get('/api/students', getStudents);
}