<template>
  <div class="profile-settings">
      <div class="h-40 bg-indigo-100"></div>
      <div class="text-center bg-gray-200">
        <img class="inline-block  my-- w-32 h-32 rounded-full img-border" src="../../assets/images/avatar4.png" alt="profile img">
      </div>
    <div class="bg-gray-200 p-5 pt-8">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="bg-white py-5 px-6 rounded-sm shadow-md">
          <h2 class="font-bold text-md font-arial">Change your information</h2>
          <div class="my-5 px-3">
            <div class="my-3">
              <label for="fname" class="text-md font-bold">Full Name</label>
              <input id="fname" type="text" class="block w-full my-1 bg-white border border-gray-400 rounded-sm py-2 px-4" value="Dusengimana Felix">
            </div>
            <div class="my-3">
              <label for="dname" class="text-md font-bold">Display Name</label>
              <input id="dname" type="text" class="block w-full my-1 bg-white border border-gray-400 rounded-sm py-2 px-4" value="phelixwazekwaOg">
            </div>
            <div class="my-3">
              <label for="location" class="text-md font-bold">Location</label>
              <input id="location" type="text" class="block w-full my-1 bg-white border border-gray-400 rounded-sm py-2 px-4" value="Musanze Rwanda">
            </div>
            <div class="my-3">
              <label for="birth-date" class="text-md font-bold">Birth Date</label>
              <input id="birth-date" type="date" class="block w-full my-1 bg-white border border-gray-400 rounded-sm py-2 px-4" value="09/1/2020">
            </div>
            <div class="my-3">
              <label for="employee-role" class="text-md font-bold">Employment</label>
              <input id="employee-role" type="text" class="block w-full my-1 bg-white border border-gray-400 rounded-sm py-2 px-4" value="Phelix Wazekwa">
            </div>
            <div class="my-3">
              <label for="email" class="text-md font-bold">Email</label>
              <input id="email" type="email" class="block w-full my-1 bg-white border border-gray-400 rounded-sm py-2 px-4 bg-indigo-100" value="dusengimanaphelix@gmail.com" disabled>
            </div>
            <button class="block w-full btn-blue text-white text-center mb-3 mt-5 py-2">Save changes</button>
          </div>
        </div>

        <div class="bg-white py-5 px-6 rounded-sm shadow-md">
          <h2 class="font-bold text-lg font-arial">Update Security Information</h2>
            <div class="cont-ent">
              <p class="pt-8 text-md">If you feel your password is known by other person you don’t trust. You better change it with this button.</p>
            </div>
            <button class="block w-3/4 btn-blue text-white text-center mb-3 mt-5 py-2">Change password</button>
            <div class="cont-ent">
              <p class="pt-5 text-md">
                What to change you email address you’ve been using before. Click the button below
                and follow instructions.
              </p>
            </div>
            <button class="block w-3/4 btn-blue text-white text-center mb-3 mt-5 py-2">Change email</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "ProfileSeetings"
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