import { ISSRContext } from 'ssr-types'

export default async ({ store, router }, ctx?: ISSRContext) => {

  const data = await ctx?.apiCardsService?.getCardList(1);
  console.log('fetch:', data)
  console.log('router',router)
  await store.dispatch('cardStore/initialData', { payload: data });
  // await store.dispatch('indexStore/initialData', { payload: data })
}
