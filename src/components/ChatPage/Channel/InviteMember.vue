<template>
    <div class="p-5 content">
        <div :class="'border rounded px-3 ' + (this.errorOcurred ? 'border-red-600':'border-gray-400 ' )" >
            <div class='pt-3' v-if="addedMembers.length > 0">
                <span v-for="(user,index) in addedMembers" :key="index+user._id"
                    class="added-member bg-blue-200 rounded-full px-2 py-2 cursor-pointer">                    
                    <img src="../../../assets/images/avatar4.png" class="w-6 h-6 bg-gray-400 rounded-full inline-block" />
                    {{user.full_name}}
                    <span @click="removeMember(user)"
                        class="px-1 h-auto text-red-700 hover:text-red-900 rounded-full font-bold">&times;</span>
                </span>
            </div>
            <div class="my-5">
                <input class="w-full" type="search" placeholder="type name or email" v-on:keyup="search" v-model="searchText">
            </div>
        </div>
        <div class="done text-right mt-3">
            <button :disabled="buttonDisabled" :class="(buttonDisabled ? 'bg-gray-400 text-black ': 'bg-blue-700 text-white ') +' py-3 px-5 border rounded' " @click="sendData">Add</button>
        </div>
        <div class="py-5" v-if="results.length >= 1">
            <div v-for="result in results" :key="result._id" @click="addMember(result)"
                class="flex flex-wrap items-stretch w-full relative hover:bg-gray-300 rounded cursor-pointer px-3">
                <div class="flex -mr-px h-auto">
                    <span class="flex items-center leading-normal px-2 pr-0 whitespace-no-wrap text-grey-dark text-md">
                        <img src="../../../assets/images/avatar4.png"
                            class="w-8 h-8 bg-gray-400 rounded-full  mx-auto" />
                    </span>
                </div>
                <div class="flex-shrink flex-grow flex-auto py-2 leading-normal w-px flex-1 px-3 relative">
                    <h3 class="font-bold text-black">{{result.full_name}}</h3>
                    <p class="text-gray-700">@{{result.display_name}}</p>
                </div>
            </div>
        </div>
        <div class="my-3 text-red-600" v-if="this.errorOcurred" >
            Error occured. please check your internet connection
        </div>
    </div>
</template>

<script>
import { mapMutations,mapState } from "vuex"

import { searchMembersNotInChannel } from "../../../lib/workspace"
import { addChannelMembers } from "../../../lib/channel"
export default {
    props: {
        closeAddMembers: Function
    },
    data(){
      return {
        searchText:'',
        results : [],
        errorOcurred: false,
        buttonDisabled: true,
        addedMembers:[],
      }
    },
    computed: {
        ...mapState({
            token: state=> state.all.token,
            user: state=> state.all.user,
            currentWorkspace: state=> state.all.currentWorkspace,
            currentChannel: state=> state.chat.currentChannel,
        })
    },
    methods: {
        search(){
            if(this.searchText.trim().length < 1) return
            searchMembersNotInChannel(this.token,this.currentWorkspace._id,this.currentChannel._id,this.user._id, this.searchText)
            .then(response=>{
                if(!response.data.err){
                    //remove lready added users
                    let results = response.data.data.users
                    let filtered = []
                    if(results.length<1) {
                        this.results = []
                    }else{
                        results.forEach(user=> {
                            let added = this.addedMembers.find(member=> member._id==user._id)
                            if(!added){
                                filtered.push(user)
                            }
                        })
                        this.results=filtered
                    }
                }
                else this.results = []
            })
            .catch(e =>{
                console.error(e)
            })

        },        
        addMember(newMember){
            if ( (this.addedMembers.filter(addedMember => addedMember._id == newMember._id )).length > 0) return
            this.addedMembers.push(newMember)
            this.results.splice(this.results.indexOf(newMember),1)
            this.searchText = ''
            this.buttonDisabled = false
        },
        removeMember(user){
            this.addedMembers = this.addedMembers.filter(member => member._id != user._id)
            if (this.addedMembers.length == 0) this.buttonDisabled = true
        },
        sendData(){
            this.errorOcurred = false
            addChannelMembers(this.token,this.currentWorkspace._id,this.currentChannel._id,this.addedMembers.map(user => ({_id:user._id}) ) )
            .then(resp=>{
                this.closeAddMembers()
            })
            .catch(e =>{
                this.errorOcurred = true
                console.error(e)
            })
        }
    }
}
</script>

<style>
.added-member{
    display: inline-block;
    margin-right: 3px;
    margin-top: 5px !important;
}

.content {
    min-height: 40vh;
    height: auto;
}
</style>