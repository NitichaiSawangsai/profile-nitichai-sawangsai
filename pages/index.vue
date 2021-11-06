<template>
  <v-container fluid class="pa-0">
    <v-row no-gutters>
      <v-col cols="12">
        <div class="home">
          <v-col cols="12">
            <v-card
              width="100%"
              height="599px"
              class="mb-2 mt-2"
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
                        <a href="https://bitkub.com" target="bitkub">
                          <img
                            width="107px"
                            height="38px"
                            alt="logo-bitkub"
                            :src="require('~/assets/icons/svg/logo-bitkub.svg')"
                          >
                        </a>
                        <a href="https://globish.com" target="globish">
                          <img
                            class="pt-2"
                            width="60px"
                            height="50px"
                            alt="logo-globish"
                            :src="require('~/assets/icons/svg/logo-globish.svg')"
                          >
                        </a>

                        <a href="https://www.facebook.com/wedotheofficial" class="mr-2" target="wdo">
                          <img
                            class="pt-2"
                            width="60px"
                            height="52px"
                            alt="logo-wdo"
                            :src="require('~/assets/icons/svg/logo-wdo.svg')"
                          >
                        </a>
                        <a href="https://scghome.com" class="mr-3" target="scghome">
                          <img
                            width="107px"
                            height="38px"
                            alt="logo-scg"
                            :src="require('~/assets/icons/svg/logo-scg.svg')"
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
              <span data-aos="fade-left" class="pt-1">{{ $t('TEXT_PRODUCT') }}</span>
            </v-btn>
          </v-col>
          <v-row class="mt-10" no-gutters>
            <v-col md="4" sm="4" class="d-flex justify-center px-6">
              <v-card
                width="100%"
                height="320px"
                class="card-product"
                data-aos="fade-right"
                dark
              >
                <div class="center py-9">
                  <img
                    width="120px"
                    height="120px"
                    alt="icon-website-design"
                    :src="require('~/assets/icons/svg/icon-website-design.svg')"
                  >
                  <p class="text-product mt-3">
                    {{ $t('APPLICATION') }}
                  </p>
                  <p class="text-product">
                    {{ $t('WEBSITE_DESIGE') }}
                  </p>
                </div>
              </v-card>
            </v-col>
            <v-col md="4" sm="4" class="d-flex justify-center px-6">
              <v-card
                width="100%"
                height="320px"
                class="card-product"
                data-aos="fade-down"
                dark
              >
                <div class="center py-13">
                  <img
                    width="120px"
                    height="120px"
                    alt="icon-front-end"
                    :src="require('~/assets/icons/svg/icon-front-end.svg')"
                  >
                  <p class="text-product mt-7">
                    {{ $t('FRONT_END') }}
                  </p>
                </div>
              </v-card>
            </v-col>
            <v-col md="4" sm="4" class="d-flex justify-center px-6">
              <v-card
                width="100%"
                height="320px"
                class="card-product"
                data-aos="fade-left"
                dark
              >
                <div class="center py-13">
                  <img
                    width="120px"
                    height="120px"
                    alt="icon-back-end"
                    :src="require('~/assets/icons/svg/icon-back-end.svg')"
                  >
                  <p class="text-product mt-7">
                    {{ $t('BACK_END') }}
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
              >
                <span data-aos="fade-left" class="pt-2">{{ $t('EXPERIENCE_PROJECT') }}</span>
              </v-btn>
            </v-col>
          </v-row>
          <v-row justify="center" no-gutters>
            <v-col cols="12" class="mt-15 ml-13">
              <div style="border-left: 13px solid #c71e30; height: 4rem;">
                <img
                  style="margin-top: -15px;"
                  alt="name-mitraruma"
                  :src="require('~/assets/icons/png/name-mitraruma.png')"
                >
              </div>
            </v-col>
            <v-col :cols="$vuetify.breakpoint.width < 1445 ? 12 : 10">
              <v-row class="mt-1" no-gutters>
                <v-col cols="12" class="d-flex">
                  <v-col cols="6">
                    <a href="https://www.mitraruma.com" class="mr-4" target="mitraruma">
                      <img
                        :width="$vuetify.breakpoint.width <= 1024 ? $vuetify.breakpoint.width < 935 ? '300px' : '470px' : '600px'"
                        :height="$vuetify.breakpoint.width < 935 ? '221px' : '331px'"
                        alt="mitraruma-1"
                        :src="require('~/assets/icons/png/mitraruma-1.png')"
                      >
                    </a>
                  </v-col>
                  <v-col cols="6" class="d-flex justify-end">
                    <a href="https://www.mitraruma.com" class="mr-4" target="mitraruma">
                      <img
                        :width="$vuetify.breakpoint.width <= 1024 ? $vuetify.breakpoint.width < 935 ? '300px' : '470px' : '600px'"
                        :height="$vuetify.breakpoint.width < 935 ? '221px' : '331px'"
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
                    min-height="4rem"
                    class="card-product center py-5 bg-description-scg"
                  >
                    <span data-aos="fade-up">
                      text text text text text text text text text text text text text text text text text text text text text text text text text text text text
                      text text text text text text text text text text text text text text text text text text text text text text text text text text text text
                      text text text text text text text text text text text text text text text text text text text text text text text text text text text text

                    </span>
                  </v-card>
                </v-col>
              </v-row>
              <v-row class="mt-8" no-gutters>
                <v-col cols="12" class="d-flex">
                  <v-col cols="6">
                    <a href="https://www.mitraruma.com" class="mr-4" target="mitraruma">
                      <img
                        :width="$vuetify.breakpoint.width <= 1024 ? $vuetify.breakpoint.width < 935 ? '300px' : '470px' : '600px'"
                        :height="$vuetify.breakpoint.width < 935 ? '221px' : '331px'"
                        alt="mitraruma-3"
                        :src="require('~/assets/icons/png/mitraruma-3.png')"
                      >
                    </a>
                  </v-col>
                  <v-col cols="6" class="d-flex justify-end">
                    <a href="https://www.mitraruma.com" class="mr-4" target="mitraruma">
                      <img
                        :width="$vuetify.breakpoint.width <= 1024 ? $vuetify.breakpoint.width < 935 ? '300px' : '470px' : '600px'"
                        :height="$vuetify.breakpoint.width < 935 ? '221px' : '331px'"
                        alt="mitraruma-4"
                        :src="require('~/assets/icons/png/mitraruma-4.png')"
                      >
                    </a>
                  </v-col>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
          <v-col cols="12" class="ml-5">
            <div style="border-left: 13px solid #c71e30; height: 4rem;">
              <img
                width="439px"
                style="margin-top: -15px; border-radius: 40px 40px 0 0;"
                alt="hello-globish"
                :src="require('~/assets/icons/png/hello-globish.png')"
              >
            </div>
          </v-col>
          <v-col cols="12" class="mt-2">
            <a style="text-decoration: none;" class="mr-4" href="https://medium.com/globish-academia/globish-tech-stack-2020-8320a209da1d" target="parinthor-saithong">
              <v-row class="mt-1" no-gutters>
                <v-col cols="12" class="d-flex justify-center">
                  <img
                    width="100%"
                    min-height="580rem"
                    alt="mitraruma-3"
                    class="img-globish"
                    :src="require('~/assets/icons/png/globish.jpeg')"
                  >
                </v-col>
              </v-row>
              <v-row class="mb-9" no-gutters>
                <v-col cols="12" class="d-flex justify-center">
                  <v-card
                    width="100%"
                    min-height="4rem"
                    class="card-product center py-5 bg-description-globish"
                    style="border-radius: 1px 1px 14px 14px;"
                  >
                    <span data-aos="fade-up">
                      text text text text text text text text text text text text text text text text text text text text text text text
                      text text text text text text text text text text text text text text text text text text text text text text text text text text text text text
                      text text text text text text text text text text text text text text text text text text text text text text text text text text text text text
                      text text text text text text text text text text text text text text text text text text text text text text text text text text text text
                      <br>credit: <a href="https://www.facebook.com/pirsquareff" target="parinthor-saithong"> Parinthorn Saithong</a>
                    </span>
                  </v-card>
                </v-col>
              </v-row>
            </a>
          </v-col>
          <v-row class="mb-9" no-gutters>
            <v-col cols="12" class="d-flex justify-center">
              <v-card
                width="100%"
                height="4.5rem"
                class="card-product center card-tool-header text"
                style="border-radius: 14px 14px 1px 1px;"
              >
                <p class="mb-1 mt-2">
                  {{ $t('TOOL') }}
                </p>
              </v-card>
            </v-col>
            <v-col cols="12" class="d-flex justify-center">
              <v-card
                width="100%"
                data-aos="flip-up"
                :class="$vuetify.breakpoint.width > 1439 ? 'card-product' : ($vuetify.breakpoint.width < 932 ? 'card-product px-5' : 'card-product center')"
                style="border-radius: 1px 1px 14px 14px;"
              >
                <v-col cols="12">
                  <a href="https://kubernetes.io/docs/home/" target="icon-k8s">
                    <img
                      height="159px"
                      width="209px"
                      alt="icon-k8s"
                      :src="require('~/assets/icons/svg/tools/icon-k8s.svg')"
                    >
                  </a>
                  <a href="https://aws.amazon.com/cloudwatch/" target="icon-cloudwatch">
                    <img
                      height="159px"
                      width="209px"
                      alt="icon-cloudwatch"
                      :src="require('~/assets/icons/svg/tools/icon-cloudwatch.svg')"
                    >
                  </a>
                  <a
                    href="https://aws.amazon.com"
                    target="icon-postgre-sql"
                  >
                    <img
                      height="159px"
                      width="209px"
                      alt="icon-postgre-sql"
                      :src="require('~/assets/icons/svg/tools/icon-postgre-sql.svg')"
                    >
                  </a>
                  <a
                    href="https://www.docker.com"
                    target="icon-docker"
                  >
                    <img
                      height="159px"
                      width="209px"
                      alt="icon-docker"
                      :src="require('~/assets/icons/svg/tools/icon-docker.svg')"
                    >
                  </a>
                  <a
                    href="https://graphql.org"
                    target="icon-graph-ql"
                  >
                    <img
                      height="159px"
                      width="209px"
                      alt="icon-graph-ql"
                      :src="require('~/assets/icons/svg/tools/icon-graph-ql.svg')"
                    >
                  </a>
                  <a
                    href="https://aws.amazon.com/s3/"
                    target="icon-aws-s3"
                  >
                    <img
                      height="159px"
                      width="209px"
                      alt="icon-aws-s3"
                      :src="require('~/assets/icons/svg/tools/icon-aws-s3.svg')"
                    >
                  </a>
                  <a
                    href="https://sonarcloud.io"
                    target="icon-snarcloud"
                  >
                    <img
                      height="159px"
                      width="209px"
                      alt="icon-snarcloud"
                      :src="require('~/assets/icons/svg/tools/icon-snarcloud.svg')"
                    >
                  </a>
                  <a
                    href="https://eslint.org"
                    target="icon-eslint"
                  >
                    <img
                      height="159px"
                      width="209px"
                      alt="icon-eslint"
                      :src="require('~/assets/icons/svg/tools/icon-eslint.svg')"
                    >
                  </a>
                  <a
                    href="https://www.npmjs.com/package/faker"
                    target="icon-faker"
                  >
                    <img
                      height="159px"
                      width="209px"
                      alt="icon-faker"
                      :src="require('~/assets/icons/svg/tools/icon-faker.svg')"
                    >
                  </a>
                  <a
                    href="https://siamchamnankit.co.th/มารู้จัก-deployment-pipeline-ใน-continuous-delivery-กันเถอะ-3953408d83ec"
                    target="icon-deployment-pipeline"
                  >
                    <img
                      height="159px"
                      width="209px"
                      alt="icon-deployment-pipeline"
                      :src="require('~/assets/icons/svg/tools/icon-deployment-pipeline.svg')"
                    >
                  </a>
                  <a
                    href="https://laravel.com/docs/8.x/installation"
                    target="icon-laravel"
                  >
                    <img
                      height="159px"
                      width="209px"
                      alt="icon-laravel"
                      :src="require('~/assets/icons/png/tools/icon-laravel.png')"
                    >
                  </a>
                  <a
                    href="https://docs.nestjs.com"
                    target="logo-nestjs"
                  >
                    <img
                      height="159px"
                      width="209px"
                      alt="logo-nestjs"
                      :src="require('~/assets/icons/png/tools/logo-nestjs.png')"
                    >
                  </a>
                  <a
                    href="https://nodejs.org/en/docs/"
                    target="logo-nodejs"
                  >
                    <img
                      height="159px"
                      width="209px"
                      alt="logo-nodejs"
                      :src="require('~/assets/icons/png/tools/logo-nodejs.png')"
                    >
                  </a>
                  <a
                    href="https://expressjs.com/en/5x/api.html"
                    target="logo-node-experess"
                  >
                    <img
                      height="159px"
                      width="209px"
                      alt="logo-node-experess"
                      :src="require('~/assets/icons/png/tools/logo-node-experess.png')"
                    >
                  </a>
                  <a
                    href="https://nuxtjs.org/docs/get-started/installation"
                    target="logo-nuxtjs"
                  >
                    <img
                      height="159px"
                      width="209px"
                      alt="logo-nuxtjs"
                      :src="require('~/assets/icons/png/tools/logo-nuxtjs.png')"
                    >
                  </a>
                  <a
                    href="https://vuejs.org/v2/guide/"
                    target="logo-vuejs"
                  >
                    <img
                      height="159px"
                      width="209px"
                      alt="logo-vuejs"
                      :src="require('~/assets/icons/png/tools/logo-vuejs.png')"
                    >
                  </a>
                  <a
                    href="https://docs.python.org/3/"
                    target="logo-python"
                  >
                    <img
                      height="159px"
                      width="209px"
                      alt="logo-python"
                      :src="require('~/assets/icons/png/tools/logo-python.png')"
                    >
                  </a>
                  <a
                    href="https://docs.github.com/en/actions"
                    target="logo-github-action"
                  >
                    <img
                      height="159px"
                      width="209px"
                      alt="logo-github-action"
                      :src="require('~/assets/icons/png/tools/logo-github-action.png')"
                    >
                  </a>
                  <a
                    href="https://docs.github.com/en/actions"
                    target="logo-ionic"
                  >
                    <img
                      height="159px"
                      width="209px"
                      alt="logo-ionic"
                      :src="require('~/assets/icons/png/tools/logo-ionic.png')"
                    >
                  </a>
                  <a
                    href="https://www.serverless.com/framework/docs/providers/aws/"
                    target="logo-serverless"
                  >
                    <img
                      height="159px"
                      width="209px"
                      alt="logo-serverless"
                      :src="require('~/assets/icons/png/tools/logo-serverless.png')"
                    >
                  </a>
                  <a
                    href="https://readme.drone.io"
                    target="logo-drone"
                  >
                    <img
                      height="159px"
                      width="209px"
                      alt="logo-drone"
                      :src="require('~/assets/icons/png/tools/logo-drone.png')"
                    >
                  </a>
                  <a
                    href="https://bitbucket.org/product/features/pipelines"
                    target="logo-bitbucket"
                  >
                    <img
                      height="159px"
                      width="209px"
                      alt="logo-bitbucket"
                      :src="require('~/assets/icons/png/tools/logo-bitbucket.png')"
                    >
                  </a>
                  <a
                    href="https://aws.amazon.com/rds"
                    target="logo-ams-rds"
                  >
                    <img
                      height="159px"
                      width="209px"
                      alt="logo-ams-rds"
                      :src="require('~/assets/icons/png/tools/logo-ams-rds.png')"
                    >
                  </a>
                </v-col>
              </v-card>
            </v-col>
            <v-col v-if="false" cols="12" class="d-flex justify-center">
              <v-btn
                depressed
                elevation="2"
                width="100%"
                height="66px"
                class="mt-16 btn-heading-color heading-design"
                raised
                rounded
              >
                <span class="pt-1">
                  {{ $t('CODING_PRINCIPLES') }}
                </span>
              </v-btn>
            </v-col>
            <v-col v-if="false" cols="12" class="d-flex justify-center">
              <img
                width="100%"
                alt="mitraruma-3"
                class="img-globish"
                :src="require('~/assets/icons/png/globish.jpeg')"
              >
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import NitichaiS from '~/components/icon/NitichaiS'
import aosMixin from '~/mixins/aos'

