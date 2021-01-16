<template>
    <main class="flex-1 ">
        <div class="w-full flex-row flex content-center justify-center flex-wrap py-3 px-2">
            <div class="w-full content-center justify-center flex-wrap p-2 px-0 pt-0 sm:w-2/4 md:w-3/4 lg:w-3/6 border border-gray-500 rounded-sm md:rounded-sm mt-3 mb-4">
                <header class="flex items-center justify-between leading-tight w-full border-b">
                    <h1 class="text-lg text-center w-full organ-name font-bold py-3 px-3">
                        <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="26" height="26" style="display: inline"><path fill="none" d="M0 0h24v24H0z"/><path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"/></svg> -->
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="26" height="26" style="display: inline"><path fill="none" d="M0 0H24V24H0z"/><path d="M21 3c.552 0 1 .448 1 1v16c0 .552-.448 1-1 1H3c-.552 0-1-.448-1-1V4c0-.552.448-1 1-1h18zM10.48 4.999L4 5v14h8.746c-.062-.344-.116-.684-.163-1.02-.297.013-.491.02-.583.02-2.208 0-4.398-.73-6.555-2.168l1.11-1.664C8.398 15.397 10.208 16 12 16c.133 0 .265-.003.398-.01-.024-.497-.024-1.41.007-1.99H9.5v-1c0-3.275.32-5.94.98-8.001zm2.12 0C11.935 6.582 11.556 9.41 11.51 12h3.123l-.14 1.124c-.101.805-.137 1.645-.108 2.52 1.013-.3 2.031-.79 3.06-1.476l1.11 1.664c-1.32.88-2.652 1.495-3.993 1.84.057.433.13.876.219 1.327L20 19V5l-7.4-.001zM7 7c.552 0 1 .448 1 1v1c0 .552-.448 1-1 1s-1-.448-1-1V8c0-.552.448-1 1-1zm10 0c.552 0 1 .448 1 1v1c0 .552-.448 1-1 1s-1-.448-1-1V8c0-.552.448-1 1-1z"/></svg>
                        <span class="ml-2 font-bold text-xl">Find Organization</span>
                    </h1>
                </header>
                <div class="find-organs w-ful px-2">
                    <div class="px-8 pt-6 pb-2 mb-2 flex flex-col my-2">
                      <div class="-mx-3 md:flex mb-0">
                        <div class="flex flex-wrap items-stretch w-full mb-4 relative Lato__Bold">
                          <label class="block w-full tracking-wide text-grey-darker text-md font-bold mb-2" for="grid-password">
                            Find Public Organizations
                          </label>
                          <div class="flex -mr-px">
                            <span class="flex items-center leading-normal border-0 button bg-grey-lighter rounded rounded-r-none border border-r-0 py-2 border-grey-light px-2 pr-0 whitespace-no-wrap text-grey-dark text-md">
                              <svg fill="gray" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M11 2c4.968 0 9 4.032 9 9s-4.032 9-9 9-9-4.032-9-9 4.032-9 9-9zm0 16c3.867 0 7-3.133 7-7 0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7zm8.485.071l2.829 2.828-1.415 1.415-2.828-2.829 1.414-1.414z"/></svg>
                            </span>
                          </div>
                          <input v-model="searchText" @keyup="searchOrganizations" type="search" class="flex-shrink flex-grow flex-auto py-2 leading-normal w-px flex-1 border border-l-0 border-grey-light rounded-l-none rounded-r-none px-3 relative" placeholder="Search text...">
                          <div class="flex -mr-px">
                            <button @click="searchOrganizations" @dblclick="searchOrganizations" type="button" class="flex items-center leading-normal border-none rounded rounded-l-none border border-l-0 py-2 border-grey-light px-3 whitespace-no-wrap text-md btn-blue text-white">Search</button>
                          </div>
                          <p class="text-xs italic w-full mt-2" :class="[gotError? 'text-red-600':'text-gray-700']">{{gotError? ErrorMsg+" RETRY.":"Hit Search button to get results." }}</p>
                        </div>	
                      </div>
                    </div>
                    <!-- ===============No results============= -->
                    <div class="flex flex-wrap justify-center content-center lg:px-20 w-full" v-if="filteredWorkspaces.length<1">
                      <span class="font-bold text-xl py-8 w-full text-center bg-gray-200 text-gray-800">Results Will Appear Here.</span>
                    </div>
                    <!-- =============== results================ -->
                    <div class="flex flex-col md:px-12" v-else>
                      <h1 class="w-full font-bold text-2xl mb-3 Lato__Bold">{{filteredWorkspaces.length}} Results</h1>
                      <OrganizationItem v-for="(organization,index) in filteredWorkspaces" :userJoin="userJoinedOrganization" :organization="organization" :key="index"/>
                    </div>
                  <!-- ============================= -->
                </div>
              <div class="btns w-full content-center justify-center flex-wrap flex pb-5 pt-2">
		            <button @click="$router.push({name: 'Start'})" type="button" class="w-4/6 mt-3 rounded-sm sm:w-4/6 md:w-3/6 lg:w-auto transition duration-300 text-md ease-in-out focus:outline-none focus:shadow-outline border find-organ text-blue-800 font-bold hover:text-white font-normal py-3 px-4 mr-1 ml-1">My Organizations</button>
                <button @click="$router.push({name: 'NewWorkspace'})" type="button" class="w-4/6 mt-3 rounded-sm sm:w-4/6 md:w-3/6 lg:w-auto transition duration-300 text-md ease-in-out focus:outline-none focus:shadow-outline font-bold new-organ text-white font-normal py-3 px-4 mr-1 ml-1">New Organization</button>
              </div>
          </div>
      </div>
  </main>
