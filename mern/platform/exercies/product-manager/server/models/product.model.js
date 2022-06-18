const { Schema, model } = require('mongoose');

const productSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Should have a valid title'],
        minlength: [3, 'Should have at least 3 characters'],
        maxlength: [50, 'Should have no more than 50 characters']
    },
    price: {
        type: Number,
        required: [true, 'Should have a price'],
        min: 1
    },
    description: {
        type: String,
        required: [true, 'Should have a price'],
        minlength: [5, 'Should have at least 5 character'],
        maxlength: [100, 'Should have no more than 100 characters']
    }
})

const Product = model('Product', productSchema);

module.exports = Product;