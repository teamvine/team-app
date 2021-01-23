<template>
  <div class="side-bar-view">
    <div class="sidebar-view">
        <div class="my-auto">       
          <div class="text-center icon-div icon-dash">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M0 0h24v24H0z"/><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/></svg>
          </div>
          <div class="text-center icon-div icon-msg active">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M0 0h24v24H0z"/><path d="M6.455 19L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455zM8 10v2h8v-2H8z"/></svg>
          </div>
          <div class="text-center icon-div icon-team">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M0 0h24v24H0z"/><path d="M2 22a8 8 0 1 1 16 0H2zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm7.363 2.233A7.505 7.505 0 0 1 22.983 22H20c0-2.61-1-4.986-2.637-6.767zm-2.023-2.276A7.98 7.98 0 0 0 18 7a7.964 7.964 0 0 0-1.015-3.903A5 5 0 0 1 21 8a4.999 4.999 0 0 1-5.66 4.957z"/></svg>
          </div>
          <div class="text-center icon-div icon-files">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M0 0h24v24H0z"/><path d="M21 15h-7v7H3.998C3.447 22 3 21.545 3 21.008V2.992C3 2.444 3.445 2 3.993 2h16.014A1 1 0 0 1 21 3.007V15zm0 2l-5 4.997V17h5z"/></svg>
          </div>
          <div class="text-center icon-div icon-apps">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M0 0h24v24H0z"/><path d="M6.75 2.5A4.25 4.25 0 0 1 11 6.75V11H6.75a4.25 4.25 0 1 1 0-8.5zm0 10.5H11v4.25A4.25 4.25 0 1 1 6.75 13zm10.5-10.5a4.25 4.25 0 1 1 0 8.5H13V6.75a4.25 4.25 0 0 1 4.25-4.25zM13 13h4.25A4.25 4.25 0 1 1 13 17.25V13z"/></svg>
          </div>
          <div class="text-center icon-div icon-setting">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M0 0h24v24H0z"/><path d="M2.132 13.63a9.942 9.942 0 0 1 0-3.26c1.102.026 2.092-.502 2.477-1.431.385-.93.058-2.004-.74-2.763a9.942 9.942 0 0 1 2.306-2.307c.76.798 1.834 1.125 2.764.74.93-.385 1.457-1.376 1.43-2.477a9.942 9.942 0 0 1 3.262 0c-.027 1.102.501 2.092 1.43 2.477.93.385 2.004.058 2.763-.74a9.942 9.942 0 0 1 2.307 2.306c-.798.76-1.125 1.834-.74 2.764.385.93 1.376 1.457 2.477 1.43a9.942 9.942 0 0 1 0 3.262c-1.102-.027-2.092.501-2.477 1.43-.385.93-.058 2.004.74 2.763a9.942 9.942 0 0 1-2.306 2.307c-.76-.798-1.834-1.125-2.764-.74-.93.385-1.457 1.376-1.43 2.477a9.942 9.942 0 0 1-3.262 0c.027-1.102-.501-2.092-1.43-2.477-.93-.385-2.004-.058-2.763.74a9.942 9.942 0 0 1-2.307-2.306c.798-.76 1.125-1.834.74-2.764-.385-.93-1.376-1.457-2.477-1.43zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/></svg>
          </div>
        </div>
    </div>
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
              <span class="srt-by-txt font-bold"> Sort by </span>
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
            <div class="no-contacts w-full h-full flex flex-wrap justify-center content-center" v-if="userDirectChatReceivers.length<1">
              <div class="mt-20 w-full flex flex-wrap justify-center content-center">
                <p class="d-block w-full text-center flex flex-wrap justify-center content-center">
                  <span class="font-bold text-gray-800 bg-gray-200 py-16 w-3/4 rounded-md" style="font-family: 'LatoBold'">NO CONTACTS</span>
                </p>
                <!-- <button class="py-1 px-4 rounded mt-4 add-new-cntct" @click="newContact">Add New</button> -->
              </div>
            </div>
            <Person v-for="contact in userDirectChatReceivers" :contact="contact" :isCurrent="isCurrentDirectReceiver" :switchDirectChat="onUserClick" :key="contact._id"/>
          </div>
          <div v-if="display_cont=='channel'" class="contacts-list">
            <Channel v-for="channel in currentWorkspaceJoinedChannels" :channel="channel" :isCurrent="isCurrentChannel" :switchChannel="onChannelClick" :key="channel._id"/>
          </div>
        </div>
      </div>
      <div v-if="display_cont=='personal'" class="new-btn">
          <button @click="newContact">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path fill="white" d="M14 14.252v2.09A6 6 0 0 0 6 22l-2-.001a8 8 0 0 1 10-7.748zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm6 6v-3h2v3h3v2h-3v3h-2v-3h-3v-2h3z"/></svg>
          </button>
        </div>
        <div v-if="display_cont=='channel'" class="new-btn">
          <button class="" @click="browseChannel">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path fill="white" d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"/></svg>
          </button>
        </div>
    </div>
    <vue-modal style="z-index: 2500" class="py-6 col-lg-9" name="browseChannel" :scrollable="true" draggable=".drag-handler" height="auto" :reset="true" :adaptive="true">
      <nav class="flex drag-handler border-b items-center justify-between flex-wrap bg-teal p-6 py-2">
        <div class="flex items-center flex-no-shrink text-black mr-6">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="35" height="35"><path fill="none" d="M0 0h24v24H0z"/><path d="M2 8.994A5.99 5.99 0 0 1 8 3h8c3.313 0 6 2.695 6 5.994V21H8c-3.313 0-6-2.695-6-5.994V8.994zM20 19V8.994A4.004 4.004 0 0 0 16 5H8a3.99 3.99 0 0 0-4 3.994v6.012A4.004 4.004 0 0 0 8 19h12zm-6-8h2v2h-2v-2zm-6 0h2v2H8v-2z"/></svg>
          <span class="text-2xl tracking-tight ml-3 font-bold">Browse Channels</span>
        </div>
        <div class="block">
          <button @click="$modal.hide('browseChannel')" title="cancel" class="flex text-2xl ring-0 border-none items-center px-3 py-1 font-bold hover:text-gray-500">
           &times;
          </button>
        </div>
      </nav>
      <BrowseChannel  :onChannelClick="onChannelClick"/>
    </vue-modal>
    <vue-modal style="z-index: 2500" class="py-2" name="newContact" :scrollable="true" height="auto" draggable=".drag-handler" :reset="true" :classes="[]" :adaptive="true">
      <nav class="flex drag-handler items-center justify-between flex-wrap p-3 py-2">
        <div class="flex items-center flex-no-shrink text-black mr-6">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28"><path fill="none" d="M0 0h24v24H0z"/><path d="M19 7h5v2h-5V7zm-2 5h7v2h-7v-2zm3 5h4v2h-4v-2zM2 22a8 8 0 1 1 16 0h-2a6 6 0 1 0-12 0H2zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"/></svg>
          <span class="text-2xl tracking-tight ml-3 font-bold">Browse contacts</span>
        </div>
        <div class="block">
          <button @click="$modal.hide('newContact')" title="cancel" class="flex items-center px-3 py-1 font-bold hover:text-red-700">
           &#x2715;
          </button>
        </div>
      </nav>
      <new-contact :closeAllModals="closeAllModals"></new-contact>
    </vue-modal>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'
