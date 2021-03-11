<template>
    <div>
        <div class="reply relative pb-4 hover:bg-gray-50">
            <img :src="
                getUser()._id==message.sender_id && getUser().profile_pic.updated==true? getUser().profile_pic.url:
                message.sender_info.profile_pic.updated==true? message.sender_info.profile_pic.url:
                require('../../../../assets/images/avatar4.png')
            " class="h-8 w-8 rounded-full inline-block" alt=""
            />
            <span class="font-semibold ml-2 text-sm name">{{message.sender_info.display_name}}</span>
            <span class="sent-date ml-4 text-sm">{{message.sent_at | formatDate}}</span>
            <p class="ml-6 text-left px-4 reply__content">
                {{message.content}}
            </p>
            <div class="menu bg-white border flex px-3 py-1 rounded-lg">
                <span class="hover:bg-indigo-200 cursor-pointer rounded-md p-1">
                    <i class="ri-save-line"></i>
                </span>
                <span v-if="getUser().email==message.sender_info.email" class="hover:bg-indigo-200 cursor-pointer rounded-md p-1">
                    <i class="ri-edit-line"></i>
                </span>
                <span v-if="getUser().email==message.sender_info.email" class="hover:bg-indigo-200 cursor-pointer rounded-md p-1 text-red-800">
                    <i class="ri-delete-bin-6-line"></i>
                </span>
                <span class="hover:bg-indigo-200 cursor-pointer rounded-md p-1">
                    <i class="ri-menu-2-line"></i>
                </span>
            </div>
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
.menu {
  position: absolute;
  display: none;
  position: absolute;
  top: 0;
  right: 0;

}
.menu span {
  display: inline-block;
  width: 30px;
  height: 30px;
  text-align: center;
  font-weight: bolder;
}
.reply:hover .menu {
  display: block;
}
</style>