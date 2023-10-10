/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'Kessoku DAO',
  author: 'Kessoku DAO',
  headerTitle: 'Kessoku DAO',
  description: 'About Kessoku DAO',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://blog.kessoku.xyz',
  siteRepo: 'https://github.com/KessokuDAO/blog',
  siteLogo: '/static/images/k.png',
  socialBanner: '/static/images/ksk.png',
  github: 'https://github.com/KessokuDAO',
  twitter: 'https://twitter.com/KessokuDAO',
  locale: 'en-US',
  analytics: {
     googleAnalytics: {
       googleAnalyticsId: 'G-JL9Y5Q2T42', // e.g. G-XXXXXXX
     },
  },
  search: {
    provider: 'kbar', // kbar or algolia
    kbarConfig: {
      searchDocumentsPath: 'search.json', // path to load documents to search
    },
    // provider: 'algolia',
    // algoliaConfig: {
    //   // The application ID provided by Algolia
    //   appId: 'R2IYF7ETH7',
    //   // Public API key: it is safe to commit it
    //   apiKey: '599cec31baffa4868cae4e79f180729b',
    //   indexName: 'docsearch',
    // },
  },
}

module.exports = siteMetadata
