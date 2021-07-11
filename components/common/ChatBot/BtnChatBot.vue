<template>
  <div class="chatbot">
    <v-tooltip left>
      <template #activator="{ on, attrs }">
        <v-btn
          fab
          fixed
          medium
          bottom
          right
          color="primary"
          class="chat-btn"
          v-bind="attrs"
          link
          target="_blank"
          @click="openChat()"
          v-on="on"
        >
          <v-icon class="position-icon" x-large color="white" v-text="'mdi-chat-processing-outline'" />
        </v-btn>
      </template>
      <span>{{ $t('CHAT_BOT.CHAT_HELLO') }}</span>
    </v-tooltip>
  </div>
</template>

<script>
export default {
  name: 'BtnChatBot',
  methods: {
    openChat (_e) {
      this.$emit('openChat', true)
    }
  }
}
</script>
