const axios = require("./axios");
const { baseURL,miscAPI} = require("./api");

/**
 * get url meta data
 * @param {String} token user token
 * @param {String} url url link
 */
function getUrlMetaData(token, url){
    return axios.request({
        url: baseURL + miscAPI+"?url="+url,
        method: "get",
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}

module.exports = {
    getUrlMetaData
}