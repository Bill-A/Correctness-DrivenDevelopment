const chai = require('chai');
const expect = chai.expect;
const cp  = require('child_process');
let n;


describe('payroll application', function() {

    it('should be forked', function(done) {
        this.timeout(4000);

        n = cp.fork('src/payroll.js');
        expect(n.connected).to.equal(true);
        done();
    });

    it('should process addRec transactions', function(done) {
        this.timeout(4000);

        n = cp.fork('src/payroll.js');
        n.send({"name":"Howard Hourly","type":"H","rate":"11.00"});

        n.on('message', (m) => {
            expect(m).to.deep.equal({ status: 201 });
            done();
        });

    });
});