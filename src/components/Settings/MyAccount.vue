<template>
  <div class="my-account p-0">
    <div class="h-40 bg-gray-200"></div>
    <div class="text-center my-- border-b-2 border-gray-400 pb-5">
      <img
        class="inline-block w-32 h-32 rounded-full img-border border-white"
        src="../../assets/images/avatar4.png"
        alt="profile img"
      />

      <router-link to="/settings/profile-settings">
        <button class="change-profile-pencil focus:outline-none"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M15.728 9.686l-1.414-1.414L5 17.586V19h1.414l9.314-9.314zm1.414-1.414l1.414-1.414-1.414-1.414-1.414 1.414 1.414 1.414zM7.242 21H3v-4.243L16.435 3.322a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414L7.243 21z" fill="rgba(52,72,94,1)"/></svg></button>
      </router-link>
        <p class="text-center text-md text-lg font-bold mt-4 text-gray-900 font-arial">
      <p class="text-center text-md text-lg font-bold mt-4 text-gray-900 font-arial">
        {{user.full_name}}
      </p>
      <p class="text-center text-md font-bold text-gray-700">@{{user.display_name}}</p>
    </div>
    <div class="grid grid-cols-2 py-2 bg-white">
      <div class="text-left my-auto">
        <span class="text-blue-600 cursor-pointer text-md font-bold font-arial px-5">Home</span>
        <span class="text-gray-800 cursor-pointer hover:text-blue-600 text-md font-bold font-arial px-5">About</span>
        <span class="text-gray-800 cursor-pointer hover:text-blue-600 text-md font-bold font-arial px-5">Workspace</span>
      </div>
      <div class="text-right px-4">
        <router-link to="/settings/profile-settings" class="px-4 py-3 bg-gray-300 mx-4 rounded mb-2 mt-1 font-bold">
          <svg class="inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              d="M12.9 6.858l4.242 4.243L7.242 21H3v-4.243l9.9-9.9zm1.414-1.414l2.121-2.122a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414l-2.122 2.121-4.242-4.242z"
            />
          </svg>
          Edit profile
        </router-link>
        <button class="px-4 py-2 bg-gray-300 mx-4 rounded">
          <svg class="inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"
            />
          </svg>
        </button>
        <button class="px-4 py-2 bg-gray-300 rounded">
          <svg class="inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              d="M4.5 10.5c-.825 0-1.5.675-1.5 1.5s.675 1.5 1.5 1.5S6 12.825 6 12s-.675-1.5-1.5-1.5zm15 0c-.825 0-1.5.675-1.5 1.5s.675 1.5 1.5 1.5S21 12.825 21 12s-.675-1.5-1.5-1.5zm-7.5 0c-.825 0-1.5.675-1.5 1.5s.675 1.5 1.5 1.5 1.5-.675 1.5-1.5-.675-1.5-1.5-1.5z"
            />
          </svg>
        </button>
      </div>
    </div>
    <div class="bg-gray-100 px-2 md:px-10 lg:px-20 py-5">
      <div class="bg-white px-2 md:px-5 py-5 shadow-md border">
        <h2 class="font-bold text-lg font-arial text-center md:text-left">General Information</h2>
        <div class="grid grid-cols-2">
          <div class="titles py-5">
            <p class="font-bold border py-3 px-2 md:px-4 text-md">Full Name</p>
            <p class="font-bold border py-3 border-t-0 px-2 md:px-4 text-md">Display Name</p>
            <p class="font-bold border py-3 border-t-0 px-2 md:px-4 text-md">Work Email</p>
            <p class="font-bold border py-3 border-t-0 px-2 md:px-4 text-md">Phone Number</p>
            <p class="font-bold border py-3 border-t-0 px-2 md:px-4 text-md">Location</p>
          </div>
          <div class="titles py-5">
            <p class="font-normal py-3 px-2 md:px-4 border border-l-0 text-md truncate">{{user.full_name || "Unknown"}}</p>
            <p class="font-normal py-3 px-2 border-t-0 border-l-0 md:px-4 border text-md truncate">{{user.display_name || "Unknown"}}</p>
            <p class="font-normal py-3 px-2 border-t-0 border-l-0 md:px-4 border text-md truncate">{{user.email || "Unknown"}}</p>
            <p class="font-normal py-3 px-2 border-t-0 border-l-0 md:px-4 border text-md truncate">{{user.phone || "Unknown"}}</p>
            <p class="font-normal py-3 px-2 border-t-0 border-l-0 md:px-4 border text-md truncate">{{user.country || "Unknown"}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"
export default {
  name: "MyAccount",
  computed: {
    ...mapState({
      user: state=> state.all.user
    })
  }
};
</script>

<style scoped>
.my-account {
  width: 100%;
  height: 100%;
}
.my-- {
  margin-top: -80px;
}
.img-border {
  border: 4px solid white;
  background-color: rgb(245, 245, 245);
}

</style>