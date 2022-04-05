import { createStore } from 'vuex'
// import createPersistedState from "vuex-persistedstate";
import axios from 'axios'

export default createStore({
  state: {
    hasToken: !window.sessionStorage.getItem('access_token') == '' ? true : false,
    user: '',
    postData: [],
  },
  getters: {
  },
  mutations: {
    loggedOut(state) {
      state.hasToken = false;
      state.user = ''
    },

  },
  actions: {

    logOut({ commit }) {
      let token = window.sessionStorage.getItem('access_token')
      axios.get('http://127.0.0.1:8000/api/logout', {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      })
        .then(res => {
          console.log(res)
          if (res.data.status_code == 200) {
            window.sessionStorage.removeItem('access_token')
            console.log(res.data.message)
            commit('loggedOut')
          }
        })
        .catch(error => {
          // let eerror = error.response.data.message;
          console.log(error)
        })
    },
  },
  modules: {
  }
})
