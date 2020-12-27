<template>
    <main class="flex-1 ">
        <div class="w-full flex-row flex content-center justify-center flex-wrap py-3 px-2">
            <div class="w-full content-center justify-center flex-wrap p-2 pt-0 sm:w-3/4 md:w-3/4 lg:w-4/6 border">
                <header class="flex items-center justify-between leading-tight w-full border-b">
                    <h1 class="text-lg text-center w-full organ-name font-bold py-3 px-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="26" height="26" style="display: inline" ><path fill="none" d="M0 0H24V24H0z"/><path d="M15 3c.552 0 1 .448 1 1v4c0 .552-.448 1-1 1h-2v2h4c.552 0 1 .448 1 1v3h2c.552 0 1 .448 1 1v4c0 .552-.448 1-1 1h-6c-.552 0-1-.448-1-1v-4c0-.552.448-1 1-1h2v-2H8v2h2c.552 0 1 .448 1 1v4c0 .552-.448 1-1 1H4c-.552 0-1-.448-1-1v-4c0-.552.448-1 1-1h2v-3c0-.552.448-1 1-1h4V9H9c-.552 0-1-.448-1-1V4c0-.552.448-1 1-1h6zM9 17H5v2h4v-2zm10 0h-4v2h4v-2zM14 5h-4v2h4V5z"/></svg>
                        <span class="ml-2 font-bold">My Organizations</span>
                    </h1>
                </header>
                <div class="organs bg-gray-50 w-full bg-gray-100">
                    <!-- ============================== -->
                    <div class="container mx-auto px-4 md:px-12">
                        <div class="flex flex-wrap -mx-1 lg:-mx-4">
                            <!-- Column -->
                            <div class="px-1 w-full md:w-1/2 my-3 lg:w-1/3" 
                                v-for="(organization,index) in organizations"
                                :key="index"
                            >
                                <article class="overflow-hidden rounded-md shadow-md bg-white">
                                    <a href="#" class="workspace-img">
                                        <!-- <img alt="Placeholder" class="block h-auto w-full" src=""> -->
                                    </a>
                                    <header class="flex items-center justify-between leading-tight">
                                        <h1 class="text-lg text-center w-full organ-name font-bold py-3 px-3">
                                            <a class="no-underline font-bold text-xl text-black" href="#">
                                                {{organization.name}}
                                            </a>
                                        </h1>
                                    </header>
                                    <div class="text-center organ-type">
                                        <svg xmlns="http://www.w3.org/2000/svg" v-if="organization.type=='private'" viewBox="0 0 24 24" width="20" height="20" style="display: inline;"><path fill="none" d="M0 0h24v24H0z"/><path d="M6 8V7a6 6 0 1 1 12 0v1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2zm13 2H5v10h14V10zm-8 5.732a2 2 0 1 1 2 0V18h-2v-2.268zM8 8h8V7a4 4 0 1 0-8 0v1z"/></svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" v-else viewBox="0 0 24 24" width="20" height="20" style="display: inline;"><path fill="none" d="M0 0h24v24H0z"/><path d="M6.235 6.453a8 8 0 0 0 8.817 12.944c.115-.75-.137-1.47-.24-1.722-.23-.56-.988-1.517-2.253-2.844-.338-.355-.316-.628-.195-1.437l.013-.091c.082-.554.22-.882 2.085-1.178.948-.15 1.197.228 1.542.753l.116.172c.328.48.571.59.938.756.165.075.37.17.645.325.652.373.652.794.652 1.716v.105c0 .391-.038.735-.098 1.034a8.002 8.002 0 0 0-3.105-12.341c-.553.373-1.312.902-1.577 1.265-.135.185-.327 1.132-.95 1.21-.162.02-.381.006-.613-.009-.622-.04-1.472-.095-1.744.644-.173.468-.203 1.74.356 2.4.09.105.107.3.046.519-.08.287-.241.462-.292.498-.096-.056-.288-.279-.419-.43-.313-.365-.705-.82-1.211-.96-.184-.051-.386-.093-.583-.135-.549-.115-1.17-.246-1.315-.554-.106-.226-.105-.537-.105-.865 0-.417 0-.888-.204-1.345a1.276 1.276 0 0 0-.306-.43zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
                                        <span class="font-bold ml-1">{{organization.type | CamelCase}}</span>
                                    </div>
                                    <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                                        <button type="button" class="font-bold flex content-center justify-center text-center w-full transition duration-300 ease-in-out focus:outline-none focus:shadow-outline open-btn text-white font-normal py-3 px-4 rounded">
                                            Open
                                        </button>
                                    </footer>

                                </article>
                            </div>
                            <!-- END Column -->
                        </div>
                    </div>
                    <!-- ============================== -->
                </div>
                <div class="btns w-full content-center justify-center flex-wrap flex pb-5 pt-2">
                    <button type="button" @click="$router.push({name: 'NewWorkspace'})" class="w-full mt-3 rounded-sm sm:w-full md:w-2/6 lg:w-auto transition duration-300 text-md ease-in-out focus:outline-none focus:shadow-outline font-bold new-organ text-white font-normal py-2 px-4 mr-1 ml-1">New Organization</button>
		            <button type="button" @click="$router.push({name: 'FindWorkspace'})" class="w-full mt-3 rounded-sm sm:w-full md:w-2/6 lg:w-auto transition duration-300 text-md ease-in-out focus:outline-none focus:shadow-outline border find-organ text-blue-800 font-bold hover:text-white font-normal py-2 px-4 mr-1 ml-1">Find Organization</button>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    name: "Organizations",
    props: {
        organizations: Array
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
    .organs {
        min-height: 25pc;
    }
    .organ-name {
        font-weight: bold;
        font-family: Arial, Helvetica, sans-serif !important;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .workspace-img {
        display: block;
        width: 100%;
        min-height: 130px;
        background-image: url("https://picsum.photos/600/400/?random");
        background-color: rgb(0, 0, 0,0.08);
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
    .organ-type {
        margin-top: -1%;
    }
</style>