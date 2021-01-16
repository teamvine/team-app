<template>
    <div>
      <div class="reply pb-4">
          <img src="../../../../assets/images/avatar4.png" class="h-8 w-8 rounded-full inline-block" alt="">
          <span class="font-semibold ml-2 text-sm name">{{message.sender_info.display_name}}</span>
          <span class="sent-date ml-4 text-sm">{{message.sent_at | formatDate}}</span>
          <p class="font-medium text-left px-4 reply__content">
            {{message.content}}
          </p>
      </div>
    </div>
</template>

<script>
    import {Filters} from '../../../../lib/functions'
    export default {
        name: "Reply",
        props: {
            message: {
                type: Object,
                required: true
            },
        },
        filters: {
            formatDate: (value)=>{
                return Filters.formatTimestamp_v2(value)
            }
        }
    }
</script>

<style scoped>
.reply__content {
  word-wrap: break-word
}
.reply .name {
    font-family: Arial, Helvetica, sans-serif;
}
</style>