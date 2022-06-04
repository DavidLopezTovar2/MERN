const {Schema, model} = require('mongoose');

const dojoSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Should have a valida name'],
        minlength: [3, 'Should have a name with at least 3 characteres'],        
    },
    instructors: {
        type: Array,        
    },
    qtyStudents:{
        type: Number
    },
    address: {
        type: String,
        required: [true, 'Should have an adress']
    }

});

const Dojo = model('Dojo', dojoSchema);

module.exports = Dojo;