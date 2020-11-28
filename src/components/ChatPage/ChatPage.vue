<template>
  <div class="chat-view">
      <SideBar/>
      <div class="main-chat-view">
          <router-view/>
      </div>
  </div>
</template>

<script>
import SideBar from "./SideBar/SideBar"
export default {
    components: {
        SideBar
    },
    name: "ChatPage"
}
</script>

<style scoped>
    .chat-view {
        height: 100%;
        flex: 0 100%;
        display: flex;
        overflow-x: auto;
        overflow-y: auto;
        flex-direction: row;
        background: rgb(0, 27, 116);
    }
    .main-chat-view {
        width: 100%;
        flex: 0 100%;
        background: rgb(139, 193, 243);
        color: white;
    }
</style>