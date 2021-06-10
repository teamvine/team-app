<template>
  <div class="personal-chat-view">
      <div class="main-personal-chat">
            <Chat v-if="w_inner_width>800 || (showRightSidebar!='chatDetails'&& showRightSidebar!='chatReplies')" :toggleReplies="toggleReplies" :toggleChatDetails="toggleChatDetails"/>
            <ChatDetails v-if="w_inner_width>800 || (showRightSidebar!='chatReplies')" :show="showRightSidebar=='chatDetails'? true:false" :toggleRightSidebar="toggleChatDetails"/>
            <ChatReplies v-if="w_inner_width>800 || (showRightSidebar!='chatDetails')" :show="showRightSidebar=='chatReplies'? true:false" :toggleRightSidebar="toggleRightSidebar"/>
      </div>
  </div>
</template>

<script>
import { mapState,mapActions,mapMutations, mapGetters } from "vuex"
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
            showRightSidebar: localStorage.getItem("showRightSidebar") || "",
            w_inner_width: window.innerWidth
        }
    },
    mounted(){
        window.addEventListener('resize', ($event)=>{
            this.w_inner_width = window.innerWidth
        })
        this.initializeChat()
    },
    computed: {
        ...mapState({
            userDirectChatReceivers: state=> state.all.userDirectChatReceivers,
            currentWorkspaceJoinedChannels: state=>state.all.currentWorkspaceJoinedChannels
        })
    },
    methods: {
        ...mapGetters("all",["getUser"]),
        ...mapMutations("chat",["setCurrentChatType","setCurrentDirectChatReceiver","setCurrentThread"]),
        ...mapActions("chat",["changeAndSetUpRoom","resetCurrentThread"]),
        toggleRightSidebar(sidebar){
            this.showRightSidebar = sidebar.toString()
            if(sidebar.toString()=="chatDetails") localStorage.setItem("showRightSidebar","chatDetails")
        },
        toggleReplies(message){
            this.setCurrentThread({
                chat_type: 'direct',
                access_id: message.sender_id.toString()==this.getUser()._id.toString()? message.receiver_id:message.sender_id,
                message_id: message._id
            })
            this.showRightSidebar="chatReplies"
        },
        toggleChatDetails(){
            if(this.showRightSidebar!="chatDetails") {
                this.showRightSidebar="chatDetails"
                localStorage.setItem("showRightSidebar","chatDetails")
            }else {
                this.showRightSidebar = ""
                localStorage.removeItem("showRightSidebar")
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
    }
    .main-personal-chat {
        width: 100% !important;
        height: 100% !important;
        overflow-y: auto;
        overflow-x: hidden;
        display: flex;
        flex-direction: row;
    }
</style>