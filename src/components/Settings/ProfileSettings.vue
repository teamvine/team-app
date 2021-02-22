<template>
  <div class="profile-settings">
      <div class="h-40 bg-gray-200"></div>
      <div class="text-center">
        <img class="inline-block  my-- w-32 h-32 rounded-full img-border" src="../../assets/images/avatar4.png" alt="profile img">
      </div>
    <div class="bg-white p-5 pt-8">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="bg-white py-6 px-6 rounded-sm shadow-md border">
          <h2 class="font-bold text-md font-arial">Change your information</h2>
          <div class="my-5 px-3">
            <div class="my-3">
              <label for="fname" class="text-md font-bold">Full Name</label>
              <input id="fname" type="text" class="block w-full my-1 bg-white border-0 border-gray-400 rounded-sm py-3 px-4 bg-gray-200" v-model="user.full_name">
            </div>
            <div class="my-3">
              <label for="dname" class="text-md font-bold">Display Name</label>
              <input id="dname" type="text" class="block w-full my-1 bg-white border-0 border-gray-400 rounded-sm py-3 px-4 bg-gray-200" v-model="user.display_name">
            </div>
            <div class="my-3">
              <label for="location" class="text-md font-bold">Location</label>
              <input id="location" type="text" class="block w-full my-1 bg-white border-0 border-gray-400 rounded-sm py-3 px-4 bg-gray-200" v-model="user.country">
            </div>
            <div class="my-3">
              <label for="birth-date" class="text-md font-bold">Birth Date</label>
              <input id="birth-date" type="date" class="block w-full my-1 bg-white border-0 border-gray-400 rounded-sm py-3 px-4 bg-gray-200" v-model="user.born">
            </div>
            <div class="my-3">
              <label for="employee-role" class="text-md font-bold">Employment</label>
              <input id="employee-role" type="text" class="block w-full my-1 bg-white border-0 border-gray-400 rounded-sm py-3 px-4 bg-gray-200" v-model="user.role">
            </div>
            <div class="my-3">
              <label for="phone" class="text-md font-bold">Work Phone</label>
              <input id="phone" type="text" class="block w-full my-1 bg-white border-0 border-gray-400 rounded-sm py-3 px-4 bg-gray-200" v-model="user.phone">
            </div>
            <button @click="updateInformation" class="block w-full btn-blue text-white text-center mb-3 mt-5 py-3 rounded font-bold">Save changes</button>
          </div>
        </div>

        <div class="bg-white md:px-2">
          <div class="rounded-sm shadow-md border h-auto text-center py-8 px-8">
            <h2 class="font-bold text-lg font-arial">Update Security Information</h2>
            <div class="cont-ent">
              <p class="pt-8 text-md">If you feel your password is known by other person you don’t trust. You better change it with this button.</p>
            </div>
            <button class="font-bold mx-auto block w-3/4 btn-blue text-white text-center mb-3 mt-5 py-3 rounded">Change password</button>
            <div class="cont-ent">
              <p class="pt-5 text-md">
                What to change you email address you’ve been using before. Click the button below
                and follow instructions.
              </p>
            </div>
            <button class="font-bold mx-auto block w-3/4 btn-blue text-white text-center mb-3 mt-5 py-3 rounded">Change email</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations} from 'vuex'
import { updateProfile } from "../../lib/user"
import _ from "lodash"
export default {
    name: "ProfileSeetings",
    data(){
      return {
        user: {}
      }
    },
    beforeMount(){
      this.user = _.pick(this.getUser(), [
        "born","country","display_name","full_name","phone","role"
      ]);
    },
    mounted(){
      
    },
    methods: {
      ...mapGetters("all",["getUser", "getToken"]),
      ...mapMutations("all", ["setUser"]),
      updateInformation(){
        updateProfile(this.getToken(), this.getUser()._id, this.user)
        .then(res=> {
          if(res.data.err){
            alert("Something Went Wrong")
          }
          else {
            if(res.data.data.success){
              alert("Account Updated!")
              let user = this.getUser();
              user.born = this.user.born
              user.country = this.user.country
              user.display_name = this.user.display_name
              user.full_name = this.user.full_name
              user.phone = this.user.phone
              user.role = this.user.role
              this.setUser(user)
            }
          }
        }).catch(err=> alert(err.message))
      }
    }
}
</script>

<style scoped>
.profile-settings {
    width: 100%;
    height: 100%;
}

.my--{
  margin-top: -80px;
}
.btn-blue {
  background-color: rgb(0, 102, 255);
  transition-duration: 0.5s;
}
.btn-blue:hover, .btn-blue:focus {
  background-color: rgb(1, 71, 175);
}
.img-border {
  border: 4px solid white;
  background-color: rgb(245, 245, 245);
}
</style>