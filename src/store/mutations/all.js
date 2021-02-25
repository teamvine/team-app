const mutations = {
    setpageLoadingProcess: (state,newprocess={isLoading: true,gotInfo: false, errorOccured: false})=>{
        state.pageLoadingProcess = newprocess
    },
    setToken: (state, token) => {
        state.token = token;
    },
    setUser: (state, user) => {
        state.user = user;
    },
    setUserPicture: (state, picture)=> {
        state.user.profile_pic = picture
    },
    setGotCurrentWorkspaceMembers: (state,val)=>{
        state.userAppFlow.gotCurrentWorkspaceMembers = val
    },
    setUserAppFlow: (state,appflow) => {
        state.userAppFlow = appflow
    },
    setUserWorkspaces: (state,workspaces) =>{
        state.userWorkspaces = workspaces
    },
    setCurrentWorkspace: (state,workspace)=>{
        state.currentWorkspace = workspace
    },
    setCurrentWorkspaceMembers: (state,members)=>{
        state.currentWorkspaceMembers = members
    },
    setCurrentWorkspaceAllChannels: (state,channels)=>{
        state.currentWorkspaceAllChannels = channels
    },
    setCurrentWorkspaceJoinedChannels: (state,channels)=>{
        state.currentWorkspaceJoinedChannels = channels
    },
    setAppFlowGotUserJoinedChannels: (state,val)=>{
        state.userAppFlow.gotUserJoinedChannels = val
    },
    setAppFlowGotUserDirectChatReceivers: (state,val)=>{
        state.userAppFlow.gotUserDirectChatReceivers = val
    },
    setUserDirectChatReceivers: (state,receivers)=>{
        state.userDirectChatReceivers = receivers
    },
    addUserDirectChatReceiver: (state,receiver)=>{
        state.userDirectChatReceivers.push(receiver)
    },
    addCurrentWorkspaceJoinedChannel: (state,channel)=>{
        state.currentWorkspaceJoinedChannels.push(channel)
    },
}

export default mutations