<template>
  <div class="contact py-2 px-2">
    <img
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
    />
    <span class="contact-name text-sm"> #{{ channel.name }}</span><br>
    <p class="contact-last-message mt-3">
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
.contact:hover {
    background: #f0f6fc;
    cursor: pointer;
}
.d-inline-block {
  display: inline-block;
}
.contact-name {
  font: unset;
  font-weight: 600;
  font-size: 12 !important;
  /* font-family: 'Roboto'; */
}
.contact-last-message {
  font-weight: 400;
  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  margin-left: 38px;
  margin-top: -10px;
  font-size: 90%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: rgba(0, 0, 0);
}
.contact .icon {
  width: 30px;
  height: 30px;
  display: inline-block;
}
</style>