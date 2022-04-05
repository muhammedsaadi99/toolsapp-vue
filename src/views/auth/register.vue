<template>
<div class="grid w-full h-screen bg-gray-200 items-center">
    <div class="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-800 w-72 m-auto">
        <!-- Error Notification -->
        <div v-if="!message.notiError == ''" class="alert alert-error shadow-lg transition ease-in duration-200">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>{{message.notiError}}</span>
            </div>
        </div>

        <!-- Success Notification -->
        <div v-else-if="!message.notiSuccess == ''" class="alert alert-success shadow-lg transition ease-in duration-200">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>{{message.notiSuccess}}</span>
            </div>
        </div>

        <div class="w-full h-full text-center">
            <div class="flex h-full flex-col justify-between">
                <p class="text-gray-800 dark:text-gray-200 text-4xl font-bold mt-4 mb-4">
                    Register .
                </p>

                <!-- This is the Name Field -->
                <div class=" relative">
                    <input v-model="name" type="text" class="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-4 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent" placeholder="Full Name" />
                    <p class="absolute text-vs text-red-500 -bottom-0 right-2">
                        {{message.name}}
                    </p>
                </div>

                <!-- This is the Email Field -->
                <div class=" relative mt-4">
                    <input v-model="email" type="text" class="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-4 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent" placeholder="Your email" />
                    <p class="absolute text-vs text-red-500 -bottom-0 right-2">
                        {{message.email}}
                    </p>
                </div>

                <!-- This is the Password Field -->
                <div class=" relative mt-4">
                    <input v-model="password" type="password" class="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-4 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent" placeholder="Password" />
                    <p class="absolute text-vs text-red-500 top-10 right-2">
                        {{message.passwordValid}}
                    </p>
                    <div class="grid w-full h-1 grid-cols-12 gap-4 mt-3 px-2">
                        <div v-if="message.passwordLower" class="h-full col-span-3 bg-green-500 rounded dark:bg-dark-1 text-white transition ease-in duration-200"> a
                        </div>
                        <div v-else class="h-full col-span-3 bg-gray-300 rounded dark:bg-dark-1 text-gray-600 transition ease-in duration-200"> a
                        </div>
                        <div v-if="message.passwordCap" class="h-full col-span-3 bg-green-500 rounded dark:bg-dark-1 text-white transition ease-in duration-200"> A
                        </div>
                        <div v-else class="h-full col-span-3 bg-gray-300 rounded dark:bg-dark-1 text-gray-600 transition ease-in duration-200"> A
                        </div>
                        <div v-if="message.passwordNum" class="h-full col-span-3 bg-green-500 rounded dark:bg-dark-1 text-white transition ease-in duration-200"> #
                        </div>
                        <div v-else class="h-full col-span-3 bg-gray-300 rounded dark:bg-dark-1 text-gray-600 transition ease-in duration-200"> #
                        </div>
                        <div v-if="message.passwordLen" class="h-full col-span-3 bg-green-500 rounded dark:bg-dark-1 text-white transition ease-in duration-200"> 8+
                        </div>
                        <div v-else class="h-full col-span-3 bg-gray-300 rounded dark:bg-dark-1 text-gray-600 transition ease-in duration-200"> 8+
                        </div>
                    </div>
                </div>

                <div class="flex items-center justify-between gap-4 w-full mt-14">
                    <button type="submit" @click="submitRegister" class="py-2 px-4  bg-orange-500 hover:bg-orange-600 focus:ring-orange-600 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                        Register
                    </button>
                    <router-link to="/login"><button type="button" class="py-2 px-4  bg-white border-2 border-orange-500 text-orange-500 hover:text-gray-600 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md rounded-lg ">
                            Login
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
            name: '',
            email: '',
            password: '',
            message: [],
        }
    },
    watch: {
        name(val) {
            if (val.length >= 1) {
                if (val.match(/^[A-Z a-z]+$/)) {
                    this.name = val
                    this.message['name'] = ''

                } else {
                    this.message['name'] = '* name is not valid'

                }
            } else if (val.length < 1) {
                this.message['name'] = ''
            }
        },

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

        password(val) {
            if (val.length >= 1) {

                // Validate lower letters
                var lowerCaseLetters = /[a-z]/g;
                if (val.match(lowerCaseLetters)) {
                    this.password = val
                    this.message['passwordLower'] = true
                    this.message['passwordValid'] = ''
                } else {
                    this.message['passwordLower'] = false
                    this.message['passwordValid'] = '* password is not valid'
                }

                // Validate capital letters
                var upperCaseLetters = /[A-Z]/g;
                if (val.match(upperCaseLetters)) {
                    this.password = val
                    this.message['passwordCap'] = true
                    this.message['passwordValid'] = ''
                } else {
                    this.message['passwordCap'] = false
                    this.message['passwordValid'] = '* password is not valid'
                }

                // Validate numbers
                var numbers = /[0-9]/g;
                if (val.match(numbers)) {
                    this.password = val
                    this.message['passwordNum'] = true
                    this.message['passwordValid'] = ''
                } else {
                    this.message['passwordNum'] = false
                    this.message['passwordValid'] = '* password is not valid'
                }

                // Validate length
                if (val.length >= 8) {
                    this.password = val
                    this.message['passwordLen'] = true
                    this.message['passwordValid'] = ''
                } else {
                    this.message['passwordLen'] = false
                    this.message['passwordValid'] = '* password is not valid'
                }
            } else if (val.length < 1) {
                this.message['passwordLower'] = false
                this.message['passwordCap'] = false
                this.message['passwordNum'] = false
                this.message['passwordLen'] = false
                this.message['passwordValid'] = ''
            }
        }
    },
    methods: {
        submitRegister() {
            if (!this.name == '' && !this.email == '' && this.password.match(/[0-9]/g) && this.password.match(/[A-Z]/g) && this.password.match(/[a-z]/g) && this.password.length >= 8) {
                // console.log(`Name : ${this.name}, Email : ${this.email}, Password : ${this.password}`)

                this.axios.post('http://127.0.0.1:8000/api/register', {
                        name: this.name,
                        email: this.email,
                        password: this.password,
                    })
                    .then((res) => {
                        this.message.notiError = ''
                        // console.log(res.data);
                        this.message.notiSuccess = 'Registered Successfuly 🎉 Login Now'
                    })
                    .catch((err) => {
                        // console.log(err);
                        this.message.notiError = 'Email already exists 😢'
                        this.message.notiSuccess = ''
                    })
            } else {
                this.message.notiError = 'Error! Invalid Forum 😢'
                this.message.notiSuccess = ''
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
