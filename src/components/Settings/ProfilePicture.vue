<template>
    <div class="flex justify-center items-center py-2">
        <img 
        :src="(typeof(user_picture)=='object' && user_picture.updated==true? user_picture.url: require('../../assets/images/avatar4.png'))" 
        class="border w-56 h-56 rounded-md" alt=""/>
    </div>
</template>

<script>
export default {
    name: 'ProfilePicture',
    props: {
        close: Function,
        user_picture: Object
    },
    data(){
        return {

        }
    }
}
</script>

<style scoped>

</style>