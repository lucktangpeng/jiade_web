import Vue from "vue";
import Vuex from "vuex";
import { getContent } from "../../services/content";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    Content: []
  },
  mutations: {
    AddContent(state, val) {
      state.Content = val;
    }
  },
  actions: {
    async GetContent(context) {
      const { data } = await getContent();
      context.commit("AddContent", data);
    }
  },
  modules: {}
});
