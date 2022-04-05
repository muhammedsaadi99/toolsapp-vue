<template>
<div class="grid w-full h-screen bg-gray-200 items-center">
    <div class="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-800 w-72 m-auto">
        <!-- Error Notification -->
        <div v-if="message.notiError" class="alert alert-error shadow-lg transition ease-in duration-200">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Email is required</span>
            </div>
        </div>

        <!-- Success Notification -->
        <div v-else-if="message.notiSuccess" class="alert alert-success shadow-lg transition ease-in duration-200">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Login Successfuly 🎉</span>
            </div>
        </div>

        <div class="w-full h-full text-center">
            <div class="flex h-full flex-col justify-between">
                <p class="text-gray-800 dark:text-gray-200 text-2xl font-bold mt-4 mb-1">
                    Reset Password .
                </p>
                <p class="text-gray-600 dark:text-gray-200 text-sm px-4 mt-1 mb-4">
                    Please enter your Account email of which you want to reset your password
                </p>

                <!-- This is the Email Field -->
                <div class=" relative ">
                    <input v-model="email" type="text" class="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-4 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent" placeholder="Your email" />
                    <p class="absolute text-vs text-red-500 -bottom-0 right-2">
                        {{message.email}}
                    </p>
                </div>

                <div class="flex items-center justify-between gap-4 w-full mt-9">
                    <button type="submit" @click="submitEmail" class="py-2 px-4  bg-orange-500 hover:bg-orange-600 focus:ring-orange-600 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                        Submit
                    </button>
                    <router-link to="/register"><button type="button" class="py-2 px-4  bg-white border-2 border-orange-500 text-orange-500 hover:text-gray-600 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md rounded-lg ">
                            Register
                        </button></router-link>
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
            email: '',
            message: [],
        }
    },
    watch: {
        email(val) {
            if (val.length > 2) {
                if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val)) {
                    this.email = val
                    this.message['email'] = ''
                } else {
                    // this.email = ''
                    this.message['email'] = '* email is not valid'
                }
            } else if (val.length < 1) {
                // this.email = ''
                this.message['email'] = ''
            }
        },
    },
    methods: {
        submitEmail() {
            if (!this.email == '') {
                alert(`Email : ${this.email}`)
                this.message.notiError = false
                this.message.notiSuccess = true
            } else {
                this.message.notiError = true
                this.message.notiSuccess = false
            }
        }
    }

}
</script>

<style scoped>
.text-vs {
    font-size: 0.7rem;

}
</style>
