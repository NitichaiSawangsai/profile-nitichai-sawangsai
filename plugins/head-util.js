const textDescription = 'แสดงผลงานของนายนิธิชัย แสวงสาย ชื่อเล่นออม เรียนจบสาขาวิศวกรรมซอฟต์แวร์จากมหาวิทยาลัยบูรพา สหกิจศึกษาที่ บริษัท บิทคับ บล็อคเชน เทคโนโลยี จำกัด จบมาทำงานที่บริษัท Globish หลังจาก 1 ปี ย้ายมาทำงานที่บริษัท SCG Digital Office (SCG Cement - Building Materials) ตำแหน่ง Associate Technology Developer และตอนนี้รับทําเว็บไซต์ และเว็บแอปพลิเคชัน ด้วยตัวเอง'
export default ({ app }, inject) => {
  inject('headUtil', data => ({
    htmlAttrs: {
      lang: 'en'
    },
    title: data.title,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' },
      { name: 'robots', content: 'index,follow' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'title', content: 'รับทำเว็บไซต์ เว็บแอปพลิเคชัน | Nitichai Sawangsai' },
      {
        hid: 'description',
        name: 'description',
        content: data.description || textDescription
      },
      {
        name: 'keywords',
        content: ['Nitichai', 'Sawangsai', 'Nitichai Sawangsai', 'nitichaisawangsai', 'NitichaiSawangsai', 'รับทำเว็บ', 'สร้างเว็บ', 'เว็บแอปพลิเคชัน', 'เว็บไซต์', 'website', 'web application', 'วิศวกรรมซอฟต์แวร์', 'Software Engineering']
      },
      {
        property: 'og:title',
        name: 'og:title',
        content: data.title || 'Nitichai Sawangsai'
      },
      {
        property: 'og:description',
        name: 'og:description',
        content: data.description || textDescription
      },
      {
        property: 'og:url', name: 'og:url', content: 'nitichai.vercel.app'
      },
      {
        property: 'og:site_name', name: 'og:site_name', content: 'nitichai'
      },
      {
        property: 'og:image',
        name: 'og:image',
        content: data.image || 'https://avatars.githubusercontent.com/u/40546651?v=4'
      }
    ],
    link: [
      {
        rel: 'canonical',
        href: data.urlPath ? data.urlPath : 'https://nitichai.vercel.app'
      },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  }))
}
