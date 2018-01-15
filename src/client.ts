class client {
    connect(ip:any, port:number) {
        console.log('Connetcting to IP %s using port %j', ip, port);
    }

    send(data:string) {
        console.log(data);
    }

    close() {
        console.log('Closing connection');
    }
}