export default {
  name: 'Home',
  components: {
    NitichaiS
  },
  mixins: [aosMixin]
}
</script>

<style lang="scss" scoped>
.home {
  font-family: $font-poppins;
  font-size: 16px;
  margin-top: 2.8rem;
  position: inherit !important;

  .img-globish {
    border-radius: 40px 40px 0 0 !important;
  }

  .bg-description-globish {
    background: #8b1a2f !important;
    box-shadow: 0 0 40px rgba(0, 0, 0, 0.1);
    border-radius: 0 0 30px 30px;
    padding-left: 1rem;
    padding-right: 1rem;

    >span {
      font-family: $font-poppins;
      font-weight: 600;
      font-size: 24px;
      color: #fff;
      text-decoration: none;
      text-align: left;
      padding: 1rem 3rem;
    }
  }

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

        @media screen and (max-width: 769px) {
          font-size: 30px !important;
        }

        text-transform: none;
      }
    }

    &.heading-project {
      ::v-deep .v-btn__content {
        position: inherit !important;
        font-family: $font-poppins;
        color: #fff;
        letter-spacing: 0.02em;
        text-shadow: 0 0 100px rgba(0, 0, 0, 0.5);
        font-style: normal;
        font-weight: 600;
        font-size: 36px;

        @media screen and (max-width: 769px) {
          font-size: 30px !important;
        }

        line-height: 84px;
        text-transform: none;
      }
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

  .px-2-rem {
    padding-right: 2rem;
    padding-left: 2rem;
  }

  .bg-description-scg {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    background: rgba(0, 0, 0, 0.58);
    box-shadow: 0 0 40px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    padding-right: 2rem !important;
    padding-left: 2rem !important;

    >span {
      font-family: $font-poppins;
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 40px;
      color: #fff;
    }
  }

  .card-tool-header {
    background: linear-gradient(90deg, #ffd35f 0%, #ed8597 45.53%, #9983ff 100%);
    box-shadow: 0 0 40px rgba(0, 0, 0, 0.1);
    border-radius: 30px 30px 0 0;

    &.text {
      margin: 0;
      padding: 0;
      font-family: $font-poppins;
      font-style: normal;
      font-weight: 600;
      color: #fff;
      font-size: 36px;

      @media screen and (max-width: 769px) {
        font-size: 30px !important;
      }

      text-shadow: 0 4px 100px rgba(0, 0, 0, 0.5);
    }
  }
}
</style>
