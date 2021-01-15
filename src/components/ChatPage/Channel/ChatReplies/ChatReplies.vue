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
          <div class="replies" v-for="message in messages" :key="message">
            <reply :message="message" />
          </div>
          <div class="send-your-reply border-t py-2">
          <div class="border p-3 rounded">
            <div class="flex">
              <div class="w-3/4">
                <input class="block w-full" type="text" placeholder="write your reply" v-model="myReply" @keyup.enter="sendReply">
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
export default {
  components: { Reply },
  name: "ChatReplies",
  props: {
    toggleRightSidebar: Function,
    show: Boolean
  },
    data(){
      return {
        myReply:'',
        messages:[
          {
            sender_info:{
              email:"sandberg-smith2@gmail.com",
              full_name:"Sandberg Smith"
            },
            content:"Lorem ipsum dollar si amet consacteur il ahahhahv aatgagghahk jahbsaajhamjh",
            time:'6:00 am'
          },
          
          {
            sender_info:{
              email:"sandberg-smith2@gmail.com",
              full_name:"Sandberg Smith"
            },
            content:"Lorem ipsum dollar si amet consacteur il ahahhahv aatgagghahk jahbsaajhamjh",
            time:'6:00 am'
          },
          {
            sender_info:{
              email:"sandberg-smith2@gmail.com",
              full_name:"Sandberg Smith"
            },
            content:"Lorem ipsum dollar si amet consacteur il ahahhahv aatgagghahk jahbsaajhamjh",
            time:'6:00 am'
          }
        ]
      }
    },
    methods:{
      sendReply(){
        window.alert("sending your reply...")
      }
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
.btn:focus{
  outline: none;
}
</style>