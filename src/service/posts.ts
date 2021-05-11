import { Provide } from '@midwayjs/decorator'
import posts from '../mock/cards'

@Provide('ApiPostsService')
export class ApiPostsService {
  async getPostList() {
    const data = await Promise.resolve(posts.data);
    return data;
  }
}