const Hapi = require("hapi");
const port = 3000;
const ip = 'localhost';
const server = new Hapi.Server();
let processPayrollRecord = require( '../lib/payroll.js');

server.connection({
    host: ip,
    port: port
});

//Add Routes
server.route({
    method: 'POST',
    path: '/api_mpayroll/employees',
    handler: function(request, reply){

        console.log(new Date(Date.now()).toLocaleString(), '- mPayroll API, headers: ',request.headers);
        console.log(new Date(Date.now()).toLocaleString(), '- mPayroll API, pathname: ',request.url.pathname);
        console.log(new Date(Date.now()).toLocaleString(), '- mPayroll API, payload: ',request.payload);

        // Send the employee payload to the payroll application
        processPayrollRecord(request.payload).then(function(status){
            if (status === 201){
                return reply('1234').code(201);
            }
            else {
                return reply('').code(400);
            }
        })

    }
});



server.start((err)=> {
    if(err){
        console.log(new Date(Date.now()).toLocaleString(), '- mPayroll API, error: ', error);
        throw err;
    }
    console.log(new Date(Date.now()).toLocaleString(), `- mPayroll API, running at: ${server.info.uri}`);
});