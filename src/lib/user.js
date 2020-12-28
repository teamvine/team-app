const axios = require("./axios");
// import Axios from 'axios'
const { baseURL, userAPI, personalChatAPI } = require("./api");

function registerUser(user) {
    return axios.request({
        url: baseURL + userAPI.registerUser,
        method: "POST",
        data: user
    });
}


async function verifyToken(token) {
    return await axios.request({
        url: baseURL + userAPI.verifyToken,
        method: "GET",
        params: {
            token: token
        }
    });
}

function updateAccount(token, user_id, fields) {
    return axios.request({
        url: baseURL + userAPI.updateAccount,
        method: "PUT",
        headers: {
            Authorization: `Bearer ${token}`
        },
        data: {
            user_id: user_id,
            fields: fields
        }
    })
}

function getUserById(token, user_id) {
    return axios.request({
        url: baseURL + userAPI.getUserById + user_id,
        method: "get",
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}

function checkIfToChat(token, user_id, workspace_id) {
    return axios.request({
        url: baseURL + userAPI.checkIfToChat + "?user_id=" + user_id.toString() + "&workspace_id=" + workspace_id.toString(),
        method: "get",
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}

function getUserAccountInfo(token, user_id, query) {
    return axios.request({
        url: baseURL + userAPI.getUserAccountInfo,
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`
        },
        data: {
            user_id: user_id,
            query: query
        }
    });
}

function getUsersByAnyName(token, name) {
    return axios.request({
        url: baseURL + userAPI.getUsersByAnyName + "/" + name,
        method: "get",
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}

function switchCurrentWorkspace(token, workspace, NEW) {
    return axios.request({
        url: baseURL + userAPI.switchWorkspace,
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`
        },
        data: {
            token: token,
            workspace: workspace,
            NEW: NEW //if to switch to new one ie true|false
        }
    });
}

function getJoinedChannelsList(token, workspace_id, user_id) {
    return axios.request({
        url: baseURL + userAPI.joinedChannelList,
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`
        },
        data: {
            user_id: user_id,
            workspace_id: workspace_id
        }
    });
}

function getUserChatsList(token, workspace_id, user_id) {
    return axios.request({
        url: baseURL + userAPI.getUserChatsList + "?user_id=" + user_id.toString() + "&&workspace_id=" + workspace_id.toString(),
        method: "get",
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}

function AddOrUpdateUserChats(token, workspace_id, user_id, chats = [{ user_id: "", active: true }]) {
    return axios.request({
        url: baseURL + userAPI.AddOrUpdateUserChats,
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`
        },
        data: {
            user_id: user_id,
            workspace_id: workspace_id,
            chats: chats
        }
    });
}

function VerifyEmail(user){
    return axios.request({
        url: baseURL + userAPI.verifyEmail,
        method: "POST",
        data: user
    });
}
function checkIfEmailUsed(email){
    return axios.request({
        url: baseURL + userAPI.checkIfEmailUsed+email,
        method: "GET"
    });
}

module.exports = {
    getUserById,
    checkIfToChat,
    getJoinedChannelsList,
    registerUser,
    getUserChatsList,
    AddOrUpdateUserChats,
    verifyToken,
    getUsersByAnyName,
    switchCurrentWorkspace,
    getUserAccountInfo,
    updateAccount,
    VerifyEmail,
    checkIfEmailUsed
};