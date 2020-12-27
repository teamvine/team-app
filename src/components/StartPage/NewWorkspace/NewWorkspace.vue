<template>
    <main class="flex-1 ">
        <div class="w-full flex-row flex content-center justify-center flex-wrap py-3">
            <div class="w-full content-center justify-center flex-wrap p-2 px-0 pt-0 sm:w-3/4 md:w-2/4 lg:w-3/6 border">
                <header class="flex items-center justify-between leading-tight w-full border-b">
                    <h1 class="text-lg text-center w-full organ-name font-bold py-3 px-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="26" height="26" style="display: inline"><path fill="none" d="M0 0h24v24H0z"/><path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"/></svg>
                        <span class="ml-2 font-bold">New Organization</span>
                    </h1>
                </header>
                <div class="pg-form w-full px-2">
                    <div class="bg-white border px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
                      <div class="-mx-3 md:flex mb-6">
                        <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                          <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
                            Name 
                            <span class="text-red-500 text-xl">*</span>
                          </label>
                          <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="text" placeholder="Organization Name...">
                          <p class="text-red text-xs italic">Please fill out this field.</p>
                        </div>
                        <div class="md:w-1/2 px-3">
                            <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-last-name">
                                Type
                                <span class="text-red-500 text-xl">*</span>
                            </label>
                            <select class="form-select mt-1 block w-full py-3">
                                <option value="public" class="py-4">Public</option>
                                <option value="private">Private</option>
                            </select>
                        </div>
                      </div>
                      <div class="-mx-3 md:flex mb-6">
                        <div class="md:w-full px-3">
                          <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                            Description
                            <span class="text-red-500 text-xl">*</span>
                          </label>
                          <textarea class="form-textarea mt-1 block w-full" rows="4" placeholder="Description..."></textarea>
                          <p class="text-grey-dark text-xs italic mt-2">Enter a short and simple description below 200 characters.</p>
                        </div>
                      </div>

                      <!-- =====================start tags==================== -->
                      <label class="w-full uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                        Add Few Members
                        <span class="text-red-500 text-xl">*</span>
                      </label>
                      <div class="h-auto flex items-center w-full mb-4">
                        <div class='shadow rounded-md bg-white w-full h-auto'>
                            <!-- added members -->
                            <div class='px-5 py-3'>
                                <h3 class="font-bold text-md">Added Members</h3>    
                                <div class='my-3 flex flex-wrap -m-1'>
                                    <span class="m-1 bg-gray-200 hover:bg-gray-300 rounded-full px-2 font-bold text-sm leading-loose cursor-pointer" >egide <span class="px-1 h-auto text-red-600 rounded-full hover:bg-red-700 hover:text-white">&times;</span></span>
                                    <span class="m-1 bg-gray-200 hover:bg-gray-300 rounded-full px-2 font-bold text-sm leading-loose cursor-pointer">jacques <span class="px-1 h-auto text-red-600 rounded-full hover:bg-red-700 hover:text-white">&times;</span></span>
                                    <span class="m-1 bg-gray-200 hover:bg-gray-300 rounded-full px-2 font-bold text-sm leading-loose cursor-pointer">runtime <span class="px-1 h-auto text-red-600 rounded-full hover:bg-red-700 hover:text-white">&times;</span></span>
                                    <span class="m-1 bg-gray-200 hover:bg-gray-300 rounded-full px-2 font-bold text-sm leading-loose cursor-pointer">blackFox <span class="px-1 h-auto text-red-600 rounded-full hover:bg-red-700 hover:text-white">&times;</span></span>
                                    <span class="m-1 bg-gray-200 hover:bg-gray-300 rounded-full px-2 font-bold text-sm leading-loose cursor-pointer">Doe <span class="px-1 h-auto text-red-600 rounded-full hover:bg-red-700 hover:text-white">&times;</span></span>
                                </div>
                            </div>
                            <!-- end added mambers -->
                            <!-- search input -->
                           <div class="flex flex-wrap items-stretch w-full relative">
                                <div class="flex -mr-px h-auto">
                                    <span class="flex items-center leading-normal px-2 pr-0 whitespace-no-wrap text-grey-dark text-md">
                                        <svg fill="gray" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M11 2c4.968 0 9 4.032 9 9s-4.032 9-9 9-9-4.032-9-9 4.032-9 9-9zm0 16c3.867 0 7-3.133 7-7 0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7zm8.485.071l2.829 2.828-1.415 1.415-2.828-2.829 1.414-1.414z"/></svg>
                                    </span>
                                </div>
                                <input type="search" class="flex-shrink flex-grow flex-auto py-2 leading-normal w-px flex-1 rounded-l-none rounded-r-none px-3 relative" placeholder="Type to search users...">
                            </div>
                            <!-- end search -->
                            <hr />
                            <!-- search results -->
                            <div class='px-3 py-3'>
                                <h3 class="font-bold text-sm" >Search Results</h3>
                                <!-- ======V-for================ -->
                                <div class="flex flex-wrap items-stretch w-full relative hover:bg-gray-300 rounded cursor-pointer">
                                    <div class="flex -mr-px h-auto">
                                        <span class="flex items-center leading-normal px-2 pr-0 whitespace-no-wrap text-grey-dark text-md">
                                            <img src="https://picsum.photos/600/400/?random" class="w-10 h-10 bg-gray-400 rounded-full  mx-auto"/>
                                        </span>
                                    </div>
                                    <div class="flex-shrink flex-grow flex-auto py-2 leading-normal w-px flex-1 px-3 relative">
                                        <h3 class="font-bold text-black">Harerimana Egide</h3>
                                        <p>Ui/Ux designer</p>
                                    </div>
                                </div>
                                <div class="flex flex-wrap items-stretch w-full relative hover:bg-gray-300 rounded cursor-pointer">
                                    <div class="flex -mr-px h-auto">
                                        <span class="flex items-center leading-normal px-2 pr-0 whitespace-no-wrap text-grey-dark text-md">
                                            <img src="https://picsum.photos/600/400/?random" class="w-10 h-10 bg-gray-400 rounded-full  mx-auto"/>
                                        </span>
                                    </div>
                                    <div class="flex-shrink flex-grow flex-auto py-2 leading-normal w-px flex-1 px-3 relative">
                                        <h3 class="font-bold text-black">Kwizera Emmy</h3>
                                        <p>Software engineer</p>
                                    </div>
                                </div>
                                <div class="flex flex-wrap items-stretch w-full relative hover:bg-gray-300 rounded cursor-pointer">
                                    <div class="flex -mr-px h-auto">
                                        <span class="flex items-center leading-normal px-2 pr-0 whitespace-no-wrap text-grey-dark text-md">
                                            <img src="https://picsum.photos/600/400/?random" class="w-10 h-10 bg-gray-400 rounded-full  mx-auto"/>
                                        </span>
                                    </div>
                                    <div class="flex-shrink flex-grow flex-auto py-2 leading-normal w-px flex-1 px-3 relative">
                                        <h3 class="font-bold text-black">Munezero Didier</h3>
                                        <p>Nodejs Developer</p>
                                    </div>
                                </div>
                                <div class="flex flex-wrap items-stretch w-full relative hover:bg-gray-300 rounded cursor-pointer">
                                    <div class="flex -mr-px h-auto">
                                        <span class="flex items-center leading-normal px-2 pr-0 whitespace-no-wrap text-grey-dark text-md">
                                            <img src="https://picsum.photos/600/400/?random" class="w-10 h-10 bg-gray-400 rounded-full  mx-auto"/>
                                        </span>
                                    </div>
                                    <div class="flex-shrink flex-grow flex-auto py-2 leading-normal w-px flex-1 px-3 relative">
                                        <h3 class="font-bold text-black">Cyebukayire Peace</h3>
                                        <p>Graphic designer</p>
                                    </div>
                                </div>
                                <div class="flex flex-wrap items-stretch w-full relative hover:bg-gray-300 rounded cursor-pointer">
                                    <div class="flex -mr-px h-auto">
                                        <span class="flex items-center leading-normal px-2 pr-0 whitespace-no-wrap text-grey-dark text-md">
                                            <img src="https://picsum.photos/600/400/?random" class="w-10 h-10 bg-gray-400 rounded-full  mx-auto"/>
                                        </span>
                                    </div>
                                    <div class="flex-shrink flex-grow flex-auto py-2 leading-normal w-px flex-1 px-3 relative">
                                        <h3 class="font-bold text-black">Dusengimana Felix</h3>
                                        <p>Ui/Ux designer</p>
                                    </div>
                                </div>
                                <!-- ===== -->
                            </div>
                            <!-- end results -->
                        </div>
                    </div>
                    <!-- ======================end tags==================== -->

                      <div class="-mx-3 flex flex-wrap content-end justify-end text-right mb-2">
                        <button class="flex button py-2 px-6 btn-blue rounded-sm text-white">Finish</button>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    name: "NewOrganization",
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
    .pg-form {
        min-height: 20pc;
    }
    .btn-blue {
        background-color: #1a65e6;
    }
    .btn-blue:hover{
        background-color: #003eaa;
    }
</style>