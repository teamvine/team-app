<template>
  <div class="settings-view">
      <div class="main-settings-view">
            <div class="settings__left">
                <Sidebar/>
            </div>
            <div class="settings__right">
                <router-view></router-view>
            </div>
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
        overflow: hidden;
        flex-direction: row;
    }
    .main-settings-view {
        width: 100%;
        height:100%;
        max-height: 100% !important;
        overflow: hidden;
    }
    @media only screen and (max-width: 800px){
        .settings-view {
            flex-direction: column;
        }
    }
</style>