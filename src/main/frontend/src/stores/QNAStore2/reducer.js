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
  RESET_STATE,
  READ_QNA_POSTS,
  READ_QNA_POST_DETAIL,
  CREATE_QNA_POST,
  UPDATE_QNA_POST,
  DELETE_QNA_POST
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
  answerAuthor: "",
  qnaPosts: [],  // QNA 게시물 목록 상태 추가
  qnaPostDetail: null  // 특정 QNA 게시물 상세 상태 추가
};

// 리듀서 함수
export const reducer = (state = initialState, action) => {
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

    // CRUD 관련 액션 처리
    case READ_QNA_POSTS:
      return { ...state, qnaPosts: action.payload };  // 게시물 목록 업데이트
    case READ_QNA_POST_DETAIL:
      return { ...state, qnaPostDetail: action.payload };  // 특정 게시물 상세 정보 업데이트
    case CREATE_QNA_POST:
      return { ...state, qnaPosts: [action.payload, ...state.qnaPosts] };  // 새 게시물을 목록의 앞에 추가
    case UPDATE_QNA_POST:
      return {
        ...state,
        qnaPosts: state.qnaPosts.map((post) =>
          post.qnaUid === action.payload.qnaUid ? action.payload : post
        ),  // 게시물 목록에서 수정된 게시물 교체
        // 수정된 게시물이 qnaPostDetail에 해당하면 qnaPostDetail도 업데이트
        qnaPostDetail: state.qnaPostDetail?.qnaUid === action.payload.qnaUid ? action.payload : state.qnaPostDetail
      };
    case DELETE_QNA_POST:
      return {
        ...state,
        qnaPosts: state.qnaPosts.filter((post) => post.qnaUid !== action.payload),  // 게시물 목록에서 삭제된 게시물 제외
        // 삭제된 게시물이 qnaPostDetail에 해당하면 해당 게시물 초기화
        qnaPostDetail: state.qnaPostDetail?.qnaUid === action.payload ? null : state.qnaPostDetail
      };
    
    default:
      return state;
  }
};