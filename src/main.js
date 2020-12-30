import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import '../src/assets/remixicons/remixicon.css'
import { Vue_t_settings } from "./config/vueTailwind_config"
import VEmojiPicker from 'v-emoji-picker';
import 'nprogress/nprogress.css'
import VModal from 'vue-js-modal'
import io from "socket.io-client";
import VueSocketIOExt from 'vue-socket.io-extended';
import VueTailwind from 'vue-tailwind'

Vue.config.productionTip = false
Vue.use(VEmojiPicker);
Vue.use(VModal, {componentName: 'VueModal', dynamicDefault: { draggable: true, resizable: false } })
Vue.use(VueTailwind, Vue_t_settings)


import {ioURL} from "./lib/api"
Vue.use(
    VueSocketIOExt,
    io(ioURL, {
        autoConnect: false,
        secure: true, //uncomment if it is hosted or uses https://
        reconnectionDelay: 3000,
        transportOptions: { //add headers,query etc
            headers: {
                Authorization: `Bearer ${store.state.all.token}`
            },
            sameSite: false
        },
    }), {
      store
    }
);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
