<template>
    <div class="side-bar-view">
        <div class="upper-part p-4">
            <div class="search">
            <form class="">
              <div class="input-group mb-3 input-group-lg">
                  <input type="text" id="search-txt" class="form-control" placeholder="Paste url here..."
                         aria-label="url to shorten" aria-describedby="basic-addon2" />
                  <div class="input-group-append">
                      <button class="btn btn-primary btn-lg" type="button" >Shorten</button>
                  </div>
              </div>
          </form>
            </div>
            <div class="m-4 p-4">
                <button class="btn btn mr-3 sort-by active">personal</button>
                <button class="btn btn mr-3 sort-by">Channel</button>
            </div>
        </div>
        <div class="my-contacts p-4">
            <div v-for="contact in contacts" :key="contact._id">
                <img :src="contact.img" :alt="contact.name" width="38" height="38" class="w-7 d-inline-block h-7 rounded-full bg-gray-100 border-2 border-white" />
               <span class="contact-name">  {{ contact.name }}</span>
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
        background-color: #1A94FF;
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
        flex: 0 0 300px;
        background-color: #fff;
        color: white;
        overflow-y: scroll;
    }
    .d-inline-block{
        display:inline-block;
    }
    .contact-name{
        font-weight:800;
    }
    .contact-last-message{
        font-weight: 200;
        font-family: 'PoppinsThin';
        margin-left: 38px;
        margin-top:-10px;

        white-space: nowrap;
        width: 300px;
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>
