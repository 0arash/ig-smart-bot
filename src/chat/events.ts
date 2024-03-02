export enum ChatEvents {
    USER_ENTERED_CHAT,
    USER_LEFT_CHAT,
    USER_SENT_MESSAGE,
    USER_MESSAGE_CONTAINS,
    USER_MESSAGE_CONTAINS_ANY,
    USER_MESSAGE_STARTS_WITH,
    USER_MESSAGE_STARTS_WITH_ANY,
    USER_MESSAGE_ENDS_WITH,
    USER_MESSAGE_ENDS_WITH_ANY,
    USER_MESSAGE_IS,
    USER_MESSAGE_IS_NOT,
    USER_MESSAGE_CONTAINS_REGEX,
    USER_MESSAGE_CONTAINS_REGEX_ANY,
    USER_MESSAGE_STARTS_WITH_REGEX,
    USER_MESSAGE_STARTS_WITH_REGEX_ANY,
    USER_MESSAGE_ENDS_WITH_REGEX,
    USER_MESSAGE_ENDS_WITH_REGEX_ANY,
    USER_MESSAGE_IS_REGEX,
    USER_MESSAGE_IS_NOT_REGEX,
    USER_SUBMIT_FORM,
}

export enum ChatActions {
    SEND_MESSAGE,
    UPDATE_MESSAGE,
    DELETE_MESSAGE,
    SEND_FORM,    
}