const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/products', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("🚀 We are making some connections here with the database!"))
    .catch((err) => console.log("Ohhhh, something went wrong", err));