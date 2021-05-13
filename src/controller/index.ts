import { Readable } from 'stream'
import { Controller, Get, Provide, Inject } from '@midwayjs/decorator'
import { Context } from 'egg'
import { render } from 'ssr-core-vue3'
import { IApiService } from '../interface'

interface IEggContext extends Context {
  apiService: IApiService
}

@Provide()
@Controller('/')
export class Index {
  @Inject()
  ctx: IEggContext

  @Inject('ApiService')
  apiService: IApiService

  @Get('/')
  @Get('/article/:id')
  @Get('/community')
  @Get('/admin')
  async handler(): Promise<void> {
    try {
      this.ctx.apiService = this.apiService

      const stream = await render<Readable>(this.ctx, {
        stream: true
      })
      this.ctx.body = stream
    } catch (error) {
      console.log(error)
      this.ctx.body = error
    }
  }
}