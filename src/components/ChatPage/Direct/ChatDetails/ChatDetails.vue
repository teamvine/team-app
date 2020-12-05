<template>
  <div class="details">
    <div class="chat-detls flex flex-wrap">
      <div class="user-card shadow-md bg-white ml-2 mr-2 rounded-md">
        <div class="user-picture rounded-t-md">
          <img
            src="../../../../assets/images/avatar1.jpg"
            class=""
            alt="bg image"
          />
        </div>
        <div class="mt-8 w-full h-full pb-3">
            <div class="mt-3 text-center who-is-chating">
                <h1 class="font-bold">Harerimana Egide</h1>
                <span class="text-gray-700">Ui/Ux &amp; backend developer</span>
            </div>
            <hr class="mt-5 mb-2"/>
            <div class="more-info mt-3">
              <div class="phone">
                <p class="border-bottom p-3">
                  <svg class="svg-icon text-gray-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path d="M21 16.42v3.536a1 1 0 0 1-.93.998c-.437.03-.794.046-1.07.046-8.837 0-16-7.163-16-16 0-.276.015-.633.046-1.07A1 1 0 0 1 4.044 3H7.58a.5.5 0 0 1 .498.45c.023.23.044.413.064.552A13.901 13.901 0 0 0 9.35 8.003c.095.2.033.439-.147.567l-2.158 1.542a13.047 13.047 0 0 0 6.844 6.844l1.54-2.154a.462.462 0 0 1 .573-.149 13.901 13.901 0 0 0 4 1.205c.139.02.322.042.55.064a.5.5 0 0 1 .449.498z"/></svg>
                  <span class="ml-3 text-gray-700">+250784341433</span>
                </p>
              </div>
              <div class="phone">
                <p class="border-bottom p-3 pt-1">
                  <svg class="svg-icon text-gray-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path d="M18.364 17.364L12 23.728l-6.364-6.364a9 9 0 1 1 12.728 0zM12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/></svg>
                  <span class="ml-3 text-gray-700 ">Gatenga - Kigali,Rwanda</span>
                </p>
              </div>
            </div>
            <hr class="m-3" />
            <div class="recent-atachments px-4">
              <div class="flex justify-between mb-3">
                <div :class="(this.fileToShow == 'media' ? 'active ':'') + ' files hover:bg-blue-100 p-3 '">
                  <button @click="changeFileToShow('media')">Photos &amp; media</button>                    
                </div>
                <div :class="(this.fileToShow == 'docs' ? 'active ':'') + 'files hover:bg-blue-100 p-3'">
                  <button @click="changeFileToShow('docs')"> Documents</button>
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
export default {
  name: "ChatDetails", 
  components:{
    SharedDocs: ()=> import("./files/SharedDocs"),
    SharedImages: ()=> import("./files/SharedImages")
  },
  data() {
    return {
      fileToShow: "docs"
    };
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
  flex: 0 0 320px;
  
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
  margin-top: 10px;
}
.user-picture {
  flex: none;
  display: block;
  height: 15vh;
  width: 100%;
  overflow: visible;
  background: #4a81e2;
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
</style>