<template>
  <div class="message-item mt-3">
    <div class="flex msg-item-content" v-if="message.sender_id!=user._id">
      <img alt="" :src="currentDirectChatReceiver.profile_pic.updated? currentDirectChatReceiver.profile_pic.url:require('../../../../assets/images/avatar4.png')" class="wh-40 img" v-if="!sameToNext"/>
      <span class="w-40" v-else>&emsp;</span>
      <div class="flex-1 px-3">
        <span class="msg-body py-2 px-4">
         {{message.content}}
         <br v-if="message.replies.length>0">
          <label @click="toggleReplies(message)" class="d-inline bg-indigo-200 hover:bg-indigo-400 text-black cursor-pointer replies-num rounded text-sm" v-if="message.replies.length>0">
            <b>{{message.replies.length}}</b>repl{{message.replies.length>1? 'ies':'y'}}
          </label>
        </span>
        <span class="msg-date mt-2 text-gray-700">{{message.sent_at | formatDate}}</span>
      </div>
    </div>
    <div class="flex msg-item-content sent-msg" v-else>
      <div class="flex-1 px-3">
        <span class="msg-body py-2 px-4">
          <span class="inter">
            {{message.content}}
            <br v-if="message.replies.length>0">
            <label @click="toggleReplies(message)" class="d-inline bg-gray-100 hover:bg-gray-300 text-black cursor-pointer replies-num rounded text-sm" v-if="message.replies.length>0">
              <b>{{message.replies.length}}</b>repl{{message.replies.length>1? 'ies':'y'}}
            </label>
          </span>
        </span>
        <span class="msg-date mt-2 text-gray-700">{{message.sent_at | formatDate}}</span>
      </div>
      <img alt="" :src="user.profile_pic.updated? user.profile_pic.url:require('../../../../assets/images/avatar4.png')" class="wh-40 img" v-if="!sameToNext"/>
      <span class="w-40" v-else></span>
    </div>
    <div class="menu bg-white border flex px-3 py-1 rounded-lg"
    :class="[message.sender_id!==user._id? 'right':'left']">
      <span class="hover:bg-indigo-200 cursor-pointer rounded-md p-1 text-indigo-600" @click="toggleReplies(message)">
        <i class="ri-reply-line"></i>
      </span>
      <span class="hover:bg-indigo-200 cursor-pointer rounded-md p-1">
        <i class="ri-save-line"></i>
      </span>
      <span v-if="user.email===message.sender_info.email" class="hover:bg-indigo-200 cursor-pointer rounded-md p-1">
        <i class="ri-edit-line"></i>
      </span>
      <span v-if="user.email===message.sender_info.email" @click="deleteThisMessage" class="hover:bg-indigo-200 cursor-pointer rounded-md p-1 text-red-800">
        <i class="ri-delete-bin-6-line"></i>
      </span>
      <span class="hover:bg-indigo-200 cursor-pointer rounded-md p-1">
        <i class="ri-menu-2-line"></i>
      </span>
    </div>
  </div>
</template>

<script>
  import { mapState,mapMutations,mapGetters } from "vuex"
import {deleteDirectMessage} from "../../../../lib/message"
import {Filters} from '../../../../lib/functions'
export default {
  name: "MessageItem",
  props: {
    message: {
      type: Object,
      required: true
    },
    sameToNext: Boolean,
    toggleReplies: Function
  },
  computed: {
    ...mapState({
      user: state=> state.all.user,
      currentDirectChatReceiver: state=> state.chat.currentDirectChatReceiver
    })
  },
  mounted(){
    console.log(this.currentDirectChatReceiver);
  },
  methods: {
    ...mapMutations("chat", ["deleteMessage"]),
    ...mapGetters("all", ["getToken","getCurrentWorkspace"]),
    deleteThisMessage(){
      deleteDirectMessage(this.getToken(),this.getCurrentWorkspace()._id,this.message.sender_id,this.message.receiver_id,this.message._id)
      .then(res=>{
        if(res.data.err){
          alert(res.data.message)
        }else{
          this.deleteMessage({
            access_id: this.message.receiver_id,
            chat_type: "direct",
            message_id: this.message._id
          })
        }
      })
      .catch(err=>{
        alert("ERROR: "+err.message);
        console.log(err);
      })
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
.message-item {
  font-family: "Lato", sans-serif;
  position: relative;
  width: 100%;
}
.msg-item-content {
  position: relative;
}
.reply-name{
  font-size: 12px;
}
.msg-body {
  font-size: 16px;
  background-color: rgba(238, 238, 238, 0.733);
  display: inline-block;
  width: auto;
  max-width: 70%;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  font-family: "Lato",sans-serif;
  word-wrap: break-word
}
.msg-date {
  width: 100%;
  display: block;
  font-size: 12px;
  font-family: "LatoBold", sans-serif;
}
.wh-40 {
  width: 2.4em;
  height: 2.4em;
  border-radius: 50%;
  margin-top: auto;
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
  background-color: rgb(0, 0, 0,0.05);
  bottom: 0;
}


.sent-msg {
  text-align: right;
}
.sent-msg div .msg-body {
  background-color: rgba(10, 99, 233, 0.863);
  color: white;
  margin-left: auto;
  border-radius: 15px 15px 0 15px;
}
.sent-msg div .msg-body span {
  text-align: left;
  width: 100%;
  height: 100%;
  display: block;
}
.menu {
  position: absolute;
  display: none;
  top: 0;
}
.menu.left {
  left: 0
}
.menu.right {
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
.replies-num {
  padding: 3px 10px;
}
</style>