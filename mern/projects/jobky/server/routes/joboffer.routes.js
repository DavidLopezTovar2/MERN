const { 
    createJoboffer,
    getJoboffers,
    getJobById
 } = require('../controllers/joboffer.controller');

module.exports = (app) => {
    app.get('/api/joboffers',getJoboffers);
    app.post('/api/joboffers/create',createJoboffer);
    app.get('/api/job/:id',getJobById);
}