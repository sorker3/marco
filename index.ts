const args = require('command-line-args');

const argDef = [
    {name: 'msg', type:String, multiple: true, defaultOption: true}
];

const Parser = args(argDef);

console.log(Parser.msg.join(' '));