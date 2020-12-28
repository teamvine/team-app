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
          class="flex-shrink flex-grow flex-auto py-2 leading-normal w-px flex-1 rounded-l-none rounded-r-none px-3 relative"
          placeholder="Type to search ..." v-on:keyup="search">
      </div>
      <div class="results">
        <div v-for="result in results" :key="result._id"
          class="flex flex-wrap items-stretch w-full relative hover:bg-gray-300 rounded cursor-pointer">
          <div class="flex -mr-px h-auto">
            <span class="flex items-center leading-normal px-2 pr-0 whitespace-no-wrap text-grey-dark text-md">
              <img :src="result.img" class="w-8 h-8 bg-gray-400 rounded-full  mx-auto" />
            </span>
          </div>
          <div class="flex-shrink flex-grow flex-auto py-2 leading-normal w-px flex-1 px-3 relative">
            <h3 class="font-bold text-black">{{result.name}}</h3>
            <p class="text-gray-700">{{result.role}}</p>
          </div>
        </div>

      </div>
    </div>
</template>

<script>
const { contacts } = require('../../../testdb/db')
export default {
    name: "NewContact",
    data(){
      return {
        results : []
      }
    },
    methods:{
      search(e){
        let query = e.target.value.toLowerCase()
        this.results = contacts.filter(contact => contact.name.toLowerCase().includes(query) || contact.role.toLowerCase().includes(query))
      },
    }
}
</script>

<style scoped>
  .main-div{
    min-height:400px ;
  }
</style>