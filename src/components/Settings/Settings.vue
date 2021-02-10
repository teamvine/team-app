<template>
  <div class="settings-view">
        <div class="settings__left border-r">
            <Sidebar/>
        </div>
        <div class="settings__right bg-white">
            <router-view></router-view>
        </div>
  </div>
</template>

<script>
import Sidebar from "./Sidebar"
export default {
    name: "Settings",
    components: {
        Sidebar
    }
}
</script>

<style scoped>
    .settings-view {
        height: 100%;
        flex: 0 100%;
        display: flex;
        overflow-y: auto;
        flex-direction: row;
    }
    .settings__left, .settings__right {
        height: 100%;
        min-height: 100%;
        /* max-height: 100%; */
    }
    .settings__left {
        flex: 0 0 340px;
        overflow-y: auto;
    }
    .settings__right {
        width: 100%;
        overflow-y: auto;
        /* background-color: rgb(0, 0, 0, 0.03); */
    }
    @media only screen and (max-width: 700px){
        .settings-view {
            flex-direction: column;
        }
    }
</style>