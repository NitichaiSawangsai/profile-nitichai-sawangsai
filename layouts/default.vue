<template>
  <v-app light>
    <Header />
    <BtnSwitchLang />
    <Nuxt />
    <Chat v-if="statusChat === true" @closeChat="closeChat($event)" />
    <BtnChatBot v-else @openChat="openChat($event)" />
    <Footer />
  </v-app>
</template>

<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import BtnChatBot from '~/components/common/ChatBot/BtnChatBot'
import Chat from '~/components/common/ChatBot/Chat'
import BtnSwitchLang from '~/components/common/I18N/BtnSwitchLang'

export default {
  name: 'DefaultLayout',
  components: {
    Header,
    Footer,
    BtnChatBot,
    BtnSwitchLang,
    Chat
  },
  data: () => ({
    statusChat: false
  }),

  methods: {
    closeChat (event) {
      this.statusChat = event
    },
    openChat (event) {
      this.statusChat = event
    }
  }
}
</script>
