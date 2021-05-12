import { ISSRContext } from 'ssr-types'
import axios from 'axios'

export default async ({ store, router }, ctx?: ISSRContext) => {
  let data = {}
  let path
  if (__isBrowser__) {
    console.log(router.path)
    path = router.path.replace(/\$/g, '/').replace('/article/', '')
    data = await axios.get(`/mkdown/${path}.md`)
  } else {
    // console.log(ctx)
    path = ctx?.request.url.replace(/\$/g, '/').replace('/article/', '')
    // eslint-disable-next-line
    // data = require(`@/mkdown/${path}.md`).default
    // console.log(path)

    const tempHost = ctx?.request.header.host
    const ho = tempHost.substring(0, tempHost.indexOf(':'))
    const po = tempHost.substring(tempHost.indexOf(':')+1)
    data = await axios.get(`/mkdown/${path}.md`, {
      proxy: { host: ho, port: po }
    })
    // console.log(data.data)
  }
  return {
    docsContent: data,
    // pagePath: path,
  }
}
