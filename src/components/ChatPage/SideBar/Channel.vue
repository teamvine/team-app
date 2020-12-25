<template>
  <div class="contact py-2 px-2">
    <!-- <img
      v-if="channel.type=='public'"
      width="38"
      height="38" 
      class="w-7 icon d-inline-block h-7 rounded-md border-2 border-white"
      src='../../../assets/images/public.png'
    />
    <img
      v-else
      src='../../../assets/images/private.png'
      width="38"
      height="38"
      class="w-7 d-inline-block h-7 icon rounded-md border-2 border-white"
    /> -->
    <span class="contact-name font-bold px-3"> #{{ channel.name }}</span><br>
    <p class="contact-last-message px-3 mt-3 pt-3 font-bold">
      {{ channel.description }}
    </p>
  </div>
</template>

<script>
export default {
  name: "Channel",
  props: {
      channel: {
          type: Object,
          required: true
      }
  }
};
</script>

<style scoped>
.contact {
    border-bottom: 1px solid rgb(0, 0, 0, 0.05);
}
.contact:hover,.contact:hover div .contact-last-message,.contact:hover div .contact-name {
  background:#3881fff3;
  cursor: pointer;
  color: white;
}
.d-inline-block {
  display: inline-block;
}
.contact-name {
  font-weight: bolder;
  font-size: 14 !important;
  /* font-family: 'Roboto'; */
}
.contact-last-message {
  font-weight: normal;
  font-family: Arial, Helvetica, sans-serif !important;
  /* margin-left: 38px; */
  margin-top: -10px;
  font-size: 90%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.contact .icon {
  width: 30px;
  height: 30px;
  display: inline-block;
}
</style>