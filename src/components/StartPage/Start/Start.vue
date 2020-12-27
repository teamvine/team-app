<template>
    <div class="start">
        <!-- <NoWorkspace></NoWorkspace> -->
        <Organizations :organizations="workspaces"></Organizations>
    </div>
</template>

<script>
import NoWorkspace from "./NoWorkspace/NoWorkspace"
import Organizations from "./Workspaces/Workspaces"
export default {
    name: "start",
    components: {
        NoWorkspace,Organizations
    },
    data(){
        return {
            workspaces: [
                {
                    name: "RCA Group",
                    type: "private"
                },
                {
                    name: "NYABIHU TVET",
                    type: "private"
                },
                {
                    name: "FT Group",
                    type: "public"
                },
                {
                    name: "Coders Hub",
                    type: "public"
                },
                {
                    name: "RCA Forum",
                    type: "private"
                },
                {
                    name: "Gamers League",
                    type: "public"
                }
            ]
        }
    },
}
</script>

<style scoped>
.start {
    /* all: inherit; */
}
</style>