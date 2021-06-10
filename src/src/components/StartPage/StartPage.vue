<template>
    <div class="start-view">
        <div class="main-start-view flex flex-col">
            <router-view></router-view>
            <Footer></Footer>
        </div>
    </div>
</template>

<script>
import Footer from "./Footer/Footer"
export default {
    name: "StartPage",
    components: {
        Footer
    }
}
</script>

<style scoped>
    .start-view {
        height: 100%;
        flex: 0 0 100%;
        /* background: rgb(107, 201, 230); */
        /* color: white; */
    }
    .main-start-view {
        width: 100% !important;
        height: 100% !important;
        overflow-y: auto;
        overflow-x: auto;
        /* overflow: hidden; */
        /* background: #000; */
        /* display: flex;
        flex-direction: row; */
        /* background-color: rgb(211, 175, 175); */
    }
</style>