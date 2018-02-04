const clargs = require('subcommander');


var srv = clargs.command('server', {
    desc: 'Starts a marco server',
    callback: function(options) {
            var port = options.port;
            var hostname = options.hostname;

            console.log(port, hostname);
    }
    })
    .option('port', {
        abbr: 'p',
        desc: 'Server port',
        default: 8080
    })
    .option('hostname', {
        abbr: 'H',
        desc: 'Server hostname'
    });

clargs.parse();

console.log(clargs.parse());