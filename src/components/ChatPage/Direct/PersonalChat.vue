<template>
  <div class="personal-chat-view">
      <div class="main-personal-chat">
            <Chat :toggleChatDetails="toggleChatDetails"/>
            <ChatDetails :show="showRightSidebar=='chatDetails'? true:false" :toggleRightSidebar="toggleRightSidebar"/>
            <ChatReplies :show="showRightSidebar=='chatReplies'? true:false" :toggleRightSidebar="toggleRightSidebar"/>
      </div>
  </div>
</template>

<script>
import { mapState,mapActions,mapMutations } from "vuex"
import Chat from "./Chat/Chat"
import ChatDetails from "./ChatDetails/ChatDetails"
import ChatReplies from "./ChatReplies/ChatReplies"
export default {
    name: "PersonalChatPage",
    components: {
        Chat,ChatDetails,ChatReplies
    },
    data(){
        return {
            // showRightSidebar: localStorage.getItem("showRightSidebar") || ""
            showRightSidebar: "chatReplies"
        }
    },
    mounted(){
        this.initializeChat()
    },
    computed: {
        ...mapState({
            userDirectChatReceivers: state=> state.all.userDirectChatReceivers,
            currentWorkspaceJoinedChannels: state=>state.all.currentWorkspaceJoinedChannels
        })
    },
    methods: {
        ...mapMutations("chat",["setCurrentChatType","setCurrentDirectChatReceiver"]),
        ...mapActions("chat",["changeAndSetUpRoom","resetCurrentThread"]),
        toggleRightSidebar(sidebar){
            this.showRightSidebar = sidebar.toString()
            if(sidebar.toString()=="chatDetails") localStorage.setItem("showRightSidebar","chatDetails")
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
        initializeChat(){
            let user = this.userDirectChatReceivers.find(user=> user._id==this.$route.params.contact_id)
            if(user==undefined){
                let genchannel = this.currentWorkspaceJoinedChannels.find(channel=> channel.gen==true)
                this.$router.push({
                    name: "ChannelChat",
                    params: { channel_code: genchannel.channel_code }
                });
            }else{
                this.resetCurrentThread()
                this.setCurrentDirectChatReceiver(user)
                this.setCurrentChatType("direct")
                this.changeAndSetUpRoom()
            }
        }
    }
}
</script>

<style scoped>
    .personal-chat-view {
        height: 100%;
        flex: 0 0 100%;
        /* background: rgb(52, 124, 146); */
        /* color: white; */
    }
    .main-personal-chat {
        width: 100% !important;
        height: 100% !important;
        overflow: hidden;
        display: flex;
        flex-direction: row;
        /* background-color: rgb(211, 175, 175); */
    }
</style>