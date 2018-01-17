const clargs = require('commander');


//Handle arguments
clargs 
    .version('0.0.4')
    .option('-c, --client <n>', 'Run as client', parseInt)
    .parse(process.argv);

if (clargs.client) console.log('Running as client at ' + clargs.integer);
if (clargs.args) console.log(clargs.args.join(' '));