import { Model, setLib } from 'gorila-core'
import ConfigLib from 'interfaces/lib'
export default class HomeModel extends Model {
  @setLib('Lib') lib: ConfigLib
  public getMessage() {
    return this.lib
  }
}