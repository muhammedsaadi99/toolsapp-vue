<template>
<div class="navbar bg-base-100 relative">
    <div class="navbar-start">
        <div class="dropdown">
            <label tabindex="1" class="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabindex="1" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <router-link to="/">
                    <li><a>Home</a></li>
                </router-link>
                <router-link to="/about">
                    <li><a>About</a></li>
                </router-link>
                <!-- <router-link to="/create-post">
                    <li v-if="justShowit"><a>Create Post</a></li>
                </router-link> -->
            </ul>
        </div>
        <router-link to="/"><a class="btn btn-ghost normal-case text-xl">daisyUI</a></router-link>
    </div>
    <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal p-0">
            <router-link to="/">
                <li><a>Home</a></li>
            </router-link>
            <router-link to="/about">
                <li><a>About</a></li>
            </router-link>
            <!-- <router-link to="/create-post">
                <li v-if="justShowit"><a>Create Post</a></li>
            </router-link> -->
        </ul>
    </div>
    <div v-if="!justShowit" class="navbar-end">
        <router-link to="/login"><a class="font-bold btn bg-orange-500 border-none hover:bg-orange-600 px-6">Login</a></router-link>
    </div>
    <div v-else-if="justShowit" class="navbar-end">
        <div class="dropdown dropdown-end">
            <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                <div class="w-10 rounded-full">
                    <img src="https://api.lorem.space/image/face?hash=33791" />
                </div>
            </label>
            <ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                <li>
                    <router-link to="/profile"><a class="justify-between">
                            Profile
                            <span class="badge">New</span>
                        </a></router-link>
                </li>
                <li><a>Settings</a></li>
                <li @click="$store.dispatch('logOut')"><a>Logout</a></li>
            </ul>
        </div>
    </div>

</div>
</template>

<script>
export default {
    computed: {
        justShowit() {
            if (this.$store.state.hasToken == true) {
                return true
            } else {
                return false
            }
        }
    },
}
</script>
