<template>
<div class="grid w-full h-full bg-gray-200 items-center">

    <div class="container max-w-2xl mx-auto shadow-lg rounded-2xl my-10 md:w-3/4">
        <div class="space-y-6 bg-white rounded-2xl">
            <div class="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                <h2 class="max-w-sm mx-auto font-bold md:w-1/3">
                    Personal info
                </h2>
                <div class="max-w-sm mx-auto space-y-5 md:w-2/3">
                    <div>
                        <div class=" relative ">
                            <input placeholder="Full Name" v-model="name" type="text" class="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-4 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent" />
                            <p class="absolute text-vs text-red-500 -bottom-0 right-2">
                                {{message.name}}
                            </p>
                        </div>
                    </div>
                    <div>
                        <div class=" relative ">
                            <input readonly placeholder="Your email" v-model="email" type="text" class="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-4 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent" />
                            <p class="absolute text-vs text-red-500 -bottom-0 right-2">
                                {{message.email}}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div class="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                <h2 class="max-w-sm mx-auto font-bold md:w-1/3">
                    About More
                </h2>
                <div class="max-w-sm mx-auto space-y-5 md:w-2/3">
                    <div class="col-span-2">
                        <label class="text-gray-700" for="name">
                            <textarea placeholder="Some more about you... 😊" class="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent" rows="5" cols="40">
                            </textarea>
                        </label>
                    </div>
                </div>
            </div>
            <hr />
            <div class="items-center w-full p-8 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                <h2 class="max-w-sm mx-auto font-bold md:w-4/12">
                    Change password
                </h2>
                <div class="w-full max-w-sm pl-2 mx-auto space-y-5 md:w-5/12 md:pl-9 md:inline-flex">
                    <div class=" relative ">
                        <p>Reset my password.</p>
                    </div>
                </div>
                <div class="text-center md:w-3/12 md:pl-6">
                    <router-link to="/reset-password"><button type="button" class="py-2 px-4  bg-indigo-700 hover:bg-indigo-800 focus:ring-orange-600 focus:ring-offset-pink-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                            Reset 🔑
                        </button></router-link>
                </div>
            </div>
            <hr />
            <div class="w-full px-4 pb-4 ml-auto text-gray-500 md:w-1/3">
                <button type="submit" @click="updateProfile" class="py-2 px-4  bg-orange-500 hover:bg-orange-600 focus:ring-orange-600 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                    Update
                </button>
            </div>
        </div>
    </div>

</div>
</template>

<script>
export default {
    data() {
        return {
            name: this.$store.state.user.name,
            email: this.$store.state.user.email,
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

    },
    methods: {
        updateProfile() {
            let token = window.sessionStorage.getItem('access_token');
            let id = this.$store.state.user.id;
            console.log(this.name)
            this.axios.put(`http://127.0.0.1:8000/api/user/${id}`, {
                    name: this.name,
                })
                .then(res => {
                    console.log(res)
                    if (res.data.status_code == 200) {
                        // this.$store.state.user = res.data.user;
                        this.message['updateMes'] = res.data.message
                    }
                })
                .catch(error => {
                    // let eerror = error.response.data.message;
                    console.log(error)
                })
        },
    }
}
</script>

<style scoped>
.text-vs {
    font-size: 0.9rem;

}
</style>
