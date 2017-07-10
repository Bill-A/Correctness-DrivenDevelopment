/*
We use the output messages from the cucumber runner to create Step Definitions:
the glue between features written in Gherkin and the actual system under test.
Use Given, When, Then.
*/

let request = require('request');

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
        callback(null, 'pending');
    });

    Then('A new hourly employee is Created', function (callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
    });

});