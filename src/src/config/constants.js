exports.event = {
    NOTIFICATION: "notification", //user notification

    TYPING: "typing",
    MESSAGE: "chatMessage", //channel
    REPLY_MESSAGE: "replyMessage", //channel
    PERSONAL_MESSAGE: "personalChatMessage", //direct
    REPLY_PERSONAL_MESSAGE: "replyPersonalMessage", //direct

    IDENTIFY_SOCKET: "identifySocket", //join user's workspace free personal room
    UNIDENTIFY_SOCKET: "unidentifySocket", //leave user's workspace free personal room
    JOIN_DIRECT_CHAT_ROOM: "joinDirectChatRoom", //join user's workspace direct chat room
    LEAVE_DIRECT_CHAT_ROOM: "leaveDirectChatRoom", //leave user's workspace direct chat room

    JOIN_WORKSPACE: "joinWorkspace", //join workspace's room
    LEAVE_WORKSPACE: "leaveWorkspace", //leave workspace's room
    //================================================================================================

    JOIN_SAVED_CHANNEL: "setup",
    JOIN_NEW_CHANNEL: "joinNew",
    LEAVE_CHANNEL: "leave",
    JOIN_RESULT: "joinResult",
    DIRECT_CHAT_ROOM: "directChatRoom",
};

exports.errorMessage = {
    DEFAULT: "Something went wrong",
    NO_EMAIL_OR_PASSWORD: "Please provide both email and password.",
    WRONG_EMAIL_OR_PASSWORD: "Wrong email or password.",
    INSUFFICIENT_USER_INFO: "Please provide all of user information.",
    UPLOAD_FILE_MISSING: "Please attach a file in your request.",
    REQUIRED_FIELDS_MISSING: "REQUIRED_FIELDS_MISSING",
    USER_WITH_SAME_EMAIL_EXISTS: "Tha email was already taken!",
    INVALID_INFO: "Provide valid info"
};

exports.regExp = {
    URL_REGEX: /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
    URL_REGEX2: new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'),
    VALID_CHANNEL_NAME: /^[a-zA-Z0-9_-\s]+$/i,
    VALID_PASSWORD: /^[a-zA-Z0-9!@#$%^&*]{6,}$/i,
    VALID_USER_NAME: /^[a-zA-Z0-9]{3,25}$/i
};

exports.file = {
    UPLOAD_FILE_LOCATION: "public/uploads"
};

exports.BCRYPT_SALT_ROUND = 2;