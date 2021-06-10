<template>
  <div class="block w-full">
    <img
      class="w-full"
      style="display: block; max-width: 100% !important; max-height: 400px !important"
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
      croppedImageDataUri: ""
    };
  },
  methods: {
    getCrop() {
      if(this.cropper==null) return "";
      return this.cropper.getCroppedCanvas().toDataURL('image/jpeg', 100);
    }
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
      },
    });
  },
};
</script>

<style>
</style>