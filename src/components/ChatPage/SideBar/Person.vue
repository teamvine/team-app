<template>
  <div class="contact py-1 px-2">
    <img
      :src="contact.img"
      :alt="contact.name"
      width="38"
      height="38"
      class="w-7 d-inline-block h-7 rounded-full bg-gray-400 border-2 border-white"
    />
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
.contact img {
    width: 40px;
    height: 40px;
}
</style>