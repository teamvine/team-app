<template>
    <main class="flex-1 ">
        <div class="w-full flex-row flex content-center justify-center flex-wrap py-3">
            <div class="w-full content-center justify-center flex-wrap p-2 px-0 pt-0 sm:w-3/4 md:w-2/4 lg:w-3/6 border border-gray-400">
                <header class="flex items-center justify-between leading-tight w-full border-b">
                    <h1 class="text-lg text-center w-full organ-name font-bold py-3 px-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="26" height="26" style="display: inline"><path fill="none" d="M0 0h24v24H0z"/><path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"/></svg>
                        <span class="ml-2 font-bold text-xl">New Organization</span>
                    </h1>
                </header>
                <div class="pg-form w-full px-2">
                    <div class="bg-white border border-gray-400 px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
                      <div class="-mx-3 md:flex mb-6">
                        <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                          <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
                            Name 
                            <span class="text-red-500 text-xl">*</span>
                          </label>
                          <input v-model="newworkspace.basic_info.name" class="appearance-none block border-gray-400 w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="text" placeholder="Organization Name...">
                          <!-- <p class="text-red text-xs italic">Please fill out this field.</p> -->
                        </div>
                        <div class="md:w-1/2 px-3">
                            <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-last-name">
                                Type
                                <span class="text-red-500 text-xl">*</span>
                            </label>
                            <select v-model="newworkspace.basic_info.type" class="form-select border-gray-400 mt-1 block w-full py-3">
                                <option value="public" class="py-4">Public</option>
                                <option value="private">Private</option>
                            </select>
                        </div>
                      </div>
                      <div class="-mx-3 md:flex mb-6">
                        <div class="md:w-full px-3">
                          <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                            Description
                            <span class="text-red-500 text-xl">*</span>
                          </label>
                          <textarea v-model="newworkspace.basic_info.description" class="form-textarea mt-1 block w-full" rows="4" placeholder="Description..."></textarea>
                          <!-- <p class="text-grey-dark text-xs italic mt-2">Enter a short and simple description below 200 characters.</p> -->
                        </div>
                      </div>

                      <!-- =====================start tags==================== -->
                      <label class="w-full uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                        Add Few Members
                        <span class="text-red-500 text-xl">*</span>
                      </label>
                      <div class="h-auto flex items-center w-full mb-4">
                        <div class='shadow rounded-md bg-white w-full h-auto pb-3'>
                            <!-- added members -->
                            <div class='px-5 py-3' v-if="newworkspace.members.length>0">
                                <h3 class="font-bold text-md">Added Members</h3>    
                                <div class='my-3 flex flex-wrap -m-1'>
                                    <span 
                                        v-for="(user,index) in newworkspace.members"
                                        :key="index+user._id"
                                        class="m-1 text-white bg-gray-800 rounded-full px-2 font-bold text-sm leading-loose cursor-pointer"
                                    >
                                        {{user.full_name}} <span @click="removeMember(user)" class="px-1 h-auto text-red-600 rounded-full hover:bg-red-700 hover:text-white">&times;</span>
                                    </span>
                                </div>
                            </div>
                            <!-- end added mambers -->
                            <!-- search input -->
                           <div class="flex flex-wrap items-stretch w-full relative">
                                <div class="flex -mr-px h-auto">
                                    <span class="flex items-center leading-normal px-2 pr-0 whitespace-no-wrap text-grey-dark text-md">
                                        <svg fill="gray" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M11 2c4.968 0 9 4.032 9 9s-4.032 9-9 9-9-4.032-9-9 4.032-9 9-9zm0 16c3.867 0 7-3.133 7-7 0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7zm8.485.071l2.829 2.828-1.415 1.415-2.828-2.829 1.414-1.414z"/></svg>
                                    </span>
                                </div>
                                <input v-model="searchText" @keyup="getFilteredUsers" type="search" class="flex-shrink border-gray-400 flex-grow flex-auto py-2 leading-normal w-px flex-1 rounded-l-none rounded-r-none px-3 relative" placeholder="Type to search users...">
                            </div>
                            <!-- end search -->
                            <hr />
                            <!-- search results -->
                            <!-- ==========No results============== -->
                            <div v-if="filteredUsers.length<1" class="flex flex-wrap justify-center content-center px-2 lg:px-4 mt-3 w-full">
                                <span class="font-bold text-md py-8 w-full text-center bg-gray-200 text-gray-800">Results Will Appear Here.</span>
                            </div>
                            <!-- ============ -->
                            <div class='px-3 py-3' v-else>
                                <h3 class="font-bold text-sm mb-3">Search Results (click to add)</h3>
                                <!-- ======V-for================ -->
                                <div v-for="user in filteredUsers" :key="user._id" @click="addMember(user)" class="flex flex-wrap items-stretch w-full relative hover:bg-gray-300 rounded cursor-pointer">
                                    <div class="flex -mr-px h-auto">
                                        <span class="flex items-center leading-normal px-2 pr-0 whitespace-no-wrap text-grey-dark text-md">
                                            <img src="https://picsum.photos/600/400/?random" class="w-10 h-10 bg-gray-400 rounded-full  mx-auto"/>
                                        </span>
                                    </div>
                                    <div class="flex-shrink flex-grow flex-auto py-2 leading-normal w-px flex-1 px-3 relative">
                                        <h3 class="font-bold text-black">{{user.full_name}}</h3>
                                        <p class="text-sm">{{user.country!=""? "Live in "+user.country:"@"+user.display_name}}</p>
                                    </div>
                                </div>
                                <!-- ===== -->
                            </div>
                            <!-- end results -->
                        </div>
                    </div>
                    <!-- ======================end tags==================== -->
                      <div class="w-full mb-2 text-center">
                        <p class="w-full text-center text-red-600 text-sm" v-if="newworkspace.info_has_err">{{newworkspace.info_err_msg}}</p>
                        <p class="text-blue-700 text-sm" v-else>
                            {{newworkspace.creating? newworkspace.info:"Before proceeding, check if you have provided full and required information!"}}
                        </p>
                      </div>
                      <div class="-mx-3 flex flex-wrap content-end justify-end text-right mb-2">
                        <button :disabled="newworkspace.creating? true:false" @click="createWorkspace" @dblclick="createWorkspace" class="flex button py-2 px-6 btn-blue rounded-sm text-white">Finish</button>
                      </div>
                    </div>
                </div>
            </div>
        </div>
        <t-dialog name="register-dialog" :icon="dialog.icon" type="alert">
            <template slot="title"> <!-- or icon-->
                <h4 class="w-full py-3 text-center text-md" :class="[dialog.type=='info'? 'text-blue-600':'text-red-700']">
                    {{dialog.title}}
                </h4>
            </template>
            <p class="w-full text-center py-4" v-html="dialog.text"></p>
        </t-dialog>
    </main>
