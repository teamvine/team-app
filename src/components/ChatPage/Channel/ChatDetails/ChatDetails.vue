<template>
  <div class="details" v-if="show">
        <div class="chat-detls flex flex-wrap">
            <div class="channel-card shadow-md rounded-sm bg-white mr-1">
                <div class="md:flex sm:flex lg:flex border border-t-0 border-l-0 border-r-0">
                    <div class="w-auto py-3 pl-3 font-bold text-xl cursor-pointer" @click="toggleRightSidebar">
                        &times;
                    </div>
                    <div class="w-full md:w-full font-bold py-3 text-center text-lg font-custom">Channel</div>
                </div>
                <div class="channel-icn">
                    <span class="mt-4 py-8">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40"><path fill="none" d="M0 0h24v24H0z"/><path fill="rgb(4, 85, 207)" d="M7.784 14l.42-4H4V8h4.415l.525-5h2.011l-.525 5h3.989l.525-5h2.011l-.525 5H20v2h-3.784l-.42 4H20v2h-4.415l-.525 5h-2.011l.525-5H9.585l-.525 5H7.049l.525-5H4v-2h3.784zm2.011 0h3.99l.42-4h-3.99l-.42 4z"/></svg>
                        <span class="text-2xl mt-3 font-bold p-0">{{currentChannel.name}}</span><br class="p-0">
                    </span>
                </div>
                <div class="w-full mb-4 px-3">
                    <div x-data={show:false} class="rounded-sm">
                        <div class="px-5 py-4 headingOne" @click="showAbout=!showAbout">
                            <button class="btn-itm text-black-300 font-bold focus:outline-none" type="button">
                                <svg class="icn1" xmlns="http://www.w3.org/2000/svg" style="display: inline-block" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-11v6h2v-6h-2zm0-4v2h2V7h-2z"/></svg>
                                <b class="font-bold ml-2 text-md">About #{{currentChannel.name}}</b>
                                <svg class="icn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="33" height="33"><path fill="none" d="M0 0h24v24H0z"/><path d="M12.172 12L9.343 9.172l1.414-1.415L15 12l-4.243 4.243-1.414-1.415z"/></svg>
                            </button>
                        </div>
                        <div class="border px-5 py-4 bg-gray-100" v-show="showAbout">
                            {{currentChannel.description}}
                        </div>
                    </div>
                    <div x-data={show:false} class="rounded-sm">
                        <div class="px-5 py-4 headingOne" @click="fetchMembers">
                            <button class="btn-itm text-black-300 font-bold focus:outline-none" type="button">
                                <svg class="icn1" style="display: inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M20 22h-2v-2a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v2H4v-2a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v2zm-8-9a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/></svg>
                                <b class="font-bold ml-2 text-md">Channel Members</b>
                                <svg class="icn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="33" height="33"><path fill="none" d="M0 0h24v24H0z"/><path d="M12.172 12L9.343 9.172l1.414-1.415L15 12l-4.243 4.243-1.414-1.415z"/></svg>
                            </button>
                        </div>
                        <div class="pb-4 borders bg-gray-100" v-if="showMembers">
                            <h2 v-if="isLoadingMembers" class="w-full text-center font-bold font-arial py-3">Loading...</h2>     
                            <ChannelMembers v-else-if="currentChannelMembers.length>0" :channel_admin_id="currentChannel.admin_id" :members="currentChannelMembers"/>
                            <h2 v-else class="w-full text-center font-bold font-arial py-3">No Members</h2>
                        </div>
                    </div>
                    <div class="rounded-sm" v-if="currentChannel.name!='general' && currentChannel.gen!=true">
                        <div class="px-5 py-4 headingOne">
                            <button @click="addMembers" class="btn-itm text-black-300 font-bold focus:outline-none" type="button">
                                <svg class="icn1" xmlns="http://www.w3.org/2000/svg" style="display: inline-block" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M14 14.252V22H4a8 8 0 0 1 10-7.748zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm6 4v-3h2v3h3v2h-3v3h-2v-3h-3v-2h3z"/></svg>
                                <b class="font-bold ml-2 text-md">Add Members</b>
                                <svg class="icn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="33" height="33"><path fill="none" d="M0 0h24v24H0z"/><path d="M12.172 12L9.343 9.172l1.414-1.415L15 12l-4.243 4.243-1.414-1.415z"/></svg>
                            </button>
                        </div>
                    </div>
                    <div x-data={show:false} class="rounded-sm">
                        <div class="px-5 py-4 headingOne">
                            <button class="btn-itm text-black-300 font-bold focus:outline-none" type="button">
                                <svg class="icn1" xmlns="http://www.w3.org/2000/svg" style="display: inline-block" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M16 4a1 1 0 0 1 1 1v4.2l5.213-3.65a.5.5 0 0 1 .787.41v12.08a.5.5 0 0 1-.787.41L17 14.8V19a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h14zm-1 2H3v12h12V6zM7.4 8.829a.4.4 0 0 1 .215.062l4.355 2.772a.4.4 0 0 1 0 .674L7.615 15.11A.4.4 0 0 1 7 14.77V9.23c0-.221.18-.4.4-.4zM21 8.84l-4 2.8v.718l4 2.8V8.84z"/></svg>
                                <b class="font-bold ml-2 text-md">Start A Meeting</b>
                                <svg class="icn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="33" height="33"><path fill="none" d="M0 0h24v24H0z"/><path d="M12.172 12L9.343 9.172l1.414-1.415L15 12l-4.243 4.243-1.414-1.415z"/></svg>
                            </button>
                        </div>
                    </div>
                    <div x-data={show:false} class="rounded-sm">
                        <div class="px-5 py-4 headingOne">
                            <button class="btn-itm text-black-300 font-bold focus:outline-none" type="button">
                                <svg class="icn1" xmlns="http://www.w3.org/2000/svg" style="display: inline-block" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M22 12.999V20a1 1 0 0 1-1 1h-8v-8.001h9zm-11 0V21H3a1 1 0 0 1-1-1v-7.001h9zM11 3v7.999H2V4a1 1 0 0 1 1-1h8zm10 0a1 1 0 0 1 1 1v6.999h-9V3h8z"/></svg>
                                <b class="font-bold ml-2 text-md">Connected Apps</b>
                                <svg class="icn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="33" height="33"><path fill="none" d="M0 0h24v24H0z"/><path d="M12.172 12L9.343 9.172l1.414-1.415L15 12l-4.243 4.243-1.414-1.415z"/></svg>
                            </button>
                        </div>
                        <!-- <div x-show="show" class="border px-5 py-4">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                        </div> -->
                    </div>
                    <div x-data={show:false} class="rounded-sm">
                        <div class="px-5 py-4 headingOne border-b">
                            <button class="btn-itm text-black-300 font-bold focus:outline-none" type="button">
                                <svg class="icn1" xmlns="http://www.w3.org/2000/svg" style="display: inline-block" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M22 11v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-9h20zm0-2H2V4a1 1 0 0 1 1-1h7.414l2 2H21a1 1 0 0 1 1 1v3z"/></svg>
                                <b class="font-bold ml-2 text-md">Shared Files</b>
                                <svg class="icn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="33" height="33"><path fill="none" d="M0 0h24v24H0z"/><path d="M12.172 12L9.343 9.172l1.414-1.415L15 12l-4.243 4.243-1.414-1.415z"/></svg>
                            </button>
                        </div>
                        <!-- <div x-show="show" class="border px-5 py-4">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                        </div> -->
                    </div>
                </div>
            </div>
        </div>
        
    <!-- <vue-modal style="z-index: 2500" class="py-3 col-lg-9" name="addMembers" :scrollable="true" draggable=".drag-handler" height="auto" :reset="true" :adaptive="true">
      <nav class="flex drag-handler items-center justify-between flex-wrap bg-teal p-6 py-2">
        <div class="flex items-center flex-no-shrink text-black mr-6">
          <span class="text-2xl tracking-tight ml-3 font-bold">Add Members</span>
        </div>
        <div class="block">
          <button @click="$modal.hide('addMembers')" title="cancel" class="flex text-2xl ring-0 border-none items-center px-3 py-1 font-bold hover:text-gray-500">
           &times;
          </button>
        </div>
      </nav>
      
    </vue-modal> -->
    <t-modal-md name="addMembersModal" v-model="showAddMembersModal" header="Add Members">
      <template v-slot:header>
        <nav class="flex w-full drag-handler border-b items-center justify-between flex-wrap bg-teal pb-3 px-6">
          <div class="flex w-full items-center justify-center flex-no-shrink text-black mr-6">
            <span class="text-2xl tracking-tight ml-3 font-bold">Add Members</span>
          </div>
        </nav>
      </template>
      <invite-member :closeAddMembers="closeAddMembers"></invite-member>
      <template v-slot:footer>
        <div class="flex flex-row-reverse gap-x-4">
          <t-button @click="$modal.hide('addMembersModal')" type="button" variant="error">
            Close
          </t-button>
        </div>
      </template>
    </t-modal-md>
  </div>
