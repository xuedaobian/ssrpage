// export interface Card {
//   cardTitle: string,
//   cardDesc: string,
//   article1: {
//     title: string,
//     link: string
//   },
//   article2?: {
//     title: string,
//     link: string
//   },
// }
export interface ApiArticleService {
  index: (id: string) => Promise<any>
}
