import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import '../src/assets/remixicons/remixicon.css'
import VEmojiPicker from 'v-emoji-picker';
import 'nprogress/nprogress.css'
import VModal from 'vue-js-modal'

Vue.config.productionTip = false
Vue.use(VEmojiPicker);
Vue.use(VModal, {componentName: 'VueModal', dynamicDefault: { draggable: true, resizable: false } })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
