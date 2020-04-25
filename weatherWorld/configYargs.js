const argv = require('yargs').option({
    address: {
        alias: 'd',
        desc: 'Address of the city for retrieve the weather',
        demand: true
    }
}).argv;

module.exports = {
    argv
}