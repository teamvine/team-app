<template>
  <div class="sidebar-view">
      <div class="my-auto">
          <div class="text-center">Icon 1</div>
      </div>
  </div>
</template>

<script>
export default {
    name: "SidebarNav"
}
</script>

<style scoped>
    .my-auto{
        position: absolute;
        margin-top: auto 0;
    }
    .sidebar-view {
        height: 100%;
        flex: 0 50px;
        background: #ffffff;
        color:black;
        position: relative;
    }
</style>