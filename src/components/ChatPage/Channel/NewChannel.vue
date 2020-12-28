<template>
  <vue-modal style="z-index: 2500" class="py-6 col-lg-9" name="NewChannel" :clickToClose="false" :scrollable="true" draggable=".drag-handler" height="auto" :reset="true" :adaptive="true">
      <nav class="flex drag-handler border-b items-center justify-between flex-wrap bg-teal p-6 py-2">
        <div class="flex items-center flex-no-shrink text-black mr-6">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="35" height="35"><path fill="none" d="M0 0h24v24H0z"/><path d="M2 8.994A5.99 5.99 0 0 1 8 3h8c3.313 0 6 2.695 6 5.994V21H8c-3.313 0-6-2.695-6-5.994V8.994zM20 19V8.994A4.004 4.004 0 0 0 16 5H8a3.99 3.99 0 0 0-4 3.994v6.012A4.004 4.004 0 0 0 8 19h12zm-6-8h2v2h-2v-2zm-6 0h2v2H8v-2z"/></svg>
          <span class="text-2xl tracking-tight ml-3 font-bold">Create Channel</span>
        </div>
        <div class="block">
          <button @click="closeAndGoBack" title="cancel" class="flex text-2xl ring-0 border-none items-center px-3 py-1 font-bold hover:text-gray-500">
           &times;
          </button>
        </div>
      </nav>
      
    <div class="new-channel-page">
        <div class="flex flex-col bg-white px-4 sm:px-6 md:px-8 lg:px-10 py-4 rounded-md w-full">
            <h4 class="text-sm sm:text-xl text-gray-700 mb-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias facere quisquam quas, incidunt officia</h4>
            <div class="flex flex-col mb-6">
                <label for="c-name" class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Channel Name:</label>
                <div>
                    <input id="c-name" type="text" name="channelName"
                        class="text-sm sm:text-base rounded placeholder-gray-500 pl-2 pr-2 border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" />
                </div>
            </div>

            <div class="flex flex-col mb-6">
                <label for="description" class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Description</label>
                <div>
                    <textarea name="description" id="description" cols="30" rows="4"
                        class="text-sm sm:text-base rounded placeholder-gray-500 pl-2 pr-2 border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" />
                    </div>
        </div>

        
        <div class="flex flex-col mb-6">
          <label  class="mb-1 rounded text-xs sm:text-sm tracking-wide text-gray-600">Add members:</label>
          <div class="members text-sm sm:text-base rounded pl-2 pr-2 border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400 py-4">
              <div class="recently-added">
                  <div v-for="member in addedMembers" :key="member._id"  class="member">                      
                    <span class="added-member">{{member.name}}</span>
                    <button class="remove-member ml-3 text-red-600 hover:text-red-400" @click="removeMember(member._id)">X</button>
                  </div>
              </div>
              <div class="">
                <input type="text" id="members" ref="searchMember" class="border-none" @focus="focused()" v-model="search" v-on:keyup="suggestContact(search)" />
              </div>
                <div :class="searching ? 'search-suggestion bg-white border-2 border-gray-100 border-top-none rounded-lg':'d-none'">
                    <p class="suggested hover:bg-gray-300 p-2 mb-3" v-for="contact in suggestedContacts" :key="contact._id" @click="addMember(contact._id)">
                        <img :src="contact.img" :alt="contact.name" class="rounded-full inline" width="30" height="30" />
                        <span class="ml-2">{{contact.name}}</span>
                    </p>
                </div>
          </div>
        </div>
        <div class="create">
            <button class="border-solid border-2 border-blue-500 bg-blue-500 text-white group flex items-center rounded-md bg-light-blue-100 text-light-blue-600 text-sm font-medium px-4 py-2">
                Create</button>
        </div>
        </div>
    </div>
    </vue-modal>
</template>

<script>

const { contacts } = require('../../../testdb/db')
export default {
    name: "NewChannel",
    data(){
        return {
            search:" ",
            searching:false,
            suggestedContacts:[],
            addedMembers:[]
        }
    },
    mounted(){
        this.$modal.show("NewChannel")
    },
    methods: {
      closeAndGoBack(){
        this.$modal.hide('NewChannel')
        this.$router.back()
      },
      suggestContact(searchQuery){
            this.suggestedContacts = contacts.filter(contact => contact.name != searchQuery)
        },
        focused(){
            this.searching = true
        },
        addMember(contactId){            
            //check if contact was already added
            if( (this.addedMembers.filter(user => user._id == contactId)).length > 0 ) return

            let contact = contacts.filter(user => user._id == contactId)[0]
            this.addedMembers.push(contact) 
            
            this.searching = false
            this.search = ""
            this.$refs.searchMember.focus()
        },
        removeMember(memberId){
            console.log(memberId)
            this.addedMembers = this.addedMembers.filter(member => member._id != memberId)
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
        background: #cee9eb;
        padding: 5px;
        border-radius: 5px;
        margin-right: 4px;
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
</style>