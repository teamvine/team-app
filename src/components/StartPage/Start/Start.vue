<template>
    <div class="start">
        <NoWorkspace v-if="userWorkspaces.length<1"></NoWorkspace>
        <Organizations :organizations="userWorkspaces" v-else></Organizations>
    </div>
</template>

<script>
import { mapState } from "vuex"
import NoWorkspace from "./NoWorkspace/NoWorkspace"
import Organizations from "./Workspaces/Workspaces"
export default {
    name: "start",
    components: {
        NoWorkspace,Organizations
    },
    data(){
        return {}
    },
    computed: {
        ...mapState({
            userWorkspaces: state=> state.all.userWorkspaces
        })
    }
}
</script>

<style scoped>
</style>