const mongoose = require("mongoose");
const Employee = require("../public/models/employees.js");
mongoose.Promise = Promise;  // Set mongoose to leverage built in JavaScript ES6 Promises

// Database configuration with mongoose
mongoose.connect("mongodb://localhost/correctness-driven-development", {
    useMongoClient: true,
});
const db = mongoose.connection;

// Show any mongoose errors
db.on("error", function(error) {
    console.log(new Date(Date.now()).toLocaleString(), '- payroll, Mongoose Error: ', error);
});

// Once logged in to the db through mongoose, log a success message
db.once("open", function() {
    console.log(new Date(Date.now()).toLocaleString(), '- payroll, Mongoose connection successful.');
});


if (process.argv[2]){
    processPayrollFile(process.argv[2]);
}
else{
    processPayrollIPC();
}

function processPayrollFile(payrollFile) {
    const fs = require("fs");
    let transID = '';
    let empRec ={};
    console.log('\n'+new Date(Date.now()).toLocaleString(), '- payroll, started in file processing mode.');

    //"utf8" parameter specifies string data
    fs.readFile(payrollFile, "utf8", function(error, data) {
        if (error){
            console.log(new Date(Date.now()).toLocaleString(), '- payroll, processing error: ', error);
        }
        else {
            // We will then print the contents of data
            console.log(new Date(Date.now()).toLocaleString(), '- payroll, payrollRec: ', data);

            // Split contents of dataFile that is separated by commas
            const dataArr = data.split(",");
            transID = dataArr[0];

            if (transID === 'addEMP'){

                empRec = {
                    "name":  dataArr[1],
                    "type":  dataArr[2],
                    "rate":  dataArr[3]
                };

                // Create a new employee record using empRec
                var newEmployee = new Employee(empRec);
                newEmployee.save(function(error, doc) {
                    if (error) {
                        console.log(new Date(Date.now()).toLocaleString(), '- payroll, Error writing to Employee DB: ', error);

                    }
                    else {
                        console.log(new Date(Date.now()).toLocaleString(), '- payroll, Employee saved successfully: ', JSON.stringify(empRec)+'\n');
                    }
                });
            }
            else{
                console.log(new Date(Date.now()).toLocaleString(), '- payroll, Unknown transaction received: ', data);
            }
        }

    });

}

function processPayrollIPC() {
    //communicate via IPC messaging
    console.log('\n'+new Date(Date.now()).toLocaleString(), '- payroll, started in IPC messaging mode.');

    process.on('message', (m) => {
        console.log(new Date(Date.now()).toLocaleString(),'- payroll, message received: ', m);

        // Create a new employee record and pass the m contents to the entry
        var newEmployee = new Employee(m);
        newEmployee.save(function(error, doc) {
            if (error) {
                console.log(new Date(Date.now()).toLocaleString(), '- payroll, Error writing to Employee DB: ', error);

                process.send({ status: 400 });
            }
            else {
                console.log(new Date(Date.now()).toLocaleString(), '- payroll, Employee saved successfully: ', JSON.stringify(m)+'\n');

                process.send({ status: 201 });
            }

        });

    });

}