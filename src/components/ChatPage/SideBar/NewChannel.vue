<template>
    <div class="new-channel-page">
        <div class="flex flex-col bg-white px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full">
            <h1 class="font-medium text-xl sm:text-2xl text-gray-800 mt-5 mb-5">Create channel</h1>
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
</template>

<script>
const { contacts } = require('../../../testdb/db')
export default {
    name:"NewChannel",
    data(){
        return {
            search:" ",
            searching:false,
            suggestedContacts:[],
            addedMembers:[]
        }
    },
    methods:{
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