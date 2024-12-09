// reducer.js

import {
  CHANGE_QNA_UID,
  CHANGE_QNA_ID,
  CHANGE_QNA_TITLE,
  CHANGE_QNA_CREATED_AT,
  CHANGE_QNA_VIEW_COUNT,
  CHANGE_QNA_PASSWORD,
  CHANGE_QNA_CONTENT,
  CHANGE_QNA_FILE,
  CHANGE_QNA_ANSWER,
  CHANGE_QNA_STATE,
  CHANGE_QNA_AUTHOR,
  CHANGE_ANSWER_AUTHOR,
  RESET_STATE
} from './action';

// 초기 상태 정의
export const initialState = {
  qnaUid: "",
  qnaId: null,
  qnaTitle: "",
  qnaCreatedAt: null,
  qnaViewCount: 0,
  qnaPassword: null,
  qnaContent: "",
  qnaFile: [],
  qnaAnswer: "",
  qnaState: null,
  qnaAuthor: "",
  answerAuthor: ""
};

// 리듀서 함수
export const reducer = (state, action) => {
  switch (action.type) {
    case CHANGE_QNA_UID:
      return { ...state, qnaUid: action.payload };
    case CHANGE_QNA_ID:
      return { ...state, qnaId: action.payload };
    case CHANGE_QNA_TITLE:
      return { ...state, qnaTitle: action.payload };
    case CHANGE_QNA_CREATED_AT:
      return { ...state, qnaCreatedAt: action.payload };
    case CHANGE_QNA_VIEW_COUNT:
      return { ...state, qnaViewCount: action.payload };
    case CHANGE_QNA_PASSWORD:
      return { ...state, qnaPassword: action.payload };
    case CHANGE_QNA_CONTENT:
      return { ...state, qnaContent: action.payload };
    case CHANGE_QNA_FILE:
      return { ...state, qnaFile: action.payload };
    case CHANGE_QNA_ANSWER:
      return { ...state, qnaAnswer: action.payload };
    case CHANGE_QNA_STATE:
      return { ...state, qnaState: action.payload };
    case CHANGE_QNA_AUTHOR:
      return { ...state, qnaAuthor: action.payload };
    case CHANGE_ANSWER_AUTHOR:
      return { ...state, answerAuthor: action.payload };
    case RESET_STATE:
      return initialState;  // 상태 초기화
    default:
      return state;
  }
};
