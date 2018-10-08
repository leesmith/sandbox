import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts;
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            vuexContext.commit("setPosts", [
              {
                id: "1",
                title: "First Post",
                previewText: "This is my first post!",
                thumbnail:
                  "https://static.techspot.com/images2/news/bigimage/2016/11/2016-11-21-image-2.jpg"
              },
              {
                id: "2",
                title: "Second Post",
                previewText: "This is my second post!",
                thumbnail:
                  "https://static.techspot.com/images2/news/bigimage/2016/11/2016-11-21-image-2.jpg"
              }
            ]);
            resolve();
          }, 1000);
        });
      },
      setPosts(vuexContext) {
        vuexContext.commit("setPosts", posts);
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts;
      }
    }
  });
};

export default createStore;
