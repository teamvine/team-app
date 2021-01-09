<template>
  <div class="message-item mt-4">
    <div class="flex msg-item-content">
      <img src="../../../../assets/images/avatar4.png" class="wh-40 img" />
      <div class="flex-1 px-3">
        <b class="px-1 txt user-name">{{message.sender_info.full_name}}</b> <span class="text-sm msg-date mt-2 px-2 text-sm">{{message.sent_at | formatDate}}</span>
        <span class="msg-body py-0 txt px-1">
         {{message.content}}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import {Filters} from '../../../../lib/functions'
export default {
  name: "MessageItem",
  props: {
    message: {
      type: Object,
      required: true
    }
  },
  filters: {
    formatDate: (value)=>{
      return Filters.formatTimestamp_v2(value)
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
.user-name {
  font-family: Arial, Helvetica, sans-serif !important;
  font-weight: bold !important;
}
.msg-body {
  font-size: 16px;
  display: block;
  width: auto;
  max-width: 90%;
  font-family: "Lato";
}
.msg-date {
  width: 100%;
  /* display: block; */
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