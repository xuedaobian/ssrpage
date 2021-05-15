import { ISSRContext } from 'ssr-types'

export default async ({ store, router }, ctx?: ISSRContext) => {

  const data = __isBrowser__ ? await (await window.fetch('/api/index')).json() : await ctx?.apiService?.index();

  await store.dispatch('indexStore/initialData', { payload: data })
}
