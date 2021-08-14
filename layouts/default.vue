<template>
  <span>
    <v-app v-if="$config.statusProject === 'deploy'" class="deploy" light>
      <Header />
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
        <v-col cols="11" class="pt-15">
          <Nuxt />
        </v-col>
      </v-row>

      <Chat v-if="statusChat === true" @closeChat="closeChat($event)" />
      <BtnChatBot v-else @openChat="openChat($event)" />
    </v-app>
    <v-app v-else class="development">
      <Deployment />
    </v-app>
  </span>
</template>

<script>
import { mapState } from 'vuex'
import Header from '~/components/Header'
import BtnChatBot from '~/components/common/ChatBot/BtnChatBot'
import Chat from '~/components/common/ChatBot/Chat'
import Deployment from '~/components/common/Deployment/Deployment'

export default {
  name: 'DefaultLayout',
  components: {
    Header,
    BtnChatBot,
    Chat,
    Deployment
  },
  computed: {
    ...mapState({
      statusChat: state => state.chat.statusChat
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

  .right-half-circle {
    position: absolute;
    left: 89.45%;
    right: -20.55%;
    top: 0.6%;
    bottom: 88.47%;
  }

  .left-half-circle {
    position: absolute;
    width: 398px;
    height: 437px;
    top: 45%;
    left: -7%;
  }
}
</style>
