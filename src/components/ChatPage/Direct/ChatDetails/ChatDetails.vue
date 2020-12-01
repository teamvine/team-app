<template>
    <div class="details">
        <div class="chat-detls flex flex-wrap">
            <div class="user-card shadow-md bg-white ml-2 mr-2 rounded-md">
                <div class="user-picture rounded-t-md">
                    <!-- <img src="../../../../assets/images/bg1.jpg" class="rounded-md" alt="bg image"> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ChatDetails"
}
</script>

<style scoped>
    .details {
        height: 100%;
        flex: 0 0 320px;
    }
    .chat-detls {
        height: 100%;
        width: 100%;
        display: block;
        float: none;
        flex: none;
    }
    .user-card {
        margin-top: 10px;
    }
    .user-picture {
        flex: none;
        display: block;
        height: 15vh;
        width: 100%;
        overflow: hidden;
        background: #000;
    }
    .user-picture img {
        width: 100%;
    }
</style>