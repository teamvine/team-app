<template>
    <div class="home-view">
        <AppHeader/>
        <div class="body-view">
            <div class="main-page">
                <SideBarNav/>
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
    name: "Home"
}
</script>

<style scoped>
    .home-view {
        width: 100vw !important;
        height: 100vh !important;
        overflow-y: auto;
        overflow-x: auto;
        display: flex;
        flex-direction: column;
        background-color: rgb(223, 223, 223);
    }
    .body-view {
        width: 100%;
        flex: 0 100%;
        background: rgb(28, 90, 148);
        color: white;
    }
    .main-page {
        width: 100% !important;
        height: 100% !important;
        overflow-y: auto;
        overflow-x: auto;
        display: flex;
        flex-direction: row;
        background-color: rgb(211, 175, 175);
    }
</style>