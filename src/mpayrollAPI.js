const Hapi = require("hapi");
const port = 3000;
const ip = 'localhost';
const server = new Hapi.Server();
const cp  = require('child_process');
let n;

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

        //Send the employee payload to the payroll application
        if (request.payload){

            n.send(request.payload);

            n.on('message', (m) => {
                console.log(new Date(Date.now()).toLocaleString(), '- mPayroll API, message from payroll application: ', m);
            });

            //Inform requester of success
            return reply('1234').code(201);
        }
        else {
            return reply('').code(400);
        }
    }
});



server.start((err)=> {
    if(err){
        console.log(new Date(Date.now()).toLocaleString(), '- mPayroll API, error: ', error);
        throw err;
    }
    console.log(new Date(Date.now()).toLocaleString(), `- mPayroll API, running at: ${server.info.uri}`);
    n  = cp.fork(`${__dirname}/payroll.js`);

});