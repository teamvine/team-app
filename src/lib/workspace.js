const axios = require("./axios");
const { baseURL,workspaceAPI } = require("./api");

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

function getWorkspaceAllChannels(token,workspace_id) {
  return axios.request({
    url: baseURL + workspaceAPI.getAllChannels+workspace_id,
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
}

function getWorkspaceAllMembers(token,workspace_id) {
  return axios.request({
    url: baseURL + workspaceAPI.getAllMembers+workspace_id,
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
}

function searchMembersByName(token,workspace_id,user_id,search_text) {
  return axios.request({
    url: baseURL + workspaceAPI.searchMembersByName+"?workspace_id="+workspace_id+"&&user_id="+user_id+"&&search_string="+search_text,
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
}

function searchPublicWorkspaces(token,text) {
  return axios.request({
    url: baseURL + workspaceAPI.searchPublicWorkspaces+text,
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
}

module.exports = {
  createNewWorkspace,
  getWorkspaceAllChannels,
  getWorkspaceAllMembers,
  searchMembersByName,
  searchPublicWorkspaces
};
