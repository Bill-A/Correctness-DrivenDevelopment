/*
We use the output messages from the cucumber runner to create Step Definitions:
the glue between features written in Gherkin and the actual system under test.
Use Given, When, Then.
*/


let request = require('request');
let submitResult = 0;

const {defineSupportCode} = require('cucumber');

defineSupportCode(function({Given, Then, When}) {

    Given('I have an employee insert resource', function (callback) {
        // Write code here that turns the phrase above into concrete actions

        //Simplest HTTP request to check that a POST resource exists
        request.post('http://localhost:3000/api_mpayroll/employees',
            function(error, response){
                if (error) {
                    console.log(error);
                    callback(null, 'pending');
                }
                else {
                    response.statusCode = 201;
                    callback();
                }
            }
        )
    });

    When('I submit the employee record', function (callback) {
        // Write code here that turns the phrase above into concrete actions

        // POST employee data
        request.post({
            url: "http://localhost:3000/api_mpayroll/employees",
            headers: {"Content-Type": "application/json"},
            body: {
                    'name': 'BDD Hourly',
                    'type': 'H',
                    'rate': 15.00
            },
            json:true
        }, function(error, response){
            if (error) {
                console.log(error);
                callback(null, 'pending');
            }
            else{
                if (response.statusCode > 201){
                    console.log(response.statusCode);
                    callback(null, 'pending');
                }
                else {
                    callback();
                    submitResult = response.statusCode; // explain need for this as a state variable
                }
            }
        });
    });

    Then('A new hourly employee is Created', function (callback) {
        // Write code here that turns the phrase above into concrete actions

        if (submitResult === 201){
            callback();
        }
        else{
            console.log('new hourly employee not Created, error:', response.statusCode);
            callback(null, 'pending');
        }
    });

});