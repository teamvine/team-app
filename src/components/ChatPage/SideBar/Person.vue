<template>
  <div class="contact py-2 px-2 pl-3" :class="[isCurrent(contact)? 'active':'']" @click="switchDirectChat(contact)">
    <div class="">
      <img
        src="../../../assets/images/avatar4.png"
        class="left-0 top-0 w-full h-full rounded-full object-cover"
      />
      <div
        v-if="contact.status"
        :class="[contact.status=='online'? 'bg-green-400':'']"
        class="absolute rounded-full right-0 bottom-0 w-2 h-2"
      ></div>
    </div>
    <span class="contact-name ml-1"> {{ contact.full_name }}</span>
    <!-- <p class="contact-last-message text">
      {{ contact.lastMessage.message }}
    </p> -->
  </div>
</template>

<script>
export default {
  name: "Person",
  props: {
    contact: {
      type: Object,
      required: true,
    },
    switchDirectChat: {
      type: Function,
      required: true
    },
    isCurrent: {
      type: Function,
      required: true
    }
  },
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
}
.d-inline-block {
  display: inline-block;
}
.contact-name {
  font-weight: 600;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold !important;
}
.contact-last-message {
  font-weight: normal;
  font-family: "Lato";
  margin-left: 38px;
  margin-top: -10px;
  font-size: 90%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.contact div {
  display: inline-block;
  width: 35px;
  height: 100%;
  position: relative;
}
.contact div img {
  display: inline-block;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: rgb(0, 0, 0,0.05);
}
.contact div div {
  display: block;
  position: absolute;
  width: 10px;
  height: 10px;
}
</style>