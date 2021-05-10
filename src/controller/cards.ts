// import { Inject, Controller, Provide, Query, Get } from '@midwayjs/decorator';
// import { ApiCardsService } from '../service/cards';

// @Provide('ApiCardsService')
// @Controller('/api/cards')
// export class Cards {

//   @Inject('ApiCardsService')
//   apiCardsService: ApiCardsService

//   @Get('/article/:id')
//   async getCards(@Query('id') uid): Promise<Array<Object>>{
//     const cards = await this.apiCardsService.getCardList(uid);
//     console.log('cards:',cards)
//     return cards;
//   }
// }