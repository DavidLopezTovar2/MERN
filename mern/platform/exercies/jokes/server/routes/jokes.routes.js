const {
    getJokes,
    getJoke,
    createJoke,
    updateExistingJoke,
    deleteJoke
} = require ('../controllers/jokes.controller'); 

module.exports = (app) => {
    app.get('/api/jokes', getJokes);
    app.get('/api/jokes/:id', getJoke);
    app.post('/api/jokes/new',createJoke);
    app.put('/api/jokes/update/:id',updateExistingJoke);
    app.delete('/api/jokes/delete/:id',deleteJoke);
}