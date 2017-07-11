const Hapi = require("hapi");

let port = 3000;
let ip = 'localhost';

const server = new Hapi.Server();

server.connection({
    host: ip,
    port: port
});

//Add Routes
server.route({
    method: 'POST',
    path: '/api_mpayroll/employees',
    handler: function(request, reply){
        //Stub out sending the employee payload to the employee service
        console.log('headers: ',request.headers);
        console.log('pathname: ',request.url.pathname);
        console.log('payload: ',request.payload);


        //Inform requester of success
        return reply('1234').code(201);
    }

});

server.start((err)=> {
    if(err){
        console.log(error);
        throw err;
    }
    console.log(`mPayroll API is running at: ${server.info.uri}`)
});