const axios = require("./axios");
const { baseURL, userAPI, personalChatAPI } = require("./api");
// import Axios from 'axios'


/**
 * Create a new user
 * @param {String} user the new user info
 * @returns {Promise} Promise<AxiosResponse> -promise with axios response
 */
function registerUser(user) {
    return axios.request({
        url: baseURL + userAPI.registerUser,
        method: "POST",
        data: user
    });
}


/**
 * Get user all info on initial page load
 * @param {String} token user token
 * @returns {Promise} Promise<AxiosResponse> -promise with axios response
 */
async function verifyToken(token) {
    return await axios.request({
        url: baseURL + userAPI.verifyToken,
        method: "GET",
        params: {
            token: token
        }
    });
}


/**
 * Update user account info
 * @param {String} token user token
 * @param {String} user_id user id
 * @param {Object} fields object of fields to update
 * @returns {Promise} Promise<AxiosResponse> -promise with axios response
 */
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


/**
 * Get user info by his/her id
 * @param {String} token user token
 * @param {String} user_id user id
 * @returns {Promise} Promise<AxiosResponse> -promise with axios response
 */
function getUserById(token, user_id) {
    return axios.request({
        url: baseURL + userAPI.getUserById + user_id,
        method: "get",
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}


/**
 * Check if the user has a given contacts
 * @param {String} token user token
 * @param {String} user_id user id
 * @param {String} workspace_id workspace id
 * @returns {Promise} Promise<AxiosResponse> -promise with axios response
 */
function checkIfToChat(token, user_id, workspace_id) {
    return axios.request({
        url: baseURL + userAPI.checkIfToChat + "?user_id=" + user_id.toString() + "&workspace_id=" + workspace_id.toString(),
        method: "get",
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}


/**
 * Get user's info based on a given query
 * @param {String} token user token
 * @param {String} user_id user id
 * @param {String} query the query
 * @returns {Promise} Promise<AxiosResponse> -promise with axios response
 */
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


/**
 * Search users with names matching or containing name
 * @param {String} token user token
 * @param {String} name search text name
 * @returns {Promise} Promise<AxiosResponse> -promise with axios response
 */
function getUsersByAnyName(token, name) {
    return axios.request({
        url: baseURL + userAPI.getUsersByAnyName + "/" + name,
        method: "get",
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}


/**
 * Switch to a given workspace
 * @param {String} token user token
 * @param {Object} workspace workspace object to switch to
 * @param {String} user_id user id
 * @param {Boolean} NEW if to switch to the new one ie: adding it to token
 * @returns {Promise} Promise<AxiosResponse> -promise with axios response
 */
function switchCurrentWorkspace(token, workspace,user_id, NEW) {
    return axios.request({
        url: baseURL + userAPI.switchWorkspace,
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`
        },
        data: {
            token: token,
            workspace: workspace,
            user_id: user_id,
            NEW: NEW //if to switch to new one ie true|false
        }
    });
}


/**
 * Get users all channels
 * @param {String} token user token
 * @param {String} workspace_id workspace id
 * @param {String} user_id user id
 * @returns {Promise} Promise<AxiosResponse> -promise with axios response
 */
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


/**
 * Get user's contacts
 * @param {String} token user token
 * @param {String} workspace_id workspace id
 * @param {String} user_id user id
 * @returns {Promise} Promise<AxiosResponse> -promise with axios response
 */
function getUserChatsList(token, workspace_id, user_id) {
    return axios.request({
        url: baseURL + userAPI.getUserChatsList + "?user_id=" + user_id.toString() + "&&workspace_id=" + workspace_id.toString(),
        method: "get",
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}


/**
 * Add or remove user's contacts
 * @param {String} token user token
 * @param {String} workspace_id workspace id
 * @param {String} user_id user id
 * @param {Array} chats new contacts
 * @returns {Promise} Promise<AxiosResponse> -promise with axios response
 */
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


/**
 * Verify a user's email using verification code
 * @param {Object} user user object
 * @returns {Promise} Promise<AxiosResponse> -promise with axios response
 */
function VerifyEmail(user){
    return axios.request({
        url: baseURL + userAPI.verifyEmail,
        method: "POST",
        data: user
    });
}


/**
 * Check if the email is already used
 * @param {String} email email address
 * @returns {Promise} Promise<AxiosResponse> -promise with axios response
 */
function checkIfEmailUsed(email){
    return axios.request({
        url: baseURL + userAPI.checkIfEmailUsed+email,
        method: "GET"
    });
}

/**
 * update general user profile
 * @param {String} token user token
 * @param {String} user_id user id
 * @param {Object} fields fields to update note: must be same to db fields
 */
function updateProfile(token, user_id, fields){
    return axios.request({
        url: baseURL+userAPI.updateProfile,
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

/**
 * set updated profile picture
 * @param {String} token user token
 * @param {String} user_id user id
 * @param {Boolean} val new value
 */
function setUpdatedProfilePic(token, user_id, val){
    return axios.request({
        url: baseURL+userAPI.setUpdatedProfilePic,
        method: "PUT",
        headers: {
            Authorization: `Bearer ${token}`
        },
        data: {
            user_id: user_id,
            new_val: val
        }
    })
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
    checkIfEmailUsed,
    updateProfile,
    setUpdatedProfilePic
};