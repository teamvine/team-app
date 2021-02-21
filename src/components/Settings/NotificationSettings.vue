<template>
  <div class="notifications-settings">
    <div class="w-full mb-4 mt-10 pb-2 space-x-4 space-y-1 pt-6">
      <div class="col mx-4 shadow border pt-0">
        <h4 class="text-md">Notification Settings</h4>
        <div>
          <label class="md:w-2/3 block text-gray-500 font-bold">
            <input class="mr-2 leading-tight" type="checkbox" v-model="notification_settings.email_notifications">
            <span>
              Email Notifications
            </span>
          </label>
          <label class="md:w-2/3 block text-gray-500 font-bold">
            <input class="mr-2 leading-tight" type="checkbox" v-model="notification_settings.desktop_notifications">
            <span>
              Desktop Notifications
            </span>
          </label>
          <label class="md:w-2/3 block text-gray-500 font-bold">
            <input class="mr-2 leading-tight" type="checkbox" v-model="notification_settings.mobile_notifications">
            <span>
              Mobile Notifications
            </span>
          </label>

          <h4 class="pt-4">Message Notifications</h4>
          <label for="toogleA" class="flex items-center cursor-pointer">
            <div class="relative">
              <input id="toogleA" type="checkbox" class="hidden" v-model="notification_settings.turn_all_off"/>
              <div class="toggle__line w-10 h-4 bg-indigo-200 rounded-full shadow-inner" ></div>
              <div class="toggle__dot absolute w-6 h-6 bg-white rounded-full shadow inset-y-0 left-0"></div>
            </div>
            <div class="ml-3 text-gray-700 font-medium text">
              Turn All Notifications Off
            </div>
          </label>
          <label for="toogleB" class="flex items-center cursor-pointer">
            <div class="relative">
              <input checked id="toogleB" type="checkbox" class="hidden" v-model="notification_settings.hide_message_content"/>
              <div class="toggle__line w-10 h-4 bg-indigo-200 rounded-full shadow-inner" ></div>
              <div class="toggle__dot absolute w-6 h-6 bg-white rounded-full shadow inset-y-0 left-0"></div>
            </div>
            <div class="ml-3 text-gray-700 font-medium text">
              Hide Message Content
            </div>
          </label>
          <label for="toogleC" class="flex items-center cursor-pointer">
            <div class="relative">
              <input checked id="toogleC" type="checkbox" class="hidden" v-model="notification_settings.play_sound"/>
              <div class="toggle__line w-10 h-4 bg-indigo-200 rounded-full shadow-inner" ></div>
              <div class="toggle__dot absolute w-6 h-6 bg-white rounded-full shadow inset-y-0 left-0"></div>
            </div>
            <div class="ml-3 text-gray-700 font-medium text">
              Play Sound
            </div>
          </label>
          <button @click="saveSettings" class="button-blue mt-4 py-3">Save changes</button>
        </div>
      </div>
      <div class="col mx-4 shadow border">
        <h4 class="text-md">Notification Sound</h4>
        <span>There are many Options to set your notification sound audio tone.</span>
        <h4>Select from our system</h4>
        <div class="flex my-3 bg-indigo-100 py-0 ">
          <button class="px-3 border-r-2 border-white focus:outline-none">
            <svg class="inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zM10.622 8.415a.4.4 0 0 0-.622.332v6.506a.4.4 0 0 0 .622.332l4.879-3.252a.4.4 0 0 0 0-.666l-4.88-3.252z" fill="rgba(52,72,94,1)"/></svg>
          </button>
          <select class="w-full form-select inline-block bg-transparent border-none rounded-0 mt-1 font-bold">
            <option>Bip Bip</option>
            <option>Bing Bing</option>
          </select>
        </div>
        <span class="mt-3">If you don't feel to use our system sounds,<br> You can upload your prefered soun.</span>
        <button class="button-blue mt-4">Upload Sound</button>
      </div>
    </div>
  </div>
</template>

<script>
import { updateNotificationSettings } from '../../lib/settings'
import { mapGetters } from 'vuex'
export default {
  name: "NotificationSettings",
  data(){
    return {
      notification_settings: {
        email_notifications: true,
        mobile_notifications: false,
        desktop_notifications: false,
        turn_all_off: false,
        hide_message_content: false,
        play_sound: true
      }
    }
  },
  methods: {
    ...mapGetters("all", ["getUser", "getToken"]),
    saveSettings(){
      updateNotificationSettings(this.getToken(), this.getUser()._id, this.notification_settings)
       .then(response=> {
         if(!response.data.err) {
           alert("Account Updated!")
         }
       }).catch(error=> console.log(error.message))
    }
  }
}
</script>

<style scoped>
* {
  font-family:Arial, Helvetica, sans-serif;
}
.notifications-settings {
    width: 100%;
    height: 100%;
}
.col {
  display: inline-block;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: 4% 6%;
  background-color: #fff;
  width: 92%;
}

label input[type='checkbox'] {
  width: 20px;
  height: 20px;
  margin-top: 2%;
  border: 2px solid #b9b9b9;
  border-radius: 0px;
}
.col h4 {
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  margin-bottom: 2%;
  margin-top: 5%;
  font-family: 20px;
}
.toggle__dot {
  top: -.25rem;
  left: -.25rem;
  transition: all 0.3s ease-in-out;
}

label span, .text {
  font-size: 101%;
  color: black;
  margin-bottom: 2%;
}

.text {
  margin-bottom: 2%;
}

input:checked ~ .toggle__dot {
  transform: translateX(100%);
  background-color: #0066ff;
}

.button-blue {
  padding: 9px 10px;
  width: 100%;
  font-weight: bold;
  background-color: #0066ff;
  color: white;
}

.button-blue:hover, .button-blue:focus {
  background-color: #0041a3;
}

@media only screen and (min-width: 1000px){
  .col {
    width: 46%;
    margin-top: 0%;
  }
}
</style>