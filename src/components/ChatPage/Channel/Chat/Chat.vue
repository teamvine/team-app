<template>
  <div class="chat">
    <div class="chat-content">
      <div class="chat-header">
          <Header/>
      </div>
      <div class="chat-messages p-4">
        <div class="messages" id="messages">
          <div v-if="messagesLoadingProcess.isLoadingMessages" class="nothing nothing w-full h-full flex text-center justify-center content-center items-center">
              <span class="mt-4 font-bold text-lg absolute">Loading...</span>
          </div>
          <div class="msgs px-2 py-3" v-if="messagesLoadingProcess.gotMessages && Object.keys(currentChatMessages).length>0">
            <MessageItem 
              v-for="(message,index) in currentChatMessages" 
              :sameToPrevious="allMessagesToArray(currentChatMessages).indexOf(message)>0 && message.sender_info.email==allMessagesToArray(currentChatMessages)[allMessagesToArray(currentChatMessages).indexOf(message)-1].sender_info.email" 
              :message="message" :key="index"/>
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
import {mapState} from "vuex"
import { component as CodeHighlight } from 'vue-code-highlight'
import _ from "lodash"
export default {
  name: "Chat",
  components: {
      Header,
      Footer,
      MessageItem,
      CodeHighlight,
  },
  data(){
    return {
      chat_footer: localStorage.getItem("editor_type") || "minimal"
    }
  },
  computed: {
    ...mapState({
      messagesLoadingProcess: state=>state.chat.messagesLoadingProcess,
      currentChatMessages: state=> state.chat.currentChatMessages
    })
  },
  mounted(){
    // console.log(this.currentChatMessages)
  },
  methods: {
    changeFooter(str_type){
      this.chat_footer = str_type
    },
    allMessagesToArray(messages){
      return _.toArray(messages)
    }
  }
};
</script>
<style scoped>
.chat {
  width: 100%;
  height: 100%;
  max-height: 100%;
  min-width: 400px;
  overflow: hidden;
  background-color: rgba(224, 224, 224, 0.01);
  /* color: white; */
}
.chat-content {
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow-x: hidden;
    overflow: hidden;
    padding: 0% 1% !important;
    /* background: rgb(230, 230, 230); */
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
</style>