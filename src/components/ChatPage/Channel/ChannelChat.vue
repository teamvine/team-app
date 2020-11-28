<template>
  <div class="channel-chat-view">
      <div class="main-channel-chat">
            <Chat/>
            <ChatDetails/>
      </div>
  </div>
</template>

<script>
import Chat from "./Chat/Chat"
import ChatDetails from "./ChatDetails/ChatDetails"
import ChatReplies from "./ChatReplies/ChatReplies"
export default {
    name: "ChannelChatPage",
    components: {
        Chat,ChatDetails,ChatReplies
    }
}
</script>

<style scoped>
    .channel-chat-view {
        height: 100%;
        flex: 0 0 100%;
        /* background: rgb(107, 201, 230); */
        color: white;
    }
    .main-channel-chat {
        width: 100% !important;
        height: 100% !important;
        overflow-y: auto;
        overflow-x: auto;
        display: flex;
        flex-direction: row;
        background-color: rgb(211, 175, 175);
    }
</style>