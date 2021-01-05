<template>
  <div class="text-gray-600 h-auto">
    <div class="px-4 sm:px-6 lg:px-4 xl:px-6 pt-4 pb-4 sm:pb-6 lg:pb-4 xl:pb-6 space-y-4 channels-list">
      <header class="flex items-center justify-between">
        <h2 class="text-lg leading-6 font-bold text-black">Search Channels</h2>
        <button
          @click="newChannel"
          class="border-solid border-2 border-blue-500 hover:bg-blue-500 hover:text-white group flex items-center rounded-md bg-light-blue-100 text-light-blue-600 text-sm font-medium px-4 py-2">
          <svg class="group-hover:text-light-blue-600 text-light-blue-500 mr-2" width="12" height="20"
            fill="currentColor">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M6 5a1 1 0 011 1v3h3a1 1 0 110 2H7v3a1 1 0 11-2 0v-3H2a1 1 0 110-2h3V6a1 1 0 011-1z" />
          </svg>
          New
        </button>
      </header>
      <div class="relative">
        <svg width="20" height="20" fill="currentColor"
          class="absolute text-gray-400 filter-icon" dat-class="left-3 top-1/3 transform -translate-y-2/2">
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
        </svg>
        <input
          v-model="searchText"
          @keyup="searchChannels"
          class="focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-10"
          type="text" aria-label="Filter projects" placeholder="Search channels" />
      </div>
      <h2 class="text-sm leading-6 font-bold text-gray-700" v-if="searching">Searching...</h2>
      <h2 class="text-lg leading-6 font-bold text-black" v-if="results.length>0">Search results ({{results.length}})</h2>
      <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4" v-if="results.length>0">
        <ChannelItem :onChannelClick="onChannelClick" v-for="channel in results" :searchResult="true" :channel="channel" :key="channel._id"/>
      </ul>
      <h2 class="text-lg leading-6 font-bold text-black">My Channels</h2>
      <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
        <ChannelItem v-for="channel in currentWorkspaceJoinedChannels" :channel="channel" :onChannelClick="onChannelClick" :key="channel._id"/>
        <li class="hover:shadow-lg flex rounded-lg">
          <div @click="newChannel"
            class="hover:border-transparent hover:shadow-xs w-full flex items-center justify-center rounded-lg border-2 border-dashed border-gray-200 text-sm font-medium py-4">
            New Channel
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex"
import {searchPublicChannels,addChannelMembers} from "../../../lib/channel"
export default {
    name: "NewChannel", 
    components: {
      ChannelItem: ()=> import("./ChannelItem")
    },
    props: {
      onChannelClick: {
        type: Function,
        required: true
      }
    },   
    data(){
      return {
        searchText: "",
        searching: false,
        results: [],
        
      }
    },
    computed: {
      ...mapState({
        currentWorkspaceJoinedChannels: state=> state.all.currentWorkspaceJoinedChannels
      })
    },
    methods: {
      ...mapGetters("all",["getToken","getCurrentWorkspace"]),
      newChannel(){
        this.$modal.hide('browseChannel')
        this.$router.push({name: "NewChannel"})
      },
      searchChannels() {
        if(this.searchText=="" || this.searchText.trim()=="") return;
        this.searchText = this.searchText.trim()
        this.searching = true
        searchPublicChannels(this.getToken(),this.getCurrentWorkspace()._id,this.searchText)
        .then(res=>{
          this.searching=false
          this.results = res.data.data.channels
        })
        .catch(err=>{
          this.searching=false
          console.log(err.message)
        })
      }
    }
}

</script>

<style scoped>
  .filter-icon{
    left: 5px;
    top:10px;
  }
  button:focus{
    outline: none !important;
  }
  .channels-list {
    height: 80vh;
    overflow: auto;
  }
</style>