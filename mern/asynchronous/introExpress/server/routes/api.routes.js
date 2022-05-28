const {greeting,getUsers,getCreator} = require('../controllers/api.controller');

module.exports = (app) =>{
    app.get('/api', greeting);
    app.post('/api/users', getUsers);
    app.get('/api/creator', getCreator);
}