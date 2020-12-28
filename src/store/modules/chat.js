import actions from "../actions/chat";
import mutations from "../mutations/chat";
import getters from "../getters/chat";
export default {
    namespaced: true,
    state: () => ({
        currentChatType: "channel", //channel or direct
        messagesLoadingProcess: {
            isLoadingMessages: true,
            gotMessages: false,
            GotError: false,
            noMore: 1
        },
        currentChannel: {},
        members: {},
        currentChannelMembers: [],
        currentDirectChatReceiver: {},
        messages: {}, //N.B: all messages must be formated into JSON not Object
        currentChatMessages: {},
        threads: {},
        currentThread: {}
    }),
    mutations,
    actions,
    getters,
    modules: {}
}