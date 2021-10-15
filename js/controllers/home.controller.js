const { setModel, __decorate } = require('gorila-core')
const { Get, HTTPController, Post } = require('gorila-http')
const HomeModel = require('./../models/home.model')
class HomeController extends HTTPController {
  constructor(...arg) {
    __decorate([setModel(HomeModel)], HomeController.prototype, 'model', void 0)
    super(...arg)
  }
  getIndex(req, res) {
    res.status(200).send({ title: 'Ejemplo get http', message: this.model.getMessage() })
  }
  postIndex(req, res) {
    res.status(200).send({ title: 'Ejemplo post http', message: this.model.getMessage() })
  }
}
__decorate([Get('/')], HomeController.prototype, 'getIndex', void 0)
__decorate([Post('/')], HomeController.prototype, 'postIndex', void 0)
module.exports = HomeController