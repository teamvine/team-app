<template>
  <div>
      <cropper
		:src="img"
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
            img: 'https://images.pexels.com/photos/4323307/pexels-photo-4323307.jpeg',
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