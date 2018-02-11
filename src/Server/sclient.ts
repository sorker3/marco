export class sclient {
    protected addr:string;
    protected port:number;
    public name:string;
    protected socket:any;

    constructor(socket) {
        this.addr = socket.remoteAddress;
        this.port = socket.remotePort;
        this.name = `${this.addr}:${this.port}`;
        this.socket = socket;
    }

    recieveMessage(message) {
        this.socket.write(message);
    }

    isLocalHost() {
        return this.addr === 'localhost';
    }
}