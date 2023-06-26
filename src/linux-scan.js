const execute = require('./utils/executer');
const promiser = require('./utils/promiser');
const command = require('./linux/scan/command.js');
const parse = require('./linux/scan/parser');

const scanWifi = (config, opt) =>
  execute(command(config, opt)).then(output => parse(output));

module.exports = promiser(scanWifi);