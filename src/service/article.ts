import { Provide } from '@midwayjs/decorator'
import cards from '../mock/cards'

@Provide('ApiArticleService')
export class ApiArticleService {
  async getArticleList(id):Promise<Array<Object>> {
    const data = await Promise.resolve(cards.data);
    // console.log('apiCardService:',data);
    return data;
  }
}