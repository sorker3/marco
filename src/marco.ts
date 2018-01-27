const clargs = require('commander');


//Handle arguments
clargs 
    .version('0.0.4')
    .option('-s, --server <n>', 'Run as server', parseInt)
    .parse(process.argv);

if (clargs.server) console.log('Running as client at ' + clargs.parseInt);
if (clargs.args) console.log(clargs.args.join(' '));