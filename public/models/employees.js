// Require mongoose custom validation package
let mongoose = require('mongoose');

// Create Schema class
let Schema = mongoose.Schema;

// Create employee schema
let EmployeeSchema = new Schema({
    name: {
        type: String,
        required: true

        // required: [true, 'Must have a name entered']
    },
    type: {
        type: String,
        required: true

        // enum: ['H', 'S', 'C'],
        // required: [true, 'Must be \'H\', \'S\', \'C\'']
    },
    rate: {
        type: Number,
        // min: [0.01, 'Must be a positive value'],
        required: true
    },
},
{
    retainKeyOrder: true,
    timestamps: true,
});

// Create the Employee model with the EmployeeSchema
let Employee = mongoose.model('Employee', EmployeeSchema);


// Export the model
module.exports = Employee;
