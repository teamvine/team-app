<template>
    <main class="flex-1 ">
        <div class="w-full flex-row flex content-center justify-center flex-wrap py-3 px-1">
            <header class="flex items-center justify-between leading-tight w-full">
                <h1 class="text-lg text-center w-full organs-header font-bold py-3 px-3 mt-6">
                    <span class="ml-2 font-bold text-2xl text-blue-800">Choose Organization</span>
                </h1>
            </header>
            <div class="border-t border-gray-200 w-full content-center justify-center flex-wrap sm:w-3/4 md:w-3/5 lg:w-2/5 md:shadow-md rounded-sm mt-3 mb-4">
              <!-- ====================================== -->
                <div 
                v-for="(organization,index) in organizations"
                :key="index"
                :class="[index>0? 'border-t':'',currentWorkspace.code==organization.code? 'active border-indigo-500':'organization-hover']"
                @click="switchOrganization(organization)"
                class="bg-white w-full flex items-center p-2 cursor-pointer organization hover:border-indigo-500">
                    <div class="flex-grow p-3 w-full">
                        <div class="font-bold text-md text-gray-800 org-name">
                            {{organization.name | truncateText}}
                        </div>
                        <div class="text-sm text-gray-700 org-desc font-semibold">
                            {{organization.description | truncateText}}
                        </div>
                    </div>
                    <div class="p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"/></svg>
                    </div>
                </div>
              <!-- ============================================ -->
            </div>
            <div class="btns w-full content-center justify-center flex-wrap flex pb-5 pt-2">
                <button @click="$router.push({name: 'NewWorkspace'})" type="button" class="w-4/6 mt-3 rounded-sm sm:w-4/6 md:w-3/6 lg:w-auto transition duration-300 text-md ease-in-out focus:outline-none focus:shadow-outline font-bold new-organ text-white font-normal py-3 px-4 mr-1 ml-1">New Organization</button>
		        <button @click="$router.push({name: 'FindWorkspace'})" type="button" class="w-4/6 mt-3 rounded-sm sm:w-4/6 md:w-3/6 lg:w-auto transition duration-300 text-md ease-in-out focus:outline-none focus:shadow-outline border find-organ text-blue-800 font-bold hover:text-white font-normal py-3 px-4 mr-1 ml-1">Find Organizations</button>
            </div>
        </div>
        <t-dialog name="switch-dialog" icon="info" type="alert">
            <template slot="title">
                <h4 class="w-full py-3 text-center text-md text-blue-600 font-bold">
                    INFORMATION
                </h4>
            </template>
            <p class="w-full text-center py-4 font-md">{{dialog.message}}</p>
        </t-dialog>
    </main>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'
