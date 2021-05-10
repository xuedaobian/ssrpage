// import { Readable } from 'stream'
import { Controller, Get, Provide, Inject } from '@midwayjs/decorator'
import { Context } from 'egg'
// import { render } from 'ssr-core-vue3'
import { IApiService } from '../interface'

interface IEggContext extends Context {
  apiService: IApiService
}

@Provide()
@Controller('/community')
export class Community {
  @Inject()
  ctx: IEggContext

  @Inject('ApiService')
  apiService: IApiService

  // @Get('/')
  @Get('/community')
  async handler(): Promise<void> {
    try {
      console.log('this is community');
    } catch (error) {
      console.log(' community',error)
      this.ctx.body = error
    }
  }
}
