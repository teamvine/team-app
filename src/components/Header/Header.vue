<template>
  <header class="header-view flex">
    <div class="app-name p-3 cursor-pointer" @click="navigate({name: 'Start'})">
      <h3 class="font-bold">RCONNECT</h3>
    </div>
    <div class="organization py-1 bg-gray-0 flex flex-grow content-center justify-center">
      <h2 v-if="userAppFlow.switchedWorkspaces" class="m-auto bg-gray-200 cursor-pointer font-lg name px-3 py-2 text-blue-500 rounded-md">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="26" height="26" style="display: inline; margin-top: -3%" ><path fill="none" d="M0 0H24V24H0z"/><path class="fill-current text-gray-800" d="M15 3c.552 0 1 .448 1 1v4c0 .552-.448 1-1 1h-2v2h4c.552 0 1 .448 1 1v3h2c.552 0 1 .448 1 1v4c0 .552-.448 1-1 1h-6c-.552 0-1-.448-1-1v-4c0-.552.448-1 1-1h2v-2H8v2h2c.552 0 1 .448 1 1v4c0 .552-.448 1-1 1H4c-.552 0-1-.448-1-1v-4c0-.552.448-1 1-1h2v-3c0-.552.448-1 1-1h4V9H9c-.552 0-1-.448-1-1V4c0-.552.448-1 1-1h6zM9 17H5v2h4v-2zm10 0h-4v2h4v-2zM14 5h-4v2h4V5z"/></svg>
        <span class="font-bold font-lg ml-1 text-gray-800">{{currentWorkspace.name}}</span>
      </h2>
    </div>
    <div class="right-menu">
      <div class="notifications mt-1">
        <img src="../../assets/svgs/bell2.svg" alt="notifications" class="h-8">
        <span class="number">5</span>
      </div>
      <div class="user-menu">
        <div class="drp-dwn-toggler pl-2" @click.stop="showDropDown = !showDropDown">
          <img src="../../assets/images/avatar4.png" alt="user-pic"/>
        </div>
        <div class="drop-down shadow-md" v-show="showDropDown" v-click-outside="outsideClick">
          <div
            class="drop-content border origin-top-right absolute right-0 mt-2 w-full rounded-sm shadow-md bg-white ring-1 ring-black ring-opacity-5"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu">
            <div class="">
              <div class="px-6 mt-2 hover:bg-white d-block w-full pt-0">
                <div class="font-bold text-lg text-center border-0 d-block hover:bg-white tracking-wide w-full text-c2 mb-4">
                  {{user.full_name||''}}
                </div>
              <div class="block space-y-2 text-md w-full pr-0 lst">
                        <p @click="navigate({name: 'StartPage'})" class="space-x-3 text-gray-900 w-full p-1 rounded-md hover:bg-indigo-100 focus:bg-indigo-100 d-block">
                          <img src="../../assets/svgs/home.svg" alt="back to home" class="svg">
                          <span class="font-bold h-5 ">Home</span>
                        </p>
                        <p @click="navigate({name: 'MyAccount'})" to="/settings/account" :class="[$route.name=='MyAccount'? 'bg-indigo-100':'']" class="space-x-3 text-gray-900 w-full p-1 rounded-md hover:bg-indigo-100 focus:bg-indigo-100 d-block">
                          <img src="../../assets/svgs/profile.svg" alt="my account" class="svg">
                          <span class="font-bold h-5 ">My Account</span>
                        </p>
                        <p :class="[$route.name=='NotificationSettings'? 'bg-indigo-100':'']" class="space-x-3 text-gray-900 w-full p-1 rounded-md hover:bg-indigo-100 focus:bg-indigo-100 d-block">
                         <img src="../../assets/svgs/bell2.svg" alt="notifications" class="svg medium">
                          <span class="font-bold">Notifications</span>
                        </p>
                        <p @click="navigate({name: 'ChannelChat',params: {channel_code: currentWorkspaceJoinedChannels.find(channel=> channel.gen==true).channel_code}})" v-if="userAppFlow.switchedWorkspaces" class="space-x-3 text-gray-900 w-full p-1 rounded-md hover:bg-indigo-100 focus:bg-indigo-100 d-block">
                          <img src="../../assets/svgs/chat.svg" alt="messages" class="svg">
                          <span class="font-bold">Messages</span>
                        </p>
                        <p @click="navigate({name: 'ProfileSettings'})" class="space-x-3 text-gray-900 w-full p-1 rounded-md hover:bg-indigo-100 focus:bg-indigo-100 d-block">
                          <img src="../../assets/svgs/settings.svg" alt="settings" class="svg">
                          <span class="font-bold">Settings</span>
                        </p>
                        <p @click="onLogOut" @dblclick="onLogOut" class="space-x-3 text-gray-900 w-full p-1 rounded-md hover:bg-indigo-100 focus:bg-indigo-100 d-block">
                          <img src="../../assets/svgs/logout.svg" alt="logout" class="svg">
                          <span class="font-bold">Logout</span>
                        </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapState,mapActions } from "vuex"
