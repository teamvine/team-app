<template>
    <div class="flex flex-col justify-between w-screen h-screen">
        <nav class="bg-transparent">
            <div class="py-3 px-6">
                <p class="font-bold">404 Not Found</p>
            </div>
        </nav>

        <div class="flex">
            <div class="w-full flex items-center justify-center sm:flex-row flex-col px-4 py-4">
                <div class="left flex">
                    <!-- <img src="./static/Scarecrow.png" class="md:h-80 h-64 mb-5 sm:mr-20" alt="image"> -->
                </div>
                <div class="right flex flex-col">
                    <div class="md:w-96 w-80 text-center bg-blue-100 px-8 py-8 rounded-md">
                        <h2 class="font-bold text-4xl tracking-widest text-center" style="color: crimson">404</h2>
                        <h2 class="font-bold text-2xl tracking-widest text-center">Page Not Found</h2>
                        <p class="mt-5 tracking-wider text-sm w-60 text-center">The page you are looking for might have been removed or is temporarily unavailable</p>
                        <button @click="navigate({path: '/'})" class="bg-blue-500 uppercase font-semibold mt-5 hover:bg-blue-700 text-white text-xs py-3 px-4 rounded-md">
                            Back to HomePage
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <footer class="flex items-center justify-center text-gray-500 py-3 text-sm">
            <span class="mr-1"><a href="https://github.com/StevenPss">RCONNECT </a></span>&copy;<span class="hover:text-gray-900 ml-1"><a href="https://devchallenges.io">rconnect 2020</a></span>
        </footer>
    </div>
</template>
<script>
export default {
    name: "NotFound",
    methods: {
        navigate(path){
            this.$router.push(path)
        }
    }
}
</script>