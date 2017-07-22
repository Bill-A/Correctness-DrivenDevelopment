const mongoose = require('mongoose');
const dbURI = 'mongodb://localhost/Correctness-Driven-Development';
const Employee = require('../public/models/employees');
mongoose.Promise  = require('bluebird');


// Database configuration with mongoose
mongoose.connect(dbURI, {useMongoClient: true});
const db = mongoose.connection;

// CONNECTION EVENTS

// When successfully connected
// db.on('connected', function () {
//     console.log(new Date(Date.now()).toLocaleString(), '- payroll, Mongoose default connection open to ' + dbURI);
// });

// Show any mongoose errors
db.on('error', function(error) {
    console.log(new Date(Date.now()).toLocaleString(), '- payroll, Mongoose Error: ', error);
});

// Once open, log a success message
db.once('open', function() {
    console.log(new Date(Date.now()).toLocaleString(), '- payroll, using MongoDB connection: ' + dbURI);
});

db.on('disconnected', function () {
    console.log(new Date(Date.now()).toLocaleString(), '- payroll, Mongoose disconnected');
});

if (process.argv[2] === '-f') {
    processPayrollFile(process.argv[3]);

    function processPayrollFile (payrollFile) {
        let fs = require('fs');
        let transID = '';
        let empRec = {};
        console.log('\n' + new Date(Date.now()).toLocaleString(), '- payroll, started in batch, file processing mode.');

        //"utf8" parameter specifies string data
        fs.readFile(payrollFile, 'utf8', function (error, data) {
            if (error) {
                console.log(new Date(Date.now()).toLocaleString(), '- payroll, processing error: ', error);
            }
            else {
                // We will then print the contents of data
                console.log(new Date(Date.now()).toLocaleString(), '- payroll, payrollRec: ', data);

                // Split contents of dataFile that is separated by commas
                let dataArr = data.split(',');
                transID = dataArr[0];

                if (transID === 'addEMP') {

                    empRec = {
                        'name': dataArr[1],
                        'type': dataArr[2],
                        'rate': dataArr[3]
                    };

                    // Create a new employee record using empRec
                    let newEmployee = new Employee(empRec);

                    newEmployee.save(function (error) {
                        if (error) {
                            console.log(new Date(Date.now()).toLocaleString(), '- payroll, Error writing to Employee DB: ', error);

                        }
                        else {
                            console.log(new Date(Date.now()).toLocaleString(), '- payroll, Employee saved successfully: ', JSON.stringify(empRec) + '\n');
                        }
                    });
                }
                else {
                    console.log(new Date(Date.now()).toLocaleString(), '- payroll, Unknown transaction received: ', data);
                }
            }

        });

    }

}

module.exports = function processPayrollRecord (empRec) {

    console.log('\n'+new Date(Date.now()).toLocaleString(), '- payroll, started for network access - interactive mode.');
    console.log(new Date(Date.now()).toLocaleString(),'- payroll, message received: ', empRec);

    let newEmployee = new Employee(empRec);  // Create a new employee record using empRec

    return newEmployee.save()
    .then(function(rec) {
        console.log(new Date(Date.now()).toLocaleString(), '- payroll, Employee saved successfully: ', rec + '\n');
        return 201;
    })
    .catch(function(error) {
        console.log(new Date(Date.now()).toLocaleString(), '- payroll, Error writing to Employee DB: ', error.toString().substring(0,100));
        return 400;
    });

};

