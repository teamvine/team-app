<template>
  <div
    :class="[editorType=='extended'? 'chat-foot-extended':'chat-foot']"
    class="rounded-md bord shadow-md lg:px-4 px-2 bg-white flex flex-wrap items-center lg:py-0"
  >
    <div class="edit" id="editor" contenteditable="true" v-if="editorType=='extended'">
    </div>
    <form>
      <div
        class="icon"
        @click="showEmojis = !showEmojis"
        @dblclick="showEmojis = !showEmojis"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="33" height="33"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-4-6h8v2H8v-2zm0-3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm8 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/></svg>
      </div>
      <div class="emoji-pickr" v-show="showEmojis">
        <VEmojiPicker
          labelSearch="Search"
          lang="pt-BR"
          @select="onSelectEmoji"
          @click.prevent
          :emojiWithBorder="false"
          :showCategories="true"
          :continuousList="true"
        />
      </div>
      <div class="field" v-if="editorType=='minimal'">
        <input :disabled="inputDisabled" v-model="newMessage.content" type="text" :placeholder="'send to #'+currentChannel.name" />
      </div>
      <div class="field" v-else>
          <div class="menubar format-buttons">
            <button
              type="button"
              class="menubar__button"
              data-command="bold"
            >
              <i class="ri-bold"></i>
            </button>

            <button
              type="button"
              class="menubar__button"
              data-command='italic'
            >
              <i class="ri-italic"></i>
            </button>

            <button
              type="button"
              class="menubar__button"
              data-command="strikeThrough"
            >
              <i class="ri-strikethrough"></i>
            </button>

            <button
              type="button"
              class="menubar__button"
              data-command="underline"
            >
              <i class="ri-underline"></i>
            </button>

            <button
              type="button"
              class="menubar__button"
              data-command="insertParagraph"
            >
              <i class="ri-paragraph"></i>
            </button>

            <button
              type="button"
              class="menubar__button"
              data-command="h4"
            >
              H1
            </button>

            <button
              type="button"
              class="menubar__button"
              data-command="h5"
            >
              H2
            </button>

            <button
              type="button"
              class="menubar__button"
              data-command="h6"
            >
              H3
            </button>

            <button
              type="button"
              class="menubar__button"
              data-command='insertUnorderedList'
            >
              <i class="ri-list-unordered"></i>
            </button>

            <button
              type="button"
              class="menubar__button"
              data-command='insertOrderedList'
            >
              <i class="ri-list-ordered"></i>
            </button>

            <button
              type="button"
              class="menubar__button"
              data-command="createlink"
            >
              <i class="ri-link"></i>
            </button>

            <button
              type="button"
              class="menubar__button"
              data-command="code"
            >
              <i class="ri-code-s-slash-line"></i>
            </button>
      </div>
      </div>
      <div class="icon chat-options"
        @click="showAdvancedOptions = !showAdvancedOptions"
        @dblclick="showAdvancedOptions = !showAdvancedOptions"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="32"
          height="32"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-11H7v2h4v4h2v-4h4v-2h-4V7h-2v4z"
          />
        </svg>
        <div class="drop-up bg-white" v-show="showAdvancedOptions">
          <div class="border-b border-gray-200 px-3 py-2">
            <h2 class="font-bold text-left">Advanced options</h2>
          </div>
          <span
            @click="changeEditorType"
            class="flex items-center px-3 py-1 font-bold cursor-pointer hover:bg-gray-300 font-light text-sm focus:outline-none"
          >
            <div class="mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path fill="none" d="M0 0H24V24H0z"/><path d="M13 20h-2v-7H4v7H2V4h2v7h7V4h2v16zm8-12v12h-2v-9.796l-2 .536V8.67L19.5 8H21z"/></svg>
            </div>
            Toggle Formatting
          </span>
          <span
            class="flex items-center px-3 py-1 font-bold cursor-pointer hover:bg-gray-200 font-light text-sm focus:outline-none"
          >
            <div class="mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path fill="none" d="M0 0h24v24H0z"/><path d="M20 12a8 8 0 1 0-3.562 6.657l1.11 1.664A9.953 9.953 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10v1.5a3.5 3.5 0 0 1-6.396 1.966A5 5 0 1 1 15 8H17v5.5a1.5 1.5 0 0 0 3 0V12zm-8-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/></svg>
            </div>
            Mention Someone
          </span>
          <span
            class="flex items-center px-3 py-1 font-bold cursor-pointer hover:bg-gray-200 font-light text-sm focus:outline-none"
          >
            <div class="mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path fill="none" d="M0 0h24v24H0z"/><path d="M14.828 7.757l-5.656 5.657a1 1 0 1 0 1.414 1.414l5.657-5.656A3 3 0 1 0 12 4.929l-5.657 5.657a5 5 0 1 0 7.071 7.07L19.071 12l1.414 1.414-5.657 5.657a7 7 0 1 1-9.9-9.9l5.658-5.656a5 5 0 0 1 7.07 7.07L12 16.244A3 3 0 1 1 7.757 12l5.657-5.657 1.414 1.414z"/></svg>
            </div>
            Attach Files
          </span>
          <span
            class="flex items-center px-3 py-1 font-bold cursor-pointer hover:bg-gray-200 font-light text-sm focus:outline-none"
          >
            <div class="mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path fill="none" d="M0 0h24v24H0z"/><path d="M21 6.757l-2 2V4h-9v5H5v11h14v-2.757l2-2v5.765a.993.993 0 0 1-.993.992H3.993A1 1 0 0 1 3 20.993V8l6.003-6h10.995C20.55 2 21 2.455 21 2.992v3.765zm.778 2.05l1.414 1.415L15.414 18l-1.416-.002.002-1.412 7.778-7.778z"/></svg>
            </div>
            New Text file.
          </span>
          <span
            class="flex items-center px-3 py-1 font-bold cursor-pointer hover:bg-gray-200 font-light text-sm focus:outline-none"
          >
            <div class="mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path fill="none" d="M0 0h24v24H0z"/><path d="M17 19h3V5h-3V3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-4v-2zM2.859 2.877l12.57-1.795a.5.5 0 0 1 .571.495v20.846a.5.5 0 0 1-.57.495L2.858 21.123a1 1 0 0 1-.859-.99V3.867a1 1 0 0 1 .859-.99zM4 4.735v14.53l10 1.429V3.306L4 4.735zM11 8h2v8h-2l-2-2-2 2H5V8h2l.01 5L9 11l2 1.989V8z"/></svg>
            </div>
            Write a Document
          </span>
        </div>
      </div>
      <div class="icon" @click="sendMessage">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="32"
          height="32"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            d="M3 13h6v-2H3V1.846a.5.5 0 0 1 .741-.438l18.462 10.154a.5.5 0 0 1 0 .876L3.741 22.592A.5.5 0 0 1 3 22.154V13z"
          />
        </svg>
      </div>
    </form>
  </div>
