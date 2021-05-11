import { ISSRContext } from 'ssr-types'
import axios from 'axios'

export default async ({ store, router }, ctx?: ISSRContext) => {
  let data = ''
  let path
  if (__isBrowser__) {
    path = router.path.replace(/\$/g, '/').replace('/article/', '')
    // data = (await import(`../../mkdown/${path}.md`)).default
    data = await axios.get(`/mkdown/${path}.md`)
  } else {
    console.log(ctx.params)
    path = ctx?.params.page.replace(/\$/g, '/')
    // eslint-disable-next-line
    // data = require(`@/mkdown/${path}.md`).default
    data = await axios.get(`/mkdown/${path}.md`)
  }
  return {
    docsContent: data,
    pagePath: path,
  }
}