export default {
  name: "SideBar",
  components: {
    Person: ()=> import("./Person"),
    Channel: ()=> import("./Channel"),
    BrowseChannel: ()=> import("./BrowseChannel"),
    NewContact: ()=> import("./NewContact")
  },
  data() {
    return {
      display_cont: this.$route.name=="ChannelChat"? "channel":"personal"
    };
  },
  computed: {
    ...mapState({
      currentChatType: state=> state.chat.currentChatType,
      currentChannel: state=> state.chat.currentChannel,
      currentDirectChatReceiver: state=> state.chat.currentDirectChatReceiver,
      userDirectChatReceivers: state=> state.all.userDirectChatReceivers,
      currentWorkspaceJoinedChannels: state=> state.all.currentWorkspaceJoinedChannels
    })
  },
  methods: {
    ...mapMutations("chat",["setCurrentChannel","setCurrentChatType","setCurrentDirectChatReceiver"]),
    ...mapActions("chat",["changeAndSetUpRoom","resetCurrentThread"]),
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
    closeAllModals(){
      this.$modal.hideAll()
    },
    browseChannel(){
      this.$modal.hideAll()
      this.$modal.show("browseChannel")
    },
    isCurrentChannel(channel){
      return this.currentChannel._id == channel._id && this.currentChatType === "channel"
    },
    isCurrentDirectReceiver(user){
      return this.currentDirectChatReceiver._id == user._id && this.currentChatType === "direct"
    },
    onChannelClick(channel){
      if (this.isCurrentChannel(channel)) return;
      this.resetCurrentThread()
      this.setCurrentChannel(channel)
      this.setCurrentChatType("channel")
      this.changeAndSetUpRoom()
      this.$modal.hide("browseChannel")
      this.$router.push({
        name: "ChannelChat",
        params: { channel_code: channel.channel_code }
      });
    },
    onUserClick(user){
      if (this.isCurrentDirectReceiver(user)) return;
      this.resetCurrentThread()
      this.setCurrentDirectChatReceiver(user)
      this.setCurrentChatType("direct")
      this.changeAndSetUpRoom()
      this.$router.push({
        name: "PersonalChat",
        params: {contact_id: user._id }
      });
    }
  }
};
</script>

