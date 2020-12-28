import actions from "../actions/all";
import mutations from "../mutations/all";
import getters from "../getters/all";
export default {
    namespaced: true,
    state: () => ({
        token: null,
        pageLoadingProcess: {
            isLoading: true,
            gotInfo: false,
            errorOccured: false
        },
        user: {},
        userSettings: {
            mode: 1 //white mode
        },
        userAppFlow: {
            hasWorkspaces: false,
            switchedWorkspaces: false,
            currentWorkspace_id: "",
            gotUserJoinedChannels: false,
            gotUserDirectChatReceivers: false,
            gotCurrentWorkspaceMembers: false
        },
        userWorkspaces: [],
        currentWorkspace: {},
        currentWorkspaceMembers: [],
        currentWorkspaceAllChannels: [],
        currentWorkspaceJoinedChannels: [],
        userDirectChatReceivers: [],
    }),
    mutations,
    actions,
    getters,
    modules: {}
}