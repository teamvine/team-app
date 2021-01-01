<template>
  <div class="personal-chat-view">
      <div class="main-personal-chat">
            <Chat/>
            <ChatDetails/>
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