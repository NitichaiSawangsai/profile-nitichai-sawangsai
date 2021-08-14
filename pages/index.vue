<template>
  <div class="home">
    <v-col cols="12">
      <v-card
        width="100%"
        height="599px"
        class="mb-2 mt-1"
        style="border-radius: 20px; position: inherit;"
        dark
      >
        <v-row class="mt-1" no-gutters>
          <v-col cols="12" class="d-flex justify-center">
            <v-col md="6">
              <div
                class="text-home-page1"
              >
                <p class="mt-0 text-career">
                  {{ $t('CAREER') }}
                </p>
                <p class="mt-0 text-career">
                  {{ $t('WITH') }} <span> <nitichai-s /> </span>
                </p>

                <div class="experience">
                  <p class="text-experience mb-0">
                    {{ $t('EXPERIENCE_WORK') }}
                  </p>
                  <a href="https://www.facebook.com/wedotheofficial" class="mr-4" target="wdo">
                    <img
                      class="pt-2"
                      width="60px"
                      height="52px"
                      alt="logo-wdo"
                      :src="require('~/assets/icons/svg/logo-wdo.svg')"
                    >
                  </a>
                  <a href="https://scghome.com" class="mr-4" target="scghome">
                    <img
                      width="107px"
                      height="38px"
                      alt="logo-scg"
                      :src="require('~/assets/icons/svg/logo-scg.svg')"
                    >
                  </a>
                  <a href="https://bitkub.com" class="mr-4" target="bitkub">
                    <img
                      width="107px"
                      height="38px"
                      alt="logo-bitkub"
                      :src="require('~/assets/icons/svg/logo-bitkub.svg')"
                    >
                  </a>
                  <a href="https://globish.com" class="mr-4" target="globish">
                    <img
                      class="pt-2"
                      width="60px"
                      height="50px"
                      alt="logo-globish"
                      :src="require('~/assets/icons/svg/logo-globish.svg')"
                    >
                  </a>
                </div>
              </div>
            </v-col>
            <v-col md="6">
              <img
                v-if="$vuetify.breakpoint.width > 1024"
                class="img-me"
                width="488px"
                height="475px"
                alt="circle-line"
                :src="require('~/assets/icons/svg/circle-line.svg')"
              >
            </v-col>
          </v-col>
        </v-row>
      </v-card>
      <v-btn
        depressed
        elevation="2"
        width="100%"
        height="66px"
        class="mt-16 btn-heading-color heading-design"
        raised
        rounded
      >
        {{ $t('TEXT_PRODUCT') }}
      </v-btn>
    </v-col>
    <v-row class="mt-16" no-gutters>
      <v-col md="4" sm="12" class="d-flex justify-center px-6">
        <v-card
          width="100%"
          height="320px"
          class="card-product"
          dark
        >
          <div class="center py-9">
            <img
              width="150px"
              height="150px"
              alt="icon-website-design"
              :src="require('~/assets/icons/svg/icon-website-design.svg')"
            >
            <p class="text-product">
              Application
            </p>
            <p class="text-product">
              & website design
            </p>
          </div>
        </v-card>
      </v-col>
      <v-col md="4" sm="12" class="d-flex justify-center px-6">
        <v-card
          width="100%"
          height="320px"
          class="card-product"
          dark
        >
          <div class="center py-13">
            <img
              width="150px"
              height="150px"
              alt="icon-front-end"
              :src="require('~/assets/icons/svg/icon-front-end.svg')"
            >
            <p class="text-product">
              Front-end development
            </p>
          </div>
        </v-card>
      </v-col>
      <v-col md="4" sm="12" class="d-flex justify-center px-6">
        <v-card
          width="100%"
          height="320px"
          class="card-product"
          dark
        >
          <div class="center py-13">
            <img
              width="150px"
              height="150px"
              alt="icon-back-end"
              :src="require('~/assets/icons/svg/icon-back-end.svg')"
            >
            <p class="text-product">
              Back-end development
            </p>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="mt-10" no-gutters>
      <v-col cols="12" class="d-flex justify-center">
        <v-btn
          depressed
          elevation="2"
          width="423px"
          height="60px"
          class="btn-heading-color heading-project"
          raised
          rounded
          v-text="$t('EXPERIENCE_PROJECT')"
        />
      </v-col>
    </v-row>
    <v-row justify="center" no-gutters>
      <v-col :cols="$vuetify.breakpoint.width < 1445 ? 12 : 10">
        <v-row class="mt-1" no-gutters>
          <v-col cols="12" class="d-flex">
            <v-col md="6">
              <a href="https://www.mitraruma.com" class="mr-4" target="mitraruma">
                <img
                  :width="$vuetify.breakpoint.width <= 1024 ? '470px' : '600px'"
                  height="331px"
                  alt="mitraruma-1"
                  :src="require('~/assets/icons/png/mitraruma-1.png')"
                >
              </a>
            </v-col>
            <v-col md="6" class="d-flex justify-end">
              <a href="https://www.mitraruma.com" class="mr-4" target="mitraruma">
                <img
                  :width="$vuetify.breakpoint.width <= 1024 ? '470px' : '600px'"
                  height="331px"
                  alt="mitraruma-2"
                  :src="require('~/assets/icons/png/mitraruma-2.png')"
                >
              </a>
            </v-col>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col cols="12" class="d-flex justify-center px-15">
            <v-card
              width="100%"
              height="4rem"
              class="card-product center py-5 text-description-scg"
            >
              text text text text text text text text text text text text text text text text text text text text text text text text text text text text text
            </v-card>
          </v-col>
        </v-row>
        <v-row class="mt-8" no-gutters>
          <v-col cols="12" class="d-flex">
            <v-col md="6">
              <a href="https://www.mitraruma.com" class="mr-4" target="mitraruma">
                <img
                  :width="$vuetify.breakpoint.width <= 1024 ? '470px' : '600px'"
                  height="331px"
                  alt="mitraruma-3"
                  :src="require('~/assets/icons/png/mitraruma-3.png')"
                >
              </a>
            </v-col>
            <v-col md="6" class="d-flex justify-end">
              <a href="https://www.mitraruma.com" class="mr-4" target="mitraruma">
                <img
                  :width="$vuetify.breakpoint.width <= 1024 ? '470px' : '600px'"
                  height="331px"
                  alt="mitraruma-4"
                  :src="require('~/assets/icons/png/mitraruma-4.png')"
                >
              </a>
            </v-col>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <a href="https://medium.com/globish-academia/globish-tech-stack-2020-8320a209da1d" class="mr-4" target="parinthor-saithong">
      <v-row class="mt-1" no-gutters>
        <v-col cols="12" class="d-flex justify-center">
          <img
            width="100%"
            min-height="580rem"
            alt="mitraruma-3"
            :src="require('~/assets/icons/png/globish.jpeg')"
          >
        </v-col>
      </v-row>
      <v-row class="mb-9" no-gutters>
        <v-col cols="12" class="d-flex justify-center">
          <v-card
            width="100%"
            height="4rem"
            class="card-product center py-5 text-description-scg"
            style="border-radius: 1px 1px 14px 14px;"
          >
            text text text text text text text text text text text text text text text text text text text text text text text text text text text text text
          </v-card>
        </v-col>
      </v-row>
    </a>
  </div>
