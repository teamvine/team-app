<template>
  <div class="message-item mt-4">
    <div class="flex msg-item-content">
      <img :src="message.img" class="wh-40 img" />
      <div class="flex-1 px-3">
        <b class="px-1 txt">{{message.name}}</b>
        <span class="msg-body py-0 txt px-1">
         {{message.content}}
        </span>
        <span class="msg-date mt-2 px-2">10:05 AM</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MessageItem",
  props: {
    message: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.message-item,.txt,.msg-body  {
  font-family: "Lato",sans-serif !important;
}
.msg-item-content {
  position: relative;
}
.txt {
  font-size: 14px;
  font-family: "Lato";
}
.msg-body {
  font-size: 16px;
  display: inline-block;
  width: auto;
  max-width: 90%;
  font-family: "Lato";
}
.msg-date {
  width: 100%;
  display: block;
  font-size: 12px;
  font-family: "LatoBold";
}
.wh-40 {
  width: 2.4em;
  height: 2.4em;
  border-radius: 10px;
  margin-bottom: auto;
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
</style>