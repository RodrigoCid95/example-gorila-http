import { Library, logger } from "gorila-core"
import ConfigLib from "interfaces/lib"
export default class Lib extends Library<ConfigLib> {
  async build() {
    logger('Preparando librería...!')
    return await new Promise(resolve => {
      setTimeout(() => {
        resolve(this.profile.message)
      }, 1000)
    })
  }
}