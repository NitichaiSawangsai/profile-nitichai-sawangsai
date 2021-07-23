import textSEO from './../utils/textSEO'
export default ({ app }, inject) => {
  inject('headUtil', data => ({
    titleTemplate: data.titleTemplate || `%s | ${textSEO.meta.nameTopic}`,
    title: data.title || textSEO.meta.nameTopic,
    htmlAttrs: {
      lang: data.htmlAttrs.lang || textSEO.meta.lang
    },
    meta: [
      { charset: data.charset || textSEO.meta.charset },
      { name: 'viewport', content: data.viewport || textSEO.meta.viewport },
      { name: 'robots', content: data.robots || textSEO.meta.robots },
      { name: 'format-detection', content: data['format-detection'] || textSEO.meta['format-detection'] },
      {
        hid: 'description',
        name: 'description',
        content: data.description || textSEO.meta.description
      },
      {
        name: 'keywords',
        content: data.keywords || textSEO.meta.keywords
      },
      {
        property: 'og:title',
        name: 'og:title',
        content: data.title || textSEO.meta.nameTopic
      },
      {
        property: 'og:description',
        name: 'og:description',
        content: data.description || textSEO.meta.description
      },
      {
        property: 'og:url', name: 'og:url', content: textSEO.meta['og:url']
      },
      {
        property: 'og:site_name', name: 'og:site_name', content: textSEO.meta['og:site_name']
      },
      {
        property: 'og:image',
        name: 'og:image',
        content: textSEO.meta['og:image']
      },
      { property: 'og:type', name: 'og:type', content: textSEO.meta['og:type'] }
    ],
    link: [
      {
        rel: 'canonical',
        href: data.urlPath ? data.urlPath : textSEO.link.canonical
      },
      { rel: 'icon', type: 'image/x-icon', href: data.icon || textSEO.link.icon }
    ]
  }))
}
