<template>
    <main class="flex-1 ">
        <div class="w-full flex-row flex content-center justify-center flex-wrap py-3 px-2">
            <div class="w-full content-center justify-center flex-wrap p-2 pt-0 sm:w-3/4 md:w-3/4 lg:w-4/6 border">
                <header class="flex items-center justify-between leading-tight w-full border-b">
                    <h1 class="text-lg text-center w-full organ-name font-bold py-3 px-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="26" height="26" style="display: inline" ><path fill="none" d="M0 0H24V24H0z"/><path d="M15 3c.552 0 1 .448 1 1v4c0 .552-.448 1-1 1h-2v2h4c.552 0 1 .448 1 1v3h2c.552 0 1 .448 1 1v4c0 .552-.448 1-1 1h-6c-.552 0-1-.448-1-1v-4c0-.552.448-1 1-1h2v-2H8v2h2c.552 0 1 .448 1 1v4c0 .552-.448 1-1 1H4c-.552 0-1-.448-1-1v-4c0-.552.448-1 1-1h2v-3c0-.552.448-1 1-1h4V9H9c-.552 0-1-.448-1-1V4c0-.552.448-1 1-1h6zM9 17H5v2h4v-2zm10 0h-4v2h4v-2zM14 5h-4v2h4V5z"/></svg>
                        <span class="ml-2 font-bold">Find Organization</span>
                    </h1>
                </header>
                <div class="find-organs bg-gray-50 w-full bg-gray-100">
                    <!-- Finding form goes here -->
                </div>
                <div class="btns w-full content-center justify-center flex-wrap flex pb-5 pt-2">
		            <button @click="$router.push({name: 'Start'})" type="button" class="w-full mt-3 rounded-sm sm:w-full md:w-2/6 lg:w-auto transition duration-300 text-md ease-in-out focus:outline-none focus:shadow-outline border find-organ text-blue-800 font-bold hover:text-white font-normal py-2 px-4 mr-1 ml-1">My Organizations</button>
                    <button @click="$router.push({name: 'NewWorkspace'})" type="button" class="w-full mt-3 rounded-sm sm:w-full md:w-2/6 lg:w-auto transition duration-300 text-md ease-in-out focus:outline-none focus:shadow-outline font-bold new-organ text-white font-normal py-2 px-4 mr-1 ml-1">New Organization</button>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    name: "FindOrganization",
    props: {
    },
    filters: {
        /**
         * @param {String} text the text
         */
        CamelCase(text){
            return text[0].toUpperCase()+text.slice(1,text.length)
        }
    }
}
</script>

<style scoped>
    main {
        /* height: auto; */
        min-height: auto;
        height: auto;
    }
    .find-organs {
        min-height: 20pc;
    }
    .new-organ,.find-organ {
        padding-top: 1.2%;
        padding-bottom: 1.2%;
        border-radius: 5px;
    }
    .find-organ {
        border: 1px solid #1a65e6;
    }
    .new-organ,.find-organ:hover,.open-btn {
        background-color: #1a65e6;
    }
    .new-organ:hover,.open-btn:hover {
        background-color: #003eaa;
    }
</style>