<template>
  <div class="chat">
    <div class="chat-content">
      <div class="chat-header">
          <Header :toggleChatDetails="toggleChatDetails"/>
      </div>
      <div class="chat-messages p-4">
        <div class="messages" id="messages" @scroll="messagesScroll">
          <div class="msgs px-2 py-3" v-if="Object.keys(currentChatMessages).length>0">
            <div class="loading-oldersms w-full flex justify-center items-center" v-if="!loadingOlderMessages.noMoreMessages && !loadingOlderMessages.loading && lodash.size(currentChatMessages)>=10 && messagesLoadingProcess.noMore!=true">
              <button class="btn-see-older-sms text-sm font-bold" @click="loadOlderMessages">See older messages</button>
            </div>
            <div class="loading-oldersms w-full flex justify-center items-center text-sm font-bold" v-if="loadingOlderMessages.loading">
              <div class="loader ease-linear rounded-full border-4 border-gray-200 h-6 w-6"></div>
            </div>
            <MessageItem 
              v-for="(message,index) in currentChatMessages"
              :toggleReplies="toggleReplies"
              :sameToPrevious="allMessagesToArray(currentChatMessages).indexOf(message)>0 && message.sender_info.email==allMessagesToArray(currentChatMessages)[allMessagesToArray(currentChatMessages).indexOf(message)-1].sender_info.email" 
              :message="message" :key="index"/>
          </div>
          <div v-else-if="messagesLoadingProcess.isLoadingMessages" class="nothing nothing w-full h-full flex text-center justify-center content-center items-center">
            <div class="loader ease-linear mt-4 rounded-full border-4 border-gray-200 h-6 w-6"></div>
          </div>
          <div
           class="nothing w-full h-full flex text-center justify-center content-center items-center"
           v-if="messagesLoadingProcess.gotMessages && Object.keys(currentChatMessages).length<1">
            <div class="text-lg font-bold text-gray-700">No Messages.</div>
          </div>
        </div>
      </div>
      <div :class="[chat_footer=='minimal'? 'chat-footer':'chat-footer-extended']">
          <Footer :changeFooter="changeFooter"/>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './Header'
import Footer from "./Footer"
import MessageItem from './MessageItem'
import { mapGetters, mapState, mapMutations } from "vuex";
import { component as CodeHighlight } from 'vue-code-highlight'
import { getOlderMessagesInChannel } from '../../../../lib/message'
import _ from "lodash"
export default {
  name: "Chat",
  components: {
      Header,
      Footer,
      MessageItem,
      CodeHighlight,
  },
  props: {
    toggleChatDetails: Function,
    toggleReplies: Function
  },
  data(){
    return {
      chat_footer: localStorage.getItem("editor_type") || "minimal",
      loadingOlderMessages: {
        loading: false,
        noMoreMessages: false
      },
      lodash: _
    }
  },
  computed: {
    ...mapState({
      messagesLoadingProcess: state=>state.chat.messagesLoadingProcess,
      currentChatMessages: state=> state.chat.currentChatMessages,
      currentChannel: state=> state.chat.currentChannel
    })
  },
  mounted(){
    this.loadingOlderMessages.noMoreMessages = false
    this.loadingOlderMessages.loading = false
  },
  methods: {
    ...mapGetters("all",["getToken", "getCurrentWorkspace"]),
    ...mapMutations("chat",["prependMessages"]),
    changeFooter(str_type){
      this.chat_footer = str_type
    },
    allMessagesToArray(messages){
      return _.toArray(messages)
    },
    messagesScroll(event){
      let messageList = event.target
      if(messageList.scrollTop===0){
        //when we reach top, get older messages
        this.loadOlderMessages()
      }
    },
    loadOlderMessages(){
      if(_.size(this.currentChatMessages)<10) return;
      let ALL_SMS_LENGTH = _.size(this.currentChatMessages);
      let LAST_SMS_ID = _.toArray(this.currentChatMessages)[0]._id
      if(this.loadingOlderMessages.noMoreMessages) return;
        this.loadingOlderMessages.loading = true
        getOlderMessagesInChannel(
          this.getToken(),
          this.getCurrentWorkspace()._id,
          this.currentChannel._id,
          {
            ALL_SMS_LENGTH: ALL_SMS_LENGTH,
            LAST_SMS_ID: LAST_SMS_ID
          }
        ).then(response=>{
          this.loadingOlderMessages.loading = false
          if(response.data.err){
            alert("ERROR: SOMETHING WENT WRONG!")
          }else{
            if(response.data.data.noMoreMessages || response.data.data.messages.length<1) this.loadingOlderMessages.noMoreMessages = true;
            console.log(response.data.data)
            this.prependMessages({
              access_id: this.currentChannel._id,
              messages: response.data.data.messages,
              type: "channel"
            })
          }
        }).catch(err=>{
          this.loadingOlderMessages.loading = false
          alert("ERROR: SOMETHING WENT WRONG!")
          console.log(err)
        })
    }
  },
  watch: {
    currentChannel: function(){
      this.loadingOlderMessages.noMoreMessages = false
      this.loadingOlderMessages.loading = false
    }
  }
};
</script>
<style scoped>
.chat {
  width: 100%;
  height: 100%;
  max-height: 100%;
  min-width: 300px;
  overflow: hidden;
  background-color: rgba(224, 224, 224, 0.01);
}
.chat-content {
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow-x: hidden;
    overflow: hidden;
    padding: 0% 1% !important;
}
.chat-header {
    min-height: 60px;
    max-height: 60px;
}
.chat-messages {
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
    padding: 0;
    /* background-color: rgb(179, 162, 162); */
}
.messages {
    height: 100%;
    max-height: 100%;
    overflow-y: auto;
    display: block;
}
.messages::-webkit-scrollbar {
  width: 6px;
}
.messages::-webkit-scrollbar-thumb {
  width: 6px;
  background-color: rgb(0, 0, 0,0.2);
  border-radius: 6px;
}
.chat-footer {
    min-height: 60px;
    max-height: 60px;
}
.chat-footer-extended {
    min-height: 120px;
    max-height: 120px;
}
.code-snippets.short code{
  height: 200px !important;
  max-height: 200px !important;
  overflow: hidden; 
  white-space: pre;
}
@media only screen and (max-width: 800px){
  .chat {
    min-width: auto;
  }
}
</style>