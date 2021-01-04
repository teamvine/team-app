<template>
  <div class="message-item mt-4">
    <div class="flex msg-item-content" v-if="message.sender_id!=user._id">
      <img src="../../../../assets/images/avatar3.png" class="wh-40 img" />
      <div class="flex-1 px-3">
        <span class="text-gray-800 msg-body py-2 inter px-4">
         {{message.content}}
        </span>
        <span class="msg-date mt-2">10:05 AM</span>
      </div>
    </div>
    <div class="flex msg-item-content sent-msg" v-else>
      <div class="flex-1 px-3">
        <span class="msg-body py-2 inter px-4">
          <span class="inter">
            {{message.content}}
          </span>
        </span>
        <span class="msg-date mt-2">10:05 AM</span>
      </div>
      <img src="../../../../assets/images/avatar3.png" class="wh-40 img" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"
export default {
  name: "MessageItem",
  props: {
    message: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapState({
      user: state=> state.all.user
    })
  }
};
</script>

<style scoped>
.message-item {
  font-family: "Lato";
}
.msg-item-content {
  position: relative;
}
.inter {
  font-size: 14;
  font-family: "Lato";
}
.reply-name{
  font-size: 12;
}
.msg-body {
  font-size: 14px;
  background-color: rgb(238, 238, 238);
  display: inline-block;
  width: auto;
  max-width: 70%;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
}
.msg-date {
  width: 100%;
  display: block;
  font-size: 12px;
}
.wh-40 {
  width: 2.4em;
  height: 2.4em;
  border-radius: 50%;
  margin-top: auto;
}
.media-body {
  flex: 1;
}
.media-body,
.media-body :last-child {
  margin-bottom: 0;
}
.img {
  /* position: absolute; */
  background-color: rgb(0, 0, 0,0.1);
  bottom: 0;
}


.sent-msg {
  text-align: right;
}
.sent-msg div .msg-body {
  background-color: rgba(0, 90, 224, 0.863);
  color: white;
  display: inline-block;
  max-width: 70%;
  margin-left: auto;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
}
.sent-msg div .msg-body span {
  font-weight: normal;
  font-size: 14px;
  text-align: left;
  width: 100%;
  height: 100%;
  display: block;
}
</style>