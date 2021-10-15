import { setModel } from 'gorila-core'
import { HTTPController, Get, Post, Request, Response } from 'gorila-http'
import HomeModel from '../models/home.model'
export default class HomeController extends HTTPController {
  @setModel(HomeModel) model: HomeModel
  @Get('/')
  public indexGet(req: Request, res: Response) {
    res.status(200).send(`<h1>${this.model.getMessage()}</h1>`)
  }
  @Post('/')
  public indexPost(req: Request, res: Response) {
    res.status(200).send(`<h1>${this.model.getMessage()}</h1>`)
  }
}