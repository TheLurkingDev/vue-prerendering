import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import router from './router';

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  document.querySelector('meta[name="description"]').setAttribute("content", to.meta.description);
  next();
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
