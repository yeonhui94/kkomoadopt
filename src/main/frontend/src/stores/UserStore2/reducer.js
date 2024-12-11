// reducer.js

import {
  CHANGE_USER_ID,
  CHANGE_EMAIL,
  CHANGE_NAME,
  CHANGE_PHONE_NUMBER,
  CHANGE_NICKNAME,
  CHANGE_PASSWORD,
  CHANGE_USER_CREATE,
  CHANGE_USER_IMG_URL,
  CHANGE_PROFILE_TEXT,
  CHANGE_USER_LAST_LOGIN,
  CHANGE_IS_BLACKLISTED,
  CHANGE_PROVIDER,
  CHANGE_AUTHORITY,
  RESET_STATE
} from "./action";

export const initialState = {
  userId: "",
  email: "",
  name: "",
  phoneNumber: "",
  nickname: "",
  password: "",
  userCreate: "",
  userImgUrl: "",
  profileText: "",
  userLastLogin: "",
  isBlacklisted: false,
  socialId: "",
  provider: "",
  authority: "USER", // 기본값은 'USER'
  blacklists: [],
  scraps: []
};

export const reducer = (state, action) => {
  switch (action.type) {
      case CHANGE_USER_ID:
          return { ...state, userId: action.payload };
      case CHANGE_EMAIL:
          return { ...state, email: action.payload };
      case CHANGE_NAME:
          return { ...state, name: action.payload };
      case CHANGE_PHONE_NUMBER:
          return { ...state, phoneNumber: action.payload };
      case CHANGE_NICKNAME:
          return { ...state, nickname: action.payload };
      case CHANGE_PASSWORD:
          return { ...state, password: action.payload };
      case CHANGE_USER_CREATE:
          return { ...state, userCreate: action.payload };
      case CHANGE_USER_IMG_URL:
          return { ...state, userImgUrl: action.payload };
      case CHANGE_PROFILE_TEXT:
          return { ...state, profileText: action.payload };
      case CHANGE_USER_LAST_LOGIN:
          return { ...state, userLastLogin: action.payload };
      case CHANGE_IS_BLACKLISTED:
          return { ...state, isBlacklisted: action.payload };
      case CHANGE_PROVIDER:
          return { ...state, provider: action.payload };
      case CHANGE_AUTHORITY:
          return { ...state, authority: action.payload };
      case RESET_STATE:
          return initialState;
      default:
          return state;
  }
};
