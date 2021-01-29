<template>
  <div class="profile-settings">
      <div class="h-32 bg-gray-400"></div>
      <div class="text-center bg-gray-200">
        <img class="inline-block  my-- w-32 h-32 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgkYDl5dyfXrYtGaut71So1kQCo7150vgdBQ&usqp=CAU" alt="profile img">
      </div>
    <div class="bg-gray-200 p-5">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="bg-white py-5 px-6 rounded-sm">
          <h2 class="font-bold text-lg">Change your information</h2>
          <div class="my-5 px-3">
            <div class="my-3">
              <label for="fname" class="text-sm">Full Name</label>
              <input id="fname" type="text" class="block w-full my-1 bg-white border border-gray-400 rounded-sm py-2 px-4" value="Dusengimana Felix" disabled>
            </div>
            <div class="my-3">
              <label for="dname" class="text-sm">Display Name</label>
              <input id="dname" type="text" class="block w-full my-1 bg-white border border-gray-400 rounded-sm py-2 px-4" value="phelixwazekwaOg" disabled>
            </div>
            <div class="my-3">
              <label for="employee-role" class="text-sm">Employment</label>
              <input id="employee-role" type="text" class="block w-full my-1 bg-white border border-gray-400 rounded-sm py-2 px-4" value="Phelix Wazekwa" disabled>
            </div>
            <div class="my-3">
              <label for="email" class="text-sm">Email</label>
              <input id="email" type="email" class="block w-full my-1 bg-white border border-gray-400 rounded-sm py-2 px-4" value="dusengimanaphelix@gmail.com" disabled>
            </div>
            <button class="block w-full bg-blue-500 text-white text-center mb-3 mt-5 py-2">Save changes</button>
          </div>
        </div>

        <div class="bg-white py-5 px-6 rounded-sm">
          <h2 class="font-bold text-lg">Update Security Information</h2>
            <div class="cont-ent">
              <p class="pt-8 text-sm">If you feel your password is known by other person you don’t trust. You better change it with this button.</p>
            </div>
            <button class="block w-3/4 bg-blue-500 text-white text-center mb-3 mt-5 py-2">Change password</button>
            <div class="cont-ent">
              <p class="pt-5 text-sm">What to change you email address you’ve
been using before. Click the button below
and follow instructions.</p>
            </div>
            <button class="block w-3/4 bg-blue-500 text-white text-center mb-3 mt-5 py-2">Change email</button>
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
</style>