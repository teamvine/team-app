import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import '../src/assets/remixicons/remixicon.css'
import { Vue_t_settings } from "./config/vueTailwind_config"
import VueTailwind from "vue-tailwind"
import VueCodeHighlight from 'vue-code-highlight';
import VueSocketIOExt from 'vue-socket.io-extended';
import io from 'socket.io-client';
import {messagesServer} from "./lib/api"
import vClickOutside from 'v-click-outside'
 
Vue.config.productionTip = false
Vue.use(VueTailwind, Vue_t_settings)

Vue.use(VueCodeHighlight)
Vue.use(vClickOutside)

Vue.use(
    VueSocketIOExt,
    io(messagesServer, {
        autoConnect: false,
        // secure: true //uncomment if it is hosted or uses https://
        reconnectionDelay: 3000,
        transportOptions: {
            headers: {
                Authorization: `Bearer ${store.state.all.token}`
            },
            sameSite: false
        },
        transports: ["websocket"]
    }), {
        store
    }
);



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
