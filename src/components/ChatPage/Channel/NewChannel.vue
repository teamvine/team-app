<template>
  <vue-modal style="z-index: 2500" class="py-6 col-lg-9" name="NewChannel" :clickToClose="false" :scrollable="true" draggable=".drag-handler" height="auto" :reset="true" :adaptive="true">
      <nav class="flex drag-handler border-b items-center justify-between flex-wrap bg-teal p-6 py-2">
        <div class="flex items-center flex-no-shrink text-black mr-6">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="35" height="35"><path fill="none" d="M0 0h24v24H0z"/><path d="M2 8.994A5.99 5.99 0 0 1 8 3h8c3.313 0 6 2.695 6 5.994V21H8c-3.313 0-6-2.695-6-5.994V8.994zM20 19V8.994A4.004 4.004 0 0 0 16 5H8a3.99 3.99 0 0 0-4 3.994v6.012A4.004 4.004 0 0 0 8 19h12zm-6-8h2v2h-2v-2zm-6 0h2v2H8v-2z"/></svg>
          <span class="text-2xl tracking-tight ml-3 font-bold">Create Channel</span>
        </div>
        <div class="block">
          <button @click="closeAndGoBack" title="cancel" class="flex text-2xl ring-0 border-none items-center px-3 py-1 font-bold hover:text-gray-500">
           &times;
          </button>
        </div>
      </nav>
      <h1 class="text-2xl font-bold py-12 px-4">Form Goes Here</h1>
    </vue-modal>
</template>

<script>
export default {
    name: "NewChannel",
    mounted(){
        this.$modal.show("NewChannel")
    },
    methods: {
      closeAndGoBack(){
        this.$modal.hide('NewChannel')
        this.$router.back()
      }
    }
}
</script>

<style scoped>

</style>