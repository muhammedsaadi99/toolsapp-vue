<template>
<div class="grid w-full h-full bg-gray-200 items-center">
    <div class="shadow-lg rounded-2xl p-4 my-6 bg-white dark:bg-gray-800 m-auto">
        <div class="flex w-full max-w-lg space-x-3">
            <div class="w-full max-w-4xl px-5 py-10 m-auto bg-white rounded-lg shadow dark:bg-gray-800">
                <div class="mb-6 text-3xl font-light text-center text-gray-800 dark:text-white">
                    Create new Post
                </div>
                <div class="grid max-w-xl grid-cols-2 gap-4 m-auto">
                    <div class="col-span-2 lg:col-span-1">
                        <div class=" relative ">
                            <input type="text" v-model="title" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent" placeholder="Title" />
                        </div>
                    </div>
                    <div class="col-span-2 lg:col-span-1">
                        <div class=" relative ">
                            <input type="text" v-model="category" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent" placeholder="Category" />
                        </div>
                    </div>
                    <div class="col-span-2">
                        <!-- <label class="text-gray-700" for="postContent">
                        </label> -->
                    </div>
                    <div class="col-span-2 text-right">
                        <button @click="submitPost" class="py-2 px-4  bg-orange-500 hover:bg-orange-600 focus:ring-orange-600 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-bold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                            Post
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>

export default {
    data() {
        return {
            title: '',
            cat: '',
        };
    },
    methods: {
        submitPost() {
            console.log('ok');
        }
    }

}
</script>