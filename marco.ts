const clargs = require('commander');


clargs 
    .version('0.0.4')

    .option('-c, --client', 'Run as client')

    .parse(process.argv);


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


console.log(clargs.args.join(' '));