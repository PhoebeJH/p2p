// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import filter from './common/filter'
Vue.config.productionTip = false;


for (let key in filter) {
  Vue.filter(key, (val, value1, value2) => {
    return filter[key](val, value1, value2);
  });
}

Vue.use(ElementUI);
// Vue.use(Axios);
Vue.prototype.Axios = Axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
