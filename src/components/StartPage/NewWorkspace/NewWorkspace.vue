<template>
    <main class="flex-1 ">
        <div class="w-full flex-row flex content-center justify-center flex-wrap py-3">
            <div class="pb-4 border-t border-gray-200 w-full content-center justify-center flex-wrap sm:w-3/4 md:w-3/5 lg:w-2/5 md:shadow-md border rounded-sm mt-3 mb-4">
                <header class="flex items-center justify-between leading-tight w-full border-b">
                    <h1 class="text-lg text-center w-full organ-name font-bold py-5 px-3">
                        <svg xmlns="http://www.w3.org/2000/svg"  class="fill-current text-indigo-600 -mt-1" viewBox="0 0 24 24" width="35" height="35" style="display: inline; margin-top: -1.5%" ><path fill="none" d="M0 0H24V24H0z"/><path d="M15 3c.552 0 1 .448 1 1v4c0 .552-.448 1-1 1h-2v2h4c.552 0 1 .448 1 1v3h2c.552 0 1 .448 1 1v4c0 .552-.448 1-1 1h-6c-.552 0-1-.448-1-1v-4c0-.552.448-1 1-1h2v-2H8v2h2c.552 0 1 .448 1 1v4c0 .552-.448 1-1 1H4c-.552 0-1-.448-1-1v-4c0-.552.448-1 1-1h2v-3c0-.552.448-1 1-1h4V9H9c-.552 0-1-.448-1-1V4c0-.552.448-1 1-1h6zM9 17H5v2h4v-2zm10 0h-4v2h4v-2zM14 5h-4v2h4V5z"/></svg>
                        <span class="ml-2 font-bold text-xl text-indigo-600">New Organization</span>
                    </h1>
                </header>
                <div class="pg-form w-full px-2">
                    <div class="bg-white px-8 pt-6 pb-1 mb-4 flex flex-col my-2">
                      <div class="-mx-3 md:flex mb-6">
                        <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                          <label class="block tracking-wide uppercase text-sm text-gray-900 font-bold mb-1" for="grid-first-name">
                            Name 
                          </label>
                          <input v-model="newworkspace.basic_info.name" class="w-full text-gray-1000 p-3 rounded-md placeholder-gray-500 border border-gray-400 focus:outline-none focus:border-blue-400" id="grid-first-name" type="text">
                          <!-- <p class="text-red text-xs italic">Please fill out this field.</p> -->
                        </div>
                        <div class="md:w-1/2 px-3">
                            <label class="block tracking-wide uppercase text-sm text-gray-900 font-bold mb-1" for="grid-last-name">
                                Type
                            </label>
                            <select v-model="newworkspace.basic_info.type" class="w-full text-gray-900 p-3 rounded-md w-full text-gray-1000 p-3 rounded-md placeholder-gray-500 border border-gray-400 focus:outline-none focus:border-blue-400">
                                <option value="public" class="py-4">Public</option>
                                <option value="private">Private</option>
                            </select>
                        </div>
                      </div>
                      <div class="-mx-3 md:flex mb-6">
                        <div class="md:w-full px-3">
                          <label class="block tracking-wide uppercase text-sm text-gray-900 font-bold mb-1">
                            Description
                          </label>
                          <textarea v-model="newworkspace.basic_info.description" class="w-full text-gray-900 p-3 rounded-md w-full text-gray-1000 p-3 rounded-md placeholder-gray-500 border border-gray-400 focus:outline-none focus:border-blue-400" rows="2" placeholder="Description..."></textarea>
                          <!-- <p class="text-grey-dark text-xs italic mt-2">Enter a short and simple description below 200 characters.</p> -->
                        </div>
                      </div>

                      <!-- =====================start tags==================== -->
                      <label class="block tracking-wide uppercase text-sm text-gray-800 font-bold mb-1">
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
                        this.$router.push({name: "Start"})
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
    .font-arial {
        font-family: Arial, Helvetica, sans-serif;
        font-weight: bold;
    }
</style>