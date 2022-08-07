const { program } = require('commander');
const config = require('./config');
const initPrimeNumbers = require('./commands/prime-range');
const initCalculateJson = require('./commands/calculate-json');

program.name(config.name)
program.description(config.description)
program.version(config.version)

initPrimeNumbers(program)
initCalculateJson(program)

program.parse()