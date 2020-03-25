import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: [
      {
        id: 1,
        title: "Название поста",
        description: "Текст",
        claps: 0,
        createdAt: "2019-09-29T00:00:00.000Z",
        updateAt: "2019-09-29T00:00:00.000Z",
        userId: 1
      },
      {
        id: 2,
        title: "1Название поста",
        description: "1Текст",
        claps: 1,
        createdAt: "2019-09-29T00:00:00.000Z",
        updateAt: "2019-09-29T00:00:00.000Z",
        userId: 2
      }
    ],
  },
  getters: {
    getItems: (state) => () => {
      return state.posts
    },
  },
  mutations: {
    clapPost(state, id) {
      let it = state.posts.find(el=>el.id===id);
      it.claps++;
    },
    deletePost(state, id){
      let el = state.posts.findIndex(el => el.id === id);
      state.posts.splice(el, 1);
    },
    editPost(state, id){
      console.log(id)
    },
  },
  actions: {
  },
  modules: {
  }
})
