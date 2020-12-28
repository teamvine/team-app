const getters = {
    getToken: (state) => {
        return state.token
    },
    getUser: (state) => {
        return state.user
    },
    getUserWorkspaces: (state) => {
        return state.userWorkspaces
    },
    getCurrentWorkspace: (state) => {
        return state.currentWorkspace
    },
    getCurrentWorkspaceMembers: (state) => {
        return state.currentWorkspaceMembers
    },
    getCurrentWorkspaceAllChannels: (state) => {
        return state.currentWorkspaceAllChannels
    },
    getCurrentWorkspaceJoinedChannels: (state) => {
        return state.currentWorkspaceJoinedChannels
    },
    getUserDirectChatReceivers: (state) => {
        return state.userDirectChatReceivers
    }
}

export default getters