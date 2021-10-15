import { ConfigLoader } from "gorila-core"
import GorilaHttp from "./GorilaHTTP.config"
export default new ConfigLoader({
  GorilaHttp,
  Lib: {
    message: 'Hola Gorila!'
  }
})