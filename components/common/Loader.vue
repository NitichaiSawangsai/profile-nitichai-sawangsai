<template>
  <div v-if="isLoading" :class="isClassBg ? 'loading--bg-white' : ''">
    <div class="text-center position-loading">
      <v-progress-circular
        :size="50"
        color="primary"
        indeterminate
      />
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  props: {
    isClassBg: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      isLoading: true
    }
  },
  beforeMount () {
    const self = this
    document.onreadystatechange = () => {
      if (document.readyState === 'complete') {
        self.isLoading = false
      }
    }
  },
  mounted () {
    this.stop()
  },
  methods: {
    stop () {
      this.isLoading = false
    },
    load () {
      this.isLoading = true
    }
  }
}
</script>

<style lang="scss" scoped>
  .position-loading {
    position: absolute;
    top: 50%;
    left: 50%;
    margin: 0 auto;
  }

  .loading--bg-white {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 200;
    background: rgb(255 255 255);
  }
</style>