</template>

<script>
import { mapState, mapMutations,mapGetters } from "vuex"
import { getMembersInChannel } from '../../../../lib/channel'
import InviteMember from '../InviteMember.vue'
export default {
    name: "ChatDetails",
    props: {
        toggleRightSidebar: Function,
        show: Boolean
    },
    components: {
        ChannelMembers: ()=> import('./ChannelMembers'),
        InviteMember
    },
    data(){
        return {
            showAbout: false,
            showMembers: false,
            isLoadingMembers: false,
            showAddMembersModal: false
        }
    },
    computed: {
        ...mapState({
            currentChannel: state => state.chat.currentChannel,
            currentChannelMembers: state=> state.chat.currentChannelMembers
        })
    },

    methods: {
        ...mapGetters("all", ["getToken", "getCurrentWorkspace"]),
        ...mapMutations("chat", ["setMembers","setCurrentChannelMembers"]),
        addMembers() {
            this.showAddMembersModal = !this.showAddMembersModal
        },
        closeAddMembers(){
            this.showAddMembersModal = false
        },
        fetchMembers(){
            if(this.currentChannelMembers.length < 1){
                this.isLoadingMembers = true
                getMembersInChannel(this.getToken(),this.getCurrentWorkspace()._id,this.currentChannel._id).then(res=>{
                    this.isLoadingMembers = false
                    if(res.data.err){
                        alert(res.data.message)
                    }else {
                        this.setMembers({
                            channel: this.currentChannel,
                            members: res.data.data.channel_members
                        })
                        this.setCurrentChannelMembers({channel: this.currentChannel})
                    }
                })
            }
            this.showMembers = !this.showMembers
        }
    }
}
</script>
<style scoped>
    .font-arial {
        font-family: Arial, Helvetica, sans-serif;
    }
    button svg {
        fill: rgb(0, 117, 235);
    }
    .border {
        border-bottom: 1px solid rgb(0, 0, 0, 0.1);
    }
    .headingOne, .borders {
        border: 1px solid rgb(0, 0, 0, 0.1);
        border-bottom: 0px;
    }
    .border-b {
        border-bottom: 1px solid rgb(0, 0, 0, 0.1) !important;
    }
    .headingOne button{
        position: relative;
        width: 100%;
        text-align: left;
        font-family: Arial, Helvetica, sans-serif !important;
    }
    .headingOne:not(:nth-child(1)) {
        border-bottom: 0px;
    }
    .icn {
        display: inline;
        position: absolute;
        right: 3%;
        fill: rgb(88, 88, 88);
    }
    .headingOne:hover,.headingOne:hover button svg {
        fill: rgb(5, 102, 199);
        color:  rgb(5, 102, 199);
    }
    .headingOne button b {
         font-family: Arial, Helvetica, sans-serif !important;
    }
    .details {
        height: 100%;
        flex: 0 0 350px;
        overflow: auto;
    }
    .details::-webkit-scrollbar {
        width: 6px;
    }
    .details::-webkit-scrollbar-thumb {
        background-color: rgb(212, 212, 212);
    }
    .chat-detls {
        height: 100%;
        width: 100%;
        display: block;
        float: none;
        flex: none;
        padding-left: 2px;
    }
    .channel-card {
        margin-top: 0px;
        min-height: 100%;
        box-shadow: 0 0 4px rgb(0.3, 0.3, 0.3, 0.3);
        background-color: #fff;
    }
    .channel-icn {
        display: block;
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: row;
        text-align: center;
        justify-content: center;
        align-content: center;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
    }
    .channel-icn * {
        width: 100%;
        text-align: center;
        justify-content: center;
        color: rgb(0, 0, 0, 0.6);
    }
    .channel-icn span small {
        color: black;
    }
    .channel-icn:hover, .channel-icn:hover *{
        cursor: pointer;
    }
    .font-custom {
        font-weight: bold;
        font-family: Arial, Helvetica, sans-serif;
    }

    @media only screen and (max-width: 800px){
        .details {
            flex: 0 0 100%;
        }
        .channel-card {
            margin-right: 1%;
        }
    }
</style>