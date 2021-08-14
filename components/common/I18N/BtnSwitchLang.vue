<template>
  <div class="btn-switch-lang">
    <div class="m-square" @click="changeLocal()">
      <div :class="active ? `wrapper active ${$i18n.locale}` : 'wrapper'">
        <div class="module">
          <div class="label">
            <span>{{ $i18n.locales[0].name }} | {{ $i18n.locales[1].name }}</span>
          </div>
          <div class="label">
            <span>{{ $i18n.locales[1].name }} | {{ $i18n.locales[0].name }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BtnSwitchLang',
  data: () => ({
    active: false
  }),
  methods: {
    changeLocal () {
      this.active = !this.active
      this.$i18n.setLocale(this.active ? this.$i18n.locales[1].code : this.$i18n.locales[0].code)
    }
  }
}
</script>

<style lang="scss" scoped>

.btn-switch-lang {
  font-size: 16px;

  .label {
    position: absolute;
    color: #3b3b3b;
    text-align: center;
    backface-visibility: hidden;
  }

  .m-square {
    width: 59px;
    height: 28px;
    cursor: pointer;

    .label {
      font-weight: 600;
    }
  }

  .module {
    position: absolute;
    width: 100%;
    height: 100%;
    perspective: 0;
    transform-style: preserve-3d;
    transition: transform 0.8s;

    .label:nth-child(1) {
      transform: translateZ(0deg);
    }

    .label:nth-child(2) {
      transform: rotateY(-100deg) translateZ(5px);
    }
  }

  .wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    transition: transform 0.5s ease;

    &.active {
      .module {
        transition: transform 1.2s ease !important;
        transform: rotateY(-270deg) !important;
      }
    }
  }
}
</style>
