// action.js

export const CHANGE_USER_ID = "CHANGE_USER_ID";
export const CHANGE_EMAIL = "CHANGE_EMAIL";
export const CHANGE_NAME = "CHANGE_NAME";
export const CHANGE_PHONE_NUMBER = "CHANGE_PHONE_NUMBER";
export const CHANGE_NICKNAME = "CHANGE_NICKNAME";
export const CHANGE_PASSWORD = "CHANGE_PASSWORD";
export const CHANGE_USER_CREATE = "CHANGE_USER_CREATE";
export const CHANGE_USER_IMG_URL = "CHANGE_USER_IMG_URL";
export const CHANGE_PROFILE_TEXT = "CHANGE_PROFILE_TEXT";
export const CHANGE_USER_LAST_LOGIN = "CHANGE_USER_LAST_LOGIN";
export const CHANGE_IS_BLACKLISTED = "CHANGE_IS_BLACKLISTED";
export const CHANGE_PROVIDER = "CHANGE_PROVIDER";
export const CHANGE_AUTHORITY = "CHANGE_AUTHORITY";
export const RESET_STATE = "RESET_STATE";

// 액션 생성자
export const changeUserId = (userId) => ({ type: CHANGE_USER_ID, payload: userId });
export const changeEmail = (email) => ({ type: CHANGE_EMAIL, payload: email });
export const changeName = (name) => ({ type: CHANGE_NAME, payload: name });
export const changePhoneNumber = (phoneNumber) => ({ type: CHANGE_PHONE_NUMBER, payload: phoneNumber });
export const changeNickname = (nickname) => ({ type: CHANGE_NICKNAME, payload: nickname });
export const changePassword = (password) => ({ type: CHANGE_PASSWORD, payload: password });
export const changeUserCreate = (userCreate) => ({ type: CHANGE_USER_CREATE, payload: userCreate });
export const changeUserImgUrl = (userImgUrl) => ({ type: CHANGE_USER_IMG_URL, payload: userImgUrl });
export const changeProfileText = (profileText) => ({ type: CHANGE_PROFILE_TEXT, payload: profileText });
export const changeUserLastLogin = (userLastLogin) => ({ type: CHANGE_USER_LAST_LOGIN, payload: userLastLogin });
export const changeIsBlacklisted = (isBlacklisted) => ({ type: CHANGE_IS_BLACKLISTED, payload: isBlacklisted });
export const changeProvider = (provider) => ({ type: CHANGE_PROVIDER, payload: provider });
export const changeAuthority = (authority) => ({ type: CHANGE_AUTHORITY, payload: authority });
export const resetState = () => ({ type: RESET_STATE });
