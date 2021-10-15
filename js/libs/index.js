const { LibraryManager } = require('gorila-core')
const config = require('./../config')
const Lib = require('./lib')
module.exports = new LibraryManager(config, [Lib])