<template>
  <v-app light>
    <Header />
    <BtnSwitchLang />
    <Nuxt />
    <BtnChatBot />
    <Footer />
  </v-app>
</template>

<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import BtnChatBot from '~/components/common/ChatBot/BtnChatBot'
import BtnSwitchLang from '~/components/common/I18N/BtnSwitchLang'

export default {
  name: 'DefaultLayout',
  components: {
    Header,
    Footer,
    BtnChatBot,
    BtnSwitchLang
  }

}
</script>
