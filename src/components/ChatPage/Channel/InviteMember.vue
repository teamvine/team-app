<template>
    <div class="p-5">
        <div class="border rounded border-gray-400 px-3">
            <div class='pt-3' v-if="addedMembers.length > 0">
                <span v-for="(user,index) in addedMembers" :key="index+user._id"
                    class="added-member bg-blue-200 rounded-full px-2 py-2 font-bold cursor-pointer">
                    {{user.full_name}}
                    <span @click="removeMember(user)"
                        class="px-1 h-auto text-black hover:text-gray-600 rounded-full">&times;</span>
                </span>
            </div>
            <div class="my-5">
                <input class="w-full" type="search" placeholder="type name or email" v-on:keyup="search" v-model="searchText">
            </div>
        </div>
        <div class="results py-5" v-if="this.searchText.trim().length >= 1">
            <div v-for="result in results" :key="result._id" @click="addMember(result)"
                class="flex flex-wrap items-stretch w-full relative hover:bg-gray-300 rounded cursor-pointer px-3">
                <div class="flex -mr-px h-auto">
                    <span class="flex items-center leading-normal px-2 pr-0 whitespace-no-wrap text-grey-dark text-md">
                        <img src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                            class="w-8 h-8 bg-gray-400 rounded-full  mx-auto" />
                    </span>
                </div>
                <div class="flex-shrink flex-grow flex-auto py-2 leading-normal w-px flex-1 px-3 relative">
                    <h3 class="font-bold text-black">{{result.full_name}}</h3>
                    <p class="text-gray-700">@{{result.display_name}}</p>
                </div>
            </div>
        </div>
        <div class="done text-right mt-3">
            <button :disabled="buttonDisabled" :class="(buttonDisabled ? 'bg-gray-400 text-black ': 'bg-blue-700 text-white ') +' py-3 px-5 border rounded' " @click="sendData">Add</button>
        </div>
    </div>
</template>

<script>
import { mapMutations,mapState } from "vuex"

import { searchMembersNotInChannel } from "../../../lib/workspace"
import { addChannelMembers } from "../../../lib/channel"
export default {
    components:{
    },
    data(){
      return {
        searchText:'',
        results : [],
        isSearching: false,
        buttonDisabled: true,
        addedMembers:[],
      }
    },
    computed: {
        ...mapState({
            token: state=> state.all.token,
            user: state=> state.all.user,
            userAppFlow: state=> state.all.userAppFlow,
            userWorkspaces: state=> state.all.userWorkspaces
        })
    },
    methods: {
        search(){
            if(this.searchText.trim().length <= 1) return

            searchMembersNotInChannel(this.token,this.userAppFlow.currentWorkspace_id,this.user._id, this.searchText)
            .then(response=>{
                this.isSearching = false
                if(!response.data.err){
                    this.results = response.data.data.filtered_members
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
            console.log(this.addedMembers)
            this.searchText = ''
            this.buttonDisabled = false
        },
        removeMember(user){
            this.addedMembers = this.addedMembers.filter(member => member._id != user._id)
            if (this.addedMembers.length == 0) this.buttonDisabled = true
        },
        sendData(){
            console.log("sending data")
            this.$modal.hide('addMembers')
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
</style>