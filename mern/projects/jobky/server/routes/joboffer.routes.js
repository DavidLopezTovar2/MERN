const { 
    createJoboffer,
    getJoboffers
 } = require('../controllers/joboffer.controller');

module.exports = (app) => {
    app.get('/api/joboffers',getJoboffers);
    app.post('/api/joboffers/create',createJoboffer);
}