const axios = require("./axios");
const { baseURL,miscAPI} = require("./api");

/**
 * get url meta data
 * @param {String} token user token
 * @param {String} url url link
 */
function getUrlMetaData(token, url){
    return axios.request({
        url: baseURL + miscAPI.getUrlMetaData+"?url="+url,
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}

module.exports = {
    getUrlMetaData
}