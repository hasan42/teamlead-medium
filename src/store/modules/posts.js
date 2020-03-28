import Axios from 'axios'

export default {
  namespaced: true,
  state: {
    baseURL: "http://localhost:3000/posts",
    posts: [],
    currentPage: 1,
    postsLength: null
  },
  getters: {
    getPageLength: (state)=>()=>{
      const res = Axios.get(`${state.baseURL}`)
      return res.data.length;
    },
    getItems: (state) => () => {
      return state.posts
    },
    getItemByIdForEdit: (state) => (id) => {
      return state.posts.find(el=>el.id===id);
    },
  },
  mutations: {
    async getAllPostsRemote(state){
      try {
        const res = await Axios.get(`${state.baseURL}`);
        state.postsLength = res.data.length;
      } catch(e) {
        console.error(e)
      }
    },
    async getPostsRemote(state){
      try {
        const res = await Axios.get(`${state.baseURL}`);
        state.posts = res.data;
      } catch(e) {
        console.error(e)
      }
    },
    async getPostsByPageRemote(state){
      try {
        const res = await Axios.get(`${state.baseURL}?_page=${state.currentPage}`)
        state.posts = res.data;
      } catch(e) {
        console.error(e)
      }
    },
    async clapPost(state, id) {

      try {
        let post = state.posts.find(el=>el.id===id);
        post.claps++;

        await Axios.put(`${state.baseURL}/${id}`, post);

      } catch(e) {
        console.error(e)
      }
    },
    async deletePost(state, id){
      /* DONT WORK FIX*/
      try {
        console.log(String(id))
        // const res = await Axios.delete( `${state.baseURL}`,  { params: { userId: 3 } })
        // let qwe = state.baseURL + '/' + id
        Axios({
            method: 'delete',
            url: state.baseURL,
            params: { id: "a" },
            headers: {'Access-Control-Allow-Origin': '*'}
          })
          .then(resp => {
            console.log(resp)
          }).catch(error => {
            console.log(error);
          });
        // console.log(res)
      } catch(e) {
        console.error(e)
      }
      /* DONT WORK FIX*/
    },
    async newPost(state, obj){
      try {
        let maxId = Math.max.apply(Math, state.posts.map(item => item.id));
        maxId = maxId == -Infinity ? 0 : maxId;
        
        let date = new Date();
        date.toISOString();
        
        let newPost = {
          id: maxId + 1,
          title: obj.title,
          description: obj.description,
          claps: 0,
          createdAt: date,
          updateAt: date,
          userId: 1
        };

        const res = await Axios.post(state.baseURL, newPost);
        state.posts = [...state.posts, res.data];

      } catch(e) {
        console.error(e)
      }
    },
    async editPost(state, obj){
      try {
        let date = new Date();
        date.toISOString();

        let editedPost = {
          title : obj.title,
          description : obj.description,
          updateAt : date
        };
        let post = state.posts.find(el=>el.id===obj.id)
        post = {...post, ...editedPost};

        await Axios.put(`${state.baseURL}/${obj.id}`, post).then((response) => {
          // console.log(response)
          if(response){
            this.commit('posts/getPostsRemote')
          }
        });
      } catch(e) {
        console.error(e)
      }
    },
    changePage(state,page){
      state.currentPage = page;
      this.commit('posts/getPostsByPageRemote')
    }
  },
  actions: {
  },
  modules: {
  }
}
