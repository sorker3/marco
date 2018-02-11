#!/usr/bin/env node
const clargs = require('subcommander');
const Server = require('./Server/TCPserver.ts');


clargs
    .command('server', {
        desc: 'Starts a marco server',
        callback: function (options) {
            let port = Number(options.port),
                host = String(options.hostname);
        
            var server = new Server(port, host);

            server.start(() => {
                console.log(`Server started at: ${host}:${port}`);
            });
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
                default: '127.0.0.1'
            })
        .end()
    .command('client', {
        desc: 'Use as a client',
        callback: function (options) {
            let port = Number(options.port),
                host = String(options.hostname),
                msg = String(options.message);
        
            console.log(port, host, msg);
        }
        })
            .option('hostname', {
                abbr: 'H',
                desc: 'Server hostname',
                default: '127.0.0.1'
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