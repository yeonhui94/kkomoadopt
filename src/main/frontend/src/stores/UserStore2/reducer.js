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
    RESET_STATE,
    ADD_SCRAP,
    REMOVE_SCRAP,
    GET_USER_SCRAP,
    READ_USER,
    READ_USER_LIST,
    CREATE_USER,
    UPDATE_USER,
    DELETE_USER,
    LOGIN_SUCCESS,
    LOGOUT_USER,
    CHANGE_PASSWORD_SUCCESS,
    VERIFY_PASSWORD
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
    scraps: [],
    isLoggedIn: false, // 로그인 상태
    userData: null, // 유저 데이터
    userDataList : {
      content : []
    }
  };
  
  export const reducer = (state = initialState, action) => {
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
  
      // 스크랩 관련 액션 처리
      case ADD_SCRAP:
        return { ...state, scraps: [...state.scraps, action.payload] };
      case REMOVE_SCRAP:
        return {
          ...state,
          scraps: state.scraps.filter((scrap) => scrap !== action.payload)
        };
      case GET_USER_SCRAP:
        return { ...state, scraps: action.payload };
  
      // 사용자 관련 액션 처리
      case CREATE_USER:
        return { ...state, userData: action.payload };
      case READ_USER:
        return { ...state, userData: action.payload };
      case READ_USER_LIST:
        return { ...state, userDataList: action.payload };
      case UPDATE_USER:
        return { ...state, userData: action.payload };
      case DELETE_USER:
        return { ...state, userData: null }; // 사용자 삭제 후 상태 초기화
  
      // 로그인 및 로그아웃 처리
      case LOGIN_SUCCESS:
        return { ...state, isLoggedIn: true, userData: action.payload };
      case LOGOUT_USER:
        return { ...state, isLoggedIn: false, userData: null };
  
      // 비밀번호 변경 및 검증 처리
      case CHANGE_PASSWORD_SUCCESS:
        return { ...state, password: action.payload };
  
      // 기타 액션 처리 (예: 비밀번호 검증)
      case VERIFY_PASSWORD:
        return state;
  
      default:
        return state;
    }
  };
  