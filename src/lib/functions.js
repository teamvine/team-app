import moment from "moment";
import { event } from '../config/constants'
export const Filters = {}
export const Functions = {}

/**
 * function to format Date() string
 * @param date a date provided by Date() bultin function
 * @returns string hh:mm MMM Do,YYYY eg:  05:01 Sep 27th,2020
 */
Filters.formatTimestamp = (date) => {
    return moment(new Date(date)).format("hh:mm MMM Do,YYYY");
}

/**
 * function version:2 to format Date() string
 * @param date a date provided by Date() bultin function
 * @returns string MMM Do,YYYY eg:  Sep 27th,2020
 */
Filters.formatTimestamp_v2 = (date) => {
    return moment(new Date(date)).format("MMM Do,YYYY");
}

/**
 * function version:1 to make a long text ellipsis
 * @param text a text to shorten
 * @param max_length the maximum length of the resulting text
 * @returns String 
 */
Filters.ellipsis_v1 = (text = "", max_length = 0) => {
    if (text.length <= max_length) return text;
    return text.substring(0, max_length - 3) + "..."
}

/**
 * leave on Socket server's workspace's all rooms
 * @param self vue component ie this
 * @param workspace_id current workspace id
 * @param user_id current user id
 */
Functions.leaveWorkspaceSocketRooms = (self, workspace_id = "", user_id = "") => {
    if (workspace_id != "" && user_id != "") {
        self.$socket.client.emit(event.LEAVE_WORKSPACE, workspace_id)
        self.$socket.client.emit(event.LEAVE_DIRECT_CHAT_ROOM, {
            workspace_id: workspace_id,
            user_id: user_id
        })
    }
}

/**
 * sign out of account
 * @param self vue component ie this
 * @param workspace_id current workspace id
 * @param user_id current user id
 */
Functions.signOut = (self, workspace_id = "", user_id = "") => {
    // alert(workspace_id + " " + user_id)
    if (workspace_id != "" && user_id != "") {
        Functions.leaveWorkspaceSocketRooms(self, workspace_id, user_id)
    }
    if (user_id != "") self.$socket.client.emit(event.UNIDENTIFY_SOCKET, user_id);
    localStorage.removeItem("rconnectToken")
    self.$router.push({ name: "Login" })
}