import { Inject, Controller, Provide, Get } from '@midwayjs/decorator'
import { Context } from 'egg'
import { IApiService } from '../interface'
import { ApiArticleService } from '../service/article';
import { ApiPostsService } from '../service/posts';

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
  cardsService: ApiArticleService

  @Inject('ApiPostsService')
  postsService: ApiPostsService

  @Get('/index')
  async getIndexData () {
    const data = await this.service.index()
    return data
  }
  @Get('/article/:id')
  async getCardList(id) {
    const data = await this.cardsService.getArticleList(id)
    return data
  }
}
