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
      <div class="box-center font-alert">
        <center>
          <img alt="development" src="~/assets/icons/gif/development.gif">
        </center>
        <p>ขออภัยในความไม่สะดวก เว็บนี้กำลังปรับปรุง สามารถเริ่มใช้งานได้เดือน {{ $moment($config.dateStartDeploy, 'YYYY-MM-DDTHH:mm:ss.sssZ').format('DD MMMM YYYY HH:mm:ss') }}</p>
        <p>sorry for the inconvenience This website is improving. Can start using the {{ $moment($config.dateStartDeploy, 'YYYY-MM-DDTHH:mm:ss.sssZ').format('DD MMMM YYYY HH:mm:ss') }}</p>
      </div>
    </v-app>
  </span>
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

<style lang="scss" scoped>
.deploy {
  line-height: 1.64;
}

.development {
  .box-center {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: auto;
    margin-bottom: auto;
  }

  .font-alert {
    font-size: 20px;
  }
}
</style>
