<template>
  <div class="home">
    <v-col cols="12">
      <v-card
        width="100%"
        height="599px"
        style="border-radius: 20px; position: inherit;"
        dark
      >
        ss
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
        From designs to well-crafted products
      </v-btn>
    </v-col>
    <v-row class="mt-16" no-gutters>
      <v-col md="4" sm="12" class="d-flex justify-center">
        <v-card
          width="400px"
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
      <v-col md="4" sm="12" class="d-flex justify-center">
        <v-card
          width="400px"
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
      <v-col md="4" sm="12" class="d-flex justify-center">
        <v-card
          width="400px"
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
        >
          Highlighted Projects
        </v-btn>
      </v-col>
    </v-row>
    <v-row class="mt-1" no-gutters>
      <v-col cols="12" class="d-flex justify-center">
        <v-col md="6">
          <img
            width="600px"
            height="331px"
            alt="mitraruma-1"
            :src="require('~/assets/icons/png/mitraruma-1.png')"
          >
        </v-col>
        <v-col md="6">
          <img
            width="600px"
            height="331px"
            alt="mitraruma-2"
            :src="require('~/assets/icons/png/mitraruma-2.png')"
          >
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
      <v-col cols="12" class="d-flex justify-center">
        <v-col md="6">
          <img
            width="600px"
            height="331px"
            alt="mitraruma-3"
            :src="require('~/assets/icons/png/mitraruma-3.png')"
          >
        </v-col>
        <v-col md="6">
          <img
            width="600px"
            height="331px"
            alt="mitraruma-4"
            :src="require('~/assets/icons/png/mitraruma-4.png')"
          >
        </v-col>
      </v-col>
    </v-row>
    <v-row class="mt-1" no-gutters>
      <v-col cols="12" class="d-flex justify-center">
        <img
          width="100%"
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
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="scss" scoped>
.home {
  font-family: $font-poppins;
  font-size: 16px;
  margin-top: 2.8rem;
  position: inherit !important;

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
      ::v-deep .v-btn__content {
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
