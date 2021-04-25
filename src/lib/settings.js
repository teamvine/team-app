const axios = require("./axios");
const { baseURL,settingsAPI, filesBaseUrl, filesManageAPI } = require("./api");


/**
 * convert data uri to Blob
 * @param {String} dataURI base64 dataUri of the file
 * @param {String} fileName the file's name
 * @returns Blob
 */
function dataUriToBlob(dataURI, fileName) {
    // helper function: generate a new file from base64 String
    const base64ToBlob = (dataURI) => {
      const arr = dataURI.split(',');
      const mime = arr[0].match(/:(.*?);/)[1]
      const sliceSize = 1024;
      const byteChars = window.atob(arr[1]);
      const byteArrays = [];

      for (let offset = 0, len = byteChars.length; offset < len; offset += sliceSize) {
        let slice = byteChars.slice(offset, offset + sliceSize);

        const byteNumbers = new Array(slice.length);
        for (let i = 0; i < slice.length; i++) {
          byteNumbers[i] = slice.charCodeAt(i);
        }

        const byteArray = new Uint8Array(byteNumbers);

        byteArrays.push(byteArray);
      }

      return new Blob(byteArrays, {type: mime});
    }

    const getFilename = (dataURI) => {
      const arr = dataURI.split(',');
      const mime = arr[0].match(/:(.*?);/)[1];

      return Math.round(+new Date()/1000) + '.' + mime.split('/').pop();
    }

    const blob = base64ToBlob(dataURI);
    blob.name = fileName;

    // generate file from base64 string
    return blob;
}






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
    const uploadedImage = dataUriToBlob(newSettings.cropped_file_data_uri, newSettings.file_name);
    let formData = new FormData();
    formData.append("user_id", user_id);
    formData.append("file_name", newSettings.file_name);
    formData.append("file_type", newSettings.file_type);
    formData.append("caption", newSettings.caption);
    formData.append("uploaded_image", uploadedImage);
    return axios.post((filesBaseUrl+filesManageAPI.updateProfilePicture), formData, {
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "multipart/form-data"
        }
    })
}

module.exports = {
    updateNotificationSettings,
    updateProfilePicture
}