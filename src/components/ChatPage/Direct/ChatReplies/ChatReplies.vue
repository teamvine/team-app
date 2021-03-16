<template>
  <div class="replies" v-if="show">
    <div class="chat-replies flex flex-wrap">
      <div class="replies-card shadow-md rounded-sm bg-white">
        <div class="md:flex sm:flex lg:flex border border-t-0 border-l-0 border-r-0">
          <div class="w-auto py-3 pl-3 font-bold text-xl cursor-pointer" @click="toggleRightSidebar('')">
            &times;
          </div>
          <div class="w-full md:w-full font-bold py-3 text-center text-lg font-custom">Replies</div>
        </div>
        <div class="replies-container pt-3 px-2">
          <div>
            <div class="reply pb-4 border-b mb-2">
                <img :src="
                  getUser()._id==currentThread.message.sender_id && getUser().profile_pic.updated==true? getUser().profile_pic.url:
                  currentDirectChatReceiver.profile_pic.updated==true? currentDirectChatReceiver.profile_pic.url:
                  require('../../../../assets/images/avatar4.png')
                " 
                class="h-8 w-8 rounded-md inline-block" alt="">
                <span class="font-semibold ml-2 name text-sm">{{currentThread.message.sender_info.display_name}}</span>
                <span class="sent-date ml-4 text-sm">{{currentThread.message.sent_at | formatDate}}</span>
                <p class="text-left px-4 pt-1 reply__content" v-html="this.$options.filters.format_messageLinks(currentThread.message.content)"></p>
                <div v-if="getAllLinksinText(currentThread.message.content).length>0">
                  <LinkMetaData 
                    v-for="(web_url, index) in getAllLinksinText(currentThread.message.content)"
                    :webLink="web_url"
                    :key="index"
                  />
                </div>
                <label v-if="currentThread.message.replies.length>0" class="bg-gray-200 ml-4 mt-3 hover:bg-gray-400 rounded mt-3 text-sm cursor-pointer replies-num">
                  <b>{{currentThread.message.replies.length}}</b> repl{{currentThread.message.replies.length>1? 'ies':'y'}}
                </label>
            </div>
          </div>
          <div class="replies__list" v-for="message in currentThread.message.replies" :key="message._id">
            <reply :message="message" />
          </div>
          <div class="send-your-reply bg-white border-t py-2 pb-4">
            <div class="border p-3 rounded">
              <div class="flex">
                <div class="w-3/4">
                  <input class="block w-full" type="text" 
                  :placeholder="'Reply to @'+currentThread.message.sender_info.display_name" 
                  v-model="newReply" @keyup.enter="sendReply">
                </div>
                <div class="w-1/4 px-0 text-right">
                <button class="btn" @click="sendReply"> 
                  <svg class="inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M3.741 1.408l18.462 10.154a.5.5 0 0 1 0 .876L3.741 22.592A.5.5 0 0 1 3 22.154V1.846a.5.5 0 0 1 .741-.438zM5 13v6.617L18.85 12 5 4.383V11h5v2H5z"/></svg></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Reply from './Reply.vue';
import {Filters} from '../../../../lib/functions'
import { mapGetters, mapState } from "vuex"
import {sendDirectReply} from "../../../../lib/message"
import {event} from "../../../../config/constants"
export default {
  name: "ChatReplies",
  components: { 
    Reply,
    LinkMetaData: ()=> import('../../shared/LinkMetaData')
  },
  props: {
    toggleRightSidebar: Function,
    show: Boolean
  },
    data(){
      return {
        newReply: "",
        attachments: {
          attached: false,
          files: []
        }
      }
    },
    computed: {
      ...mapState({
        currentThread: state=> state.chat.currentThread,
        currentDirectChatReceiver: state=> state.chat.currentDirectChatReceiver
      })
    },
    methods:{
      ...mapGetters("all",["getToken","getUser"]),
      getAllLinksinText(text){
        return Filters.getAllLinksinText(text)
      },
      sendReply(){
        if(this.newReply.trim()=="" || this.newReply=="") return;
        let cont = this.newReply.toString()
        this.newReply=""
        let receiver = this.currentThread.message.receiver_id.toString()==this.getUser()._id.toString()? this.currentThread.message.sender_id:this.currentThread.message.receiver_id;
        sendDirectReply(this.getToken(),{
          message_id: this.currentThread.message._id,
          sender_id: this.getUser()._id,
          receiver_id: receiver,
          workspace_id: this.currentThread.message.workspace_id,
          content: cont,
          attachments: this.attachments,
          sent_at: Date()
        }).then(res=>{
          if(res.data.success==false){
            alert(res.data.message)
          }else{
            this.$socket.client.emit(event.REPLY_PERSONAL_MESSAGE, res.data.data.reply);
            this.newReply=""
            this.attachments = {
              attached: false,
              files: []
            }
          }
        }).catch(err=>{
          alert(err.message)
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
.border {
  border-bottom: 1px solid rgb(0, 0, 0, 0.1);
}
.replies-num {
  padding: 2px 10px;
  color: rgb(0, 81, 255);
  font-weight: bold;
  font-family: "Lato" !important;
}
.reply .name {
    font-family: Arial, Helvetica, sans-serif;
}
.border-b {
  border-bottom: 1px solid rgb(0, 0, 0, 0.1) !important;
}

.replies {
  height: 100%;
  flex: 0 0 350px;
  overflow: auto;
}

/* .replies__list {
  border-left: 2px solid rgb(255, 125, 4);
} */
.replies-container::-webkit-scrollbar,.replies::-webkit-scrollbar {
  width: 6px;
}

.replies-container::-webkit-scrollbar-thumb,.replies::-webkit-scrollbar-thumb {
  background-color: rgb(212, 212, 212);
}

.chat-replies {
  height: 100%;
  width: 100%;
  display: block;
  float: none;
  flex: none;
  padding-left: 2px;
}

.replies-card {
  height: 100%;
  box-shadow: 0 0 4px rgb(0.3, 0.3, 0.3, 0.3);
  background-color: #fff;
  display: flex;
  flex-flow: column;
}
.replies-container {
  overflow-y: auto;
  height: 100%;
}
.btn:focus{
  outline: none;
}
.reply__content {
  word-wrap: break-word
}
.send-your-reply {
  position:-webkit-sticky;
  position: sticky;
  bottom: 0;
}
 /*Message formating*/
.reply__content>>>a {
  color: rgb(0, 81, 255) !important;
  font-size: 16px;
}
.reply__content>>>a:hover {
  text-decoration: underline;
}
</style>