<template>
  <div class="contact py-1 px-2">
    <img
      v-if="channel.type=='public'"
      width="38"
      height="38" 
      class="w-7 icon d-inline-block h-7 rounded-full border-2 border-white"
      src='../../../assets/images/group.svg'
    />
    <img
      v-else
      src='../../../assets/images/lock.svg'
      width="38"
      height="38"
      class="w-7 d-inline-block h-7 icon rounded-full border-2 border-white"
    />
    <span class="contact-name"> {{ channel.name }}</span>
    <p class="contact-last-message">
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
    background-color: rgb(0, 0, 0, 0.04);
    cursor: pointer;
}
.d-inline-block {
  display: inline-block;
}
.contact-name {
  font-weight: 600;
  /* font-family: 'Roboto'; */
}
.contact-last-message {
  font-weight: 400;
  font-family: "inter";
  margin-left: 38px;
  margin-top: -10px;
  font-size: 90%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: rgba(0, 0, 0, 0.884);
}
.contact .icon {
  width: 30px;
  height: 30px;
  display: inline-block;
}
</style>