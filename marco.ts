const clargs = require('commander');


clargs 
    .version('0.0.4')
    .parse(process.argv);


console.log(clargs.args.join(' '));