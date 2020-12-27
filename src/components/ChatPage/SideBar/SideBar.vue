<template>
  <div class="side-bar-view">
    <div class="sidebar-content relative">
      <div class="upper-part p-4 relative">
        <div class="relative">
          <div class="flex flex-wrap items-stretch w-full mb-4 relative">
            <input
              type="search"
              :disabled="false"
              name="searchtext"
              id="searchtext"
              placeholder="Search messages..."
              class="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border h-10 border-grey-light rounded rounded-r-none px-3 relative"
            />
            <div class="flex -mr-px">
              <button
                class="srchtextbtn flex items-center leading-normal rounded rounded-l-none border border-l-0 border-grey-light px-3 whitespace-no-wrap bg-white text-sm hover:bg-gray-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    d="M11 2c4.968 0 9 4.032 9 9s-4.032 9-9 9-9-4.032-9-9 4.032-9 9-9zm0 16c3.867 0 7-3.133 7-7 0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7zm8.485.071l2.829 2.828-1.415 1.415-2.828-2.829 1.414-1.414z"
                    fill="rgba(50,152,219,1)"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="chat-list">
        <div class="chat-list-upper pb-3">
          <div class="w-full p-2">
            <button 
              class="btn btn btn-item mr-3 sort-by font-bold" 
              :class="[display_cont=='personal'? 'active':'']"
              @click="switchChatType('personal')"
              @dblclick="switchChatType('personal')"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path fill="none" d="M0 0h24v24H0z"/><path d="M20 22H4v-2a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v2zm-8-9a6 6 0 1 1 0-12 6 6 0 0 1 0 12z"/></svg>
              Private
            </button>
            <button 
              class="btn btn btn-item mr-3 sort-by font-bold" 
              :class="[display_cont=='channel'? 'active':'']"
              @click="switchChatType('channel')"
              @dblclick="switchChatType('channel')"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path fill="none" d="M0 0h24v24H0z"/><path d="M2 22a8 8 0 1 1 16 0H2zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm7.363 2.233A7.505 7.505 0 0 1 22.983 22H20c0-2.61-1-4.986-2.637-6.767zm-2.023-2.276A7.98 7.98 0 0 0 18 7a7.964 7.964 0 0 0-1.015-3.903A5 5 0 0 1 21 8a4.999 4.999 0 0 1-5.66 4.957z"/></svg>
              Channel
            </button>
          </div>
          <div class="flex flex-wrap w-full mt-2 relative py-1 pl-8 pr-8">
            <div>
              <span class="srt-by-txt"> Sort by </span>
            </div>
            <div class="more-options">
              <span class="more-icon">
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      d="M12 3c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 14c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-7c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
                      fill="#2f74eb"
                    />
                  </svg>
                </button>
              </span>
            </div>
          </div>
        </div>
        <div class="my-contacts">
          <div v-if="display_cont=='personal'" class="contacts-list">
            <Person v-for="contact in contacts" :contact="contact" :key="contact._id"/>
          </div>
          <div v-if="display_cont=='channel'" class="contacts-list">
            <Channel v-for="channel in channels" :channel="channel" :key="channel._id"/>
          </div>
        </div>
      </div>
      <div v-if="display_cont=='personal'" class="new-btn">
          <button @click="newContact">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path fill="white" d="M14 14.252v2.09A6 6 0 0 0 6 22l-2-.001a8 8 0 0 1 10-7.748zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm6 6v-3h2v3h3v2h-3v3h-2v-3h-3v-2h3z"/></svg>
          </button>
        </div>
        <div v-if="display_cont=='channel'" class="new-btn">
          <button class="" @click="newChannel">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path fill="white" d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"/></svg>
          </button>
        </div>
    </div>
    <vue-modal name="newChannel" draggable=".drag-handler" :reset="true" :adaptive="true">
      <nav class="flex drag-handler border-b items-center justify-between flex-wrap bg-teal p-6 py-2">
        <div class="flex items-center flex-no-shrink text-black mr-6">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="35" height="35"><path fill="none" d="M0 0h24v24H0z"/><path d="M2 8.994A5.99 5.99 0 0 1 8 3h8c3.313 0 6 2.695 6 5.994V21H8c-3.313 0-6-2.695-6-5.994V8.994zM20 19V8.994A4.004 4.004 0 0 0 16 5H8a3.99 3.99 0 0 0-4 3.994v6.012A4.004 4.004 0 0 0 8 19h12zm-6-8h2v2h-2v-2zm-6 0h2v2H8v-2z"/></svg>
          <span class="text-2xl tracking-tight ml-3 font-bold">Add New Channel</span>
        </div>
        <div class="block">
          <button @click="$modal.hide('newChannel')" title="cancel" class="flex ring-0 bg-red-600 text-white items-center px-3 py-1 font-bold border rounded text-teal-lighter border-teal-ligh hover:text-white hover:border-white">
            Cancel
          </button>
        </div>
      </nav>
      <new-channel></new-channel>
    </vue-modal>
    <vue-modal name="newContact" draggable=".drag-handler" :reset="true" :classes="[]" :adaptive="true">
      <nav class="flex drag-handler border-b items-center justify-between flex-wrap bg-teal p-6 py-2">
        <div class="flex items-center flex-no-shrink text-black mr-6">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28"><path fill="none" d="M0 0h24v24H0z"/><path d="M19 7h5v2h-5V7zm-2 5h7v2h-7v-2zm3 5h4v2h-4v-2zM2 22a8 8 0 1 1 16 0h-2a6 6 0 1 0-12 0H2zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"/></svg>
          <span class="text-2xl tracking-tight ml-3 font-bold">Add New Contact</span>
        </div>
        <div class="block">
          <button @click="$modal.hide('newContact')" title="cancel" class="flex bg-red-600 text-white items-center px-3 py-1 font-bold border rounded text-teal-lighter border-teal-ligh hover:text-white hover:border-white">
            Cancel
          </button>
        </div>
      </nav>
      <new-contact></new-contact>
    </vue-modal>
  </div>
