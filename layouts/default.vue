<template>
  <span>
    <v-app v-if="$config.statusProject === 'deployment'" class="deploy" light>
      <Header />
      <BtnSwitchLang />
      <Nuxt />
      <Chat v-if="statusChat === true" @closeChat="closeChat($event)" />
      <BtnChatBot v-else @openChat="openChat($event)" />
      <Footer />
    </v-app>
    <v-app v-else class="development">
      <Deployment />
    </v-app>
  </span>
</template>

<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import BtnChatBot from '~/components/common/ChatBot/BtnChatBot'
import Chat from '~/components/common/ChatBot/Chat'
import BtnSwitchLang from '~/components/common/I18N/BtnSwitchLang'
import Deployment from '~/components/common/Deployment/Deployment'

export default {
  name: 'DefaultLayout',
  components: {
    Header,
    Footer,
    BtnChatBot,
    BtnSwitchLang,
    Chat,
    Deployment
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

<style lang="scss" scoped>
.deploy {
  line-height: 1.64;
}
</style>