</template>

<script>
import {mapGetters, mapState} from "vuex"
import { sendChannelMessage } from "../../../../lib/message"
export default {
  name: "Footer",
  components: {
  },
  props: {
    changeFooter: Function
  },
  data() {
    return {
      showEmojis: false,
      showAdvancedOptions: false,
      editorType: localStorage.getItem("editor_type") || "minimal",
      inputDisabled: false,
      newMessage: {
        sender_id: "",
        channel_id: "",
        workspace_id: this.getCurrentWorkspace()._id,
        content: "",
        attachments: {
            files: [],
            attached: false,
        },
        sent_at: null
      }
    };
  },
  computed: {
    ...mapState({
      currentChannel: state=> state.chat.currentChannel
    })
  },
  mounted(){
   let editor = document.getElementById('editor')
   let buttons = document.getElementsByClassName('menubar__button')
   for(let btn of buttons){
     btn.addEventListener('click',()=>{
       let cmd = btn.dataset['command']
       if(cmd === "createlink"){
         let url = prompt("Enter the link","http:\/\/")
         document.execCommand(cmd,false,url)
       }else{
         document.execCommand(cmd,false,null)
       }
     })
   }
  },
  methods: {
    ...mapGetters("all",["getToken","getUser","getCurrentWorkspace"]),
    onSelectEmoji(emoji) {
      let unicodeEmoji = emoji.data;
      this.newMessage.content = this.newMessage.content+unicodeEmoji
    },
    sendMessage(){
      this.newMessage.content.replace(/\n/i,"")
      if(this.newMessage.content=="" || this.newMessage.content.trim()===""){
        this.newMessage.content=""
        return 0;
      }
      this.inputDisabled = true
      this.newMessage.sender_id = this.getUser()._id,
      this.newMessage.channel_id = this.currentChannel._id
      this.newMessage.workspace_id = this.getCurrentWorkspace()._id
      this.newMessage.sent_at = Date()
      sendChannelMessage(this.getToken(),this.newMessage).then(response=>{
        if(!response.data.success){
          alert(response.data.message)
        }else{
          console.log(response.data.data.message)
        }
      }).catch(err=>{
        alert(err.message)
      })
      // this.$socket.client.emit(event.MESSAGE, this.newMessage);
      this.newMessage.content = ""
      this.newMessage.attachments = {
        files: [],
        attached: false
      }
      this.inputDisabled = false
    },
    changeEditorType(){
      if(this.editorType=="minimal"){
        this.changeFooter("extended");
        this.editorType="extended";
        localStorage.setItem("editor_type","extended");
      }else{
        this.changeFooter("minimal");
        this.editorType="minimal";
        localStorage.setItem("editor_type","minimal");
      }
    }
  },
};
</script>

