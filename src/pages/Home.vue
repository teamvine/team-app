<template>
    <div class="home-view" v-if="pageLoadingProcess.gotInfo">
        <AppHeader/>
        <div class="body-view">
            <div class="main-page">
                <SideBarNav v-if="pageName!='Start' && pageName!='NewWorkspace' && pageName!='FindWorkspace'"/>
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
            pageName: this.$route.name,
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
        ...mapActions("all",["resetpageLoadingProcess"]),
        initializeChat(){
            //***************get joined channel list
            Axios.request({
                url: baseURL + userAPI.joinedChannelList,
                method: "POST",
                headers: {
                    Authorization: `Bearer ${this.getToken()}`
                },
                data:{
                    user_id: this.getUser()._id,
                    workspace_id: this.getCurrentWorkspace()._id
                }
            }).then(res=>{
                if(res.data.err) {
                    //here not allowed to chat because didn't get his/her channels
                    console.log(res.data.err)
                    this.setpageLoadingProcess({isLoading: false,gotInfo: false, errorOccured: true})
                }else{
                    this.setCurrentWorkspaceJoinedChannels(res.data.data.channels)
                    this.setAppFlowGotUserJoinedChannels(true)
                    //*********************get user contacts
                    Axios.request({
                        url: baseURL + userAPI.getUserChatsList+"?user_id="+this.getUser()._id.toString()+"&&workspace_id="+this.getCurrentWorkspace()._id.toString(),
                        method: "get",
                        headers: {
                            Authorization: `Bearer ${this.getToken()}`
                        }
                    }).then(result=>{
                        if(result.data.err!=true){
                            this.setUserDirectChatReceivers(result.data.data.chats)
                            this.setAppFlowGotUserDirectChatReceivers(true)
                        }
                        this.setpageLoadingProcess({isLoading: false,gotInfo: true, errorOccured: false})
                    })
                    //other requests will be done in background
                    //************************** get all channels
                    Axios.request({
                        url: baseURL + workspaceAPI.getAllChannels+this.getCurrentWorkspace()._id,
                        method: "get",
                        headers: {
                            Authorization: `Bearer ${this.getToken()}`
                        }
                    }).then(result=>{
                        if(result.data.err!=true){
                        this.setCurrentWorkspaceAllChannels(result.data.data.workspace_channels)
                        }
                    }).catch(err=>{
                        console.log(err)
                    })
                    //**************************get workspace's all members
                    Axios.request({
                        url: baseURL + workspaceAPI.getAllMembers+this.getCurrentWorkspace()._id,
                        method: "get",
                        headers: {
                            Authorization: `Bearer ${this.getToken()}`
                        }
                    }).then(result=>{
                        if(result.data.err!=true){
                        this.setCurrentWorkspaceMembers(result.data.data.workspace_members)
                        }
                    }).catch(err=>{
                        console.log(err)
                    })

                }
            }).catch(err=>{
                console.log(err)
                this.setpageLoadingProcess({isLoading: false,gotInfo: false, errorOccured: true})
            })
        }
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
                this.setpageLoadingProcess({isLoading: false,gotInfo: true, errorOccured: false})
                //join personal workspace free room, workspace direct chat room and workspace's room
                this.$socket.client.emit(event.IDENTIFY_SOCKET, this.user._id);
                if(this.userAppFlow.switchedWorkspaces==true){
                    this.$socket.client.emit(event.JOIN_WORKSPACE,this.getCurrentWorkspace()._id)
                    this.$socket.client.emit(event.JOIN_DIRECT_CHAT_ROOM,{
                        workspace_id: this.getCurrentWorkspace()._id,
                        user_id: this.getUser()._id
                    })
                    if(_.isEmpty(this.getCurrentWorkspaceJoinedChannels())){
                        this.initializeChat()
                    }
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
                if(_.isEmpty(this.getCurrentWorkspaceJoinedChannels())){
                    this.initializeChat()
                }
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