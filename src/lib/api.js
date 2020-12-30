module.exports = {
    baseURL: "http://localhost:3000", //api server base url
    // ioURL: "http://localhost:3001", //socket server url
    // baseURL: "https://rconnect-backend.herokuapp.com", //api server base url
    ioURL: "https://rconnect-backend-socket.herokuapp.com", //socket server url
    loginAPI: {
        authorize: "/user/login"
    },
    userAPI: {
        joinedChannelList: "/channel/user-all-joined-channels",
        registerUser: "/user/register",
        getUserChatsList: "/user/get-user-chats",
        AddOrUpdateUserChats: "/user/add-or-update-user-chats",
        verifyToken: "/user/verify-token",
        getUsersByAnyName: "/user/by-name",
        switchWorkspace: "/user/switch-workspace",
        getUserAccountInfo: "/user/account-info",
        getUserById: "/user/user-by-id/",
        checkIfToChat: "/user/check-user-for-chat",
        updateAccount: "/user/update-account",
        verifyEmail: "/user/verify_email",
        checkIfEmailUsed: "/user/check-email-taken/"
    },
    workspaceAPI: {
        createNewWorkspace: "/workspace/new-workspace",
        getAllChannels: "/workspace/all-channels/",
        getAllMembers: "/workspace/all-members/",
        searchMembersByName: "/workspace/search-members-by-name",
        searchPublicWorkspaces: "/workspace/public-by-name/",
        joinWorkspace: "/workspace/add-members/"
    },
    channelAPI: {
        getAllMembers: "/channel/all-members",
        addMembers: "/channel/add-members",
        createNewChannel: "/channel/new-channel",
    },
    messageAPI: { //channel
        uploadAttachment: "/file/upload",
        findMessage: "/channel/message/find",
        getAllChannelMessages: "/message/get-all-channel-messages", //fetch latest few messages
        getOlderMessages: "/message/get-channel-older-messages" //fetch older few messages
    },
    personalChatAPI: { //direct chat
        getPersonalChatMessages: "/message/get-direct-chat-messages", //fetch latest few messages
        getOlderMessages: "/message/get-direct-chat-older-messages" //fetch older few messages
    }
};