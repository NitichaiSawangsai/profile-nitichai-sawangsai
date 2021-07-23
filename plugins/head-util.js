export default ({ app }, inject) => {
  inject('headUtil', data => ({
    htmlAttrs: {
      lang: 'en'
    },
    title: data.title,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      {
        hid: 'description',
        name: 'description',
        content: data.description || 'แสดงผลงานของนายนิธิชัย แสวงสาย ชื่อเล่นออม เรียนจบสาขาวิศวกรรมซอฟต์แวร์จากมหาวิทยาลัยบูรพา สหกิจศึกษาที่ บริษัท บิทคับ บล็อคเชน เทคโนโลยี จำกัด จบมาทำงานที่บริษัท Globish หลังจาก 1 ปี ย้ายมาทำงานที่บริษัท   รับทําเว็บไซต์ เว็บแอปพลิเคชัน'
      },
      {
        name: 'keywords',
        content: ['Nitichai', 'Sawangsai', 'Nitichai Sawangsai', 'nitichaisawangsai', 'NitichaiSawangsai', 'รับทำเว็บ', 'สร้างเว็บ']
      },
      {
        property: 'og:title',
        name: 'og:title',
        content: data.title
      },
      {
        property: 'og:description',
        name: 'og:description',
        content: data.description
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
        content: data.image
      }
    ],
    link: [
      {
        rel: 'canonical',
        href: data.urlPath ? data.urlPath : 'https://nitichai.vercel.app'
      }
    ]
  }))
}
