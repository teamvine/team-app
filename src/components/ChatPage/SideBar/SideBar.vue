<template>
  <div class="side-bar-view">
    <div class="sidebar-content">
      <div class="upper-part p-4">
        <div class="relative">
          <div class="flex flex-wrap items-stretch w-full mb-4 relative">
            <input
              type="text"
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
              class="btn btn btn-item mr-3 sort-by" 
              :class="[display_cont=='personal'? 'active':'']"
              @click="switchChatType('personal')"
              @dblclick="switchChatType('personal')"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M14 21l-2 2-2-2H4.995A1.995 1.995 0 0 1 3 19.005V4.995C3 3.893 3.893 3 4.995 3h14.01C20.107 3 21 3.893 21 4.995v14.01A1.995 1.995 0 0 1 19.005 21H14zm5-2V5H5v14h5.828L12 20.172 13.172 19H19zm-11.028-.82a9.983 9.983 0 0 1-1.751-.978A6.994 6.994 0 0 1 12.102 14c2.4 0 4.517 1.207 5.778 3.047a9.995 9.995 0 0 1-1.724 1.025A4.993 4.993 0 0 0 12.102 16c-1.715 0-3.23.864-4.13 2.18zM12 13a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7zm0-2a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/></svg>
              personal
            </button>
            <button 
              class="btn btn btn-item mr-3 sort-by" 
              :class="[display_cont=='channel'? 'active':'']"
              @click="switchChatType('channel')"
              @dblclick="switchChatType('channel')"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M9.55 11.5a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5zm.45 8.248V16.4c0-.488.144-.937.404-1.338a6.473 6.473 0 0 0-5.033 1.417A8.012 8.012 0 0 0 10 19.749zM4.453 14.66A8.462 8.462 0 0 1 9.5 13c1.043 0 2.043.188 2.967.532.878-.343 1.925-.532 3.033-.532 1.66 0 3.185.424 4.206 1.156a8 8 0 1 0-15.253.504zm14.426 1.426C18.486 15.553 17.171 15 15.5 15c-2.006 0-3.5.797-3.5 1.4V20a7.996 7.996 0 0 0 6.88-3.914zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm3.5-9.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/></svg>
              Channel
            </button>
          </div>
          <div class="flex flex-wrap w-full mt-2 relative py-1 pl-8 pr-8">
            <div>
              <span style="color: #2f74eb"> Sort by </span>
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
          <div v-if="display_cont=='personal'">
            <Person v-for="contact in contacts" :contact="contact" :key="contact._id"/>
          </div>
          <div v-if="display_cont=='channel'">
            <Channel v-for="channel in channels" :channel="channel" :key="channel._id"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const { contacts, channels } = require('../../../testdb/db')
export default {
  name: "SideBar",
  components: {
    Person: ()=> import("./Person"),
    Channel: ()=> import("./Channel")
  },
  data() {
    return {
      display_cont: "personal",
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
  /* border-right:1px solid rgb(236, 236, 236); */
  -moz-box-shadow: 0px 1px 3px 4px rgb(231, 231, 231);
  -webkit-box-shadow: 0px 1px 3px 4pxrgb (231, 231, 231);
  box-shadow: 0px 1px 3px 4px rgb(231, 231, 231);
}
.sidebar-content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.upper-part {
  overflow: hidden;
}
.chat-list {
  height: 100%;
  overflow-y: auto;
  scrollbar-width: 7px;
  scrollbar-color: rgb(212, 212, 212);
}
.chat-list-upper {
  background-color: rgb(0, 0, 0, 0.04);
}
.chat-list-upper .w-full .btn-item {
  width: 43%;
  background-color: #4a82e21c;
  border-radius: 3px;
  padding: 6px 15px;
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
.my-contacts {
  background-color: white;
  color: black;
  position: relative;
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