</template>

<script>
import NitichaiS from '~/components/icon/NitichaiS'

export default {
  name: 'Home',
  components: {
    NitichaiS
  }
}
</script>

<style lang="scss" scoped>
.home {
  font-family: $font-poppins;
  font-size: 16px;
  margin-top: 2.8rem;
  position: inherit !important;

  .text-home-page1 {
    margin-top: 8rem;
    margin-left: 4rem;
    width: 626px;
    height: 131px;

    .text-career {
      font-family: $font-poppins;
      font-style: normal;
      font-weight: 600;
      font-size: 58px !important;
      line-height: 84px;
      letter-spacing: 0.02em;
      color: #fff;
    }

    .experience {
      margin-top: 7.9rem;

      .text-experience {
        font-family: $font-poppins;
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 50px;
        letter-spacing: 0.02em;
        color: #c1bebe;
      }
    }
  }

  .img-me {
    margin: 2.5rem 4rem;
  }

  .btn-heading-color {
    background: linear-gradient(90deg, #fed061 0%, #ed8597 45.53%, #9983ff 100%);
    box-shadow: 0 0 40px rgba(0, 0, 0, 0.1);
    border-radius: 30px;
    position: inherit !important;

    &.heading-design {
      ::v-deep .v-btn__content {
        position: inherit !important;
        font-family: $font-poppins;
        color: #fff;
        letter-spacing: 0.02em;
        text-shadow: 0 0 100px rgba(0, 0, 0, 0.5);
        font-style: normal;
        font-weight: 600;
        font-size: 36px;
        line-height: 84px;
        text-transform: none;
      }
    }

    &.heading-project {
      position: inherit !important;
      font-family: $font-poppins;
      color: #fff;
      letter-spacing: 0.02em;
      text-shadow: 0 0 100px rgba(0, 0, 0, 0.5);
      font-style: normal;
      font-weight: 600;
      font-size: 28px;
      line-height: 84px;
      text-transform: none;
    }
  }

  .card-product {
    position: inherit !important;
    background: #fff;
    box-shadow: 0 0 40px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
  }

  .text-product {
    position: inherit !important;
    font-family: $font-poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    color: #000;
  }

  .center {
    display: block;
    text-align: -webkit-center;
  }

  .text-description-scg {
    font-family: $font-poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
  }
}
</style>