<style scoped>
.side-bar-view {
  min-height: 100%;
  max-height: 100%;
  flex: 0 0 370px;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  -moz-box-shadow: 0px 1px 2px 3px rgb(231, 231, 231);
  -webkit-box-shadow: 0px 1px 2px 3px rgb(231, 231, 231);
  box-shadow: 0px 1px 2px 3px rgb(231, 231, 231);
  background: #ffffff
}

/* ====================SIDEBAR NAV=============== */
.my-auto{
  position: absolute;
  margin-top: auto 0;
  width: 100%;
}
.sidebar-view {
  height: 100%;
  flex: 0 0 50px;
  color:black;
  position: relative;        
  justify-content: center;
  align-items: center;
  display: flex;
  border-right:1px solid rgb(219, 219, 219);
  justify-content: center;
  align-content: center;
  text-align: center;
}
.icon-div{
  width: 100%;
  padding: 18% 0;
  margin-bottom: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
}
.icon-div.active {
  border: 1px solid rgb(219, 219, 219);
  border-left: 5px solid  #1a65e6;
  border-right: 0px;
}
.icon-div svg path:nth-child(1){
    fill: none;
}
.icon-div svg path:nth-child(2){
    fill: rgba(52,72,94,1);
}
.icon-div.active svg path:nth-child(2){
    fill:  #2f74eb;
}
.icon-div:hover {
  border: 1px solid rgb(219, 219, 219);
  border-left: 5px solid   #1a65e6;
  cursor: pointer;
  border-right: 0px;
  margin-bottom: 28px;
}
.icon-div.active:hover {
  margin-bottom: 30px;
}
.icon-div:hover svg path:nth-child(1){
    fill: none;
}
.icon-div:hover svg path:nth-child(2){
    fill: rgba(52,72,94,1);
}
.icon-div:hover svg path:nth-child(2){
    fill:  #2f74eb;
}

/* =====================CHAT SIDEBAR CONTENT============== */
.sidebar-content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: #fff;
}
.add-new-cntct {
  border: 2px solid #1a65e6;
  color: #1a65e6;
  font-weight: bold;
}
.add-new-cntct:hover {
  border: 2px solid #0948b6;
  color: white;
  background:  #0948b6;
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
  background-color: #fff;
  border-top: 1px solid rgb(116, 116, 116,0.1);
  border-bottom: 1px solid rgb(116, 116, 116,0.1);
}
.chat-list-upper .w-full .btn-item {
  padding: 6px 15px;
  transition-duration: 0.5s;
  color:  #1464ec;
  border: 1px solid #1464ec;
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