</template>

<script>
import { mapState } from "vuex"
import { searchPublicWorkspaces } from "../../../lib/workspace"
import _ from "lodash"
export default {
    name: "FindOrganization",
    components: {
      OrganizationItem: ()=> import('./OrganizationItem')
    },
    data(){
      return {
        searchText: "",
        loadingData: false,
        filteredWorkspaces: [],
        gotError: false,
        ErrorMsg: ""
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
      userJoinedOrganization(organization){
        this.filteredWorkspaces[this.filteredWorkspaces.indexOf(organization)].joined=true
      },
      searchOrganizations(){
        let text=this.searchText;
        this.gotError = false
        if(!text || text==null  || text=="") return;
        this.loadingData = true;
        searchPublicWorkspaces(this.token,text)
        .then(response=>{
          this.loadingData = false;
          if(response.data.data.success){
            let results = response.data.data.results;
            if(this.userWorkspaces.length>0){
              for(let i=0;i<results.length;i++){
                let addedWorkspace = this.userWorkspaces.filter(wrkspc=> wrkspc.code.trim()==results[i].code.trim())
                if(addedWorkspace.length>0){
                  results[i].joined = true
                }else{
                  results[i].joined=false
                }
              }
            }else{
              for(let i=0;i<results.length;i++){
                results[i].joined = false
              }
            } 
            this.filteredWorkspaces = results
          }else{
            this.gotError = true
            this.ErrorMsg = "Oooops! Something went wrong!"
          }
        })
        .catch(err=>{
          this.loadingData = false;
          this.gotError = true
          this.ErrorMsg = err.message+"."
        })
      }
    },
    filters: {
        /**
         * @param {String} text the text
         */
        CamelCase(text){
            return text[0].toUpperCase()+text.slice(1,text.length)
        }
    }
}
</script>

<style scoped>
    main {
        /* height: auto; */
        min-height: auto;
        height: auto;
    }
    .find-organs {
        min-height: 20pc;
    }
    .organ-name {
      font-family: Arial, Helvetica, sans-serif !important;
    }
    .new-organ,.find-organ {
        border-radius: 5px;
        font-family: Arial, Helvetica, sans-serif !important;
    }
    .find-organ {
        border: 1px solid #1a65e6;
    }
    .btn-blue,.new-organ,.find-organ:hover,.open-btn {
        background-color: #1a65e6;
    }
    .btn-blue:hover,.new-organ:hover,.open-btn:hover {
        background-color: #003eaa;
    }
    .Lato__Bold {
      font-family: "LatoBold" !important;
    }
</style>