<template>
  <div class="message-item hover:bg-gray-100" :class="[sameToPrevious? 'mt-1':'mt-4']">
    <div class="flex msg-item-content">
      <img src="../../../../assets/images/avatar4.png" class="wh-40 img" v-if="!sameToPrevious"/>
      <span class="w-40" v-else>&emsp;</span>
      <div class="flex-1 px-3">
        <b class="px-1 txt user-name" v-if="!sameToPrevious">{{message.sender_info.full_name}}</b> <span v-if="!sameToPrevious" class="text-sm msg-date mt-2 px-2 text-sm">{{message.sent_at | formatDate}}</span>
        <span class="msg-body py-0 txt px-1">
          {{message.content}}
        </span>
      </div>
    </div>
    <div class="menu bg-white border flex px-3 py-1 rounded-lg">
      <span class="hover:bg-indigo-200 cursor-pointer rounded-md p-1 text-indigo-600" @click="toggleReplies(message)">
        <i class="ri-reply-line"></i>
      </span>
      <span class="hover:bg-indigo-200 cursor-pointer rounded-md p-1">
        <i class="ri-save-line"></i>
      </span>
      <span v-if="user.email==message.sender_info.email" class="hover:bg-indigo-200 cursor-pointer rounded-md p-1">
        <i class="ri-edit-line"></i>
      </span>
      <span v-if="user.email==message.sender_info.email" class="hover:bg-indigo-200 cursor-pointer rounded-md p-1 text-red-800">
        <i class="ri-delete-bin-6-line"></i>
      </span>
      <span class="hover:bg-indigo-200 cursor-pointer rounded-md p-1">
        <i class="ri-menu-2-line"></i>
      </span>
    </div>
  </div>
</template>

<script>
import {Filters} from '../../../../lib/functions'
import { mapState } from "vuex"
export default {
  name: "MessageItem",
  props: {
    message: {
      type: Object,
      required: true
    },
    sameToPrevious: Boolean,
    toggleReplies: Function
  },
  computed: {
    ...mapState({
      user: state=> state.all.user
    })
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
  position: relative;
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
.w-40 {
  width: 2.4em;
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

.menu {
  position: absolute;
  display: none;
  position: absolute;
  top: 0;
  right: 0;

}
.menu span {
  display: inline-block;
  width: 30px;
  height: 30px;
  text-align: center;
  font-weight: bolder;
}
.message-item:hover .menu {
  display: block;
}
</style>