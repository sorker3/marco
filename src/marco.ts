const clargs = require('subcommander');


clargs
    .command('server', {
        desc: 'Starts a marco server',
        callback: function (options) {
            let port:number = options.port,
                host:string = options.hostname;
        
            console.log(port, host);
        }
        })
            .option('port', {
                abbr: 'p',
                desc: 'Server port',
                default: 8080
            })
            .option('hostname', {
                abbr: 'H',
                desc: 'Server hostname',
                default: 'localhost'
            })
        .end()
    .command('client', {
        desc: 'Use as a client',
        callback: function (options) {
            let port:number = options.port,
                host:string = options.hostname,
                msg:string = options.message;
        
            console.log(port, host, msg);
        }
        })
            .option('hostname', {
                abbr: 'H',
                desc: 'Server hostname',
                default: 'localhost'
            })
            .option('port', {
                abbr: 'p',
                desc: 'Server port',
                default: 8080
            })
            .option('message', {
                abbr: 'm',
                desc: 'Message to send to server',
                default: 'Marco... Polo!'
            })
        .end();
clargs.parse();

console.log(clargs.parse());