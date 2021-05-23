import Vue from "vue";
import Vuex from "vuex";
import all from './modules/all'
import chat from './modules/chat'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        all,
        chat
    }
});