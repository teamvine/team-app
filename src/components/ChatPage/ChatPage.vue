<template>
  <div class="chat-view">
      <SideBar 
        v-show="w_inner_width>800? true:w_inner_width<=800 && show_col=='sidebar'? true: false"/>
      <div class="main-chat-view"
        v-show="w_inner_width>800? true:w_inner_width<=800 && show_col=='chat'? true: false">
        <router-view/>
      </div>
  </div>
</template>

<script>
import SideBar from "./SideBar/SideBar"
import { mapState } from "vuex"
export default {
    name: "ChatPage",
    components: {
        SideBar
    },
    data(){
        return {
            w_inner_width: window.innerWidth
        }
    },
    computed:{
        ...mapState({
            show_col: state=> state.chat.show_col
        })
    },
    mounted() {
        window.addEventListener('resize', ($event)=>{
            this.w_inner_width = window.innerWidth
        })
    }
}
</script>

<style scoped>
    .chat-view {
        height: 100%;
        flex: 0 100%;
        display: flex;
        overflow: hidden;
        flex-direction: row;
    }
    .main-chat-view {
        width: 100%;
        height:100%;
        max-height: 100% !important;
        overflow: hidden;
    }
    @media only screen and (max-width: 800px){
        .chat-view {
            flex-direction: column;
        }
    }
</style>