<template>
  <div class="contact py-4 px-2" :class="[isCurrent(channel)? 'active':'']" @click="switchChannel(channel)">
    <span class="contact-name font-bold px-3">
      <svg xmlns="http://www.w3.org/2000/svg" v-if="channel.type=='public'" class="display: inline" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M6.235 6.453a8 8 0 0 0 8.817 12.944c.115-.75-.137-1.47-.24-1.722-.23-.56-.988-1.517-2.253-2.844-.338-.355-.316-.628-.195-1.437l.013-.091c.082-.554.22-.882 2.085-1.178.948-.15 1.197.228 1.542.753l.116.172c.328.48.571.59.938.756.165.075.37.17.645.325.652.373.652.794.652 1.716v.105c0 .391-.038.735-.098 1.034a8.002 8.002 0 0 0-3.105-12.341c-.553.373-1.312.902-1.577 1.265-.135.185-.327 1.132-.95 1.21-.162.02-.381.006-.613-.009-.622-.04-1.472-.095-1.744.644-.173.468-.203 1.74.356 2.4.09.105.107.3.046.519-.08.287-.241.462-.292.498-.096-.056-.288-.279-.419-.43-.313-.365-.705-.82-1.211-.96-.184-.051-.386-.093-.583-.135-.549-.115-1.17-.246-1.315-.554-.106-.226-.105-.537-.105-.865 0-.417 0-.888-.204-1.345a1.276 1.276 0 0 0-.306-.43zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
      <svg xmlns="http://www.w3.org/2000/svg" v-else class="display: inline" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M18 8h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2V7a6 6 0 1 1 12 0v1zM5 10v10h14V10H5zm6 4h2v2h-2v-2zm-4 0h2v2H7v-2zm8 0h2v2h-2v-2zm1-6V7a4 4 0 1 0-8 0v1h8z"/></svg>
      {{ channel.name }}
    </span><br>
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
.contact.active,.contact:hover,.contact:hover div .contact-last-message,.contact:hover div .contact-name,.contact:hover div .contact-name svg {
  background: rgba(3, 61, 221, 0.103);
  color: rgb(21, 75, 224);
  cursor: pointer;
  fill: rgb(21, 75, 224);
  /* color: white; */
}
.d-inline-block {
  display: inline-block;
}
.contact-name {
  font-size: 12;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold !important;
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