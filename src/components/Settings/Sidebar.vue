<template>
    <div class="settings-sidebar shadow">
        <div class="flex flex-col flex-auto flex-shrink-0 bg-white text-gray-900">
            <div class="w-full h-full bg-white rounded p-3">
                <div class="flex items-center space-x-4 p-2 mb-5">
                    <img class="h-12 rounded-full" src="../../assets/images/avatar4.png" :alt="user.full_name">
                    <div>
                        <h4 class="font-semibold text-lg text-gray-900 capitalize font-poppins tracking-wide">{{user.full_name}}</h4>
                        <span class="text-sm tracking-wide flex items-center space-x-1">
                            <svg class="h-4 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg><span class="text-gray-900">Verified</span>
                        </span>
                    </div>
                </div>
                <ul class="space-y-2 text-md">
                    <li>
                        <router-link to="/settings/account" :class="[$route.name=='MyAccount'? 'bg-indigo-100':'']" class="flex items-center space-x-3 text-gray-900 p-2 rounded-md hover:bg-indigo-100 focus:bg-indigo-100">
                            <span class="text-gray-900">
                                <img src="../../assets/images/avatar4.png" alt="back to home" class="svg">
                            </span>
                            <span class="font-bold">My Account</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/settings/profile-settings" :class="[$route.name=='ProfileSettings'? 'bg-indigo-100':'']" class="flex items-center space-x-3 text-gray-900 p-2 rounded-md hover:bg-indigo-100">
                            <span class="text-gray-900">
                                <img src="../../assets/svgs/useredit.png" alt="profiles settings" class="svg small">
                            </span>
                            <span class="font-bold">Profile</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/settings/notification-settings" :class="[$route.name=='NotificationSettings'? 'bg-indigo-100':'']" class="flex items-center space-x-3 text-gray-900 p-2 rounded-md hover:bg-indigo-100 focus:bg-indigo-100">
                            <span class="text-gray-900">
                                <img src="../../assets/svgs/bell2.svg" alt="notifications settings" class="svg medium">
                            </span>
                            <span class="font-bold">Notifications</span>
                        </router-link>
                    </li>
                    <li>
                        <a href="#" class="flex items-center space-x-3 text-gray-900 p-2 rounded-md hover:bg-indigo-100 focus:bg-indigo-100">
                            <span class="text-gray-900">
                                <img src="../../assets/svgs/theme.svg" alt="theme settings" class="svg">
                            </span>
                            <span class="font-bold">Theme</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="flex items-center space-x-3 text-gray-900 p-2 rounded-md hover:bg-indigo-100 focus:bg-indigo-100">
                            <span class="text-gray-900">
                                <img src="../../assets/svgs/chat.svg" alt="messages settings" class="svg small">
                            </span>
                            <span class="font-bold">Messages</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="flex items-center space-x-3 text-gray-900 p-2 rounded-md hover:bg-indigo-100 focus:bg-indigo-100">
                            <span class="text-gray-900">
                                <img src="../../assets/svgs/language.svg" alt="language settings" class="svg">
                            </span>
                            <span class="font-bold">Language</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="flex items-center space-x-3 text-gray-900 p-2 rounded-md hover:bg-indigo-100 focus:bg-indigo-100">
                            <span class=" text-gray-900">
                                <img src="../../assets/svgs/accessbility.png" alt="accessibility settings" class="svg">
                            </span>
                            <span class="font-bold">Accessibility</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="flex items-center space-x-3 text-gray-900 p-2 rounded-md hover:bg-indigo-100 focus:bg-indigo-100">
                            <span class="text-gray-900">
                                <img src="../../assets/svgs/settings.svg" alt="advanced settings" class="svg">
                            </span>
                            <span class="font-bold">Advanced</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="flex items-center space-x-3 text-gray-900 p-2 rounded-md hover:bg-indigo-100 focus:bg-indigo-100">
                            <span class="text-gray-900">
                                <img src="../../assets/svgs/logout.svg" alt="logout" class="svg small">
                            </span>
                            <span class="font-bold">Logout</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: "Sidebar",
    computed: {
        ...mapState({
            user: state=> state.all.user
        })
    }
}
</script>

<style scoped>
.svg {
    width: 25px;
    margin-left: 2%;
    font-weight: bolder;
}
.svg.small {
    width: 23px;
}
.svg.medium {
    width: 28px;
    margin-left: 0% !important;
}
.settings-sidebar {
    display: flex;
    flex-direction: row;
    height: 100%;
    overflow: auto
}

* {
    font-family: Arial, Helvetica, sans-serif;
}
.bold {
    font-weight: bold;
}
.text {
    font-family: Arial, Helvetica, sans-serif !important;
    font-weight: bold;
    font-size: 109.3% !important;
    color: rgb(0, 0, 0,0.85);
}
</style>