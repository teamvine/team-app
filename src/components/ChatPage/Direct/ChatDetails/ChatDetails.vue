<template>
  <div class="details" v-if="show">
    <div class="chat-detls flex flex-wrap">
      <div class="user-card shadow-md rounded-sm bg-white mr-1">
        <div class="md:flex sm:flex lg:flex border border-t-0 border-l-0 border-r-0">
          <div class="w-auto py-3 pl-3 font-bold text-xl cursor-pointer" @click="toggleRightSidebar">
            &times;
          </div>
          <div class="w-full md:w-full font-bold py-3 text-center font-custom">Chat Details</div>
        </div>
        <div class="user-picture rounded-t-md">
          <img
            src="../../../../assets/images/avatar4.png"
            class="opacity-80"
            :alt="currentDirectChatReceiver.full_name"
          />
        </div>
        <div class="mt-8 w-full h-full pb-3">
            <div class="mt-4 text-center pt-3 who-is-chating">
                <h1 class="font-bold font-custom">{{currentDirectChatReceiver.full_name}}</h1>
                <!-- <span class="text-gray-800 text-sm persons-role font-bold">Ui/Ux &amp; backend developer</span> -->
            </div>
            <hr class="mt-5 mb-2"/>
            <div class="more-info mt-3">
              <div class="phone">
                <p class="border-bottom p-3 py-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="svg-icon text-black" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm17 4.238l-7.928 7.1L4 7.216V19h16V7.238zM4.511 5l7.55 6.662L19.502 5H4.511z"/></svg>
                  <span class="ml-3 text-gray-900">{{currentDirectChatReceiver.email}}</span>
                </p>
              </div>
              <div class="phone">
                <p class="border-bottom p-3 py-1">
                  <svg class="svg-icon address text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path d="M18.364 17.364L12 23.728l-6.364-6.364a9 9 0 1 1 12.728 0zM12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/></svg>
                  <span class="ml-3 text-gray-900 persons-address">Live in Rwanda</span>
                </p>
              </div>
            </div>
            <hr class="m-3" />
            <div class="recent-atachments px-4">
              <div class="flex justify-between mb-3">
                <div :class="(this.fileToShow == 'media' ? 'active ':'') + ' files hover:bg-blue-100 p-3 '">
                  <button @click="changeFileToShow('media')" class="text-sm font-bold">Photos &amp; media</button>                    
                </div>
                <div :class="(this.fileToShow == 'docs' ? 'active ':'') + 'files hover:bg-blue-100 p-3'">
                  <button @click="changeFileToShow('docs')" class="text-sm font-bold"> Documents</button>
                </div>
              </div>
              <div class="real-files">
                  <SharedDocs v-if="this.fileToShow == 'docs'" />
                  <SharedImages v-if="this.fileToShow == 'media'" />
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex"
export default {
  name: "ChatDetails",
  props: {
    toggleRightSidebar: Function,
    show: Boolean
  },
  components:{
    SharedDocs: ()=> import("./files/SharedDocs"),
    SharedImages: ()=> import("./files/SharedImages")
  },
  data() {
    return {
      fileToShow: "docs"
    };
  },
  computed: {
    ...mapState({
      currentDirectChatReceiver: state=> state.chat.currentDirectChatReceiver
    })
  },
  methods: {
      /*
       @param {String} fileType 
      */
    changeFileToShow(fileType){
      this.fileToShow = fileType
    }
  }
};
</script>

<style scoped>
.details {
  height: 100%;
  flex: 0 0 350px;
  overflow-y: auto;
  scrollbar-width: 7px !important;
  scrollbar-color: rgb(212, 212, 212) !important;
}
.details::-webkit-scrollbar {
  width: 6px;
}
.details::-webkit-scrollbar-thumb {
  background-color: rgb(212, 212, 212);
}

.chat-detls {
  height: 100%;
  width: 100%;
  display: block;
  float: none;
  flex: none;
}
.user-card {
  margin-top: 0px;
  min-height: 100%;
  background-color: #fff;
  box-shadow: 0 0 4px rgb(0.3, 0.3, 0.3, 0.3);
  margin-left: 2px;
}
.user-picture {
  flex: none;
  display: block;
  height: 15vh;
  width: 100%;
  overflow: visible;
  position: relative;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  text-align: center;
}
.user-picture img {
  width: 100px;
  height: 100px;
  position: absolute;
  border-radius: 50%;
  top: 35%;
  border: 3px solid white;
  background-color: rgb(0, 0, 0,0.1);
}
.files.active{
  border:none;
  border-bottom: 2px solid rgba(66, 153, 225,1);
}
button{
  outline: none !important;
}
.persons-role,.persons-address{  
  display: inline-block;
  max-width: 80%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.svg-icon.address{
  margin-top: -15px;
}
.font-custom {
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
}

@media only screen and (max-width: 800px){
  .details {
    flex: 0 0 100%;
  }
  .user-card {
    margin-right: 1%;
  }
}
</style>