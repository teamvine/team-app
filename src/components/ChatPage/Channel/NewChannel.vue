<template>
<t-modal-md name="newChannelModal" ref="newChannelModal" header="New Channel">
      <template v-slot:header>
        <nav class="flex w-full drag-handler border-b items-center justify-between flex-wrap bg-teal pb-3 px-6">
          <div class="flex w-full items-center justify-center flex-no-shrink text-black mr-6">
            <span class="text-2xl tracking-tight ml-3 font-bold">New Channel</span>
          </div>
        </nav>
      </template>
      <new-contact :closeAllModals="closeAllModals"></new-contact>
      <template v-slot:footer>
        <div class="flex flex-row-reverse gap-x-4">
          <t-button @click="closeAndGoBack" type="button" variant="error">
            Cancel
          </t-button>
          <t-button :disabled="btnDisabled" @click="createChannel" type="button">
            Create
          </t-button>
        </div>
      </template>
    </t-modal-md>
  <!-- <vue-modal style="z-index: 2500;" class="py-2 rounded-md" name="NewChannel" :clickToClose="false" :scrollable="true" draggable=".drag-handler" height="auto" :reset="true" :adaptive="true">
      <nav class="flex drag-handler border-b items-center justify-between flex-wrap bg-teal p-6 py-2">
        <div class="flex items-center flex-no-shrink text-black mr-6">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="35" height="35"><path fill="none" d="M0 0h24v24H0z"/><path d="M2 8.994A5.99 5.99 0 0 1 8 3h8c3.313 0 6 2.695 6 5.994V21H8c-3.313 0-6-2.695-6-5.994V8.994zM20 19V8.994A4.004 4.004 0 0 0 16 5H8a3.99 3.99 0 0 0-4 3.994v6.012A4.004 4.004 0 0 0 8 19h12zm-6-8h2v2h-2v-2zm-6 0h2v2H8v-2z"/></svg>
          <span class="text-2xl tracking-tight ml-3 font-bold heading">Create Channel</span>
        </div>
        <div class="block">
          <button @click="closeAndGoBack" title="cancel" class="flex text-2xl ring-0 border-none items-center px-3 py-1 font-bold hover:text-gray-500">
           &times;
          </button>
        </div>
      </nav>
    <div class="new-channel-page h-auto">
        <div class="flex flex-col bg-white px-4 sm:px-6 md:px-8 lg:px-10 py-4 rounded-md w-full">
            <h4 class="text-gray-900 Lato__Bold mb-5 info">
                Channels helps the teams in the organization to communicate easily.
                They're groups of specific members in whole the organization.
            </h4>
            <div class="flex flex-col md:flex-row w-full">
                <div class="flex flex-col w-full mb-6 mr-0 md:mr-2">
                    <label class="mb-1 text-md tracking-wide text-gray-800 font-bold Lato__Bold">Channel Name:</label>
                    <div>
                        <input @focus="removeReport" @blur="removeReport" v-model="newChannel.name" id="c-name" type="text" name="channelName"
                            class="text-sm font-bold sm:text-base rounded placeholder-gray-500 pl-2 pr-2 border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" />
                    </div>
                </div>
                <div class="flex flex-col w-full mb-6 ml-0 md:ml-2">
                    <label for="c-name" class="mb-1 text-md tracking-wide text-gray-800 font-bold Lato__Bold">Channel Type:</label>
                    <div>
                        <select @focus="removeReport" @blur="removeReport" v-model="newChannel.type" class="font-bold text-sm sm:text-base rounded placeholder-gray-500 pl-2 pr-2 border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400">
                            <option value="public" class="py-4">Public</option>
                            <option value="private">Private</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="flex flex-col mb-6">
                <label class="mb-1 text-md tracking-wide text-gray-800 font-bold Lato__Bold">Description</label>
                <div>
                    <textarea @focus="removeReport" @blur="removeReport" v-model="newChannel.description" name="description" id="description" cols="30" rows="4"
                        class="text-base md:text-md rounded placeholder-gray-500 pl-2 pr-2 border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" />
                </div>
            </div>
            <div v-if="report" :class="[report_type]" class="flex text-center mb-3 py-3 px-4 flex-wrap content-center justify-center w-full">
                {{report}}
            </div>
            <div class="create w-full flex flex-wrap content-end justify-end pr-4">
                <button @click="closeAndGoBack" class="border-solid border-2 border-red-700 bg-red-700 hover:bg-red-800 hover:border-red-800 mr-4 text-white group flex items-center rounded-md text-sm font-medium px-4 py-2 font-bold">
                    Cancel
                </button>
                <button :disabled="btnDisabled" @click="createChannel" class="border-solid border-2 border-blue-500 bg-blue-500 hover:bg-blue-700 text-white group flex items-center rounded-md bg-light-blue-100 text-light-blue-600 text-sm font-medium px-4 py-2 font-bold">
                    Create
                </button>
            </div>
        </div>
    </div>
    </vue-modal> -->
