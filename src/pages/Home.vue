<template>
    <div class="home-view">
        <AppHeader/>
        <div class="body-view">
            <div class="main-page">
                <SideBarNav v-if="pageName!='Start' && pageName!='NewWorkspace' && pageName!='FindWorkspace'"/>
                <router-view/>
            </div>
        </div>
  </div>
</template>

<script>
import AppHeader from "../components/Header/Header"
import SideBarNav from "../components/SidebarNav/SidebarNav"
export default {
  components: { SideBarNav,AppHeader },
    name: "Home",
    data(){
        return {
            pageName: this.$route.name
        }
    },
    mounted(){
    }
}
</script>

<style scoped>
    .home-view {
        width: 100% !important;
        height: 100vh !important;
        overflow-y: auto;
        overflow-x: auto;
        display: flex;
        flex-direction: column;
        background:#ffffff;
        /* background: #000; */
        /* background-color:#F3FAFB; */
    }
    .body-view {
        width: 100%;
        height: 50pc;
        min-height: 350px;
        /* background: rgb(28, 90, 148);
        color: white; */
    }
    .main-page {
        width: 100% !important;
        height: 100% !important;
        overflow-y: auto;
        overflow-x: auto;
        display: flex;
        flex-direction: row;
    }
    *::-webkit-scrollbar {
        width: 6px;
    }
    *::-webkit-scrollbar-thumb {
        background-color: rgb(212, 212, 212);
    }
</style>