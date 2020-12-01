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
    }
    .main-chat-view {
        width: 100%;
        flex: 0 100%;
    }
</style>