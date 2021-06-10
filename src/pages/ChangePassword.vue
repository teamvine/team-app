<template>
  <div class="flex flex-col h-screen">
    <nav class="flex items-center justify-between flex-wrap p-6">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <span class="font-semibold text-xl text-primary uppercase"
          >Rconnect</span
        >
      </div>
      <div class="block">
        <a
          href="#"
          class="text-black inline-block text-sm px-4 py-2 leading-none btn-primary text-blue-600 hover:bg-white mt-4 lg:mt-0"
          >Home</a
        >
      </div>
    </nav>
    <div class="flex flex-1 items-center justify-center mt-10">
      <div class="flex space-x-10">
        <form class="mr-10">
          <h3 class="text-3xl font-semibold">Change your password?</h3>
          <div class="input-with-icon">
            <label for="email" class="mb-2 block">New Password</label>

            <div class="relative text-gray-600 focus-within:text-gray-400">
              <span class="absolute inset-y-0 right-0 flex items-center pr-2">
                <button class="p-1 focus:outline-none text-sm focus:shadow-outline">
                   Show
                </button>
              </span>
              <span class="absolute inset-y-0 left-0 flex items-center pl-3 ri-lock-password-fill"></span>
              <input
                id="confirm-password"
                type="passwod"
                name="newpassword"
                class="bg-gray-200 border-2 border-gray-500 pl-10 rounded focus:outline-none bg-gray-100 block w-full py-2 pr-10 px-4 focus:border-blue-700"
                placeholder="Search..."
                autocomplete="off"
              />
            </div>
          </div>

          <div class="input-with-icon">
            <label>Confirm New Password</label>
            <div class="relative text-gray-600 focus-within:text-gray-400">
            <span class="absolute inset-y-0 left-0 flex items-center pl-3 ri-lock-password-fill"></span>
            <input
              id="email"
              type="password"
              class="bg-gray-200 border-2 border-gray-500 pl-10 rounded focus:outline-none bg-gray-100 block w-full py-2 pr-10 px-4 focus:border-blue-700 input-error"
              placeholder="Enter New Password"
            />
            </div>
          </div>

          <div class="py-2">
            <button
              type="submit"
              class="border-2 border-gray-100 focus:outline-none background-primary text-white font-bold tracking-wider block w-full p-2 rounded-lg focus:border-gray-700 hover:bg-blue-700"
            >
              Change My Password
            </button>
          </div>
        </form>

        <div class="password-rules">
            <h2 class="text-2xl ">Password must contain</h2>
            <ul class="text-primary">
                <li class="line-through	">Atleast 1 uppercase letter (A-z)</li>
                <li class="line-through	">Atleast 1 number (0-9)</li>
                <li>Atleast 1 uppercase letter</li>
            </ul>
        </div>
      </div>
    </div>
    <footer class="h-10 text-center text-gray-500">
      <a href="" class="mr-3 hover:underline font-bold">Privacy and Terms</a>
      <a href="" class="hover:underline font-bold">Contact us</a>
    </footer>
  </div>
</template>

<style>
.background-primary {
  background: #2a68d3;
}
.text-primary {
  color: #2a68d3;
}
.btn-primary {
  border: 1px solid #2a68d3;
}
.input-error{
    border-color: #FF0000;
}
</style>