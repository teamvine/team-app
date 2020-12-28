const actions = {
    resetpageLoadingProcess: ({ commit }) => {
        commit("setpageLoadingProcess", { isLoading: true, gotInfo: false, errorOccured: false })
    },
    resetAllModuleState: ({ commit, dispatch }) => {
        dispatch("resetpageLoadingProcess")
        commit("setToken", null)
        commit("setUser", {})
        commit("setUserAppFlow", {
            hasWorkspaces: false,
            switchedWorkspaces: false,
            currentWorkspace_id: "",
            gotUserJoinedChannels: false,
            gotUserDirectChatReceivers: false
        })
        commit("setUserWorkspaces", [])
        commit("setCurrentWorkspace", {})
        commit("setCurrentWorkspaceMembers", [])
        commit("setCurrentWorkspaceAllChannels", [])
        commit("setCurrentWorkspaceJoinedChannels", [])
        commit("setUserDirectChatReceivers", [])
    }
}

export default actions