import { ConfigGorilaHttp } from 'gorila-http'
const GorilaHttp: ConfigGorilaHttp = {
  pathsPublic: [
    {
      route: '/app',
      dir: `${__dirname}/../../../public`
    }
  ]
}
export default GorilaHttp