<template>
    <li>
        <div
        class="hover:bg-light-blue-500 hover:border-transparent hover:shadow-lg group block rounded-lg p-4 border border-gray-200">
        <dl class="grid sm:block lg:grid xl:block grid-cols-2 grid-rows-2 items-center">
            <div>
            <dt class="sr-only">Title</dt>
            <dd class="group-hover:text-white leading-6 font-bold text-black">
                #{{channel.name}}
            </dd>
            </div>
            <div>
            <dt class="sr-only">Description</dt>
            <dd class="group-hover:text-light-blue-200 text-sm font-medium sm:mb-4 lg:mb-0 xl:mb-4">
                {{channel.description}}
            </dd>
            </div>
            <div class="flex" v-if="searchResult">
              <span class="text-sm text-gray-700 font-bold" v-if="isMember(channel)">&check;&check;member</span>
              <button class="ml-3 py-1 px-4 rounded bg-blue-600 hover:bg-blue-800 text-white" v-if="isMember(channel)">Open</button>
              <button class="py-1 px-4 rounded bg-green-600 hover:bg-green-700 text-white" v-else>Join</button>
            </div>
            <div class="col-start-2 row-start-1 row-end-3" v-else>
              <dt class="sr-only">Members</dt>
              <dd class="flex justify-end sm:justify-start lg:justify-end xl:justify-start -space-x-2">
                <img v-for="member in users" :key="member._id" :src="member.profile" :alt="member.name" width="30" height="30"
                  class="w-7 h-7 rounded-full bg-gray-100 border-2 border-white" />
              </dd>
            </div>
        </dl>
        </div>
    </li>
</template>

<script>
import { mapState } from "vuex"
export default {
    name: "ChannelItem",
    props: {
        channel: {
            type: Object,
            required: true
        },
        searchResult: Boolean
    },
    data(){
        return {
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
          }
        ]
        }
    },
    computed: {
      ...mapState({
        currentWorkspaceJoinedChannels: state=> state.all.currentWorkspaceJoinedChannels
      })
    },
    methods: {
      isMember(channel){
        let foundChannel = this.currentWorkspaceJoinedChannels.find(chan=> chan.channel_code.toString()==channel.channel_code.toString())
        return foundChannel? true:false
      }
    }
}
</script>

<style scoped>

</style>