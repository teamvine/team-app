<template>
  <div class="replies" v-if="show">
    <div class="chat-replies pl-1 pb-2 flex flex-wrap">
      <div class="replies-card shadow-md rounded-sm bg-white mr-2">
        <div class="md:flex sm:flex lg:flex border border-t-0 border-l-0 border-r-0">
          <div class="w-auto py-3 pl-3 font-bold text-xl cursor-pointer" @click="toggleRightSidebar('','checkDetails')">
            &times;
            <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z"/></svg> -->
          </div>
          <div class="w-full md:w-full font-bold py-3 text-center text-lg font-custom">Replies</div>
        </div>
        <div class="replies p-3">
          <h2 class="text-bold">ChatReplies</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatReplies",
  props: {
    toggleRightSidebar: Function,
    show: Boolean
  }
};
</script>

<style scoped>
    .border {
      border-bottom: 1px solid rgb(0, 0, 0, 0.1);
    }
    .border-b {
      border-bottom: 1px solid rgb(0, 0, 0, 0.1) !important;
    }
    .replies {
        height: 100%;
        flex: 0 0 350px;
        overflow: auto;
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
</style>