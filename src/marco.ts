const clargs = require('subcommander');


clargs.command('server', {
    desc: 'Starts a marco server',
    callback: function ( options ) {
        var port = options.port,
            hostname = options.hostname;
 
        console.log( port, hostname );
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
    .end();

clargs.parse();

console.log(clargs.parse());