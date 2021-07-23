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
        <div class="position-center">
          <v-img class="img-develoment" alt="development" :lazy-src="require('~/assets/icons/gif/development.gif')" :src="require('~/assets/icons/gif/development.gif')" />
        </div>
        <p>ขออภัยในความไม่สะดวก เว็บนี้กำลังปรับปรุง สามารถเริ่มใช้งานได้เดือน {{ $moment($config.dateStartDeploy, 'YYYY-MM-DDTHH:mm:ss.sssZ').format('DD MMMM YYYY') }} เวลา {{ $moment($config.dateStartDeploy, 'YYYY-MM-DDTHH:mm:ss.sssZ').format('HH:mm:ss') }}</p>
        <p>We sincerely apologize for the inconvenience. Our site is currently undergoing scheduled maintenance. <br>
          The website will be back on {{ $moment($config.dateStartDeploy, 'YYYY-MM-DDTHH:mm:ss.sssZ').format('DD MMMM YYYY') }} at {{ $moment($config.dateStartDeploy, 'YYYY-MM-DDTHH:mm:ss.sssZ').format('HH:mm:ss') }}</p>
        <div class="position-center mr-14 pt-2">
          <v-tooltip class="tooltip-icon-social" bottom>
            <template #activator="{ on, attrs }">
              <a href="https://www.facebook.com/profile.php?id=100017880492777" target="facebook-me">
                <img
                  class="icon-social"
                  v-bind="attrs"
                  alt="logo-facebook"
                  :src="require('~/assets/icons/svg/logo-facebook.svg')"
                  v-on="on"
                >
              </a>
            </template>
            <span>Facebook</span>
          </v-tooltip>
          <v-tooltip class="tooltip-icon-social" bottom>
            <template #activator="{ on, attrs }">
              <a href="https://www.linkedin.com/in/nitichai-sawangsai-79424b1b1" target="linkedin-me">
                <img class="icon-social" v-bind="attrs" alt="logo-linkedin" :src="require('~/assets/icons/svg/logo-linkedin.svg')" v-on="on">
              </a>

            </template>
            <span>Linkedin</span>
          </v-tooltip>
          <v-tooltip class="tooltip-icon-social" bottom>
            <template #activator="{ on, attrs }">
              <a href="mailto:NitichaiSawangsai@gamil.com" target="gmail-me">
                <img
                  class="icon-social"
                  v-bind="attrs"
                  width="24"
                  height="24"
                  alt="copy-link"
                  :src="require('~/assets/icons/png/gmail.png')"
                  v-on="on"
                >
              </a>
            </template>
            <span>Gmail</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template #activator="{ on, attrs }">
              <img
                class="icon-social"
                v-bind="attrs"
                alt="copy-link"
                :src="require('~/assets/icons/svg/copy-link.svg')"
                @click="onCopy()"
                v-on="on"
              >
            </template>
            <span>Copy Link</span>
          </v-tooltip>
        </div>
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
    },
    onCopy () {
      const copyText = window.location.href
      navigator.clipboard.writeText(copyText)
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

  .img-develoment {
    max-width: 40rem;
  }

  .position-center {
    display: block;
    text-align: -webkit-center;
  }

  .icon-social {
    margin-right: 4px;
  }
}
</style>
