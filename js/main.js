const { HTTPServer } = require('gorila-http')
const config = require('./config')
const controllers = require('./controllers')
const lm = require('./libs')
const { logger } = require('gorila-core')
const Main = async () => {
  const gorilaServer = new HTTPServer(config, controllers, lm)
  await gorilaServer.init(true)
  logger('Ready!')
}
Main()