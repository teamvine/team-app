<template>
  <div class="channel-chat-view">
      <div class="main-channel-chat">
            <Chat :toggleReplies="toggleReplies" :toggleChatDetails="toggleChatDetails"/>
            <ChatDetails :show="showRightSidebar=='chatDetails'? true:false" :toggleRightSidebar="toggleRightSidebar"/>
            <ChatReplies :show="showRightSidebar=='chatReplies'? true:false" :toggleRightSidebar="toggleRightSidebar"/>
            <router-view></router-view>
      </div>
  </div>
</template>

<script>
import {mapState,mapActions,mapMutations} from "vuex"
import Chat from "./Chat/Chat"
import ChatDetails from "./ChatDetails/ChatDetails"
import ChatReplies from "./ChatReplies/ChatReplies"
export default {
    name: "ChannelChatPage",
    components: {
        Chat,ChatDetails,ChatReplies
    },
    data() {
        return {
            showRightSidebar: localStorage.getItem("showRightSidebar") || ""
            // showRightSidebar: "chatReplies"
        }
    },
    mounted(){
        this.initializeChat()
    },
    computed: {
        ...mapState({
            currentWorkspaceJoinedChannels: state=> state.all.currentWorkspaceJoinedChannels
        })
    },
    methods: {
        ...mapMutations("chat",["setCurrentChannel","setCurrentChatType"]),
        ...mapActions("chat",["changeAndSetUpRoom","resetCurrentThread"]),
        toggleRightSidebar(sidebar,...args){
            this.showRightSidebar = sidebar.toString()
            if(sidebar.toString()=="chatDetails") localStorage.setItem("showRightSidebar","chatDetails")
            if(args[0] && args[0]=="checkDetails"){
                this.showRightSidebar=localStorage.getItem("showRightSidebar") || ""
            }
        },
        toggleChatDetails(){
            if(this.showRightSidebar!="chatDetails") {
                this.showRightSidebar="chatDetails"
                localStorage.setItem("showRightSidebar","chatDetails")
            }else {
                this.showRightSidebar = ""
                localStorage.setItem("showRightSidebar","")
            }
        },
        toggleReplies(message){
            //to do add the replies to state and show them
            this.showRightSidebar="chatReplies"
        },
        initializeChat(){
            let channel = this.currentWorkspaceJoinedChannels.find(channel=> channel.channel_code==this.$route.params.channel_code)
            if(channel==undefined){
                channel = this.currentWorkspaceJoinedChannels.find(channel=> channel.gen==true)
            }
            this.resetCurrentThread()
            this.setCurrentChannel(channel)
            this.setCurrentChatType("channel")
            this.changeAndSetUpRoom()
        }
    }
}
</script>

<style scoped>
    .channel-chat-view {
        height: 100%;
        flex: 0 0 100%;
        /* background: rgb(107, 201, 230); */
        /* color: white; */
    }
    .main-channel-chat {
        width: 100% !important;
        height: 100% !important;
        overflow-y: auto;
        overflow-x: auto;
        display: flex;
        flex-direction: row;
        /* background-color: rgb(211, 175, 175); */
    }
</style>