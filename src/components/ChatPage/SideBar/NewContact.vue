<template>
    <div class="main-div">
      <div class="flex flex-wrap items-stretch w-full relative pb-2 border-b border-gray-400">
        <div class="flex -mr-px h-auto">
          <span class="flex items-center leading-normal px-2 pr-0 whitespace-no-wrap text-grey-dark text-md">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18">
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"
                fill="rgba(113,128,150,1)" /></svg>
          </span>
        </div>
        <input type="search"
          :disabled="inputDisabled"
          class="flex-shrink flex-grow flex-auto py-2 leading-normal w-px flex-1 rounded-l-none rounded-r-none px-3 relative"
          placeholder="Type to search ..." v-on:keyup="search">
      </div>
      <div class="results">
        <!-- SEARCH RESULTS -->
        <p v-if="isSearching" class="text-sm tex-gray-600 font-bold py-3 px-4">Searching for Contacts...</p>
        <div v-for="result in results" :key="result._id"
          @click="startChat(result)"
          class="flex flex-wrap items-stretch w-full relative hover:bg-gray-300 rounded cursor-pointer px-3">
          <div class="flex -mr-px h-auto">
            <span class="flex items-center leading-normal px-2 pr-0 whitespace-no-wrap text-grey-dark text-md">
              <img src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460" class="w-8 h-8 bg-gray-400 rounded-full  mx-auto" />
            </span>
          </div>
          <div class="flex-shrink flex-grow flex-auto py-2 leading-normal w-px flex-1 px-3 relative">
            <h3 class="font-bold text-black">{{result.full_name}}</h3>
            <p class="text-gray-700">@{{result.display_name}}</p>
          </div>
        </div>
        <!-- ===================User contacts========== -->
        <h1 class="text-md tex-gray-600 font-bold py-3 px-4 mt-4 pb-2" v-if="userDirectChatReceivers.length>0">MY CONTACTS</h1>
        <div v-for="contact in userDirectChatReceivers" :key="contact._id"
          @click="startChat(contact)"
          class="flex flex-wrap px-3 items-stretch w-full relative hover:bg-gray-300 rounded cursor-pointer">
          <div class="flex -mr-px h-auto">
            <span class="flex items-center leading-normal px-2 pr-0 whitespace-no-wrap text-grey-dark text-md">
              <img src="../../../assets/images/avatar3.png" class="w-10 h-10 bg-gray-400 rounded-full  mx-auto" />
            </span>
          </div>
          <div class="flex-shrink flex-grow flex-auto py-2 leading-normal w-px flex-1 px-3 relative">
            <h3 class="font-bold text-black text-sm">{{contact.full_name}}</h3>
            <p class="text-gray-700">@{{contact.display_name}}</p>
          </div>
        </div>

      </div>
    </div>
</template>

<script>
import { mapGetters, mapMutations, mapState,mapActions } from "vuex"
import {searchMembersByName} from "../../../lib/workspace"
import { AddOrUpdateUserChats } from "../../../lib/user"
export default {
    name: "NewContact",
    props: {
      closeAllModals: {
        type: Function,
        required: true
      }
    },
    data(){
      return {
        results : [],
        isSearching: false,
        inputDisabled: false
      }
    },
    computed: {
      ...mapState({
        userDirectChatReceivers: state=> state.all.userDirectChatReceivers,
        currentDirectChatReceiver: state=> state.chat.currentDirectChatReceiver,
        currentChatType: state=> state.chat.currentChatType,
      })
    },
    methods:{
      ...mapMutations("all",["addUserDirectChatReceiver"]),
      ...mapGetters("all",["getToken","getUser","getCurrentWorkspace"]),
      ...mapMutations("chat",["setCurrentChatType","setCurrentDirectChatReceiver"]),
      ...mapActions("chat",["changeAndSetUpRoom","resetCurrentThread"]),
      search(e){
        this.isSearching = true
        let query = e.target.value.toLowerCase()
        searchMembersByName(this.getToken().toString(),this.getCurrentWorkspace()._id.toString(),this.getUser()._id.toString(),query)
        .then(res=>{
          this.isSearching = false
          if(res.data.err){
            console.log("Something is wrong")
          }else{
            this.results = res.data.data.filtered_members
          }
        })
        .catch(err=>{
          this.isSearching = false
          console.log(err)
          alert(err.message)
        })
      },
      startChat(user){
        let isContact = this.userDirectChatReceivers.find(contact=> contact._id==user._id)
        if(isContact!=undefined) {
          //navigate to user chat
          let isCurrentReceiver = this.currentDirectChatReceiver._id == user._id && this.currentChatType === "direct"
          if(isCurrentReceiver && this.$route.params.contact_id==user._id) this.$modal.hide("newContact");
          this.resetCurrentThread()
          this.setCurrentDirectChatReceiver(user)
          this.setCurrentChatType("direct")
          this.changeAndSetUpRoom()
          this.$modal.hide("newContact")
          this.$router.push({
            name: "PersonalChat",
            params: {contact_id: user._id }
          });
        }else{
          //add contact the navigate to chat
          AddOrUpdateUserChats(this.getToken(),this.getCurrentWorkspace()._id,this.getUser()._id,[{
            user_id: user._id.toString(),
            active: true
          }]).then(res=>{
            if(res.data.err){
              alert(res.data.message)
            }else{
              this.results.splice(this.results.indexOf(user),1)
              this.addUserDirectChatReceiver(user)
              this.resetCurrentThread()
              this.setCurrentDirectChatReceiver(user)
              this.setCurrentChatType("direct")
              this.changeAndSetUpRoom()
              this.$modal.hide("newContact")
              this.$router.push({
                name: "PersonalChat",
                params: {contact_id: user._id }
              });
            }
          })
        }
      }
    }
}
</script>

<style scoped>
  .main-div{
    min-height:400px ;
  }
  .results {
    height: 80vh;
    overflow: auto;
  }
</style>