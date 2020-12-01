<template>
  <div class="message-item mt-2">
    <div class="flex">
      <img src="../../../../assets/images/avatar2.jpg" class="wh-60 rounded-lg" />
      <div class="flex-1 px-3">
        <div class="text-md text-gray-900 mb-1">
          <b class="font-bold">Dusengimana Felix</b>
        </div>
        <span class="text-gray-800 text-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque veniam
          necessitatibus accusamus nulla! Magnam odio ad id. Nobis, dolore
          numquam est molestiae consequatur id ducimus odit sed commodi laborum
          cupiditate?
          <div class="w-full mt-3">
            <div class="flex">
              <img
                src="../../../../assets/images/avatar1.jpg"
                class="w-10 h-10 rounded-lg"
              />
              <div class="flex-1 px-3">
                <div class="text-sm text-gray-900 mb-1">
                  <b class="font-bold">Harerimana Egide</b>
                </div>
                <span class="text-gray-800 text-sm">
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
</style>