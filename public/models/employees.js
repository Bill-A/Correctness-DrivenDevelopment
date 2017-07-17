// Require mongoose
var mongoose = require("mongoose");
// Create Schema class
var Schema = mongoose.Schema;

// Create employee schema
var EmployeeSchema = new Schema({
  // name is a required string
  name: {
    type: String,
    required: true
  },
  // type is a required string
  type: {
      type: String,
      required: true
  },
  // rate is a required string
  rate: {
    type: Number,
    required: true,
  },
},
{
    timestamps: true
});

// Create the Article model with the ArticleSchema
var Employee = mongoose.model("Employee", EmployeeSchema);

// Export the model
module.exports = Employee;
