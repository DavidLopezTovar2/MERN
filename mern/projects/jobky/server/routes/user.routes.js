const { 
    createUser,
    deleteAll,
    findUserWithExperience,
    getUsers,
    getUserById,
    deleteUser
 } = require('../controllers/user.controller');

module.exports = (app) => {
    app.post('/api/users/create',createUser);
    app.delete('/api/users/delete/all',deleteAll);
    app.get('/api/users/findByExperience/:experience',findUserWithExperience);
    app.get('/api/users',getUsers);
    app.get('/api/user/:id',getUserById);
    app.delete('/api/user/delete/:id',deleteUser);
}