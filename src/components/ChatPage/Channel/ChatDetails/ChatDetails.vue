<template>
  <div class="details">
        <div class="chat-detls flex flex-wrap">
            <div class="channel-card shadow-md bg-white mr-2 rounded-md">
                <p>Hello world</p>
                <p>Hello world</p>
                <p>Hello world</p>
                <p>Hello world</p>
                <p>Hello world</p>
                <p>Hello world</p>
                <p>Hello world</p>
                <p>Hello world</p>
                <p>Hello world</p>
                <p>Hello world</p>
                <p>Hello world</p>
                <p>Hello world</p>
                <p>Hello world</p>
                <p>Hello world</p>
                <p>Hello world</p>
                <p>Hello world</p>
                <p>Hello world</p>
                <p>Hello world</p>
                <p>Hello world</p>
                <p>Hello world</p>
                <p>Hello world</p>
                <p>Hello world</p>
                <p>Hello world</p>
                <p>Hello world</p>
                <p>Hello world</p>
                <p>Hello world</p>
                <p>Hello world</p>
                <p>Hello world</p>
                <p>Hello world</p>
                <p>Hello world</p>
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
        flex: 0 0 300px;
        overflow: auto;
    }
    .details::-webkit-scrollbar {
        width: 6px;
    }
    .details::-webkit-scrollbar-thumb {
        background-color: rgb(212, 212, 212);
    }
    .chat-detls {
        height: 100%;
        width: 100%;
        display: block;
        float: none;
        flex: none;
    }
    .channel-card {
        margin-top: 10px;
        min-height: 100%;
    }
</style>