<style scoped>
.bord {
  border: 1px solid rgba(0, 5, 77, 0.2);
}
.chat-foot {
  height: 50px;
  position: relative;
  border-radius: 60px;
}
form {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  padding: 0.5% 0;
  position: relative;
}
form .emoji-pickr {
  position: absolute;
  bottom: 101%;
  width: auto;
  height: auto;
  border-radius: 5px;
  color: white !important;
  border: 1px solid rgba(207, 195, 195, 0.5);
}
form .icon {
  height: 100%;
  width: 100%;
  flex: 0 0 40px;
  justify-content: center;
  text-align: center;
  align-content: center;
}
form .icon svg {
  margin: auto;
  margin-top: 10%;
  fill: #2f74eb;
  fill: linear-gradient(180deg, #2f74eb 0%, #83eaf1 74%);
}
form .icon img {
  cursor: pointer;
}
form .icon svg:hover {
  fill: #164ba7;
  fill: linear-gradient(180deg, #164ba7 0%, #83eaf1 74%);
  cursor: pointer;
}
form .field {
  height: 100%;
  width: 100%;
}
form .field input {
  height: 100%;
  width: 100%;
  padding: 0 2%;
  font-size: 14px;
}
.chat-options {
  position: relative;
}
.drop-up {
  width: 250px;
  position: absolute;
  bottom: 100%;
  right: -40px;
  border: 1px solid rgba(207, 195, 195, 0.6);
  border-radius: 4px;
}
.drop-up span {
  font-weight: 500;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
}


.chat-foot-extended {
  height: 115px;
  position: relative;
}
.chat-foot-extended .edit{
  font: unset;
  color: unset;
  display: unset;
  height: 70px;
  position: relative;
  width: 100%;
  word-break: break-all;
  word-wrap: break-word;
  overflow-y: auto;
  background: rgb(253, 253, 253);
  outline: none;
  font-size: 14px;
  padding-top: 13px;
}
.edit *{
  all: initial;
}
.edit a {
  color: blue;
}
.edit code {
  background: #000;
  color: white;
}
.chat-foot-extended form{
  height: 40px;
  position: relative;
}
.format-buttons button{
  width: 8.33333333333%;
  outline: none;
  margin-top: 1%;
}
.format-buttons button.is-active,.format-buttons button:hover{
  background-color: #2f74eb2c;
}

.editor__content div {
  display: block;
  height: 100%;
  outline: none;
}
</style>