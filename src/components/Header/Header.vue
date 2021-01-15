<template>
  <header class="header-view flex">
    <div class="app-name p-3 cursor-pointer" @click="navigate({name: 'Start'})">
      <h3 class="font-bold">RCONNECT</h3>
    </div>
    <div class="organization py-1 bg-gray-0 flex flex-grow content-center justify-center">
      <h2 v-if="userAppFlow.switchedWorkspaces" class="m-auto bg-gray-200 cursor-pointer font-lg name px-3 py-2 text-blue-500 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="26" height="26" style="display: inline; margin-top: -3%" ><path fill="none" d="M0 0H24V24H0z"/><path d="M15 3c.552 0 1 .448 1 1v4c0 .552-.448 1-1 1h-2v2h4c.552 0 1 .448 1 1v3h2c.552 0 1 .448 1 1v4c0 .552-.448 1-1 1h-6c-.552 0-1-.448-1-1v-4c0-.552.448-1 1-1h2v-2H8v2h2c.552 0 1 .448 1 1v4c0 .552-.448 1-1 1H4c-.552 0-1-.448-1-1v-4c0-.552.448-1 1-1h2v-3c0-.552.448-1 1-1h4V9H9c-.552 0-1-.448-1-1V4c0-.552.448-1 1-1h6zM9 17H5v2h4v-2zm10 0h-4v2h4v-2zM14 5h-4v2h4V5z"/></svg>
        <span class="font-bold font-lg ml-1">{{currentWorkspace.name}}</span>
      </h2>
    </div>
    <div class="right-menu">
      <div class="notifications">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bell" class="w-8 h-8" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#8f8f8d" d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"></path></svg>
        <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M20 17h2v2H2v-2h2v-7a8 8 0 1 1 16 0v7zm-2 0v-7a6 6 0 1 0-12 0v7h12zm-9 4h6v2H9v-2z"/></svg> -->
        <span class="number">5</span>
      </div>
      <div class="user-menu">
        <div class="drp-dwn-toggler pl-2" @click="showDropDown = !showDropDown">
          <img src="../../assets/images/avatar3.png" alt="user-pic" />
          <!-- <span class="px-2 pr-3">Egide</span> -->
        </div>
        <div class="drop-down shadow-md" v-show="showDropDown">
          <div
            class="drop-content border origin-top-right absolute right-0 mt-2 w-full rounded-sm shadow-md bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <div class="flex flex-wrap overflow-hidden">
              <div class="px-6 mt-2 hover:bg-white d-block w-full pt-0">
                <div
                  class="font-bold text-md text-center border-0 d-block hover:bg-white tracking-wide w-full text-c2 mb-4"
                >
                  {{user.full_name||''}}
                </div>
                <div
                  @click="navigate({name: 'Start'})"
                  class="flex d-block item-hover cursor-pointer w-full px-4 py-2 font-bold text-md text-grey-darkest border-b-0"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      d="M19 20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9H0l10.327-9.388a1 1 0 0 1 1.346 0L22 11h-3v9zm-8-5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"
                    />
                  </svg>
                  <div class="pl-2 text-md font-bold">Go Home</div>
                </div>
                <div
                  class="flex item-hover d-block cursor-pointer px-4 py-2 text-md text-grey-darkest border-b-0"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      d="M14 21l-2 2-2-2H4.995A1.995 1.995 0 0 1 3 19.005V4.995C3 3.893 3.893 3 4.995 3h14.01C20.107 3 21 3.893 21 4.995v14.01A1.995 1.995 0 0 1 19.005 21H14zm-7.643-3h11.49a6.992 6.992 0 0 0-5.745-3 6.992 6.992 0 0 0-5.745 3zM12 13a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"
                    />
                  </svg>
                  <div class="pl-2 text-md font-bold">My Account</div>
                </div>
                <div
                  class="d-block item-hover flex cursor-pointer px-4 py-2 text-md text-grey-darkest"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      d="M20 18.667l.4.533a.5.5 0 0 1-.4.8H4a.5.5 0 0 1-.4-.8l.4-.533V10a8 8 0 1 1 16 0v8.667zM9.5 21h5a2.5 2.5 0 1 1-5 0z"
                    />
                  </svg>
                  <div class="pl-2 text-md font-bold">Notifications</div>
                </div>
                <div
                  v-if="userAppFlow.switchedWorkspaces"
                  @click="navigate({name: 'ChannelChat',params: {channel_code: currentWorkspaceJoinedChannels.find(channel=> channel.gen==true).channel_code}})"
                  class="d-block item-hover flex cursor-pointer px-4 py-2 text-md text-grey-darkest"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      d="M14.45 19L12 22.5 9.55 19H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-6.55z"
                    />
                  </svg>
                  <div class="pl-2 text-md font-bold">Messages</div>
                </div>
                <div
                  class="item-hover d-block flex cursor-pointer border-bottom px-4 py-2 text-md text-grey-darkest"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      d="M9.954 2.21a9.99 9.99 0 0 1 4.091-.002A3.993 3.993 0 0 0 16 5.07a3.993 3.993 0 0 0 3.457.261A9.99 9.99 0 0 1 21.5 8.876 3.993 3.993 0 0 0 20 12c0 1.264.586 2.391 1.502 3.124a10.043 10.043 0 0 1-2.046 3.543 3.993 3.993 0 0 0-3.456.261 3.993 3.993 0 0 0-1.954 2.86 9.99 9.99 0 0 1-4.091.004A3.993 3.993 0 0 0 8 18.927a3.993 3.993 0 0 0-3.457-.26A9.99 9.99 0 0 1 2.5 15.121 3.993 3.993 0 0 0 4 11.999a3.993 3.993 0 0 0-1.502-3.124 10.043 10.043 0 0 1 2.046-3.543A3.993 3.993 0 0 0 8 5.071a3.993 3.993 0 0 0 1.954-2.86zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                    />
                  </svg>
                  <div class="pl-2 text-md font-bold">Change Settings</div>
                </div>
                <div
                @click="onLogOut"
                @dblclick="onLogOut"
                  class="item-hover d-block flex font-bold cursor-pointer text-left px-2 py-0 text-md text-grey-darkest"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    class="ml-3"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      fill="orangered"
                      d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2a9.985 9.985 0 0 1 8 4h-2.71a8 8 0 1 0 .001 12h2.71A9.985 9.985 0 0 1 12 22zm7-6v-3h-8v-2h8V8l5 4-5 4z"
                    />
                  </svg>
                  <div class="pl-2 font-bold py-3">Sign Out</div>
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
      this.showDropDown = !this.showDropDown
      if(this.$route.name!=path.name){
        this.$router.push(path)
      }
    },
    onLogOut() {
      this.resetAllModuleState()
      this.resetChatModuleState()
      Functions.signOut(this,this.currentWorkspace._id,this.user._id)
    },
  }
};
</script>

<style scoped>
.d-block {
  display: block !important;
  flex: none;
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
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.39)
}
.app-name {
  padding: auto;
  font-weight: bold;
  width: auto;
  float: left;
  height: 100%;
  font-size: 120%;
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
  font-family: "LatoBold" !important;
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
  padding: 9% 4%;
  position: relative;
}
.organization .name svg{
  cursor: pointer;
  fill: #1e69eb;
  fill: linear-gradient(180deg, #2f74eb 0%, #83eaf1 74%);
}
.notifications svg {
  /* height: 1% !important; */
  width: 50% !important;
}
.notifications svg path  {
  cursor: pointer;
  fill:#1e69eb;
}
.organization .name {
  color: #1e69eb;
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
  margin-top: 1px;
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
  min-width: 300px;
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
  font-size: 18px;
  height: 100%;
  padding: 2% 0;
  width: 60%;
  font-weight: bold;
}
.drop-content div div:nth-child(1) svg {
  margin-right: 0px !important;
}
.drop-content div div:not(:nth-child(1)) svg {
  display: inline-block;
  margin-right: 2%;
  fill: #2f74eb;
  fill: linear-gradient(180deg, #2f74eb 0%, #83eaf1 74%);
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
    width: 100vw;
    right: -6.6%;
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