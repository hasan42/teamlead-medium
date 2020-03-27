import Axios from 'axios'

export default {
  namespaced: true,
  state: {
    baseURL: "http://localhost:3000/users",
    user: null,
    errorMsg: false
  },
  getters: {
    getRole (state) {
      console.log('getRole')
      return state.user.role
    },
  },
  mutations: {
    async userLogin(state, obj){
      try {

        const res = await Axios.get(`${state.baseURL}?login=${obj.login}&password=${obj.password}`)
        // console.log(res.data)
        if(res.data.length > 0){
          state.user = res.data;
          state.errorMsg = false;
        }else{
          // console.log('no enter')
          state.user = null;
          state.errorMsg = true;
        }
      } catch(e) {
        console.error(e)
      }
    },
    userExit(state){
      state.user = null;
      state.errorMsg = false;
    }
  },
  actions: {
  },
  modules: {
  }
}
