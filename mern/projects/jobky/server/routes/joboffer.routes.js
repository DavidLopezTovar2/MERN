const { 
    createJoboffer,
    getJoboffers
 } = require('../controllers/joboffer.controller');

module.exports = (app) => {
    app.get('/api/joboffers,deleteAll',getJoboffers);
    app.post('/api/joboffers/create',createJoboffer);
}