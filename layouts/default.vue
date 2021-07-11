<template>
  <v-app light>
    <Header />
    <Nuxt />
    <ChatBot />
    <Footer />
  </v-app>
</template>

<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import ChatBot from '~/components/ui/ChatBot/ChatBot'

export default {
  name: 'DefaultLayout',
  components: {
    Header,
    Footer,
    ChatBot
  }
}
</script>
