<template>
  <div class="text-gray-600 h-auto">
    <div class="px-4 sm:px-6 lg:px-4 xl:px-6 pt-4 pb-4 sm:pb-6 lg:pb-4 xl:pb-6 space-y-4">
      <header class="flex items-center justify-between">
        <h2 class="text-lg leading-6 font-medium text-black">Channels</h2>
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
      <form class="relative">
        <svg width="20" height="20" fill="currentColor"
          class="absolute text-gray-400 filter-icon" dat-class="left-3 top-1/3 transform -translate-y-2/2">
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
        </svg>
        <input
          class="focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-10"
          type="text" aria-label="Filter projects" placeholder="Search channels" />
      </form>
      <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
        <li v-for="channel in channels" :key="channel._id">
         <router-link :to="'/channel/'+channel._id"
            class="hover:bg-light-blue-500 hover:border-transparent hover:shadow-lg group block rounded-lg p-4 border border-gray-200">
            <dl class="grid sm:block lg:grid xl:block grid-cols-2 grid-rows-2 items-center">
              <div>
                <dt class="sr-only">Title</dt>
                <dd class="group-hover:text-white leading-6 font-medium text-black">
                  {{channel.name}}
                </dd>
              </div>
              <div>
                <dt class="sr-only">Category</dt>
                <dd class="group-hover:text-light-blue-200 text-sm font-medium sm:mb-4 lg:mb-0 xl:mb-4">
                  {{channel.description}}
                </dd>
              </div>
              <div class="col-start-2 row-start-1 row-end-3">
                <dt class="sr-only">Members</dt>
                <dd class="flex justify-end sm:justify-start lg:justify-end xl:justify-start -space-x-2">
                  <img v-for="member in channel.users" :key="member._id" :src="member.profile" :alt="member.name" width="30" height="30"
                    class="w-7 h-7 rounded-full bg-gray-100 border-2 border-white" />
                </dd>
              </div>
            </dl>
         </router-link>
        </li>
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
export default {
    name: "NewChannel",    
    data(){
      return {
        channels:[
            {
            _id:11,
            name:"General",
            description:"company wide communication group",
            users:[
              {
                _id: "a",
                name:"Jacques",
                profile:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80",                
              },
              {
                _id: "b",
                name:"Jacques",
                profile:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80",                
              },
              {
                _id: "c",
                name:"Jacques",
                profile:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80",                
              },
              {
                _id:"d",
                name:"Jacques",
                profile:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80",                
              },
              {
                _id: "e",
                name:"Jacques",
                profile:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80",                
              },
            ]
          },
          {
            _id:22,
            name:"RCA YACU",
            description:"company wide communication group",
            users:[
              {
                _id: "f",
                name:"Jacques",
                profile:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80",                
              },
              {
                _id: "g",
                name:"Jacques",
                profile:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80",                
              },
              {
                _id: "h",
                name:"Jacques",
                profile:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80",                
              },
              {
                _id:"i",
                name:"Jacques",
                profile:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80",                
              },
              {
                _id: "j",
                name:"Jacques",
                profile:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80",                
              },
            ]
          },
          {
            _id:33,
            name:"You presence",
            description:"company wide communication group",
            users:[
              {
                _id: "k",
                name:"Jacques",
                profile:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80",                
              },
              {
                _id: "l",
                name:"Jacques",
                profile:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80",                
              },
              {
                _id: "m",
                name:"Jacques",
                profile:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80",                
              },
              {
                _id:"n",
                name:"Jacques",
                profile:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80",                
              },
              {
                _id: "o",
                name:"Jacques",
                profile:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80",                
              },
            ]
          },
        ]
      }
    },
    methods: {
      newChannel(){
        this.$modal.hide('browseChannel')
        this.$router.push({name: "NewChannel"})
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
</style>