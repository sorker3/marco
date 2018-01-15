const clargs = require('commander');


//Handle arguments
clargs 
    .version('0.0.4')

    .option('-c, --client', 'Run as client')

    .parse(process.argv);


console.log(clargs.args.join(' '));