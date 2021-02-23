<template>
  <div>
      <cropper
		:src="image_data_uri"
		@change="change"
	/>
  </div>
</template>

<script>
import { Cropper } from 'vue-advanced-cropper';
import 'vue-advanced-cropper/dist/style.css';
export default {
    name: "ImageCropper",
    props: {
        image_data_uri: {
            type: String
        }
    },
    components: {
		Cropper,
    },
    data(){
      return {
      }
    },
    methods: {
		change({ coordinates, canvas }) {
			console.log(coordinates, canvas);
		},
	}
}
</script>

<style>

</style>