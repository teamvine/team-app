module.exports = {
    baseURL: "http://localhost:3000", //api server base url (NodeJs)
    // messagesServer: "http://localhost:3001", //socket server url (NodeJs)
    // baseURL: "https://rconnect-backend.herokuapp.com", //api server base urL (NodeJs)
    messagesServer: "https://rconnect-backend-socket.herokuapp.com", //socket server url (NodeJs)
    filesBaseUrl: "http://127.0.0.1:8000/api/team-files", // files server (Django)
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
        checkIfEmailUsed: "/user/check-email-taken/",
        updateProfile: "/user/update-profile",
        setUpdatedProfilePic: "/user/set-updated-profile-pic"
    },
    workspaceAPI: {
        createNewWorkspace: "/workspace/new-workspace",
        getAllChannels: "/workspace/all-channels/",
        getAllMembers: "/workspace/all-members/",
        searchMembersByName: "/workspace/search-members-by-name",
        searchPublicWorkspaces: "/workspace/public-by-name/",
        joinWorkspace: "/workspace/add-members/",
        searchMembersNotInChannel: "/workspace/search-members-notInChannel"
    },
    channelAPI: {
        getAllMembers: "/channel/all-members",
        addMembers: "/channel/add-members",
        createNewChannel: "/channel/new-channel",
        searchPulicChannels: "/channel/search-public-by-name"
    },
    messageAPI: { //channel
        uploadAttachment: "/file/upload",
        findMessage: "/channel/message/find",
        getAllChannelMessages: "/message/get-all-channel-messages", //fetch latest few messages
        getOlderMessages: "/message/get-channel-older-messages", //fetch older few messages
        deleteChannelMessage: "/message/delete-channel-message",
        deleteDirectMessage: "/message/delete-direct-message"
    },
    personalChatAPI: { //direct chat
        getPersonalChatMessages: "/message/get-direct-chat-messages", //fetch latest few messages
        getOlderMessages: "/message/get-direct-chat-older-messages" //fetch older few messages
    },
    messages: {
        newChannelMessage: "/channel/new-message",
        newChannelReply: "/channel/new-reply",
        newDirectMessage: "/direct/new-message",
        newDirectReply: "/direct/new-reply"
    },
    settingsAPI: {
        updateNotificationSettings: "/settings/update-nofication-settings"
    },
    filesManageAPI: {
        updateProfilePicture: "/manage/profile/update-profile-picture"
    }
};

// let test_res = {
//     'asset_id': '3b84f7693390aa737fd518249f8a829e', 
//     'public_id': 'team_files/profile_pictures/profile_pic2.jpeg', 
//     'version': 1614177818, 
//     'version_id': 'b4aa6e443d8a0d474c1c1dfa31ab882f', 
//     'signature': 'c9a74364d3b9e09e92662c74dc4e3fa37ce98bd2',
//      'width': 576, 
//      'height': 576, 
//      'format': 'jpg', 
//      'resource_type': 'image', 
//      'created_at': '2021 - 02 - 24T14: 43: 38Z', 
//      'tags': [], 
//      'bytes': 41488, 
//      'type': 'upload', 
//      'etag': 'a17bf6a40fb356021c5b1d3328dbb2d1', 
//      'placeholder': false, 
//      'url': 'http://res.cloudinary.com/rconnect/image/upload/v1614177818/team_files/profile_pictures/profile_pic2.jpeg.jpg', 
//      'secure_url': 'https://res.cloudinary.com/rconnect/image/upload/v1614177818/team_files/profile_pictures/profile_pic2.jpeg.jpg', 
//      'overwritten': true
// }
