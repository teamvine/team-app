const _ = require('lodash')
const mutations = {
    setCurrentChatType: (state, type) => {
        state.currentChatType = type
    },
    setCurrentChannel: (state, channel) => {
        state.currentChannel = channel
    },
    resetMembers: (state) => {
        state.members = {}
    },
    setMembers: (state, data) => {
        state.members[data.channel._id] = {
            channel: data.channel,
            members: data.members
        }
    },
    setCurrentChannelMembers: (state, data) => {
        if (state.members[data.channel._id]) {
            state.currentChannelMembers = state.members[data.channel._id].members
        } else {
            state.currentChannelMembers = []
        }
    },
    addMembersToChannel: (state, data = { channel: {}, newMembers: [] }) => {
        if (state.members[data.channel._id]) {
            for (let index = 0; index < data.newMembers.length; index++) {
                state.members[data.channel._id].members.push(data.newMembers[index])
            }
        }
    },
    setCurrentDirectChatReceiver: (state, user) => {
        state.currentDirectChatReceiver = user
    },
    setMessagesLoadingProcess: (state, proc) => {
        state.messagesLoadingProcess = proc
    },
    /**
     * set messages of chat by access_id
     * @param {Object} data object containing access_id and messages
     */
    setMessages: (state, data) => {
        let chat_type = data.access_id == state.currentDirectChatReceiver._id ? 'direct' : 'channel'
        state.messages[data.access_id] = {
            chat_type: chat_type,
            messages: {}
        }
        let sms_array = _.toArray(data.messages)
        let all = {}
        for (let index = 0; index < sms_array.length; index++) {
            all[sms_array[index]._id] = sms_array[index]
        }
        state.messages[data.access_id].messages = all
    },
    /**
     * append new message of chat by access_id
     * @param {Object} data object containing access_id and new message
     */
    addMessage: (state, data) => {
        if (state.messages[data.access_id]) {
            let all = {}
            let current_sms = _.toArray(state.messages[data.access_id].messages)
            for (let index = 0; index < current_sms.length; index++) {
                all[current_sms[index]._id] = current_sms[index];
            }
            all[data.message._id] = data.message
            state.messages[data.access_id].messages = all
            if (state.currentChatType == 'direct' && state.currentDirectChatReceiver._id == data.access_id) {
                state.currentChatMessages = state.messages[data.access_id].messages
                let messagesList = document.querySelector("#messages");
                setTimeout(() => {
                    messagesList.scrollTop = messagesList.scrollHeight
                }, 100)
            }
            if (state.currentChatType == 'channel' && state.currentChannel._id == data.access_id) {
                state.currentChatMessages = state.messages[data.access_id].messages
                let messagesList = document.querySelector("#messages");
                setTimeout(() => {
                    messagesList.scrollTop = messagesList.scrollHeight
                }, 100)
            }
        }
    },
    /**
     * delete a message
     * @param {Object} inform information
     */
    deleteMessage: (state, inform)=> {
        // inform= {
        //     access_id: "",
        //     chat_type: "",
        //     message_id: ""
        // }
        if (state.messages[inform.access_id]){
            let all = {}
            let current_sms = _.toArray(state.messages[inform.access_id].messages)
            for (let index = 0; index < current_sms.length; index++) {
                if(current_sms[index]._id.toString()!=inform.message_id.toString()) all[current_sms[index]._id] = current_sms[index];
            }
            state.messages[inform.access_id].messages = all
            //adjust current chat messages
            if (state.currentChatType == 'direct' && state.currentDirectChatReceiver._id == inform.access_id) {
                state.currentChatMessages = state.messages[inform.access_id].messages
            }
            if (state.currentChatType == 'channel' && state.currentChannel._id == inform.access_id) {
                state.currentChatMessages = state.messages[inform.access_id].messages
            }
        }
    },
    /**
     * pepend old messages of chat by access_id
     * @param {Object} data object containing access_id and old messages
     */
    prependMessages: (state, data) => {
        if (state.messages[data.access_id]) {
            let sms_array = _.toArray(data.messages)
            let new_sms = {}
            if (sms_array.length > 0) {
                for (let index = 0; index < sms_array.length; index++) {
                    new_sms[sms_array[index]._id] = sms_array[index]
                }
                let current_sms = _.toArray(state.messages[data.access_id].messages)
                for (let index = 0; index < current_sms.length; index++) {
                    new_sms[current_sms[index]._id] = current_sms[index]
                }
                state.messages[data.access_id].messages = new_sms
            }
            if (data.type == 'direct' && state.currentDirectChatReceiver._id == data.access_id) {
                state.currentChatMessages = state.messages[data.access_id].messages
            }
            if (data.type == 'channel' && state.currentChannel._id == data.access_id) {
                state.currentChatMessages = state.messages[data.access_id].messages
            }
        }
    },
    setCurrentChatMessages: (state, access_id) => {
        if (state.messages[access_id]) {
            state.currentChatMessages = state.messages[access_id].messages
        } else {
            state.currentChatMessages = []
        }
        let messagesList = document.querySelector("#messages");
        messagesList.scrollTop = messagesList.scrollHeight
    },
    setCurrentThread: (state, data) => {
        state.currentThread = {
            is_active: true,
            chat_type: data.chat_type,
            message: state.messages[data.access_id].messages[data.message_id]
        }
    },
    addReply(state, data){
        // data={access_id: "",reply: {},chat_type: "direct/channel",message_id: ""}
        if (state.messages[data.access_id] && state.messages[data.access_id].messages[data.message_id]) {
            state.messages[data.access_id].messages[data.message_id].replies.push(data.reply)
        }
    },
    /**
     * Change the column to show in small screens
     * @param {*} newCol new column i.e sidebar or chat
     */
    changeCol: (state, newCol)=>{
        state.show_col = newCol
    }

}

export default mutations