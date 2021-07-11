<template>
  <div class="chat-box">
    <div class="card">
      <header class="card-header header-title">
        <v-row no-gutters>
          <v-col cols="10" class="header-title-col">
            <p class="card-header-title mb-0">
              {{ $t('CHAT_BOT.ROOM_CHAT') }}
            </p>
          </v-col>
          <v-col cols="2" class="header-title-col">
            <v-icon class="position-icon" dense color="white" @click="closeChat($event)" v-text="'mdi-minus'" />
          </v-col>
        </v-row>
      </header>

      <div id="chat-box-area">
        <div class="card-content chat-content">
          <div class="content pt-3">
            <div class="chat-message-group">
              <div class="chat-thumb">
                <figure class="image pl-2">
                  <img width="25" src="~/assets/img/chat/img-chat.jpeg">
                </figure>
              </div>
              <div class="chat-messages">
                <div class="message">
                  ลักษณะของสิ่งใด ๆ มีกำหนดระยะจากจุดหนึ่งถึงอีกจุดหนึ่งที่ขยายออกไปไม่ได้แล้ว เช่น ถนนยาว ๓๐ กิโลเมตร เชือกยาว ๒ เมตร, ลักษณะส่วนหนึ่งของสิ่งใด ๆ มีกำหนดระยะยืดหรือยืนเป็นเส้นตรงจากจุด
                </div>
                <div class="from">
                  28 Jul 2021  04:55
                </div>
              </div>
            </div>
            <div class="chat-message-group writer-user">
              <div class="chat-messages">
                <div class="message">
                  test!!
                </div>
                <div class="from">
                  28 Jul 2021  04:55
                </div>
              </div>
            </div>
            <div class="chat-message-group">
              <div class="chat-thumb">
                <figure class="image">
                  <img width="25" src="~/assets/img/chat/img-chat.jpeg">
                </figure>
              </div>
              <div class="chat-messages">
                <div class="message">
                  test1
                </div>
                <div class="message">
                  test2
                </div>
                <div class="from">
                  28 Jul 2021  04:55
                </div>
              </div>
            </div>

            <div class="chat-message-group">
              <div class="chat-thumb">
                <figure class="image pl-2">
                  <img width="25" src="~/assets/img/chat/img-chat.jpeg">
                </figure>
              </div>
              <div class="chat-messages">
                <div class="message">
                  <div class="spinner">
                    <div class="bounce1" />
                    <div class="bounce2" />
                    <div class="bounce3" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer id="chat-box-textbox" class="card-footer">
          <div style="width: 63%;">
            <textarea id="chatTextarea" class="chat-textarea" placeholder="Digite aqui" />
          </div>
          <div class="has-text-centered" style="width: 37%;">
            <a class="button is-white">
              <i class="fa fa-smile-o fa-5" aria-hidden="true" />
            </a>
            <a class="button is-white">send</a>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chat',
  methods: {
    closeChat (_e) {
      this.$emit('closeChat', false)
    }
  }
}
</script>

<style lang="scss" scoped>
.header-title-col {
  display: flex;
  align-content: center;
  flex-wrap: wrap;
  padding-left: 1rem !important;
  height: 2.5rem;
}

.chat-box {
  font-family: $font-kanit;
  font-size: 16px;
  position: fixed;
  bottom: 0;
  right: 0;
  width: 300px;
  margin: 40px;
  margin-bottom: 0;
}

.allUsersList {
  width: 300px;
  margin: 20px;
}

.allUsersList .card-header {
  background: #683db8;
  color: #fff;
  padding: 10px;
}

.chat-thumb img {
  border-radius: 40px;
}

.card-header-title img {
  border-radius: 40px;
}

.allUsersList .image img {
  border-radius: 16px;
}

.usersChatList {
  position: absolute;
  width: 250px;
  bottom: 0;
  margin-bottom: 0;
  right: 360px;
}

.show {
  display: block;
}

.thumb-user-list {
  display: none;
}

.thumb-user-list .image img {
  border-radius: 30px;
}

.usersChatList .card-header {
  background: #683db8;
  // font-size: 13px;
}

.chat-content {
  overflow: auto;
  height: 300px;
}

.chat-box .card {
  border-radius: 4px;
}

.chat-box .card-header {
  background: #683db8;
}

.card-header-title i {
  // font-size: 10px;
  color: #32e4cd;
  margin-right: 6px;
}

.card-header .card-header-title {
  color: #fff;
}

.chat-content small {
  margin: 0;
}

.chat-content p {
  background: #ecf1f8;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 0;
}

.my-content .message {
  float: right;
  background: #683db8;
  color: #fff;
  text-align: right;
  padding: 10px;
  margin-bottom: 4px;
  // font-size: 13px;
}

.my-content small {
  display: block;
  float: right;
  width: 100%;
  text-align: right;
}

.my-content .chat-content small {
  float: right;
}

.chat-textarea {
  // font-size: 14px;
  padding: 8px;
  height: 40px;
  width: 100%;
  border: none;
  overflow: auto;
  outline: none;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  resize: none;
}

.chat-message-group .chat-thumb {
  float: left;
  width: 18%;
}

.chat-message-group .chat-messages {
  float: left;
  width: 70%;
  margin-bottom: 20px;
  margin-right: 20px;
}

.chat-message-group .message {
  float: left;
  padding: 6px 7px;
  background: #ecf1f8;
  font-size: 15px;
  border-radius: 5px;
  margin-bottom: 3px;
}

.chat-messages .from {
  float: left;
  display: block;
  width: 100%;
  text-align: left;
  font-size: 11px;
}

.writer-user .chat-messages {
  float: right;
  width: 100%;
}

.writer-user .chat-messages .message {
  float: right;
  background: #683db8;
  color: #fff;
}

.writer-user .chat-messages .from {
  float: left;
  display: block;
  width: 100%;
  text-align: right;
}

.chat-message-group .typing {
  float: left;
}

.chat-box .card-header-icon i {
  color: #fff;
  font-size: 13px;
}

/* CSSS */
.outside-box {
  height: 100px;
  background: #f8c;
  width: 200px;
  margin: 20px;
  overflow: auto;
}

.outside-box .content-insider {
  height: 300px;
  background: #c9c;
}

/* CSS Spinner */
.spinner {
  margin: 0;
  width: 40px;
  text-align: center;
}

.spinner > div {
  width: 4px;
  height: 4px;
  background-color: #888;
  border-radius: 100%;
  display: inline-block;
  -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
  animation: sk-bouncedelay 1.4s infinite ease-in-out both;
}

.spinner .bounce1 {
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}

.spinner .bounce2 {
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}

@-webkit-keyframes sk-bouncedelay {
  0%,
  80%,
  100% { -webkit-transform: scale(0); }
  40% { -webkit-transform: scale(1); }
}

@keyframes sk-bouncedelay {
  0%,
  80%,
  100% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }

  40% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

/* EmojiBox */
.emojiBox {
  width: 150px;
  margin: 30px;
}

.emojiBox .box {
  height: 100px;
  padding: 4px;
}

</style>
