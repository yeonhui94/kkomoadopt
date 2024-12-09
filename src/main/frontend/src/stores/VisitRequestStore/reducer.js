// reducer.js

import {
  CHANGE_REQUEST_UID,
  CHANGE_REQUEST_ID,
  CHANGE_PHONE_NUM,
  CHANGE_VISIT_DATE,
  CHANGE_VISIT_TIME,
  CHANGE_VISIT_PURPOSE,
  CHANGE_VISIT_CONTENT,
  CHANGE_VISIT_CREATED_AT,
  CHANGE_VISIT_REQUEST_AUTHOR,
  RESET_STATE
} from './action';

// 초기 상태 정의
export const initialState = {
  requestUid: "",
  requestId: null,
  phoneNum: "",
  visitDate: null,
  visitTime: "", 
  visitPurpose: "", 
  visitContent: "",
  visitCreatedAt: null,
  visitRequestAuthor: ""
};

// 리듀서 함수
export const reducer = (state, action) => {
  switch (action.type) {
    case CHANGE_REQUEST_UID:
      return { ...state, requestUid: action.payload };
    case CHANGE_REQUEST_ID:
      return { ...state, requestId: action.payload };
    case CHANGE_PHONE_NUM:
      return { ...state, phoneNum: action.payload };
    case CHANGE_VISIT_DATE:
      return { ...state, visitDate: action.payload };
    case CHANGE_VISIT_TIME:
      return { ...state, visitTime: action.payload };
    case CHANGE_VISIT_PURPOSE:
      return { ...state, visitPurpose: action.payload };
    case CHANGE_VISIT_CONTENT:
      return { ...state, visitContent: action.payload };
    case CHANGE_VISIT_CREATED_AT:
      return { ...state, visitCreatedAt: action.payload };
    case CHANGE_VISIT_REQUEST_AUTHOR:
      return { ...state, visitRequestAuthor: action.payload };
    case RESET_STATE:
      return initialState; // 상태 초기화
    default:
      return state;
  }
};
