import { Provide } from '@midwayjs/decorator'
import mock from '../mock'

@Provide('ApiService')
export class ApiIndexService {
  async index(): Promise<any> {
    // console.log(mock.data.cards)
    return await Promise.resolve(mock.data)
  }
}
