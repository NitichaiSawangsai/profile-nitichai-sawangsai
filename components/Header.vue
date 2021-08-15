<template>
  <div class="layout-header bg-headeer ma-0 pa-0">
    <v-container class="mr-3 mt-1">
      <btn-switch-lang class="switch-lang-color float-right mt-2-custom" />
      <span class="float-right mr-5">
        <v-tooltip bottom>
          <template #activator="{ on, attrs }">
            <a href="https://www.facebook.com/profile.php?id=100017880492777" target="facebook-me">
              <img
                v-bind="attrs"
                width="29px"
                height="29px"
                alt="logo-facebook"
                :src="require('~/assets/icons/svg/logo-facebook2.svg')"
                v-on="on"
              >
            </a>
          </template>
          <span>Facebook</span>
        </v-tooltip>
      </span>
      <span class="float-right mr-4">
        <v-tooltip bottom>
          <template #activator="{ on, attrs }">
            <a href="https://www.linkedin.com/in/nitichai-sawangsai-79424b1b1" target="linkedin-me">
              <img
                v-bind="attrs"
                width="30px"
                alt="logo-linkedin"
                :src="require('~/assets/icons/svg/logo-linkedin2.svg')"
                v-on="on"
              >
            </a>
          </template>
          <span>Linkedin</span>
        </v-tooltip>
      </span>
      <span class="float-right mr-4">
        <v-tooltip bottom>
          <template #activator="{ on, attrs }">
            <a href="https://github.com/NitichaiSawangsai" target="github-me">
              <img
                v-bind="attrs"
                width="30px"
                alt="logo-github"
                :src="require('~/assets/icons/svg/logo-github.svg')"
                v-on="on"
              >
            </a>
          </template>
          <span>Github</span>
        </v-tooltip>
      </span>
    </v-container>
  </div>
</template>

<script>
import BtnSwitchLang from '~/components/common/I18N/BtnSwitchLang'
export default {
  name: 'LayoutHeader',
  components: {
    BtnSwitchLang
  }
}
</script>

<style lang="scss" scoped>
.layout-header {
  background: #7b7b7b;
  height: 3.8rem;
  position: fixed;
  width: 100%;
  z-index: 100;

  ::v-deep .switch-lang-color {
    .label {
      color: #fff !important;
    }
  }

  .mt-2-custom {
    padding-top: 2px;
  }
}
</style>
