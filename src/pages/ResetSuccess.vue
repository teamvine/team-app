<template>
  <div class="flex flex-col h-screen">
    <nav class="flex items-center justify-between flex-wrap p-6">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <span class="font-semibold text-xl text-primary uppercase">Rconnect</span>
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
      <div class="px-4 lg:px-24 py-16 lg:max-w-xl sm:max-w-md w-full">
        <form class="">
          <h3 class="text-center text-3xl font-semibold">Successful password reset!</h3>
          <p class="text-center my-4">
            Your password has ben changed successful you can now use your password 
           <span class="text-blue-500">login</span> &#128080; to your account
           
          </p> 
          <div class="py-2">

            <button
              type="submit"
              class="border-2 border-gray-100 focus:outline-none background-primary text-white font-bold tracking-wider block w-full p-2 rounded-lg focus:border-gray-700 hover:bg-blue-700"
            >
              Login to your account
            </button>
          </div>
        </form>
      </div>
    </div>
      <footer class="h-10 text-center text-gray-500 ">
          <a href="" class="mr-3 hover:underline font-bold">Privacy and Terms</a>
          <a href="" class="hover:underline font-bold">Contact us</a>
      </footer>

  </div>
</template>

<style>
.background-primary{
    background: #2A68D3;
}
.text-primary{
   color: #2A68D3;
}
.btn-primary{
    border: 1px solid #2A68D3;
}
</style>