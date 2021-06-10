<template>
  <div class="message-item hover:bg-gray-100" :class="[sameToPrevious? 'mt-1':'mt-4']">
    <div class="flex msg-item-content">
      <img 
      :src="
        user.email==message.sender_info.email && user.profile_pic.updated==true? user.profile_pic.url:
        message.sender_info.profile_pic.updated? message.sender_info.profile_pic.url:
        require('../../../../assets/images/avatar4.png')
      " 
      class="wh-40 img" v-if="!sameToPrevious"/>
      <span class="w-40" v-else>&emsp;</span>
      <div class="flex-1 px-3">
        <b class="px-1 txt user-name" v-if="!sameToPrevious">{{message.sender_info.display_name}}</b> <span v-if="!sameToPrevious" class="text-sm msg-date mt-2 px-2 text-sm">{{message.sent_at | formatDate}}</span>
        <span class="msg-body py-0 txt px-1" v-html="this.$options.filters.format_messageLinks(message.content)"></span>
        <div v-if="getAllLinksinText(message.content).length>0">
          <LinkMetaData 
            v-for="(web_url, index) in getAllLinksinText(message.content)"
            :webLink="web_url"
            :key="index"
          />
        </div>
        <label v-if="message.replies.length>0" @click="toggleReplies(message)" class="bg-gray-200 hover:bg-gray-400 rounded mt-3 text-sm cursor-pointer replies-num">
          <b>{{message.replies.length}}</b> repl{{message.replies.length>1? 'ies':'y'}}
        </label>
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
      <span v-if="user.email==message.sender_info.email" @click="deleteThisMessage" class="hover:bg-indigo-200 cursor-pointer rounded-md p-1 text-red-800">
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
import {deleteChannelMessage} from "../../../../lib/message"
import { mapState, mapGetters, mapMutations } from "vuex"
export default {
  name: "MessageItem",
  components: {
    LinkMetaData: ()=> import('../../shared/LinkMetaData')
  },
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
  methods: {
    ...mapGetters("chat", ["getCurrentChannel"]),
    ...mapMutations("chat", ["deleteMessage"]),
    ...mapGetters("all", ["getCurrentWorkspace","getToken"]),
    getAllLinksinText(text){
      return Filters.getAllLinksinText(text)
    },
    deleteThisMessage(){
      deleteChannelMessage(this.getToken(),this.getCurrentWorkspace()._id,this.getCurrentChannel()._id,this.message._id)
      .then(res=>{
        if(res.data.err){
          alert(res.data.message)
        }else{
          this.deleteMessage({
            access_id: this.getCurrentChannel()._id,
            chat_type: "channel",
            message_id: this.message._id
          })
        }
      })
      .catch(err=>{
        alert("ERROR: "+err.message)
        console.log(err);
      })
    }
  },
  filters: {
    formatDate: (value)=>{
      return Filters.formatTimestamp_v2(value)
    },
    format_messageLinks: (value)=>{
      return Filters.formatMessageLinks(value)
    }
  }
};
</script>

<style scoped>
.replies-num {
  padding: 2px 10px;
  color: rgb(0, 81, 255);
  font-weight: bold;
  font-family: "Lato" !important;
}
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
  word-wrap: break-word;
  word-break: break-all;
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
  background-color: rgb(0, 0, 0,0.03);
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

/*Message formating*/
.msg-body>>>a {
  color: rgb(0, 81, 255) !important;
  font-size: 16px;
}
.msg-body>>>a:hover {
  text-decoration: underline;
}
</style>