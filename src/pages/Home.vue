<template>
    <div class="home-view" v-if="pageLoadingProcess.gotInfo">
        <AppHeader/>
        <div class="body-view">
            <div class="main-page">
                <SideBarNav v-if="$route.fullPath.toString().split('/')[1]=='chat'"/>
                <router-view/>
            </div>
        </div>
  </div>
</template>

<script>
import AppHeader from "../components/Header/Header"
import SideBarNav from "../components/SidebarNav/SidebarNav"
import UserAPI from "../lib/user";
import { mapState, mapGetters,mapMutations,mapActions } from "vuex";
import { event } from "../config/constants";
import _ from "lodash";
import {baseURL,userAPI,workspaceAPI} from '../lib/api'
import Axios from 'axios'
export default {
  components: { SideBarNav,AppHeader },
    name: "Home",
    data(){
        return {
            isActive: true
        }
    },
    computed: {
    ...mapState({
            pageLoadingProcess: state=> state.all.pageLoadingProcess,
            token: state=> state.all.token,
            user: state=> state.all.user,
            userAppFlow: state=> state.all.userAppFlow,
            all: state=> state.all,
            chat: state=> state.chat
        }),
    },
    methods: {
        ...mapMutations("all", [
            "setToken",
            "setUser",
            "setpageLoadingProcess",
            "setUserAppFlow",
            "setUserWorkspaces",
            "setCurrentWorkspace",
            "setCurrentWorkspaceMembers",
            "setCurrentWorkspaceAllChannels",
            "setCurrentWorkspaceJoinedChannels",
            "setAppFlowGotUserJoinedChannels",
            "setAppFlowGotUserDirectChatReceivers",
            "setUserDirectChatReceivers"
        ]),
        ...mapMutations("chat",[
            "setCurrentChatType",
            "setCurrentChannel",
            "setCurrentDirectChatReceiver"
        ]),
        ...mapGetters("all",[
            "getToken",
            "getUser",
            "getCurrentWorkspace",
            "getCurrentWorkspaceAllChannels",
            "getCurrentWorkspaceJoinedChannels",
            "getUserDirectChatReceivers"
        ]),
        ...mapActions("all",["resetpageLoadingProcess"])
    },
    beforeMount(){
        this.$socket.client.open()
    },
    mounted(){
        this.resetpageLoadingProcess()
        if (_.isEmpty(this.user)) {
            UserAPI.verifyToken(this.token).then(response=>{
                // console.log(response.data.data)
                this.setUser(response.data.data.user)
                this.setUserAppFlow(response.data.data.userAppFlow)
                this.setUserWorkspaces(response.data.data.userWorkspaces)
                this.setCurrentWorkspace(response.data.data.currentWorkspace)
                this.setCurrentWorkspaceJoinedChannels(response.data.data.userChannels)
                this.setAppFlowGotUserJoinedChannels(true)
                this.setUserDirectChatReceivers(response.data.data.userContacts)
                this.setAppFlowGotUserDirectChatReceivers(true)
                this.setpageLoadingProcess({isLoading: false,gotInfo: true, errorOccured: false})
                //join personal workspace free room, workspace direct chat room and workspace's room
                this.$socket.client.emit(event.IDENTIFY_SOCKET, this.user._id);
                if(this.userAppFlow.switchedWorkspaces==true){
                    this.$socket.client.emit(event.JOIN_WORKSPACE,this.getCurrentWorkspace()._id)
                    this.$socket.client.emit(event.JOIN_DIRECT_CHAT_ROOM,{
                        workspace_id: this.getCurrentWorkspace()._id,
                        user_id: this.getUser()._id
                    })
                }
            }).catch(err=>{
                console.log(err)
                this.setpageLoadingProcess({isLoading: false,gotInfo: false, errorOccured: true})
            })
        }else{
            //join personal workspace free room, workspace direct chat room and workspace's room
            this.$socket.client.emit(event.IDENTIFY_SOCKET, this.user._id);
            if(this.userAppFlow.switchedWorkspaces==true){
                this.$socket.client.emit(event.JOIN_WORKSPACE,this.getCurrentWorkspace()._id)
                this.$socket.client.emit(event.JOIN_DIRECT_CHAT_ROOM,{
                    workspace_id: this.getCurrentWorkspace()._id,
                    user_id: this.getUser()._id
                })
            }
            this.setpageLoadingProcess({isLoading: false,gotInfo: true, errorOccured: false})
        }
    },
    beforeDestroy() {
        this.$socket.client.close();
    }
}
</script>

<style scoped>
    .home-view {
        width: 100% !important;
        height: 100vh !important;
        overflow-y: auto;
        overflow-x: auto;
        display: flex;
        flex-direction: column;
        background:#ffffff;
        /* background: #000; */
        /* background-color:#F3FAFB; */
    }
    .body-view {
        width: 100%;
        height: 50pc;
        min-height: 350px;
        /* background: rgb(28, 90, 148);
        color: white; */
    }
    .main-page {
        width: 100% !important;
        height: 100% !important;
        overflow-y: auto;
        overflow-x: auto;
        display: flex;
        flex-direction: row;
    }
    *::-webkit-scrollbar {
        width: 6px;
    }
    *::-webkit-scrollbar-thumb {
        background-color: rgb(212, 212, 212);
    }
</style>