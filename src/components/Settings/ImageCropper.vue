<template>
  <div class="block w-full">
    <img
      class="w-full"
      style="display: block; max-width: 100% !important"
      id="image_to_crop"
      :src="image_data_uri"
    />
  </div>
</template>

<script>
import "cropperjs/dist/cropper.min.css";
import Cropper from "cropperjs";
export default {
  name: "ImageCropper",
  props: {
    image_data_uri: {
      type: String,
    },
  },
  data() {
    return {
      cropper: null,
    };
  },
  methods: {
    change() {},
  },
  mounted() {
    this.cropper = new Cropper(this.$el.querySelector("#image_to_crop"), {
      aspectRatio: 1 / 1,
      viewMode: 1,
      autoCrop: true,
      dragMode: "move",
      minCropBoxWidth: 100,
      minCropBoxHeight: 100,
      cropBoxResizable: true,
      ready() {},
      crop(event) {
        console.log(event.detail.x);
        console.log(event.detail.y);
        console.log(event.detail.width);
        console.log(event.detail.height);
        console.log(event.detail.rotate);
        console.log(event.detail.scaleX);
        console.log(event.detail.scaleY);
      },
    });
  },
};
</script>

<style>
</style>