const axios = require("./axios");
const Axios = require('axios')
const { baseURL, messageAPI, personalChatAPI } = require("./api");

// function uploadAttachment(file) {
//   if (!file) return null;

//   let formData = new FormData();
//   formData.append("uploaded_file", file);

//   return axios.request({
//     url: baseURL + messageAPI.uploadAttachment,
//     method: "POST",
//     headers: {
//       "Content-Type": "multipart/form-data"
//     },
//     data: formData
//   });
// }

// function findMessage(token, keyword, channel_id) {
//   return axios.request({
//     url: baseURL + messageAPI.findMessage,
//     method: "GET",
//     headers: {
//       Authorization: `Bearer ${token}`
//     },
//     params: {
//       keyword,
//       channel_id
//     }
//   });
// }

/**
 * fetch few latest messages in a channel
 * @param {String} token user token
 * @param {String} workspace_id current workspace id
 * @param {String} channel_id channel id
 */
function getAllMessagesInChannel(token, workspace_id, channel_id) {
    return axios.request({
        url: baseURL + messageAPI.getAllChannelMessages + "?workspace_id=" + workspace_id + "&&channel_id=" + channel_id,
        method: "get",
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}

/**
 * fetch few latest messages in a direct chat
 * @param {String} token user token
 * @param {String} workspace_id current workspace id
 * @param {String} user_id logged in user id
 * @param {String} partner_id current direct chat receiver
 */
function getPersonalChatMessages(token, workspace_id, user_id, partner_id) {
    return axios.request({
        url: baseURL + personalChatAPI.getPersonalChatMessages + "?workspace_id=" + workspace_id + "&user_id=" + user_id + "&partner_id=" + partner_id,
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}

/**
 * fetch few older messages in a channel
 * @param {String} token user token
 * @param {String} workspace_id current workspace id
 * @param {String} channel_id channel id
 * @param {Object} query querying object
 */
function getOlderMessagesInChannel(token, workspace_id, channel_id, query) {
    return Axios.request({
        url: baseURL + messageAPI.getOlderMessages + "?workspace_id=" + workspace_id + "&channel_id=" + channel_id + "&config=" + JSON.stringify(query),
        method: "get",
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}

/**
 * fetch few older messages in a direct chat
 * @param {String} token user token
 * @param {String} workspace_id current workspace id
 * @param {String} user_id logged in user id
 * @param {String} partner_id current direct chat receiver
 * @param {Object} query querying object
 */
function getDirectChatOlderMessages(token, workspace_id, user_id, partner_id, query) {
    return Axios.request({
        url: baseURL + personalChatAPI.getOlderMessages + "?workspace_id=" + workspace_id + "&user_id=" + user_id + "&partner_id=" + partner_id + "&config=" + JSON.stringify(query),
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

module.exports = {
    getAllMessagesInChannel,
    getOlderMessagesInChannel,
    getPersonalChatMessages,
    getDirectChatOlderMessages
    // uploadAttachment,
    // findMessage
};