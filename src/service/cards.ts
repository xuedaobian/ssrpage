import { Provide } from '@midwayjs/decorator'
import cards from '../mock/cards'

@Provide('ApiCardsService')
export class ApiCardsService {
  async getCardList(id:number):Promise<Array<Object>> {
    const data = await Promise.resolve(cards.data);
    console.log('apiCardService:',data);
    return data;
  }
}