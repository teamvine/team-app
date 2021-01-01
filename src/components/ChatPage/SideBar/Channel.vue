<template>
  <div class="contact py-4 px-2" :class="[isCurrent(channel)? 'active':'']" @click="switchChannel(channel)">
    <span class="contact-name font-bold px-3"> #{{ channel.name }}</span><br>
    <!-- <p class="contact-last-message px-3 mt-3 pt-3 font-bold text-gray-700">
      {{ channel.description }}
    </p> -->
  </div>
</template>

<script>
export default {
  name: "Channel",
  props: {
      channel: {
          type: Object,
          required: true
      },
      switchChannel: {
        type: Function,
        required: true
      },
      isCurrent: {
        type: Function,
        required: true
      }
  }
};
</script>

<style scoped>
.contact {
    border-bottom: 1px solid rgb(0, 0, 0, 0.05);
}
.contact.active,.contact:hover,.contact:hover div .contact-last-message,.contact:hover div .contact-name {
  background: rgba(3, 61, 221, 0.103);
  color: rgb(21, 75, 224);
  cursor: pointer;
  /* color: white; */
}
.d-inline-block {
  display: inline-block;
}
.contact-name {
  font-weight: bolder;
}
.contact-last-message {
  font-weight: normal;
  font-family: "LatoBold";
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