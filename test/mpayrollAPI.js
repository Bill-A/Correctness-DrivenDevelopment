var chakram = require('chakram'),
    expect = chakram.expect;

describe("mPayroll API", function() {

    it("should have POST employees endpoint", function () {
        this.timeout(4000);
        expect(chakram.post("http://localhost:3000/api_mpayroll/employees")).to.have.status(201);
        return chakram.wait();
    });

});