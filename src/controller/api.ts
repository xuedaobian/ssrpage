import { Inject, Controller, Provide, Get } from '@midwayjs/decorator'
import { Context } from 'egg'
import { IApiService } from '../interface'
import { ApiCardsService } from '../service/cards';

@Provide()
@Controller('/api')
export class Api {
  @Inject()
  ctx: Context

  @Inject('ApiService')
  service: IApiService

  // @Inject('IApiCardsService')
  // cardsService: IApiCardsService
  @Inject('ApiCardsService')
  apiCardsService: ApiCardsService

  @Get('/index')
  async getIndexData () {
    const data = await this.service.index()
    return data
  }
  // @Get('/')
  // async getCardList() {
  //   const data = await this.cardsService.index()
  //   return data
  // }
}
