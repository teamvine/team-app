<template>
  <div class="message-item mt-2">
    <div class="flex">
      <img src="../../../../assets/images/avatar2.jpg" class="wh-60 rounded-lg img" />
      <div class="flex-1 px-3">
        <div class="text-md text-gray-900 mb-1">
          <b class="font-bold inter">Dusengimana Felix</b>
        </div>
        <span class="text-gray-800 msg-body inter">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque veniam
          necessitatibus accusamus nulla! Magnam odio ad id. Nobis, dolore
          numquam est molestiae consequatur id ducimus odit sed commodi laborum
          cupiditate?
          <div class="w-full mt-3">
            <div class="flex">
              <img
                src="../../../../assets/images/avatar1.jpg"
                class="w-10 h-10 rounded-lg img"
              />
              <div class="flex-1 px-3">
                <div class="text-sm text-gray-900 mb-1">
                  <b class="font-bold inter reply-name">Harerimana Egide</b>
                </div>
                <span class="text-gray-800 text-sm inter">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                  veniam necessitatibus accusamus nulla! Magnam odio ad id.
                  Nobis, dolore numquam est molestiae consequatur id ducimus
                  odit sed commodi laborum cupiditate?
                </span>
              </div>
            </div>
          </div>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MessageItem",
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap');
.inter {
  font-size: 14;
  font-family: Arial, Helvetica, sans-serif !important;
}
.reply-name{
  font-size: 12;
}
.msg-body {
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif !important;
}
.wh-60 {
  width: 3em;
  height: 3em;
}
.media-body {
  flex: 1;
}
.media-body,
.media-body :last-child {
  margin-bottom: 0;
}
.img {
  background-color: rgb(0, 0, 0,0.1);
}
</style>