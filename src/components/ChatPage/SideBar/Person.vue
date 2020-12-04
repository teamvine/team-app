<template>
  <div class="contact py-1 px-2">
    <!-- <img
      :src="contact.img"
      :alt="contact.name"
      width="38"
      height="38"
      class="w-7 d-inline-block h-7 rounded-full bg-gray-400 border-2 border-white"
    /> -->
    <div class="">
      <img
        :src="contact.img"
        class="left-0 top-0 w-full h-full rounded-full object-cover"
      />
      <div
        :class="[contact.status=='online'? 'bg-green-400':'bg-red-600']"
        class="absolute rounded-full right-0 bottom-0 w-2 h-2"
      ></div>
    </div>
    <span class="contact-name"> {{ contact.name }}</span>
    <p class="contact-last-message">
      {{ contact.lastMessage.message }}
    </p>
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
  },
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
  background-color: rgba(0, 0, 0, 0.16);
}
.contact div div {
  display: block;
  position: absolute;
  width: 10px;
  height: 10px;
}
</style>