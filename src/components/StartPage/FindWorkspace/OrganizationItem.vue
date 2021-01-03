<template>
    <div class="flex bg-gray-100 w-full mb-4 pt-0">
        <div class="flex-none w-10 h-full">
            <div class="p-4 pr-0 w-full">
                <svg class="h-auto w-full text-dark fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0H24V24H0z"/><path d="M15 3c.552 0 1 .448 1 1v4c0 .552-.448 1-1 1h-2v2h4c.552 0 1 .448 1 1v3h2c.552 0 1 .448 1 1v4c0 .552-.448 1-1 1h-6c-.552 0-1-.448-1-1v-4c0-.552.448-1 1-1h2v-2H8v2h2c.552 0 1 .448 1 1v4c0 .552-.448 1-1 1H4c-.552 0-1-.448-1-1v-4c0-.552.448-1 1-1h2v-3c0-.552.448-1 1-1h4V9H9c-.552 0-1-.448-1-1V4c0-.552.448-1 1-1h6zM9 17H5v2h4v-2zm10 0h-4v2h4v-2zM14 5h-4v2h4V5z"/></svg>
            </div>
        </div>
        <div class="flex-grow text-grey-darker items-center p-4 pt-2 pb-3">
            <span class="text-lg organization-name w-full font-bold pb-4 pr-4">
            {{organization.name}}
            </span>
            <p class="leading-tight w-full flex text-sm">
            {{organization.description}}
            </p>
            <div class="flex-grow flex flex-wrap w-full content-end justify-end pt-3">
            <span class="mr-3 py-2 text-xs text-gray-600" v-if="organization.joined">&check;&check;Member</span>
            <button class="py-1 rounded px-5 bg-green-600 text-white" v-if="organization.joined">Open</button>
            <button class="py-1 rounded px-6 new-organ text-white" v-else @click="joinOrganization(organization)">Join</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState,mapMutations } from "vuex"
import { workspaceAPI } from "../../../lib/api"
import { joinWorkspace } from "../../../lib/workspace"
export default {
    name: "OrganizationItem",
    props: {
        organization: {
            type: Object,
            required: true
        },
        userJoin: {
            type: Function,
            required: true
        }
    },
    data(){
        return {
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
        joinOrganization(organization){
            if(organization.joined==false){
                joinWorkspace(this.token,this.organization._id,[{_id: this.user._id}])
                .then(response=>{
                    console.log(response.data);
                    if(response.data.err){
                        alert("SOMETHING WENT WRONG!")
                    }else{
                        let appFlow = this.userAppFlow
                        let userworkspaces = this.userWorkspaces
                        let added = false
                        for(let i=0; i<userworkspaces.length;i++){
                            if(userworkspaces[i].code==this.organization.code){
                                added=true
                                break;
                            }
                        }
                        if(added==false){
                            userworkspaces.push(this.organization)
                            this.setUserWorkspaces(userworkspaces)
                        }
                        appFlow.hasWorkspaces = true
                        this.setUserAppFlow(appFlow)
                        this.userJoin(this.organization)
                        alert(`You Joined ${this.organization.name}.`)
                    }
                })
                .catch(err=>{
                    alert(err.message)
                })
            }
        }
    }
}
</script>

<style scoped>
    .new-organ {
        background-color: #1a65e6;
        border-radius: 4px;
    }
    .new-organ:hover {
        background-color: #003eaa;
    }
</style>