//@ts-nocheck
import { Provide } from '@midwayjs/decorator'
import axios from 'axios'
@Provide('ApiService')
export class ApiIndexService {
  async index(): Promise<any> {
    // console.log(mock.data.cards)
    const posts = await axios.get('https://note-16440d-1258774696.ap-shanghai.app.tcloudbase.com/getPosts')
    const cards = await axios.get('https://note-16440d-1258774696.ap-shanghai.app.tcloudbase.com/getCards')
    // console.log("posts", posts.data.dbResult)
    return { posts: posts.data, cards: cards.data.dbResult }
  }
}
