const getters = {
    getCurrentChannel: (state) => {
        return state.currentChannel
    },
    getCurrentChannelMembers: (state) => {
        return state.currentChannelMembers
    }
}

export default getters