<template>
  <div class="replies" v-if="show">
    <div class="chat-replies pl-1 pb-2 flex flex-wrap">
      <div class="replies-card shadow-md rounded-sm bg-white mr-2">
        <div class="md:flex sm:flex lg:flex border border-t-0 border-l-0 border-r-0">
          <div class="w-auto py-3 pl-3 font-bold text-xl cursor-pointer" @click="toggleRightSidebar('','checkDetails')">
            &times;
          </div>
          <div class="w-full md:w-full font-bold py-3 text-center text-lg font-custom">Replies</div>
        </div>
        <div class="replies p-3">
          <div>
            <div class="reply pb-4">
                <img src="../../../../assets/images/avatar4.png" class="h-8 w-8 rounded-full inline-block" alt="">
                <span class="font-semibold ml-2 text-sm name">{{currentThread.message.sender_info.display_name}}</span>
                <span class="sent-date ml-4 text-sm">{{currentThread.message.sent_at | formatDate}}</span>
                <p class="font-medium text-left px-4 reply__content">
                    {{currentThread.message.content}}
                </p>
                <label v-if="currentThread.message.replies.length>0" class="bg-gray-200 ml-4 mt-3 hover:bg-gray-400 rounded mt-3 text-sm cursor-pointer replies-num">
                  <b>{{currentThread.message.replies.length}}</b> repl{{currentThread.message.replies.length>1? 'ies':'y'}}
                </label>
            </div>
          </div>
          <div class="replies replies__list" v-for="message in currentThread.message.replies" :key="message._id">
            <reply :message="message" />
          </div>
          <div class="send-your-reply border-t py-2">
            <div class="border p-3 rounded">
              <div class="flex">
                <div class="w-3/4">
                  <input class="block w-full" type="text" :placeholder="'Reply to @'+currentThread.message.sender_info.display_name" v-model="newReply" @keyup.enter="sendReply">
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
import { mapGetters, mapState } from "vuex"
import {Filters} from '../../../../lib/functions'
import {sendChannelReply} from "../../../../lib/message"
import {event} from "../../../../config/constants"
export default {
  components: { Reply },
  name: "ChatReplies",
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
        currentThread: state=> state.chat.currentThread
      })
    },
    methods:{
      ...mapGetters("all",["getToken","getUser"]),
      sendReply(){
        if(this.newReply.trim()=="" || this.newReply=="") return;
        let cont = this.newReply.toString()
        this.newReply=""
        sendChannelReply(this.getToken(),{
          message_id: this.currentThread.message._id,
          sender_id: this.getUser()._id,
          channel_id: this.currentThread.message.channel_id,
          content: cont,
          attachments: this.attachments,
          sent_at: Date()
        }).then(res=>{
          if(res.data.success==false){
            alert(res.data.message)
          }else{
            let reply = res.data.data.reply
            reply.workspace_id = this.currentThread.message.workspace_id
            this.$socket.client.emit(event.REPLY_MESSAGE, reply);
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

.replies__list {
  border-left: 2px solid rgb(255, 125, 4);
}
.replies::-webkit-scrollbar {
  width: 6px;
}

.replies::-webkit-scrollbar-thumb {
  background-color: rgb(212, 212, 212);
}

.chat-replies {
  height: 100%;
  width: 100%;
  display: block;
  float: none;
  flex: none;
}

.replies-card {
  margin-top: 10px;
  min-height: 100%;
  /* border-radius: 5px; */
  /* border: 1px solid rgb(0, 0, 0, 0.18); */
  box-shadow: 0 0 4px rgb(0.3, 0.3, 0.3, 0.3);
  background-color: #fff;
}
.btn:focus{
  outline: none;
}
.reply__content {
  word-wrap: break-word
}
</style>