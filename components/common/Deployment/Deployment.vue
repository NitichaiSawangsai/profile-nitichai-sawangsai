<template>
  <v-container class="con box-center font-alert">
    <div class="position-center">
      <v-img class="img-develoment" alt="development" :lazy-src="require('~/assets/icons/gif/development.gif')" :src="require('~/assets/icons/gif/development.gif')" />
    </div>
    <p :class="!$config.dateStartDeploy && $vuetify.breakpoint.width > 447 ? 'text-center' : ''">
      {{ $t('MESSAGE_DEVELOP') }} <span v-if="$config.dateStartDeploy">{{ $t('MESSAGE_DEVELOP_TIME',{ date: $moment($config.dateStartDeploy, 'YYYY-MM-DDTHH:mm:ss.sssZ').format('DD MMMM YYYY'), time:$moment($config.dateStartDeploy, 'YYYY-MM-DDTHH:mm:ss.sssZ').format('HH:mm:ss') }) }}</span>
    </p>
    <div>
      <btn-switch-lang />
    </div>
    <div class="position-center mr-14 pt-2 position-icon-social">
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
  </v-container>
</template>

<script>
import BtnSwitchLang from '~/components/common/I18N/BtnSwitchLang'
export default {
  name: 'Deployment',
  components: {
    BtnSwitchLang
  },
  head () {
    return {
      title: 'Home'
    }
  },
  methods: {
    onCopy () {
      const copyText = window.location.href
      navigator.clipboard.writeText(copyText)
    }
  }
}
</script>
<style lang="scss" scoped>
.development {
  .box-center {
    max-width: 38rem;
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

  .text-center {
    text-align: center;
  }

  @media only screen and (max-width: 931px) {
    .box-center {
      max-width: 50rem;
    }

    .position-icon-social {
      margin-left: 3rem !important;
    }

    @media only screen and (max-width: 768px) {
      .box-center {
        max-width: 38rem;
      }

      @media only screen and (max-width: 425px) {
        .img-develoment {
          max-width: 20rem;
        }
      }
    }
  }
}
</style>
