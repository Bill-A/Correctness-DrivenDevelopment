let chai = require('chai');
let expect = require('chai').expect;
let processPayrollRecord = require( '../../lib/payroll.js');

describe('payroll application', function() {
    let result;

    it('should be invalid if name is empty', function(done) {
        processPayrollRecord({'type':'H','rate':13.00}).then(function(result){
            expect(result).to.equal(400);
            done();
        });
    });

    it('should be invalid if type is empty', function(done) {
        processPayrollRecord ({'name':'Payroll Hourly','rate':13.00}).then(function(result){
            expect(result).to.equal(400);
            done();
        });
    });

    it('should be invalid if rate is empty', function(done) {
        processPayrollRecord ({'name':'Payroll Hourly','type':'H'}).then(function(result){
            expect(result).to.equal(400);
            done();
        });
    });

    it('should add valid Employee records', function(done) {
        processPayrollRecord ({'name':'Payroll Hourly','type':'H','rate':13.00}).then(function(result){
            expect(result).to.equal(201);
            done();
        });
    });

});