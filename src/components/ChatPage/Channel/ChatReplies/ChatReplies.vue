<template>
  <div class="replies">
    <div class="chat-detls flex flex-wrap ">
      replies
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatReplies",
};
</script>

<style scoped>
.replies {
  height: 100%;
  flex: 0 0 300px;
  background-color: rgb(102, 88, 88);
  color: white;
}
.chat-detls {
  height: 100%;
  width: 100%;
  display: block;
  float: none;
  flex: none;
}
</style>