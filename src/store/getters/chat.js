const getters = {
    getCurrentChannel: (state) => {
        return state.currentChannel;
    },
    getCurrentChannelMembers: (state) => {
        return state.currentChannelMembers;
    },
    getCurrentDirectChatReceiver: (state) => {
        return state.currentDirectChatReceiver;
    }
}

export default getters