</template>

<script>
import { mapMutations,mapState } from "vuex"
import { createNewWorkspace } from '../../../lib/workspace'
import { getUsersByAnyName } from '../../../lib/user'
import { regExp } from "../../../config/constants"
import Router from '../../../router'
export default {
    name: "NewOrganization",
    props: {
    },
    data(){
        return {
            newworkspace: {
                info_has_err: false,
                info_err_msg: "",
                creating: false,
                info: "",
                basic_info: {
                    name: "",
                    description: "",
                    admin_id: "",
                    type: "public"
                },
                members: []
            },
            searchText: "",
            filteredUsers: [],
            loadingData: false,
            dialog: {
                icon: "info",
                text: "",
                title: "",
                type: "info"
            }
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
        ...mapMutations("all",["setUserAppFlow","setUserWorkspaces"]),
        removeMember(member){
            this.newworkspace.members.splice(this.newworkspace.members.indexOf(member),1)
            if(member._id!=this.user._id) this.filteredUsers.push(member)
        },
        addMember(member){
            //check if the member is already added
            let added=false
             for(let i=0;i<this.newworkspace.members.length;i++){
                if(this.newworkspace.members[i]._id==member._id){
                    added = true
                    break;
                }else{
                    continue;
                }
            }
            if(added==false){
                this.newworkspace.members.push(member)
                this.filteredUsers.splice(this.filteredUsers.indexOf(member),1)
            }else {
                alert("Member already added")
            }
        },
        createWorkspace(){
            this.searchText=""
            this.filteredUsers=[]
            this.newworkspace.info_has_err = false
            if(!this.user._id) {
                this.newworkspace.info_has_err =true
                this.newworkspace.info_err_msg ="* AN ERROR OCCURED: There is a problem getting your Info! *"
                return;
            }
            if(this.newworkspace.basic_info.name==""
            || this.newworkspace.basic_info.description =="" ||
            this.newworkspace.basic_info.type==""){
                this.newworkspace.info_has_err =true
                this.newworkspace.info_err_msg ="* All information are required! *"
                return;
            }
            if(this.newworkspace.basic_info.name.length < 3 || this.newworkspace.basic_info.description.length <10){
                this.newworkspace.info_has_err =true
                this.newworkspace.info_err_msg ="* Organization's name must be longer than 2 characters and description longer than 10 characters. *"
                return;
            }
            if(!regExp.VALID_CHANNEL_NAME.test(this.newworkspace.basic_info.name)){
                this.newworkspace.info_has_err =true
                this.newworkspace.info_err_msg ="* Organization's name can not contain special characters. Only alphanumeric characters and spaces are allowed! *"
                return;
            }
            if(this.newworkspace.basic_info.description.includes("@") || this.newworkspace.basic_info.description.includes("#")){
                this.newworkspace.info_has_err =true
                this.newworkspace.info_err_msg ="* Workspace's description can not contain special characters like @ and # *"
                return;
            }
            this.newworkspace.info_has_err = false
            this.newworkspace.creating = true
            let added = this.newworkspace.members.find((user)=> user._id==this.user._id) || null
            if(added == null ) this.newworkspace.members.push({
                _id: this.user._id,
                full_name: this.user.full_name,
                country: this.user.country,
                profile_pic: this.user.profile_pic
            });
            this.newworkspace.basic_info.admin_id = this.user._id
            const Workspace = {
                info: this.newworkspace.basic_info,
                members: this.newworkspace.members
            }
            Workspace.info.name=Workspace.info.name.trim()
            // let array = Workspace.info.name.split(" ")
            // Workspace.info.name=""
            // for(let i=0; i<array.length;i++){
            //     Workspace.info.name = i!=array.length-1? Workspace.info.name+array[i]+"_":Workspace.info.name+array[i] 
            // }
            this.newworkspace.info = "* Creating your Workspace... *"
            this.newworkspace.creating = false
            createNewWorkspace(this.token,{info: Workspace.info, members:  Workspace.members.sort(() => Math.random() - 0.5)})
            .then(response=>{
                if(response.data.err){
                    this.dialog.icon="warning"
                    this.dialog.text=response.data.message
                    this.dialog.title="ERROR"
                    this.dialog.type="error"
                    this.$dialog.show('register-dialog')
                    this.newworkspace.info_has_err = false
                    this.newworkspace.creating = false
                }else{
                    this.newworkspace.info_has_err = false
                    this.newworkspace.creating = false
                    let appFlow = this.userAppFlow
                    let userworkspaces = this.userWorkspaces
                    userworkspaces.push(response.data.data.info)
                    appFlow.hasWorkspaces = true
                    this.setUserAppFlow(appFlow)
                    this.setUserWorkspaces(userworkspaces)
                    this.newworkspace = {
                        info_has_err: false,
                        info_err_msg: "",
                        creating: false,
                        info: "",
                        basic_info: {
                            name: "",
                            description: "",
                            admin_id: "",
                            type: "public"
                        },
                        members: []
                    }
                    this.dialog.icon="info"
                    this.dialog.text=response.data.message
                    this.dialog.title="SUCCESSFULL"
                    this.dialog.type="info"
                    this.$dialog.show('register-dialog').then((resul) => {
                        //next operations
                    })
                }
            })
            .catch((err)=>{
                this.newworkspace.info_has_err = true
                this.newworkspace.creating = false
                this.newworkspace.info_err_msg = "* Something went wrong! *"
                console.log(err)
            })
        },
        getFilteredUsers() {
            let text = this.searchText
            if(!text || text==null  || text=="") return;
            // let data = []
            this.loadingData = true
            getUsersByAnyName(this.token,text)
            .then(response=>{
                this.loadingData = false
                this.filteredUsers = response.data.data
                if(this.filteredUsers.length>0){
                    // remove current user from list
                    //remove already added memebers from the list
                    let data = []
                    this.filteredUsers.map((user)=>{
                        let already_added = false
                        if(user._id!=this.user._id){
                            let i;
                            if(this.newworkspace.members.length==0){
                                data.push(user)
                            }else{
                                for(i=0;i<this.newworkspace.members.length;i++){
                                    if(this.newworkspace.members[i]._id==user._id){
                                        already_added = true
                                        break;
                                    }else{
                                        continue;
                                    }
                                }
                                if(already_added==false) data.push(user)
                            }
                        }
                    })
                    this.filteredUsers = data
                }
                // console.log(data)
            }).catch(err=>{
                console.log(err)
                alert(err)
                this.loadingData = false
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
    .pg-form {
        min-height: 20pc;
    }
    .btn-blue {
        background-color: #1a65e6;
    }
    .btn-blue:hover{
        background-color: #003eaa;
    }
</style>