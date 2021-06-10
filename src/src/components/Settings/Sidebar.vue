<template>
    <div class="settings-sidebar shadow">
        <div class="flex flex-col flex-auto flex-shrink-0 bg-white text-gray-900">
            <div class="w-full h-full bg-white rounded p-3">
                <div class="flex items-center space-x-4 p-2 mb-5">
                    <img class="h-12 rounded-full" :src="(user.profile_pic.updated? user.profile_pic.url: require('../../assets/images/avatar4.png'))" :alt="user.full_name">
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
                                <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </span>
                            <span class="font-bold text-md">My Account</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/settings/profile-settings" :class="[$route.name=='ProfileSettings'? 'bg-indigo-100':'']" class="flex items-center space-x-3 text-gray-900 p-2 rounded-md hover:bg-indigo-100">
                            <span class="text-gray-900">
                                <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </span>
                            <span class="font-bold">Profile</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/settings/notification-settings" :class="[$route.name=='NotificationSettings'? 'bg-indigo-100':'']" class="flex items-center space-x-3 text-gray-900 p-2 rounded-md hover:bg-indigo-100 focus:bg-indigo-100">
                            <span class="text-gray-900">
                                <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                                </svg>
                            </span>
                            <span class="font-bold">Notifications</span>
                        </router-link>
                    </li>
                    <li>
                        <a href="#" class="flex items-center space-x-3 text-gray-900 p-2 rounded-md hover:bg-indigo-100 focus:bg-indigo-100">
                            <span class="text-gray-900">
                                <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </span>
                            <span class="font-bold">Theme</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="flex items-center space-x-3 text-gray-900 p-2 rounded-md hover:bg-indigo-100 focus:bg-indigo-100">
                            <span class="text-gray-900">
                                <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path>
                                </svg>
                            </span>
                            <span class="font-bold">Messages</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="flex items-center space-x-3 text-gray-900 p-2 rounded-md hover:bg-indigo-100 focus:bg-indigo-100">
                            <span class="text-gray-900">
                                <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                                </svg>
                            </span>
                            <span class="font-bold">Language</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="flex items-center space-x-3 text-gray-900 p-2 rounded-md hover:bg-indigo-100 focus:bg-indigo-100">
                            <span class=" text-gray-900">
                                <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </span>
                            <span class="font-bold">Accessibility</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="flex items-center space-x-3 text-gray-900 p-2 rounded-md hover:bg-indigo-100 focus:bg-indigo-100">
                            <span class="text-gray-900">
                                <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                                </svg>
                            </span>
                            <span class="font-bold">Advanced</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="flex items-center space-x-3 text-gray-900 p-2 rounded-md hover:bg-indigo-100 focus:bg-indigo-100">
                            <span class="text-gray-900">
                                <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                </svg>
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
    /* font-size: 110.3% !important; */
    color: rgb(0, 0, 0,0.85);
}
</style>