<template>
  <div id="app">
    <router-view/>
  </div>
</template>


<script>
export default {
  name: "App",
  mounted(){
    this.$socket.client.open()
    // this.$socket.client.emit("joinTest",{id: "123"})
  },
  beforeDestroy() {
    this.$socket.client.close();
  },
}
</script>

<style src="./assets/css/tailwind.css"></style>
<style src="./assets/css/index.css"></style>
<style src="../node_modules/vue-code-highlight/themes/prism-coy.css"></style>
