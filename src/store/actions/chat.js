import { getPersonalChatMessages, getAllMessagesInChannel } from '../../lib/message'
import { getMembersInChannel } from '../../lib/channel'
const actions = {
    /**
     * reset chat module state
     * @param {Object} param0 vuex params
     */
    resetChatModuleState: ({ commit, dispatch, state }) => {
        commit("setMessagesLoadingProcess", {
            isLoadingMessages: true,
            gotMessages: false,
            GotError: false,
        })
        commit("setCurrentChatType", "channel")
        commit("setCurrentChannel", {})
        state.currentChannelMembers = []
        commit("resetMembers")
        commit("setCurrentDirectChatReceiver", {})
        state.messages = {}
        state.currentChatMessages = []
        dispatch("resetCurrentThread")
        dispatch("resetThreads")
    },
    /**
     * reset the current thread
     */
    resetCurrentThread: ({ state }) => {
        state.currentThread = {}
    },
    resetThreads: ({ state }) => {
        state.threads = {}
    },
    /**
     * load all current channel's members
     * @param {Object} param0 vuex params
     * @param {ThisType} self vue component
     */
    async loadCurrentChannelMembers({ commit, dispatch, state, rootState }, self) {
        let memb = []
        if (!state.members[state.currentChannel._id]) {
            return await getMembersInChannel(rootState.all.token, rootState.all.currentWorkspace._id, state.currentChannel._id)
                .then(res => {
                    if (res.data.err) {
                        self.$buefy.snackbar.open({
                            duration: 3000,
                            message: "Something went wrong or the server is currently unavailable.",
                            type: 'is-info',
                            position: 'is-top-right',
                            actionText: 'RETRY',
                            queue: false,
                            onAction: () => {
                                dispatch("loadCurrentChannelMembers", self)
                            }
                        })
                        return memb
                    } else {
                        commit("setMembers", {
                            channel: state.currentChannel,
                            members: res.data.data.channel_members
                        })
                        commit("setCurrentChannelMembers", {
                            channel: state.currentChannel
                        })
                        memb = res.data.data.channel_members
                        return memb
                    }
                })
        } else {
            commit("setCurrentChannelMembers", {
                channel: state.currentChannel
            })
            return state.currentChannelMembers
        }
    },

    /**
     * change room and set up new one
     * @param {Object} param0 vuex params
     * @param {ThisType} self vue component
     */
    changeAndSetUpRoom: ({ commit, dispatch, state, rootState }) => {
        //if is channel
        if (state.currentChatType == "channel") {
            if (state.messages[state.currentChannel._id]) {
                if (state.messages[state.currentChannel._id].messages.length > 0) {
                    commit("setCurrentChatMessages", state.currentChannel._id.toString())
                    commit("setMessagesLoadingProcess", {
                        isLoadingMessages: false,
                        gotMessages: true,
                        GotError: false
                    })
                } else {
                    commit("setMessagesLoadingProcess", {
                        isLoadingMessages: true,
                        gotMessages: false,
                        GotError: false
                    })
                }
            } else {
                commit("setMessagesLoadingProcess", {
                    isLoadingMessages: true,
                    gotMessages: false,
                    GotError: false
                })
            }
            getAllMessagesInChannel(rootState.all.token, rootState.all.currentWorkspace._id, state.currentChannel._id)
                .then(res => {
                    // state.messagesLoadingProcess.noMore = res.data.data.noMore
                    let messages = res.data.data.messages
                    commit("setMessages", { access_id: state.currentChannel._id.toString(), messages: messages })
                    commit("setCurrentChatMessages", state.currentChannel._id.toString())
                    commit("setMessagesLoadingProcess", {
                        isLoadingMessages: false,
                        gotMessages: true,
                        GotError: false
                    })
                })
                .catch(err => {
                    alert("Something went wrong or the server is not currently available.")
                    console.log(err)
                })
        }
        //if is direct chat
        if (state.currentChatType == "direct") {
            if (state.messages[state.currentDirectChatReceiver._id]) {
                if (state.messages[state.currentDirectChatReceiver._id].messages.length > 0) {
                    commit("setCurrentChatMessages", state.currentDirectChatReceiver._id.toString())
                    commit("setMessagesLoadingProcess", {
                        isLoadingMessages: false,
                        gotMessages: true,
                        GotError: false
                    })
                } else {
                    commit("setMessagesLoadingProcess", {
                        isLoadingMessages: true,
                        gotMessages: false,
                        GotError: false
                    })
                }
            } else {
                commit("setMessagesLoadingProcess", {
                    isLoadingMessages: true,
                    gotMessages: false,
                    GotError: false
                })
            }
            getPersonalChatMessages(rootState.all.token, rootState.all.currentWorkspace._id, rootState.all.user._id, state.currentDirectChatReceiver._id)
                .then(res => {
                    // state.messagesLoadingProcess.noMore = res.data.data.noMore
                    let messages = res.data.data.messages
                    commit("setMessages", { access_id: state.currentDirectChatReceiver._id.toString(), messages: messages })
                    commit("setCurrentChatMessages", state.currentDirectChatReceiver._id.toString())
                    commit("setMessagesLoadingProcess", {
                        isLoadingMessages: false,
                        gotMessages: true,
                        GotError: false
                    })
                })
                .catch(err => {
                    alert("Something went wrong or the server is not currently available.")
                    console.log(err)
                })
        }
    },

    /**
     * will be auto dispatched on new personal message
     * @param {Object} param0 vuex params 
     * @param {Object} message new message
     */
    socket_personalChatMessage({ state, rootState, commit, dispatch }, message) {
        // alert("direct message")
        //this represents Store
        let user = message.receiver_id.toString() === rootState.all.user._id.toString() ? "receiver" : "sender"
        let isForMe = message.receiver_id.toString() === rootState.all.user._id.toString() || message.sender_id.toString() === rootState.all.user._id.toString()
            //if the sender or the receiver is this user
        if (isForMe) {
            let hascontact = false
                //check if the receiver has this contact else add it
            if (rootState.all.userDirectChatReceivers.length < 1) hascontact = false;
            if (rootState.all.userDirectChatReceivers.length > 0) {
                let contacts = rootState.all.userDirectChatReceivers
                for (let index = 0; index < contacts.length; index++) {
                    let contact = contacts[index];
                    if (contact._id.toString() == message.sender_id.toString()) {
                        hascontact = true
                        break;
                    }
                }
            }
            //if user is the receiver and don't have the contact
            if (user == "receiver" && hascontact == false) {
                //the contact will be added at the chat_server.js file
                //get user info
                let contact = rootState.all.currentWorkspaceMembers.find(member => member._id.toString() == message.sender_id.toString())
                let all = []
                all = rootState.all.userDirectChatReceivers
                all.push(contact)
                this.commit("all/setUserDirectChatReceivers", all) //this==Store

            }
            //to do next
            //highlight the receiver on contacts list if it is not current receiver

            //add this message to messages list by access id
            let access_id;
            message.sender_id.toString() == rootState.all.user._id.toString() ? access_id = message.receiver_id : access_id = message.sender_id;
            commit("addMessage", { access_id, message });
        }
    },

    /**
     * will be auto dispatched on new personal message reply
     * @param {Object} param0 vuex params
     * @param {Object} reply new reply
     */
    socket_replyPersonalMessage({ state, rootState, commit, dispatch }, reply) {
        //this represents Store
        let isForMe = reply.receiver_id.toString() === rootState.all.user._id.toString() || reply.sender_id.toString() === rootState.all.user._id.toString()
            //if the sender or the receiver is this user
        if (isForMe) {
            //add this message to messages list by access id
            let access_id;
            reply.sender_id.toString() == rootState.all.user._id.toString() ? access_id = reply.receiver_id : access_id = reply.sender_id;
            commit("addReply", { access_id: access_id, reply: reply, type: "direct" });
        }
    },

    /**
     * will be auto dispatched on new channel message
     * @param {Object} param0 vuex params 
     * @param {Object} message new message
     */
    socket_chatMessage({ state, rootState, commit, dispatch }, message) { //channel chat
        //this == Store
        let isForMe = false
        let channel = rootState.all.currentWorkspaceJoinedChannels.find(channel =>
            channel._id.toString() === message.channel_id.toString()
        )
        channel == undefined ? isForMe = false : isForMe = true;
        if (isForMe) {
            //add this message to messages list by access id
            commit("addMessage", { access_id: message.channel_id, message });
        }
    },
    /**
     * will be auto dispatched on new channel message reply
     * @param {Object} param0 vuex params
     * @param {Object} reply new reply
     */
    socket_replyMessage({ state, rootState, commit, dispatch }, reply) {
        //this == Store
        let isForMe = false
        let channel = rootState.all.currentWorkspaceJoinedChannels.find(channel =>
            channel._id.toString() === reply.channel_id.toString()
        )
        channel == undefined ? isForMe = false : isForMe = true;
        if (isForMe) {
            //add this message to messages list by access id
            commit("addReply", { access_id: reply.channel_id, reply: reply, type: "channel" });
        }
    },
}

export default actions