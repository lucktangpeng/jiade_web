import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "@/styles/index.scss";
Vue.use(ElementUI);

Vue.config.productionTip = false;

// Vue.mixin({
//   created: async function () {
//     await store.dispatch('GetContent')
//   }
// })

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    // store.dispatch('GetContent')
    // console.log(store.state.Content)
  }
}).$mount("#app");
