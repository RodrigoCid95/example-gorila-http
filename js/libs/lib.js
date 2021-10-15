const { Library, logger } = require('gorila-core')
class Lib extends Library {
  build() {
    return new Promise((resolve => {
      logger('Preparando librería...!')
      setTimeout(() => {
        resolve(this.profile.message)
      }, 1000)
    }))
  } 
}
module.exports = Lib