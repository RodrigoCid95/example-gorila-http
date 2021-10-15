const { Model, setLib, __decorate } = require('gorila-core')
class HomeModel extends Model {
  getMessage() {
    return this.lib
  }
}
__decorate([setLib('Lib')], HomeModel.prototype, 'lib', void 0)
module.exports = HomeModel