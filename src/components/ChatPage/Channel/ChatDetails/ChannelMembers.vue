<template>
    <div>
        <div
            v-for="member in members"
            :member="member"
            :key="member._id+'-key'"
            class="hover:bg-white cursor-pointer w-full flex items-center px-1 mt-2">
            <div class="flex items-center">
                <img src="../../../../assets/images/avatar4.png" alt="My profile" class="w-10 h-10 rounded-full">
            </div>
            <div class="flex-grow px-3">
                <div class="font-semibold text-gray-900 text-sm font-arial">
                    {{member.full_name}}
                </div>
                <div class="text-sm text-gray-500">
                    @{{member.display_name}}
                </div>
            </div>
            <div class="p-2" v-if="channel_admin_id==member._id">
                <span class="w-4 h-4 rounded-full order-1">🏅</span>
            </div>
        </div>
  </div>
</template>

<script>
export default {
    name: "ChannelMembers",
    props: {
        members: Array,
        channel_admin_id: String
    }
}
</script>

<style scoped>
.font-arial {
    font-family: Arial, Helvetica, sans-serif
}
</style>