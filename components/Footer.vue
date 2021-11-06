<template>
  <v-container fluid class="pa-0 ma-0">
    <div class="footer">
      <v-row
        no-gutters
      >
        <v-col cols="12">
          <p class="topic">
            Contact to me
          </p>
          <p class="text-email">
            <a href="mailto:NitichaiSawangsai@gmail.com" class="mr-3" target="scghome"> <span>
              NitichaiSawangsai@gmail.com
            </span>
            </a>
            <a href="mailto:NitichaiSawangsaiDev@gmail.com" class="mr-3" target="scghome"> <span>
              <span class="ml-7">
                nawarat.nwj@gmail.com
              </span>
            </span></a>
          </p>
          <div class="mt-6">
            <span class="mr-4">
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
            <span class="mr-4">
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
            <span class="mr-5">
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
          </div>
          <p class="mt-4 text-license">
            © 2021 Designed and crafted by Nitichai S. All Rights Reserved.
          </p>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'LayoutFooter'
}
</script>

<style lang="scss" scoped>
.footer {
  margin-top: 5rem;
  height: 263px;
  background: #7b7b7b;
  justify-content: center;
  display: flex;
  text-align: center;

  .topic {
    font-family: $font-poppins;
    font-weight: 600;
    font-size: 36px;
    color: #fff;
    margin-top: 1rem;
  }

  .text-email {
    a {
      font-family: $font-poppins;
      font-size: 24px;
      color: #fff;
      text-decoration: none;
    }
  }

  .text-license {
    font-family: $font-poppins;
    font-weight: 300;
    font-size: 18px;
    color: #fff;
  }
}
</style>
