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
                          </label>
                          <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="text" placeholder="Organization Name...">
                          <p class="text-red text-xs italic">Please fill out this field.</p>
                        </div>
                        <div class="md:w-1/2 px-3">
                            <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-last-name">
                                Type
                            </label>
                            <select class="form-select mt-1 block w-full py-3">
                                <option value="public" class="py-4">Public</option>
                                <option value="private">Private</option>
                            </select>
                        </div>
                      </div>
                      <div class="-mx-3 md:flex mb-6">
                        <div class="md:w-full px-3">
                          <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-password">
                            Description
                          </label>
                          <textarea class="form-textarea mt-1 block w-full" rows="4" placeholder="Description..."></textarea>
                          <p class="text-grey-dark text-xs italic">Make it as long and as crazy as you'd like</p>
                        </div>
                      </div>
                      <div class="-mx-3 flex flex-wrap content-end justify-end text-right mb-2">
                        <button class="flex button py-2 px-6 bg-green-600 rounded-sm text-white">Finish</button>
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
</style>