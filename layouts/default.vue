<template>
  <span>
    <v-app v-if="$config.statusProject === 'deploy' && $vuetify.breakpoint.width > 760" class="deploy" light>
      <Loader ref="loadMe" />
      <Header />
      <span v-if="statusLoader">
        <img
          class="right-half-circle"
          alt="right-half-circle"
          :src="require('~/assets/icons/svg/right-half-circle.svg')"
        >
        <img
          class="left-half-circle"
          alt="left-half-circle"
          :src="require('~/assets/icons/svg/left-half-circle.svg')"
        >
        <v-row justify="center" no-gutters>
          <v-col cols="11" class="pt-16">
            <Nuxt />
          </v-col>
        </v-row>
        <chat v-if="statusChat === true" @closeChat="closeChat($event)" />
        <btn-chat-bot v-else @openChat="openChat($event)" />
      </span>
    </v-app>
    <v-app v-else class="development">
      <Deployment v-if="statusLoader" />
    </v-app>
  </span>
</template>

<script>
import { mapState } from 'vuex'
import Header from '~/components/Header'
import BtnChatBot from '~/components/common/ChatBot/BtnChatBot'
import Chat from '~/components/common/ChatBot/Chat'
import Deployment from '~/components/common/Deployment/Deployment'
import Loader from '~/components/common/Loader'

export default {
  name: 'DefaultLayout',
  components: {
    Header,
    BtnChatBot,
    Chat,
    Deployment,
    Loader
  },
  data: () => ({
    statusLoader: false
  }),
  computed: {
    ...mapState({
      statusChat: state => state.chat.statusChat
    })
  },
  beforeCreate () {
    this.$nextTick(() => {
      this.$nuxt.$loading?.start()
    })
    this.statusLoader = false
  },
  mounted () {
    this.statusLoader = true
    this.$nextTick(() => {
      setTimeout(() => this.$nuxt.$loading?.finish(), 500)
    })
  },
  methods: {
    closeChat (event) {
      this.$store.commit('chat/setStatusChat', event)
    },
    openChat (event) {
      this.$store.commit('chat/setStatusChat', event)
    }
  }
}
</script>

<style lang="scss" scoped>
.deploy {
  line-height: 1.64;
  background-color: #e5e5e5;

  .right-half-circle {
    position: absolute;
    left: 89.45%;
    right: -20.55%;
    top: 6.6%;
    bottom: 88.47%;
    z-index: -5;
  }

  .left-half-circle {
    position: absolute;
    width: 398px;
    height: 437px;
    top: 48%;
    left: -12%;
    filter: blur(50px);
    z-index: -5;
  }
}
</style>
