<template>
  <div class="profile-settings">
      <div class="h-40 bg-gray-200"></div>
      <div class="text-center relative">
        <img class="inline-block  my-- w-32 h-32 rounded-full img-border" src="../../assets/images/avatar4.png" alt="profile img">
        <button @click="showModal = !showModal" class="absolute -mt-6 bg-gray-300 change-profile-pencil focus:outline-none hover:bg-gray-400 p-1 rounded-md">
          <svg xmlns="http://www.w3.org/2000/svg" class="fill-current text-black" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M9.828 5l-2 2H4v12h16V7h-3.828l-2-2H9.828zM9 3h6l2 2h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4l2-2zm3 15a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm0-2a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/></svg>
        </button>
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
    <t-modal-lg @before-close="onBeforeUpdateProfilePicClose" v-model="showModal" header="Profile Picture">
      <template v-slot:header>
        <nav class="flex w-full drag-handler border-b items-center justify-between flex-wrap bg-teal pb-3 px-6">
          <div class="flex w-full items-center justify-center flex-no-shrink text-black mr-6">
            <span class="text-2xl tracking-tight ml-3 font-bold">Profile Picture</span>
          </div>
        </nav>
      </template>
      <div class="flex flex-row-reverse" v-if="showPicture">
        <input @change="setPictureUploaded" name="uploaded_profile_picture" type="file" accept=".jpg, .jpeg, .png, .jfif" id="uploaded_profile_picture" hidden>
        <label for="uploaded_profile_picture" class="font-bold bg-gray-300 hover:bg-gray-400 cursor-pointer rounded text-black -mt-3 py-3 block px-4 py-2 transition duration-100 ease-in-out focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed">
          <svg class="inline fill-current text-gray-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M1 14.5a6.496 6.496 0 0 1 3.064-5.519 8.001 8.001 0 0 1 15.872 0 6.5 6.5 0 0 1-2.936 12L7 21c-3.356-.274-6-3.078-6-6.5zm15.848 4.487a4.5 4.5 0 0 0 2.03-8.309l-.807-.503-.12-.942a6.001 6.001 0 0 0-11.903 0l-.12.942-.805.503a4.5 4.5 0 0 0 2.029 8.309l.173.013h9.35l.173-.013zM13 13v4h-2v-4H8l4-5 4 5h-3z"/></svg>
          Upload picture
        </label>
      </div>
      <ProfilePicture :user_picture="getUser().profile_picture" v-if="showPicture" :close="closeUpdateModal"></ProfilePicture>
      <ImageCropper ref="image_cropper_cmpnt" :image_data_uri="uploadedImageUriData" v-if="showCropper=true && uploadedImageUriData!=''"  class="min-h-2"></ImageCropper>
      <template v-slot:footer>
        <div class="flex justify-between">
          <t-button :class="['py-3']" type="button" v-if="showPicture">
            Remove picture
          </t-button>
          <t-button :class="['py-3']" type="button" @click="backFromCropper" variant="secondary" v-if="showCropper=true && uploadedImageUriData!=''">
            Back
          </t-button>
          <t-button :class="['py-3']" v-if="showPicture" @click="showModal = !showModal" type="button" variant="error">
            Close
          </t-button>
          <t-button @click="updateProfilePicture" :class="['py-3']" type="button" variant="success" v-if="showCropper=true && uploadedImageUriData!=''">
            Crop and Save
          </t-button>
        </div>
      </template>
    </t-modal-lg>
  </div>
</template>

<script>
import { mapGetters, mapMutations} from 'vuex'
import { updateProfile } from "../../lib/user"
import _ from "lodash"
export default {
    name: "ProfileSettings",
    components: {
      ProfilePicture: ()=> import('./ProfilePicture'),
      ImageCropper: ()=> import('./ImageCropper')
    },
    data(){
      return {
        user: {},
        showModal: false,
        showCropper: false,
        showPicture: true,
        uploadedImageUriData: "",
        uploadedImage: null,
        croppedImageUriData: ""
      }
    },
    beforeMount(){
      this.user = _.pick(this.getUser(), [
        "born","country","display_name","full_name","phone","role"
      ]);
    },
    methods: {
      ...mapGetters("all",["getUser", "getToken"]),
      ...mapMutations("all", ["setUser"]),
      closeUpdateModal(){
        this.showModal = !this.showModal
        this.showPicture = true
        this.showCropper = false
        this.updateProfile = null
        this.uploadedImageUriData = ""
      },
      onBeforeUpdateProfilePicClose({ cancel }){
        this.closeUpdateModal()
        this.showModal = false
        this.showPicture = true
        this.showCropper = false
        this.updateProfile = null
        this.uploadedImageUriData = ""
      },
      backFromCropper(){
        this.showPicture = true
        this.showCropper = false
        this.updateProfile = null
        this.uploadedImageUriData = ""
      },
      setPictureUploaded($evnt){
        let input = $evnt.target
        if (input.files[0].type && input.files[0].type.indexOf('image') === -1) {
          alert("Only images are allowed!")
          return;
        }
        this.uploadedImage = input.files[0];
        const reader = new FileReader();
        reader.addEventListener('load', (event) => {
          this.uploadedImageUriData = event.target.result;
          this.showPicture = false
          setTimeout(()=> {
            this.showCropper = true
          }, 100)
        });
        reader.readAsDataURL(input.files[0]);
      },
      updateProfilePicture(){
        let cropped_img_uri = this.$refs.image_cropper_cmpnt.getCrop()
        if(cropped_img_uri=="") return;
        alert(cropped_img_uri)
        console.log(cropped_img_uri);
      },
      updateInformation(){
        updateProfile(this.getToken(), this.getUser()._id, this.user)
        .then(res=> {
          if(res.data.err){
            alert("Something Went Wrong");
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
.change-profile-pencil{
  margin-left: -22px;
}
</style>