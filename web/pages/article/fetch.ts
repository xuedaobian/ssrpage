import { ISSRContext } from 'ssr-types'
import axios from 'axios'

export default async ({ store, router }, ctx?: ISSRContext) => {
  let data = {}
  let path
  if (__isBrowser__) {
    console.log(router.path)
    path = router.path.replace(/\$/g, '/').replace('/article/', '')
    data = await axios.get(`https://6e6f-note-16440d-1258774696.tcb.qcloud.la/mkdown/${path}.md`)
  } else {
    path = ctx?.request.url.replace(/\$/g, '/').replace('/article/', '')
    const tempHost = ctx?.request.header.host
    const ho = tempHost.substring(0, tempHost.indexOf(':'))
    const po = tempHost.substring(tempHost.indexOf(':')+1)
    data = await axios.get(`https://6e6f-note-16440d-1258774696.tcb.qcloud.la/mkdown/${path}.md`, {
      proxy: { host: ho, port: po }
    })
  }
  return {
    docsContent: data.data
    // pagePath: path,
  }
}
