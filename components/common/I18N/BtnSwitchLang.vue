<template>
  <div class="btn-switch-lang">
    <a
      v-for="locale in availableLocales"
      :key="locale.code"
      href="#"
      @click.prevent.stop="$i18n.setLocale(locale.code)"
    >
      {{ locale.name }}
    </a>
  </div>
</template>

<script>
export default {
  name: 'BtnSwitchLang',
  computed: {
    availableLocales () {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    }
  }
}
</script>
