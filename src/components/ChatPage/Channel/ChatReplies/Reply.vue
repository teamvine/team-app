<template>
  <div>
      <div class="reply pb-4">
          <img src="https://avatars3.githubusercontent.com/u/51080275?s=460&u=651260430403e927889182f5f108ec4e639f01eb&v=4" class="h-8 w-8 rounded-full inline-block" alt="">
          <span class="font-semibold ml-2">{{message.sender_info.full_name}}</span>
          <span class="sent-date ml-4">{{message.time}}</span>
          <p class="font-medium text-left">
              {{message.content}}
          </p>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Reply",
        props: {
            message: {
                type: Object,
                required: true
            },
        }
    }
</script>

<style>

</style>