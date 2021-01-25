<template>
  <div class="chat-head rounded-md lg:px-4 px-2 bg-white flex flex-wrap items-center lg:py-0">
    <div @click="toggleSideBar" class="flex sidebar-toggler pl-3 pr-0 justify-between items-center cursor-pointer">
      <svg xmlns="http://www.w3.org/2000/svg" class="mt-1" fill="rgb(0, 0, 0, 0.7)" viewBox="0 0 30 30" width="35" height="35"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm0 9V8l-4 4 4 4v-3h4v-2h-4z"/></svg>
    </div>
    <div class="flex-1 flex justify-between items-center channel-ic ml-3">
      <div class="channel-icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M2 22a8 8 0 1 1 16 0h-2a6 6 0 1 0-12 0H2zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm8.284 3.703A8.002 8.002 0 0 1 23 22h-2a6.001 6.001 0 0 0-3.537-5.473l.82-1.824zm-.688-11.29A5.5 5.5 0 0 1 21 8.5a5.499 5.499 0 0 1-5 5.478v-2.013a3.5 3.5 0 0 0 1.041-6.609l.555-1.943z"/></svg>
        <div class="names ml-1">
          <h6 class="p-0">#{{currentChannel.name}}</h6>
          <small class="font-bold">{{currentChannel.description}} jhsdkjshg sdjhgfsdjgf</small>
        </div>
      </div>
    </div>

    <label for="menu-toggle" class="pointer-cursor toggle-icon lg:hidden block"
      ><svg
        class="fill-current text-gray-900"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
      >
        <title>menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg
    ></label>
    <input class="hidden" type="checkbox" id="menu-toggle" />

    <div class="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
      <nav>
        <ul
          class="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0 pr-4"
        >
          <li class="btns">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="18"
                height="18"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  d="M21 16.42v3.536a1 1 0 0 1-.93.998c-.437.03-.794.046-1.07.046-8.837 0-16-7.163-16-16 0-.276.015-.633.046-1.07A1 1 0 0 1 4.044 3H7.58a.5.5 0 0 1 .498.45c.023.23.044.413.064.552A13.901 13.901 0 0 0 9.35 8.003c.095.2.033.439-.147.567l-2.158 1.542a13.047 13.047 0 0 0 6.844 6.844l1.54-2.154a.462.462 0 0 1 .573-.149 13.901 13.901 0 0 0 4 1.205c.139.02.322.042.55.064a.5.5 0 0 1 .449.498z"
                />
              </svg>
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  d="M16 4a1 1 0 0 1 1 1v4.2l5.213-3.65a.5.5 0 0 1 .787.41v12.08a.5.5 0 0 1-.787.41L17 14.8V19a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h14zm-1 2H3v12h12V6zM7.4 8.829a.4.4 0 0 1 .215.062l4.355 2.772a.4.4 0 0 1 0 .674L7.615 15.11A.4.4 0 0 1 7 14.77V9.23c0-.221.18-.4.4-.4zM21 8.84l-4 2.8v.718l4 2.8V8.84z"
                />
              </svg>
            </span>
            <span @click="toggleChatDetails">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="18"
                height="18"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  d="M12 3c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 14c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-7c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
                />
              </svg>
            </span>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex"
export default {
  name: "Header",
  props: {
    toggleChatDetails: Function
  },
  computed: {
    ...mapState({
      currentChannel: state=> state.chat.currentChannel
    })
  },
  methods: {
    ...mapMutations("chat",["changeCol"]),
    toggleSideBar(){
      this.changeCol("sidebar")
    }
  }
};
</script>

<style scoped>
#menu-toggle:checked + #menu {
  display: block;
}
.chat-head {
  background-color: white;
  height: 50px;
  margin-top: 10px;
  position: relative;
  padding: 0 !important;
  box-shadow: 0 0 4px rgb(0.3, 0.3, 0.3, 0.3);
  position: relative;
}
.channel-ic {
  height: 90%;
  margin-top: -1%;
}
.channel-ic .channel-icon {
  display: block;
  height: 100%;
  display: flex;
  flex-direction: row;
}
.channel-icon svg {
  width: 30px;
  height: 30px;
  margin-left: 1%;
  margin-top: auto;
  margin-bottom: auto;
}
.channel-ic .names {
  display: inline-block;
  width: 170px;
  padding: 2% 1%;
}
.names h6 {
  font-weight: bold;
  padding: 0 !important;
  display: block;
  margin-bottom: 0px !important;
  margin-top: -4px;
  font-family: Arial, Helvetica, sans-serif;
}
.names small {
  display: block;
  margin-top: 0px !important;
  margin-bottom: 2%;
  color: rgb(53, 53, 53, 0.9);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.btns {
  display: block;
  float: none;
  flex: none;
}
.btns * {
  display: inline-block;
}
.btns *:not(:nth-last-child(1)) {
  margin-right: 40px;
}
.btns * svg {
  fill: rgb(0, 81, 255);
  fill: linear-gradient(180deg, #2f74eb 0%, #83eaf1 74%);
}
.btns * svg:hover {
  fill: rgb(5, 66, 197);
  fill: linear-gradient(180deg, #1f59bd 0%, #83eaf1 74%);
  cursor: pointer;
  size: 24px;
}
.toggle-icon {
  margin-right: 4%;
  cursor: pointer;
}
@media only screen and (max-width: 1000px) {
  #menu {
    position: absolute;
    top: 50px;
    background-color: white;
    text-align: center;
    border: 1px solid rgb(0, 0, 0, 0.2);
    padding: 0 !important;
    z-index: 1;
    /* padding-bottom: 15px; */
  }
  #menu nav ul,
  #menu nav ul li {
    padding: 0 !important;
    margin: 0 !important;
  }
  #menu nav ul li span {
    width: 33%;
    margin: 2% 0;
    height: 30px;
  }
  #menu nav ul li span:hover {
    background-color: #b1caf548;
    cursor: pointer;
  }
}
@media only screen and (min-width: 1000px) {
  #menu nav ul li span {
    background: rgb(241, 245, 252);
    width: 28px;
    height: 28px;
    justify-content: center;
    align-content: center;
    text-align: center;
    border-radius: 50%;
  }
  #menu nav ul li span:hover {
    background: rgb(192, 204, 224);
  }
  .chat-head {
    overflow: hidden;
  }
}

.sidebar-toggler {
  display: none;
}

@media only screen and (max-width: 400px){
  .channel-ic .names {
    width: 150px;
  }
}

@media only screen and (max-width: 800px) {
  .sidebar-toggler {
    display: flex;
  }
}
</style>