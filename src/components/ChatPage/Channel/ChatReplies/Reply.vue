<template>
    <div>
        <div class="reply pb-4">
            <img :src="
                getUser()._id==message.sender_id && getUser().profile_pic.updated==true? getUser().profile_pic.url:
                getCurrentDirectChatReceiver().profile_pic.updated==true? getCurrentDirectChatReceiver().profile_pic.url:
                require('../../../../assets/images/avatar4.png')
            " class="h-8 w-8 rounded-full inline-block" alt=""
            />
            <span class="font-semibold ml-2 text-sm name">{{message.sender_info.display_name}}</span>
            <span class="sent-date ml-4 text-sm">{{message.sent_at | formatDate}}</span>
            <p class="ml-6 text-left px-4 reply__content">
                {{message.content}}
            </p>
        </div>
    </div>
</template>

<script>
    import {Filters} from '../../../../lib/functions'
    import {mapGetters} from 'vuex'
    export default {
        name: "Reply",
        props: {
            message: {
                type: Object,
                required: true
            },
        },
         methods: {
            ...mapGetters("all", ["getUser"]),
            ...mapGetters("chat", ["getCurrentDirectChatReceiver"])
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