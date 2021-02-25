const axios = require("./axios");
const { baseURL,settingsAPI, filesBaseUrl, filesManageAPI } = require("./api");

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

/**
 * update profile picture
 * @param {String} token user token
 * @param {String} user_id user id
 * @param {object} newSettings new settings object
 */
function updateProfilePicture(token, user_id, newSettings){
    return axios.request({
        url: filesBaseUrl+filesManageAPI.updateProfilePicture,
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`
        },
        data: {
            user_id: user_id,
            file_name: newSettings.file_name,
            file_type: newSettings.file_type,
            caption: newSettings.caption,
            cropped_file_data_uri: newSettings.cropped_file_data_uri
        }
    })
}

module.exports = {
    updateNotificationSettings,
    updateProfilePicture
}