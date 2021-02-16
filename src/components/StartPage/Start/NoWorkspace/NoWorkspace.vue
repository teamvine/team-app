<template>
    <main class="flex-1">
        <div class="w-full h-full flex flex-wrap">
            <div class="w-full content-center flex-wrap h-full flex px-8 sm:px-20 sm:w-1/2 md:w-2/4 lg:w-2/4">
                <h1 class="font-bold text-4xl w-full sm-txt-center mt-10 md:mt-20 pt-8">Welcome</h1>
                <h1 class="mt-3 text-lg">
                    Oraginize your Teams, Companies, Schools and Other groups on
                    RCONNECT where sharing skills and ideas and your work made
                    easier and secure. You haven't joined any Organization yet. Create
                     or Join any public Organization to get started.
                </h1>
                <div class="py-6 w-full sm-txt-center">
                    <button @click="$router.push({name: 'NewWorkspace'})" type="button" class="btn-primary transition duration-300 ease-in-out focus:outline-none focus:shadow-outline font-bold new-organ text-white font-normal py-3 md:py-3 px-4 mr-2">New Organization</button>
		            <button  @click="$router.push({name: 'FindWorkspace'})" type="button" class="btn-outline-primary mt-3 transition duration-300 ease-in-out focus:outline-none focus:shadow-outline border find-organ text-blue-800 font-bold hover:text-white font-normal py-3 md:py-3 px-4">Search Organization</button>
                </div>
            </div>
            <div class="w-full flex content-center justify-center flex-wrap sm:w-1/2 md:w-2/4 lg:w-2/4 h-full">
                <img src="../../../../assets/images/marketing_img.png" alt="illustration">
            </div>
        </div>
    </main>
</template>

<script>
export default {
    name: "NoOrganizations"
}
</script>

<style scoped>
    /* ======================================================== */
    main {
        min-height: 80%;
    }
    .new-organ,.find-organ {
        border-radius: 3px;
    }
    .find-organ {
        border: 1px solid #0391FD;
    }
    .new-organ,.find-organ:hover,.open-btn {
        background-color: #0391FD;
    }
    .new-organ:hover,.open-btn:hover {
        background-color: #0079d6;
    }
    /* =========================================================== */
    @media (max-width: 642px) {
        .sm-txt-center {
            text-align: center;
        }
    }
</style>