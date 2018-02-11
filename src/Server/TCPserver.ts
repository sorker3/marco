const net = require('net');
const sclient = require('./sclient.ts');

class TCPserver {
    connection:any;
    public clients = [];
    
    constructor(public port:number, public host:string) {
        this.port = port || 5000;
        this.host = host || '127.0.0.1';
        this.clients;
    }

    start(callback) {
        let server = this;

        this.connection = net.createServer((socket) => {
            let client = new sclient(socket);
            console.log(`${client.name} connected.`);

            server.clients.push(client);

            socket.on('data', (data) => {
                //Remove standard escape chars
                let msg = data.toString().replace(/[\n\r]*$/, '');
                console.log(`${client.name} says: ${msg}`);
                socket.write(`${msg}...POLO!\n`);
            });

            socket.on('end', () => {
                server.clients.splice(server.clients.indexOf(client), 1);
                console.log(`${client.name} disconnected.\n`);
            });
        });

        this.connection.listen(this.port, this.host);

        // setuping the callback of the start function
		if (callback != undefined) {
			this.connection.on('listening', callback);	
        }
    }
}