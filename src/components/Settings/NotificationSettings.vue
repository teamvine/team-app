<template>
  <div class="notifications-settings min-h-screen bg-gray-200">
    <div class="px-4 sm:px-6 md:px-12 lg:px-16 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="notifications-settings">
          <h2 class="text-lg font-bold">Notifications settings</h2>
          <div class="my-2">
            <input type="checkbox" class="checkbox border border-gray-600 checked:text-white py-3 px-4 rounded-0 text-black" >
          </div>
          <h2 class="text-lg font-bold">Message Notifications</h2>
        </div>
        <div class="notifications-settings item-left text-left">
          <h2 class="text-lg font-bold">Notification Sound</h2>
          <div class="cont-e-nt my-4">
            <p class="font-light text-sm">Here there are many option to set your notification sound. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content</p>
            <div class="choose">
              <h2 class="font-bold text-sm mt-4">Select  from our system</h2>
              <div class="my-2 bg-gray-400 py-0 px-4 relative inline-block">
                <button class="pr-2 border-r-2 border-white focus:outline-none">
                  <svg class="inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zM10.622 8.415a.4.4 0 0 0-.622.332v6.506a.4.4 0 0 0 .622.332l4.879-3.252a.4.4 0 0 0 0-.666l-4.88-3.252z" fill="rgba(52,72,94,1)"/></svg>
                </button>
                <select name="sound" id="select-sound" class="px-2 bg-gray-400">
                  <option value="BIP">Abu dhabi by bruce...</option>
                  <option value="BIP">Bib Bip</option>
                  <option value="BIP">Bib Bip</option>
                </select>
                <button class="pl-5 pr-2 focus:outline-none">
                  <svg class="inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 16l-6-6h12z" fill="rgba(52,72,94,1)"/></svg>
                </button>
              </div>
              <p class="text-sm font-light mt-4">Lorem ipsum may be used as a placeholder before final copy is available.If you don’t feel to use our sounds.You can upload yours.</p>

            <button class="block w-3/4 bg-blue-500 text-white text-center mb-3 mt-5 py-2">Upload sound</button>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotificationSettings"
}
</script>

<style scoped>
.notifications-settings {
    width: 100%;
    height: 100%;
}
.checkbox{
  appearance: none;
}
.checkbox:checked{
  content: "\2713";
  text-shadow: 1px 1px 1px rgba(0, 0, 0, .2);
  font-size: 15px;
  color: #f3f3f3;
  text-align: center;
  line-height: 15px;
}
</style>