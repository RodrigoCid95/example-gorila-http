import { logger } from 'gorila-core'
import { HTTPServer } from 'gorila-http'
import Config from './config'
import controllers from './controllers'
import lm from './libs'
(async () => {
  const gorilaServer = new HTTPServer(Config, controllers, lm)
  await gorilaServer.init(true)
  logger('Ready!')
})()