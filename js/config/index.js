const { ConfigLoader } = require('gorila-core')
const GorilaHttp = require('./GorilaHttp.config')

module.exports = new ConfigLoader({
  GorilaHttp: GorilaHttp,
  Lib: {
    message: 'Hola Gorila!'
  }
})