import { Readable } from 'stream'
import { Controller, Get, Provide, Inject } from '@midwayjs/decorator'
import { Context } from 'egg'
import { render } from 'ssr-core-vue3'
import { IApiService, IApiDetailService, ApiArticleService } from '../interface'

interface IEggContext extends Context {
  apiService: IApiService
  apiDeatilservice: IApiDetailService
  apiArticleService: ApiArticleService
}

@Provide()
@Controller('/')
export class Index {
  @Inject()
  ctx: IEggContext

  @Inject('ApiService')
  apiService: IApiService

  @Inject('ApiDetailService')
  apiDeatilservice: IApiDetailService

  @Inject('ApiArticleService')
  apiArticleService: ApiArticleService


  @Get('/')
  async handler (): Promise<void> {
    try {
      this.ctx.apiService = this.apiService
      this.ctx.apiDeatilservice = this.apiDeatilservice

      const stream = await render<Readable>(this.ctx, {
        stream: true
      })
      this.ctx.body = stream
      // console.log('/index')
    } catch (error) {
      console.log(error)
      this.ctx.body = error
    }
  }
  @Get('/article/:id')
  async handler2(): Promise<void> {
    try {
      // this.ctx.apiService = this.apiService
      // this.ctx.apiDeatilservice = this.apiDeatilservice
      this.ctx.apiArticleService = this.apiArticleService

      const stream = await render<Readable>(this.ctx, {
        stream: true
      })
      this.ctx.body = stream
      console.log('/article$id')
      // console.log(this.ctx)
    } catch (error) {
      console.log(error)
      this.ctx.body = error
    }
  }
  @Get('/community')
  async handler3(): Promise<void> {
    try {
      console.log('this is community');
    } catch (error) {
      console.log(' community', error)
      this.ctx.body = error
    }
  }
  
}
