<template>
    <div class="flex justify-center items-center py-2">
        <img src="../../assets/images/avatar4.png" class="border w-44" alt="">
    </div>
</template>

<script>
export default {
    name: 'ProfilePicture',
    props: {
        close: Function,
        user_picture: String
    },
    data(){
        return {

        }
    }
}
</script>

<style scoped>

</style>