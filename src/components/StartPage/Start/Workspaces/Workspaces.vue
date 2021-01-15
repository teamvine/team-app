<template>
    <main class="flex-1 ">
        <div class="w-full flex-row flex content-center justify-center flex-wrap py-3">
            <div class="w-full content-center justify-center flex-wrap p-2 px-0 pt-0 sm:w-3/4 md:w-3/4 lg:w-4/6 border rounded-sm md:rounded-sm mt-3 mb-4">
                <header class="flex items-center justify-between leading-tight w-full border-b">
                    <h1 class="text-lg text-center w-full organs-header font-bold py-3 px-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="26" height="26" style="display: inline" ><path fill="none" d="M0 0H24V24H0z"/><path d="M15 3c.552 0 1 .448 1 1v4c0 .552-.448 1-1 1h-2v2h4c.552 0 1 .448 1 1v3h2c.552 0 1 .448 1 1v4c0 .552-.448 1-1 1h-6c-.552 0-1-.448-1-1v-4c0-.552.448-1 1-1h2v-2H8v2h2c.552 0 1 .448 1 1v4c0 .552-.448 1-1 1H4c-.552 0-1-.448-1-1v-4c0-.552.448-1 1-1h2v-3c0-.552.448-1 1-1h4V9H9c-.552 0-1-.448-1-1V4c0-.552.448-1 1-1h6zM9 17H5v2h4v-2zm10 0h-4v2h4v-2zM14 5h-4v2h4V5z"/></svg>
                        <span class="ml-2 font-bold text-xl">My Organizations</span>
                    </h1>
                </header>
                <div class="organs bg-gray-50 w-full bg-gray-100 px-2">
                    <!-- ============================== -->
                    <div class="container mx-auto px-4 md:px-12">
                        <div class="flex flex-wrap -mx-1 lg:-mx-4">
                            <!-- Column -->
                            <div class="px-1 w-full md:w-1/2 my-3 lg:w-1/3" 
                                v-for="(organization,index) in organizations"
                                :key="index"
                            >
                                <article 
                                :class="[currentWorkspace.code==organization.code? 'border-green-500 border':'border border-gray-400']" 
                                class="overflow-hidden rounded-sm bg-white">
                                    <a href="#" class="workspace-img">
                                        <!-- <img alt="Placeholder" class="block h-auto w-full" src=""> -->
                                    </a>
                                    <header class="flex items-center justify-between leading-tight">
                                        <h1 class="text-lg text-center w-full organ-name font-bold py-3 pb-0 px-3">
                                            <a class="no-underline font-bold text-xl text-black" href="#">
                                                {{organization.name}}
                                            </a>
                                        </h1>
                                    </header>
                                    <!-- <div class="text-center organ-type">
                                        <svg xmlns="http://www.w3.org/2000/svg" v-if="organization.type=='private'" viewBox="0 0 24 24" width="20" height="20" style="display: inline;"><path fill="none" d="M0 0h24v24H0z"/><path d="M6 8V7a6 6 0 1 1 12 0v1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2zm13 2H5v10h14V10zm-8 5.732a2 2 0 1 1 2 0V18h-2v-2.268zM8 8h8V7a4 4 0 1 0-8 0v1z"/></svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" v-else viewBox="0 0 24 24" width="20" height="20" style="display: inline;"><path fill="none" d="M0 0h24v24H0z"/><path d="M6.235 6.453a8 8 0 0 0 8.817 12.944c.115-.75-.137-1.47-.24-1.722-.23-.56-.988-1.517-2.253-2.844-.338-.355-.316-.628-.195-1.437l.013-.091c.082-.554.22-.882 2.085-1.178.948-.15 1.197.228 1.542.753l.116.172c.328.48.571.59.938.756.165.075.37.17.645.325.652.373.652.794.652 1.716v.105c0 .391-.038.735-.098 1.034a8.002 8.002 0 0 0-3.105-12.341c-.553.373-1.312.902-1.577 1.265-.135.185-.327 1.132-.95 1.21-.162.02-.381.006-.613-.009-.622-.04-1.472-.095-1.744.644-.173.468-.203 1.74.356 2.4.09.105.107.3.046.519-.08.287-.241.462-.292.498-.096-.056-.288-.279-.419-.43-.313-.365-.705-.82-1.211-.96-.184-.051-.386-.093-.583-.135-.549-.115-1.17-.246-1.315-.554-.106-.226-.105-.537-.105-.865 0-.417 0-.888-.204-1.345a1.276 1.276 0 0 0-.306-.43zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
                                        <span class="font-bold ml-1">{{organization.type | CamelCase}}</span>
                                    </div> -->
                                    <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                                        <button @click="switchOrganization(organization)" type="button" class="font-bold flex content-center justify-center text-center w-full transition duration-300 ease-in-out focus:outline-none focus:shadow-outline open-btn text-white font-normal py-3 px-4 rounded">
                                            Launch
                                        </button>
                                    </footer>

                                </article>
                            </div>
                            <!-- END Column -->
                        </div>
                    </div>
                    <!-- ============================== -->
                </div>
                <div class="btns w-full content-center justify-center flex-wrap flex pb-5 pt-2">
                    <button @click="$router.push({name: 'NewWorkspace'})" type="button" class="w-4/6 mt-3 rounded-sm sm:w-4/6 md:w-3/6 lg:w-auto transition duration-300 text-md ease-in-out focus:outline-none focus:shadow-outline font-bold new-organ text-white font-normal py-2 px-4 mr-1 ml-1">New Organization</button>
		            <button @click="$router.push({name: 'FindWorkspace'})" type="button" class="w-4/6 mt-3 rounded-sm sm:w-4/6 md:w-3/6 lg:w-auto transition duration-300 text-md ease-in-out focus:outline-none focus:shadow-outline border find-organ text-blue-800 font-bold hover:text-white font-normal py-2 px-4 mr-1 ml-1">Find Organizations</button>
              </div>
            </div>
        </div>
        <t-dialog name="switch-dialog" icon="info" type="alert">
            <template slot="title"> <!-- or icon-->
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
    .organ-name {
        font-weight: bold;
        font-family: Arial, Helvetica, sans-serif;
        font-family: "Lato" !important;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .organ-name a, .organ-name span {
        font-family: Arial, Helvetica, sans-serif;
        font-family: "LatoBold";
    }
    .workspace-img {
        display: block;
        width: 100%;
        min-height: 130px;
        background-image: url("https://picsum.photos/600/400/?random");
        background-color: rgb(0, 0, 0,0.08);
    }
    .new-organ,.find-organ {
        padding-top: 1.2%;
        padding-bottom: 1.2%;
        border-radius: 5px;
        font-family: Arial, Helvetica, sans-serif !important;
    }
    .find-organ {
        border: 1px solid #1a65e6;
    }
    .new-organ,.find-organ:hover,.open-btn {
        background-color: #1a65e6;
    }
    .new-organ:hover,.open-btn:hover {
        background-color: #003eaa;
    }
    .organ-type {
        margin-top: -1%;
    }
    @media only screen and (max-width: 768px) {
        .new-organ,.find-organ {
            padding-top: 10px !important;
            padding-bottom: 10px !important;
        }
    }
</style>