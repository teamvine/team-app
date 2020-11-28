<template>
  <div class="personal-chat-view">
      <div class="main-personal-chat">
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
    name: "PersonalChatPage",
    components: {
        Chat,ChatDetails,ChatReplies
    }
}
</script>

<style scoped>
    .personal-chat-view {
        height: 100%;
        flex: 0 0 100%;
        /* background: rgb(52, 124, 146); */
        color: white;
    }
    .main-personal-chat {
        width: 100% !important;
        height: 100% !important;
        overflow-y: auto;
        overflow-x: auto;
        display: flex;
        flex-direction: row;
        background-color: rgb(211, 175, 175);
    }
</style>