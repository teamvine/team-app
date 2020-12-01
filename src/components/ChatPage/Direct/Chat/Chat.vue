<template>
  <div class="chat">
    <div class="chat-content">
      <div class="chat-header">
          <Header/>
      </div>
      <div class="chat-messages p-4">
          <div class="messages">
              <MessageItem v-for="(message,index) in sampleSMS" :key="index"/>
              
          </div>
      </div>
      <div class="chat-footer">
          <Footer/>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './Header'
import Footer from "./Footer"
import MessageItem from './MessageItem'
export default {
  name: "Chat",
  components: {
      Header,
      Footer,
      MessageItem
  },
  data(){
    return {
      sampleSMS: [
        {
          content: "Hello There mister!"
        },
        {
          content: "Hello There mister!"
        },
        {
          content: "Hello There mister!"
        },
        {
          content: "Hello There mister!"
        },
        {
          content: "Hello There mister!"
        },
        {
          content: "Hello There mister!"
        },
        {
          content: "Hello There mister!"
        },
        {
          content: "Hello There mister!"
        },
        {
          content: "Hello There mister!"
        }
      ] 
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
}
.chat-footer {
    min-height: 60px;
    max-height: 60px;
    /* background-color: rgb(186, 195, 247); */
}
</style>