import { Functions } from "../../lib/functions"
export default {
  name: "Header",
  data() {
    return {
      showDropDown: false,
      pageName: this.$route.name
    }
  },
  computed: {
    ...mapState({
      user: state=> state.all.user,
      userAppFlow: state=> state.all.userAppFlow,
      currentWorkspace: state=> state.all.currentWorkspace,
      currentWorkspaceJoinedChannels: state=> state.all.currentWorkspaceJoinedChannels
    })
  },
  methods: {
    ...mapActions("all",["resetAllModuleState"]),
    ...mapActions("chat",["resetChatModuleState"]),
    navigate(path){
      this.showDropDown = false
      if(this.$route.name!=path.name){
        this.$router.push(path)
      }
    },
    onLogOut() {
      this.resetAllModuleState()
      this.resetChatModuleState()
      Functions.signOut(this,this.currentWorkspace._id,this.user._id)
    },
    outsideClick: function () {
      this.showDropDown = false
    }
  }
};
</script>

<style scoped>
.svg {
  display: inline-block;
  width: 23px !important;
  margin-left: 2%;
} 
.svg.medium {
  width: 30px !important;
  margin-left: 1%;
}
.lst,.d-block {
  display: block !important;
  flex: none;
  width: 100%;
}
.lst p {
  position: relative
}
.item-hover:hover {
  background-color: rgb(241, 245, 252);
  border-left: 4px solid orange !important;
}
.header-view {
  width: 100%;
  flex: 0 50px;
  max-height: 50px;
  min-height: 50px;
  background-color: #ffffff;
  z-index: 10;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2)
}
.app-name {
  padding: auto;
  font-weight: bold;
  width: auto;
  float: left;
  height: 100%;
  font-size: 120%;
}
.app-name h3 {
  font-family: Arial, Helvetica, sans-serif;
}
.organization {
  padding: auto;
  font-weight: bold;
  width: auto;
  float: left;
  height: 100%;
  font-size: 100%;
}
.organization .name {
  margin-top: 0.1%;
  margin-bottom: 0.1%;
}
.item-hover div,.organization .name span {
  font-weight: bold !important;
  font-family: Arial, Helvetica, sans-serif !important;
}
.item-hover div {
  /* font-family: "LatoBold" !important; */
  font-weight: 600 !important;
}
.right-menu {
  float: right;
  height: 100%;
  padding: 0;
  margin-top: -0.2%;
}
.right-menu * {
  display: inline-block;
  width: auto;
}
.notifications {
  display: inline-block;
  width: 60px;
  padding: 8% 4%;
  position: relative;
}
.organization .name svg{
  cursor: pointer;
  fill: #000000;
}
.notifications svg {
  /* height: 1% !important; */
  width: 50% !important;
}
.notifications svg path  {
  cursor: pointer;
}
.organization .name {
  color: #000000;
}
.notifications span {
  color: white;
  width: 18px;
  cursor: pointer;
  height: 18px;
  font-size: 12px;
  padding: auto;
  border-radius: 50%;
  text-align: center;
  justify-content: center;
  align-content: center;
  background-color: rgb(207, 20, 135);
  position: absolute;
}
.user-menu {
  margin-right: 30px;
  position: relative;
  height: 100%;
  height: auto;
  width: auto;
  border-radius: 30px;
}
.user-menu .drp-dwn-toggler {
  cursor: pointer;
  display: inline-block !important;
}
.drp-dwn-toggler img {
  width: 36px;
  height: 36px;
  margin: 2px;
  border-radius: 50%;
  background-color: rgb(0, 0, 0,0.08);
}
.user-menu .drp-dwn-toggler span {
  font-weight: bold;
}
.drop-down {
  display: block;
  position: absolute;
  right: 0px;
  top: 35px;
  width: auto;
  word-break: unset;
  word-wrap: unset;
  min-width: 300px;
  z-index: 1;
}
.drop-content {
  min-width: 310px;
  border-radius: 5px;
}
.drop-content * {
  display: block;
  cursor: pointer;
}
.drop-content div div:nth-child(1) {
  padding: 4% 0%;
  padding-left: 3%;
}
.drop-content div div:nth-child(1) * {
  display: inline-block;
  margin-right: 2%;
}
.drop-content div div:nth-child(1) span {
  height: 100%;
  padding: 2% 0;
  width: 60%;
  font-weight: bold;
}
.user-pic {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
img.user-pic:hover {
  all: unset;
  width: 50px !important;
  height: 42px;
}
@media only screen and (max-width: 600px) {
  .drop-down,.drop-content {
    position: fixed;
    width: 96vw;
    right: 2vw;
    left: 2vw;
    top: 42px
  }
}
@media only screen and (max-width: 433px) {
  .organization .name span {
    display: none;
  }
}

@media only screen and (max-width: 329px) {
  .notifications {
    display: none;
  }
  .drp-dwn-toggler img {
    margin-top: 15%;
  }
}
</style>