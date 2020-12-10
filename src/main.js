import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import '../src/assets/remixicons/remixicon.css'
import VEmojiPicker from 'v-emoji-picker';
import 'nprogress/nprogress.css'

Vue.config.productionTip = false
Vue.use(VEmojiPicker);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
