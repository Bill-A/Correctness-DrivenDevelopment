var chakram = require('chakram'),
    expect = chakram.expect;

describe("mPayroll API", function() {
    const empRec = {
        "name": 'Harry Hourly',
        "type": 'H',
        "rate": '10.00'
    };

    it("should have POST employees endpoint", function () {
        this.timeout(4000);
        expect(chakram.post("http://localhost:3000/api_mpayroll/employees", empRec)).to.have.status(201);
        return chakram.wait();
    });


    it("POST employees endpoint without employee data is Bad Request", function () {
        this.timeout(4000);

        expect(chakram.post("http://localhost:3000/api_mpayroll/employees")).to.have.status(400);
        return chakram.wait();
    });
});