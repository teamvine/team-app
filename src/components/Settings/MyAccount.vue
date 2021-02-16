<template>
  <div class="my-account p-0">
    <div class="h-40 bg-indigo-100"></div>
    <div class="text-center my-- border-b-2 border-gray-400 pb-5">
      <img
        class="inline-block w-32 h-32 rounded-full img-border border-white"
        src="../../assets/images/avatar4.png"
        alt="profile img"
      />
      <p class="text-center text-md text-lg font-bold mt-4 font-arial">
        Jane Doe Hamblin
      </p>
      <p class="text-center text-md font-bold text-gray-700">janedoe250</p>
    </div>
    <div class="grid grid-cols-2 py-2 bg-white">
      <div class="text-left my-auto">
        <span class="text-blue-600 cursor-pointer text-md font-bold font-arial px-5">Home</span>
        <span class="text-gray-800 cursor-pointer hover:text-blue-600 text-md font-bold font-arial px-5">About</span>
        <span class="text-gray-800 cursor-pointer hover:text-blue-600 text-md font-bold font-arial px-5">Workspace</span>
      </div>
      <div class="text-right px-4">
        <button class="px-4 py-2 bg-gray-200 mx-4 hover:bg-indigo-200 rounded mb-2 mt-1 font-bold">
          <img src="../../assets/svgs/useredit.png" alt="profiles settings" class="svg">
          Edit profile
        </button>
        <button class="px-4 py-2 bg-gray-200 hover:bg-indigo-200 mx-4 rounded">
          <svg class="inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"
            />
          </svg>
        </button>
        <button class="px-4 py-2 bg-gray-200 hover:bg-indigo-200 rounded">
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
            <p class="font-normal py-3 px-2 md:px-4 border border-l-0 text-md truncate">Dusengimana Felix</p>
            <p class="font-normal py-3 px-2 border-t-0 border-l-0 md:px-4 border text-md truncate">Felix Wazekwa</p>
            <p class="font-normal py-3 px-2 border-t-0 border-l-0 md:px-4 border text-md truncate">phelixdusengimana@gmail.com</p>
            <p class="font-normal py-3 px-2 border-t-0 border-l-0 md:px-4 border text-md truncate">0787757575775</p>
            <p class="font-normal py-3 px-2 border-t-0 border-l-0 md:px-4 border text-md truncate">Rwanda, Kigali</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyAccount",
};
</script>

<style scoped>
.svg {
  width: 20px !important;
  display: inline-block
}
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