import { switchCurrentWorkspace } from '../../../../lib/user'
import { Functions } from '../../../../lib/functions'
import _ from "lodash"
export default {
    name: "Organizations",
    props: {
        organizations: Array
    },
    data(){
        return {
            dialog: {
                message: ""
            }
        }
    },
    computed: {
        ...mapState({
            token: state=> state.all.token,
            userAppFlow: state=> state.all.userAppFlow,
            currentWorkspace: state=> state.all.currentWorkspace,
            user: state=> state.all.user,
            currentWorkspaceJoinedChannels: state=> state.all.currentWorkspaceJoinedChannels
        })
    },
    methods: {
        ...mapMutations("all", [
            "setToken",
            "setUserAppFlow",
            "setCurrentWorkspace",
            "setCurrentWorkspaceMembers",
            "setCurrentWorkspaceAllChannels",
            "setCurrentWorkspaceJoinedChannels",
            "setAppFlowGotUserJoinedChannels",
            "setAppFlowGotUserDirectChatReceivers",
            "setUserDirectChatReceivers"
        ]),
        ...mapActions("chat",["resetChatModuleState"]),
        ...mapActions("all",["resetAllOnWorkspaceSwitch"]),
        switchOrganization(newOrganization){
            let hasCurrent = !_.isEmpty(this.currentWorkspace)
            let isCurrent = this.currentWorkspace.code==newOrganization.code
            if(isCurrent) {
                this.$router.push({name: "ChannelChat",params: {
                    channel_code: this.currentWorkspaceJoinedChannels.find(channel=> channel.gen==true).channel_code
                }})
            }else{
                //change token and retrieve current workspace info
                switchCurrentWorkspace(this.token,newOrganization,this.user._id,true)
                .then(res=>{
                    if(res.data.err){
                        this.dialog.message = "Oooops! Something went wrong."
                        this.$dialog.show("switch-dialog")
                    }else{
                        if(hasCurrent){
                            this.resetChatModuleState()
                            this.resetAllOnWorkspaceSwitch()
                            this.$socket.client.emit(event.LEAVE_WORKSPACE, this.currentWorkspace._id)
                            this.$socket.client.emit(event.LEAVE_DIRECT_CHAT_ROOM, {
                                workspace_id: this.currentWorkspace._id,
                                user_id: this.user._id
                            })
                        }
                        let AppFlow = this.userAppFlow
                        AppFlow.switchedWorkspaces = true
                        AppFlow.currentWorkspace_id = newOrganization._id
                        this.setUserAppFlow(AppFlow)
                        this.setCurrentWorkspace(newOrganization)
                        this.setCurrentWorkspaceJoinedChannels(res.data.data.userChannels)
                        this.setAppFlowGotUserJoinedChannels(true)
                        this.setUserDirectChatReceivers(res.data.data.userContacts)
                        this.setAppFlowGotUserDirectChatReceivers(true)
                        this.setToken(res.data.data.token)
                        localStorage.setItem("rconnectToken",res.data.data.token)
                        this.$socket.client.emit(event.JOIN_WORKSPACE, newOrganization._id)
                        this.$socket.client.emit(event.JOIN_DIRECT_CHAT_ROOM,{
                            workspace_id: newOrganization._id,
                            user_id: this.user._id
                        })
                        this.dialog.message = "You switched to "+newOrganization.name
                        console.log(this.currentWorkspaceJoinedChannels);
                        this.$dialog.show("switch-dialog").then(()=>{
                            // location.reload(true)
                            location.href = "/chat/channel/"+this.currentWorkspaceJoinedChannels.find(channel=> channel.gen==true).channel_code
                            // this.$router.push({
                            //     name: "ChannelChat",
                            //     params: {channel_code: this.currentWorkspaceJoinedChannels.find(channel=> channel.gen==true).channel_code}
                            // })
                        })
                    }
                })
                .catch(err=>{
                    console.log(err)
                    this.dialog.message = "Oooops! Something went wrong."
                    this.$dialog.show("switch-dialog")
                })
            }
        }
    },
    filters: {
        /**
         * @param {String} text the text
         */
        CamelCase(text){
            return text[0].toUpperCase()+text.slice(1,text.length)
        },
        /**
         * @param {String} text
         */
        truncateText(text){
            if (text.length<50) return text;
            return text.substring(0, 50)+"..."
        }
    }
}
</script>

<style scoped>
    main {
        /* height: auto; */
        min-height: auto;
        height: auto;
    }
    .organization {
        border-width: 1px;
        border-style: transparent;
    }
    .organization-hover:hover,.organization.active {
        border-width: 1px;
        border-style: solid;
    }
    .organization.border-t {
        border-top-width: 1px;
        border-top-style: solid;
    }
    .organization-hover:hover {
        border-top: 1px solid rgb(241, 241, 241);
        border-bottom-width: 1px;
        border-bottom-style: transparent;
        border-bottom-color: white;
    }
    .organs {
        min-height: 20pc;
    }
    .organs-header {
        font-weight: bold;
        font-family: Arial, Helvetica, sans-serif !important;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .organ-img {
        width: 40px !important;
        height: 40px !important
    }
    .new-organ,.find-organ {
        border-radius: 5px;
        font-family: Arial, Helvetica, sans-serif !important;
    }
    .find-organ {
        border: 1px solid #007fe0;
    }
    .new-organ,.find-organ:hover,.open-btn {
        background-color: #007fe0;
    }
    .new-organ:hover,.open-btn:hover {
        background-color: rgb(4, 116, 202);
    }
</style>