const axios = require("./axios");
const { baseURL,settingsAPI } = require("./api");

/**
 * Update notifications settings
 * @param {String} token user token
 * @param {String} user_id user id
 * @param {object} newSettings new notification settings
 */
function updateNotificationSettings(token, user_id, newSettings){
    return axios.request({
        url: baseURL + settingsAPI.updateNotificationSettings,
        method: "PUT",
        headers: {
            Authorization: `Bearer ${token}`
        },
        data: {
            user_id: user_id,
            updated: newSettings
        }
    })
}

module.exports = {
    updateNotificationSettings
}