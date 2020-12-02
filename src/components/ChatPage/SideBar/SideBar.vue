<template>
    <div class="side-bar-view">
        <div class="upper-part p-4">
            <div class="relative">
                <div class="flex flex-wrap items-stretch w-full mb-4 relative">
                    <input type="text" :disabled="false" name="searchtext" id="searchtext"
                        placeholder="Search messages..."
                        class="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border h-10 border-grey-light rounded rounded-r-none px-3 relative" />
                    <div class="flex -mr-px">
                        <button
                            class="srchtextbtn flex items-center leading-normal rounded rounded-l-none border border-l-0 border-grey-light px-3 whitespace-no-wrap bg-white text-sm hover:bg-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18">
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path
                                    d="M11 2c4.968 0 9 4.032 9 9s-4.032 9-9 9-9-4.032-9-9 4.032-9 9-9zm0 16c3.867 0 7-3.133 7-7 0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7zm8.485.071l2.829 2.828-1.415 1.415-2.828-2.829 1.414-1.414z"
                                    fill="rgba(50,152,219,1)" /></svg>
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <button class="btn btn mr-3 sort-by active">personal</button>
                <button class="btn btn mr-3 sort-by">Channel</button>
                 <div class="flex flex-wrap w-full mb-3 mt-4 relative">
                     <div>
                        <span> Sort by </span>
                     </div>
                     <div class="more-options">
                        <span class="more-icon">
                            <button>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M12 3c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 14c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-7c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" fill="rgba(255,255,255,1)" /></svg>
                            </button>
                        </span>
                     </div>
                 </div>
            </div>
        </div>
        <div class="my-contacts">
            <div v-for="contact in contacts" :key="contact._id">
                <img :src="contact.img" :alt="contact.name" width="38" height="38"
                    class="w-7 d-inline-block h-7 rounded-full bg-gray-100 border-2 border-white" />
                <span class="contact-name"> {{ contact.name }}</span>
                <p class="contact-last-message">
                    {{contact.lastMessage.message}}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "SideBar",

    data() {
        return {
            contacts:[
                {
                    _id:1,
                    name:"Felix wazekwa",
                    img:"https://cdn.vuetifyjs.com/images/john.jpg",
                    status:'active',
                    totalUnreads:2,
                    lastMessage:{
                        sender:"817678hnabgah",
                        receiver:87167891,
                        message:"Talking to each other now",
                        createdAt:"29/11/2020T18:20:20:67"
                    }
                },
                {
                    _id:2,
                    name:"Felix wazekwa",
                    img:"https://avatars0.githubusercontent.com/u/9064066?v=4&s=460",
                    status:'active',
                    totalUnreads:2,
                    lastMessage:{
                        sender:"817678hnabgah",
                        receiver:87167891,
                        message:"Talking to each other now",
                        createdAt:"29/11/2020T18:20:20:67"
                    }
                },
                {
                    _id:3,
                    name:"Felix wazekwa",
                    img:"https://www.best4geeks.com/wp-content/uploads/2018/08/50-cute-girl-profile-picture.jpg",
                    status:'active',
                    totalUnreads:2,
                    lastMessage:{
                        sender:"817678hnabgah",
                        receiver:87167891,
                        message:"Talking to each other now",
                        createdAt:"29/11/2020T18:20:20:67"
                    }
                },
                {
                    _id:4,
                    name:"Felix wazekwa",
                    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMBIK4eAtEa9PyvXSW29AGTc0hARu74KkOCA&usqp=CAU",
                    status:'active',
                    totalUnreads:2,
                    lastMessage:{
                        sender:"817678hnabgah",
                        receiver:87167891,
                        message:"Talking to each other now",
                        createdAt:"29/11/2020T18:20:20:67"
                    }
                },
                {
                    _id:5,
                    name:"Felix wazekwa",
                    img:"https://save-ohno.s3.amazonaws.com/uploads/team/image/9/babson-code.png",
                    status:'active',
                    totalUnreads:2,
                    lastMessage:{
                        sender:"817678hnabgah",
                        receiver:87167891,
                        message:"I'm having one of those days that make me realize how lost I'd be without you.Do you know what the best girlfriend in the world deserves?",
                        createdAt:"29/11/2020T18:20:20:67"
                    }
                },
                {
                    _id:6,
                    name:"Felix wazekwa",
                    img:"https://cdn.vuetifyjs.com/images/john.jpg",
                    status:'active',
                    totalUnreads:2,
                    lastMessage:{
                        sender:"817678hnabgah",
                        receiver:87167891,
                        message:"Talking to each other now",
                        createdAt:"29/11/2020T18:20:20:67"
                    }
                },
                {
                    _id:7,
                    name:"Felix wazekwa",
                    img:"https://avatars0.githubusercontent.com/u/9064066?v=4&s=460",
                    status:'active',
                    totalUnreads:2,
                    lastMessage:{
                        sender:"817678hnabgah",
                        receiver:87167891,
                        message:"Talking to each other now",
                        createdAt:"29/11/2020T18:20:20:67"
                    }
                },
                {
                    _id:8,
                    name:"Felix wazekwa",
                    img:"https://www.best4geeks.com/wp-content/uploads/2018/08/50-cute-girl-profile-picture.jpg",
                    status:'active',
                    totalUnreads:2,
                    lastMessage:{
                        sender:"817678hnabgah",
                        receiver:87167891,
                        message:"Talking to each other now",
                        createdAt:"29/11/2020T18:20:20:67"
                    }
                },
                {
                    _id:9,
                    name:"Felix wazekwa",
                    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMBIK4eAtEa9PyvXSW29AGTc0hARu74KkOCA&usqp=CAU",
                    status:'active',
                    totalUnreads:2,
                    lastMessage:{
                        sender:"817678hnabgah",
                        receiver:87167891,
                        message:"Talking to each other now",
                        createdAt:"29/11/2020T18:20:20:67"
                    }
                },
                {
                    _id:10,
                    name:"Felix wazekwa",
                    img:"https://save-ohno.s3.amazonaws.com/uploads/team/image/9/babson-code.png",
                    status:'active',
                    totalUnreads:10,
                    lastMessage:{
                        sender:"817678hnabgah",
                        receiver:87167891,
                        message:"I'm having one of those days that make me realize how lost I'd be without you.Do you know what the best girlfriend in the world deserves?",
                        createdAt:"29/11/2020T18:20:20:67"
                    }
                },
                {
                    _id:11,
                    name:"Felix wazekwa",
                    img:"https://cdn.vuetifyjs.com/images/john.jpg",
                    status:'active',
                    totalUnreads:2,
                    lastMessage:{
                        sender:"817678hnabgah",
                        receiver:87167891,
                        message:"Talking to each other now",
                        createdAt:"29/11/2020T18:20:20:67"
                    }
                },
                {
                    _id:12,
                    name:"Felix wazekwa",
                    img:"https://avatars0.githubusercontent.com/u/9064066?v=4&s=460",
                    status:'active',
                    totalUnreads:2,
                    lastMessage:{
                        sender:"817678hnabgah",
                        receiver:87167891,
                        message:"Talking to each other now",
                        createdAt:"29/11/2020T18:20:20:67"
                    }
                },
                {
                    _id:13,
                    name:"Felix wazekwa",
                    img:"https://www.best4geeks.com/wp-content/uploads/2018/08/50-cute-girl-profile-picture.jpg",
                    status:'active',
                    totalUnreads:2,
                    lastMessage:{
                        sender:"817678hnabgah",
                        receiver:87167891,
                        message:"Talking to each other now",
                        createdAt:"29/11/2020T18:20:20:67"
                    }
                },
                {
                    _id:14,
                    name:"Felix wazekwa",
                    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMBIK4eAtEa9PyvXSW29AGTc0hARu74KkOCA&usqp=CAU",
                    status:'active',
                    totalUnreads:2,
                    lastMessage:{
                        sender:"817678hnabgah",
                        receiver:87167891,
                        message:"Talking to each other now",
                        createdAt:"29/11/2020T18:20:20:67"
                    }
                },
                {
                    _id:15,
                    name:"Felix wazekwa",
                    img:"https://save-ohno.s3.amazonaws.com/uploads/team/image/9/babson-code.png",
                    status:'active',
                    totalUnreads:2,
                    lastMessage:{
                        sender:"817678hnabgah",
                        receiver:87167891,
                        message:"I'm having one of those days that make me realize how lost I'd be without you.Do you know what the best girlfriend in the world deserves?",
                        createdAt:"29/11/2020T18:20:20:67"
                    }
                },
            ]
        };
    },
}
</script>

<style scoped>
    .upper-part{
        background-color: #4a81e2;
        color:white;
    }
    .sort-by{
        color:black;
    }
    .sort-by.active{
        color:white ;
    }
    .my-contacts{
        background-color: white;
        color: black;
        position: relative;
    }
    .side-bar-view {
        min-height: 100%;
        max-height: 100%;
        flex: 0 0 320px;
        background-color: #fff;
        overflow-y: scroll;
    }
    .d-inline-block{
        display:inline-block;
    }
    .contact-name{
        font-weight:600;
        /* font-family: 'Roboto'; */
    }
    .contact-last-message{
        font-weight: 400;
        font-family: 'inter';
        margin-left: 38px;
        margin-top:-10px;
        font-size: 95%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .sort-by.active{
        background-color: white;
        color: #4a81e2;
        padding:4px 15px;
        border-radius: 15px;
    }
    input{
        color:rgb(46, 44, 44) !important;
    }
    button{
        outline: none !important;
    }
    .more-options{
        position: absolute;
        right: 0 !important;
    }
    .side-bar-view::-webkit-scrollbar {
        width: 6px;
    }
    .side-bar-view::-webkit-scrollbar-thumb {
        background-color: rgb(212, 212, 212);
    }
</style>