</template>

<script>
const { contacts, channels } = require('../../../testdb/db')
export default {
  name: "SideBar",
  components: {
    Person: ()=> import("./Person"),
    Channel: ()=> import("./Channel"),
    NewChannel: ()=> import("./NewChannel"),
    NewContact: ()=> import("./NewContact")
  },
  data() {
    return {
      display_cont: this.$route.name=="ChannelChat"? "channel":"personal",
      contacts: contacts,
      channels: channels
    };
  },
  methods: {
    /**
     * switching between personal and channel chat types
     * @param {String} chat_type chat type-personal or channel
     */
    switchChatType(chat_type){
      this.display_cont = chat_type
    },
    newContact(){
      this.$modal.hideAll()
      this.$modal.show("newContact")
    },
    newChannel(){
      this.$modal.hideAll()
      this.$modal.show("newChannel")
    }
  }
};
</script>

<style scoped>
.side-bar-view {
  min-height: 100%;
  max-height: 100%;
  flex: 0 0 320px;
  overflow: hidden;
  /* border-right: 1px solid rgb(0, 0, 0, 0.1); */
  -moz-box-shadow: 0px 1px 2px 3px rgb(231, 231, 231);
  -webkit-box-shadow: 0px 1px 2px 3px rgb (231, 231, 231);
  box-shadow: 0px 1px 2px 3px rgb(231, 231, 231);
  background: #ffffff
}
.sidebar-content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: #fff;
}
.upper-part {
  overflow: hidden;
}
.chat-list {
  height: 100%;
  overflow-y: auto;
  scrollbar-width: 7px;
  scrollbar-color: rgb(212, 212, 212);
  position: relative;
  background-color: #fff;
}
.chat-list-upper {
  /* background: #f0f6fc; */
  background-color: #fff;
  border-top: 1px solid rgb(116, 116, 116,0.1);
  border-bottom: 1px solid rgb(116, 116, 116,0.1);
}
.chat-list-upper .w-full .btn-item {
  width: 43%;
  /* background-color: #4a82e209; */
  padding: 6px 15px;
  transition-duration: 0.5s;
  color:  #1464ec;
  border: 1px solid #1464ec;
  /* border-radius: 3px; */
  /* background-color: rgb(0, 0, 0,0.2); */
}
.chat-list-upper .w-full .btn-item:nth-child(1){
  margin-left: 3%;
}
.chat-list-upper .w-full .btn-item:nth-child(2){
  margin-right: 3%;
}
.chat-list-upper .w-full .btn-item.active {
  background-color: #2f74eb;
  color: white;
}
.chat-list-upper .w-full .btn-item svg {
  display: inline-block;
  fill:  #2f74eb;
}
.chat-list-upper .w-full .btn-item.active svg {
  fill: white;
}
.chat-list-upper .w-full .btn-item:hover {
  background-color: #4a82e24d;
}
.chat-list-upper .w-full .btn-item.active:hover {
  background-color: #2f74eb;
  color: white;
}
.srt-by-txt {
  color: #2f74eb;
  font-size: 14px;
}
.more-icon button svg {
  background: #cde4ff;
  padding: 3px;
  border-radius: 50%;
}
.my-contacts {
  background-color: white;
  color: black;
  position: relative;
}
.new-btn {
  position: absolute;
  bottom: 2%;
  right: 10%;
  width: auto;
  height: auto;
  z-index: 1;
  color: white;
}
.new-btn button {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color:rgba(30, 97, 243, 0.993);
  /* box-shadow: 0 0 2px black; */
}
.new-btn button:hover {
  background-color:rgba(0, 81, 255, 0.993);
}
.new-btn  button svg {
  margin: auto;
  font-weight: bold;
}
input {
  color: rgb(46, 44, 44) !important;
}
button {
  outline: none !important;
}
.more-options {
  position: absolute;
  right: 20px !important;
}
.chat-list::-webkit-scrollbar {
  width: 6px;
}
.chat-list::-webkit-scrollbar-thumb {
  background-color: rgb(212, 212, 212);
}
</style>
