// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import iview from "iview";
import { store } from "./store.js";
import "iview/dist/styles/iview.css";
import "./assets/style.css";

Vue.use(iview);

Vue.config.productionTip = false;

/**
 *  router interceptor
 */
// router.beforeEach((to, _, next) => {
//   iview.LoadingBar.start();
//   if (store.state.userInfo.isLogined) {
//     console.log(to.path);
//     if (to.path == "/login") {
//       console.log("redirect to home");
//       router.push({ path: "/" });
//     } else {
//       next();
//     }
//     return;
//   }

//   if (to.path != "/login"){
//     router.push({ path: "/login" });
//   }else{
//     next();
//   }

// });

// router.afterEach((to, from) => {
//   iview.LoadingBar.finish();
//  });

new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>"
});