</template>

<script>
import {mapMutations,mapGetters} from "vuex"
import { regExp } from "../../../config/constants";
import {createNewChannel} from '../../../lib/channel'
import _ from "lodash"
export default {
    name: "NewChannel",
    data(){
        return {
            report: "",
            report_type:"text-red-500",
            btnDisabled: false,
            newChannel: {
                name: "",
                type: "public",
                description: "",
                admin_id: '',
                workspace_id: '',
                workspace_code: ""
            },
        }
    },
    mounted(){
        this.$modal.show('newChannelModal')
    },
    methods: {
        ...mapMutations("all",["setCurrentWorkspaceAllChannels","setCurrentWorkspaceJoinedChannels"]),
        ...mapGetters("all",["getToken","getUser","getCurrentWorkspace","getCurrentWorkspaceAllChannels","getCurrentWorkspaceJoinedChannels"]),
        closeAndGoBack(){
            this.$modal.hide('newChannelModal')
            this.$router.back()
        },
        removeReport(){
            this.report=""
            this.report_type="text-red-500"
        },
        createChannel(){
            if(this.newChannel.name.trim()=="" || this.newChannel.description.trim()==""){
                this.report = "* All Information are required *"
                this.report_type = "text-red-500"
                this.btnDisabled = false
                return 0;
            }
            this.btnDisabled = true
            this.newChannel.admin_id = this.getUser()._id
            this.newChannel.workspace_id = this.getCurrentWorkspace()._id
            this.newChannel.workspace_code = this.getCurrentWorkspace().code
            if(!regExp.VALID_CHANNEL_NAME.test(this.newChannel.name)){
                this.report = "* Invalid Channel Name only alpha-numeric characters allowed *"
                this.report_type = "text-red-500"
                this.btnDisabled = false
                return 0;
            }
            if(this.newChannel.name.length<3 || this.newChannel.name.length>25){
                this.report = "* Channel name must be between 3 and 25 characters long *"
                this.report_type = "text-red-500"
                this.btnDisabled = false
                return 0;
            }
            if(this.newChannel.description.length<10){
                this.report = "* Invalid description. Must have at least 10 characters. *"
                this.report_type = "text-red-500"
                this.btnDisabled = false
                return 0;
            }
            //replace \s with _ and then to lowercase
            this.newChannel.name = _.snakeCase(this.newChannel.name.trim().toLowerCase())
            //create
            createNewChannel(this.getToken(),this.newChannel).then(res=>{
                if(res.data.err){
                    this.report_type = "text-red-500"
                    this.report = res.data.message
                    this.btnDisabled = false
                }else{
                    let allchannels = this.getCurrentWorkspaceAllChannels()
                    let joinedchannels = this.getCurrentWorkspaceJoinedChannels()
                    allchannels.push(res.data.data.new_channel.info)
                    joinedchannels.push(res.data.data.new_channel.info)
                    this.setCurrentWorkspaceAllChannels(allchannels)
                    this.setCurrentWorkspaceJoinedChannels(joinedchannels)
                    this.report_type = "text-blue-600"
                    this.report = res.data.message
                    this.newChannel = {
                        name: "",
                        type: "public",
                        description: "",
                        admin_id: '',
                        workspace_id: '',
                        workspace_code: ""
                    }
                    this.btnDisabled = false
                    this.closeAndGoBack()
                }
            })
        }
    }
}
</script>

<style scoped>
    button:focus{
        outline: none;
    }
    textarea{
        resize: none;
    }
    .recently-added .member{
        display: inline-block;
        background: #3a3a3a;
        padding: 5px;
        border-radius: 5px;
        margin-right: 4px;
        color: white;
        font-weight: bold;
    }
    .suggested{
        cursor: pointer;        
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .d-none{
        display: none;
    }
    .info,.heading {
        font-family: Arial, Helvetica, sans-serif;
    }
    .info {
        font-weight: normal;
        font-family: "LatoBold" !important;
    }
    .Lato__Bold {
        font-family: "LatoBold"
    }
</style>