const axios = require("./axios");
const { baseURL, channelAPI, messageAPI } = require("./api");

function addChannelMembers(token, workspace_id, channel_id, members) {
    return axios.request({
        url: baseURL + channelAPI.addMembers,
        method: "post",
        headers: {
            Authorization: `Bearer ${token}`
        },
        data: {
            channel_id: channel_id,
            workspace_id: workspace_id,
            members: members
        }
    })
}

function getMembersInChannel(token, workspace_id, channel_id) {
    return axios.request({
        url: baseURL + channelAPI.getAllMembers + "?workspace_id=" + workspace_id + "&channel_id=" + channel_id,
        method: "get",
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}

function createNewChannel(token, channel) {
    return axios.request({
        url: baseURL + channelAPI.createNewChannel,
        method: "post",
        headers: {
            Authorization: `Bearer ${token}`
        },
        data: {
            channel: channel
        }
    });
}

module.exports = {
    getMembersInChannel,
    createNewChannel,
    addChannelMembers
};