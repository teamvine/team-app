<template>
  <div class="app_">
      <div class="header">
      </div>
      <div class="row inline-flex">
          <div class="sidebar flex-1">
              <div class="nav__">

              </div>
              <div class="contacts">

              </div>
          </div>
          <div class="chat_msgs flex-1"></div>
          <div class="chat_details flex-1"></div>
      </div>
  </div>
</template>

<script>
import Contacts from "../components/ChatPage/SideBar/SideBar";
export default {
 name:"TryChat",
 components:{
     Contacts,
 }
}
</script>

<style src="../assets/css/bootstrap.css"></style>
<style scoped>
    .app_{
        position: fixed;
        max-height: 100vh;
        min-height: 100vh;
    }
    .header{
        max-width: 75px;
        height:75px;
        padding:30px;
        width: 1000px;
        background-color: black;
    }
    .row{
        min-height: auto;
    }
    .nav{
        background-color: yellow;
    }
    .contacts{
        background-color: white;
    }
    .chat_msgs{
        background-color:purple;
    }
    .chat_details{
        background-color: dodgerblue;
    }
</style>