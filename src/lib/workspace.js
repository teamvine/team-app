const axios = require("./axios");
const { baseURL,workspaceAPI } = require("./api");

/**
 * Create a new workspace
 * @param {String} token user token
 * @param {Object} workspace workspace object
 * @returns Promise<AxiosResponse> axios response
 */
function createNewWorkspace(token,workspace) {
  return axios.request({
    url: baseURL + workspaceAPI.createNewWorkspace,
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`
    },
    data: {
      workspace
    }
  });
}


/**
 * Get all channels in a workspace
 * @param { String } token user token
 * @param { String } workspace_id workspace id
 * @returns Promise<AxiosResponse> axios response
 */
function getWorkspaceAllChannels(token,workspace_id) {
  return axios.request({
    url: baseURL + workspaceAPI.getAllChannels+workspace_id,
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
}


/**
 * Get all members of a workspace using id
 * @param {String} token user token
 * @param {String} workspace_id workspace id
 * @returns Promise<AxiosResponse> axios response
 */
function getWorkspaceAllMembers(token,workspace_id) {
  return axios.request({
    url: baseURL + workspaceAPI.getAllMembers+workspace_id,
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
}


/**
 * Search workspace members by full name or display name
 * @param {String} token user token
 * @param {String} workspace_id workspace id
 * @param {String} user_id user id
 * @param {String} search_text searching text
 * @returns Promise<AxiosResponse> axios response
 */
function searchMembersByName(token,workspace_id,user_id,search_text) {
  return axios.request({
    url: baseURL + workspaceAPI.searchMembersByName+"?workspace_id="+workspace_id+"&&user_id="+user_id+"&&search_string="+search_text,
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
}


/**
 * Search workspace members by full name or display name and email that are not in a given channel
 * @param {String} token user token
 * @param {String} workspace_id workspace id
 * @param {String} channel_id the channel id
 * @param {String} user_id user id
 * @param {String} search_text searching text
 * @returns Promise<AxiosResponse> axios response
*/
function searchMembersNotInChannel(token,workspace_id,channel_id,user_id,search_text){
  return axios.request({
    url: baseURL + workspaceAPI.searchMembersNotInChannel+"?workspace_id="+workspace_id+"&channel_id="+channel_id+"&user_id="+user_id+"&search_string="+search_text,
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
}

/**
 * Search public workspaces by their names
 * @param {String} token user token
 * @param {String} text search query
 * @returns Promise<AxiosResponse> axios response
 */
function searchPublicWorkspaces(token,text) {
  return axios.request({
    url: baseURL + workspaceAPI.searchPublicWorkspaces+text,
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
}


/**
 * Adding new members to a workspace
 * @param {String} token user token
 * @param {String} workspace_id workspace id
 * @param {Object} newMembers new members to add
 */
function joinWorkspace(token,workspace_id,newMembers){
  return axios.request({
    url: baseURL + workspaceAPI.joinWorkspace+workspace_id,
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`
    },
    data: {
      members: newMembers
    }
  });
}


module.exports = {
  createNewWorkspace,
  getWorkspaceAllChannels,
  getWorkspaceAllMembers,
  searchMembersByName,
  searchPublicWorkspaces,
  joinWorkspace,
  searchMembersNotInChannel
};
