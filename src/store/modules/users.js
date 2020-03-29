import Axios from 'axios'

export default {
  namespaced: true,
  state: {
    baseURL: "http://localhost:3000/users",
    user: null,
    errorMsg: ''
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
          state.errorMsg = '';
        }else{
          // console.log('no enter')
          state.user = null;
          state.errorMsg = 'Error: Wrong login or password.';
        }
      } catch(e) {
        console.error(e)
      }
    },
    makeError(state, str){
      state.errorMsg = str;
    },
    userExit(state){
      state.user = null;
      state.errorMsg = '';
    }
  },
  actions: {
  },
  modules: {
  }
}
