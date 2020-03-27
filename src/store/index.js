import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import users from './modules/users'
import posts from './modules/posts'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
  modules: {
    users,
    posts
  }
})
