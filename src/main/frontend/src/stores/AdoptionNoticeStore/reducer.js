// import {
//     CHANGE_NOTICE_UID,
//     CHANGE_NOTICE_CATEGORY,
//     CHANGE_NOTICE_TITLE,
//     CHANGE_NOTICE_VIEW_COUNT,
//     CHANGE_ANIMAL_TYPE,
//     CHANGE_ADOPT_STATUS,
//     CHANGE_ANNOUNCEMENT_NUM,
//     CHANGE_UNIQUE_NUM,
//     CHANGE_NOTICE_IMG_URL,
//     CHANGE_EUTHANASIA_DATE,
//     CHANGE_NOTICE_CONTENT,
//     CHANGE_NOTICE_CREATED_AT,
//     CHANGE_NOTICE_UPDATED_AT,
//     CHANGE_IMPOSSIBLE_REASON,
//     CHANGE_ADOPTION_AUTHOR,
//     // LOAD_JSON_DATA,
//     RESET_STATE
//   } from "./action";
  
//   export const initialState = {
//     noticeUid: "",
//     noticeCategory: "",
//     noticeTitle: "",
//     noticeViewCount: 0,
//     animalType: "",
//     adoptStatus: "",
//     announcementNum: "",
//     uniqueNum: null,
//     noticeImgUrl: [],
//     euthanasiaDate: null,
//     noticeContent: "",
//     noticeCreatedAt: null,
//     noticeUpdatedAt: null,
//     impossibleReason: "",
//     adoptionAuthor: "",
    
//     // jsonData: []
//   };
  
//   export const reducer = (state, action) => {
//     switch (action.type) {
//       case CHANGE_NOTICE_UID:
//         return { ...state, noticeUid: action.payload };
//       case CHANGE_NOTICE_CATEGORY:
//         return { ...state, noticeCategory: action.payload };
//       case CHANGE_NOTICE_TITLE:
//         return { ...state, noticeTitle: action.payload };
//       case CHANGE_NOTICE_VIEW_COUNT:
//         return { ...state, noticeViewCount: action.payload };
//       case CHANGE_ANIMAL_TYPE:
//         return { ...state, animalType: action.payload };
//       case CHANGE_ADOPT_STATUS:
//         return { ...state, adoptStatus: action.payload };
//       case CHANGE_ANNOUNCEMENT_NUM:
//         return { ...state, announcementNum: action.payload };
//       case CHANGE_UNIQUE_NUM:
//         return { ...state, uniqueNum: action.payload };
//       case CHANGE_NOTICE_IMG_URL:
//         return { ...state, noticeImgUrl: action.payload };
//       case CHANGE_EUTHANASIA_DATE:
//         return { ...state, euthanasiaDate: action.payload };
//       case CHANGE_NOTICE_CONTENT:
//         return { ...state, noticeContent: action.payload };
//       case CHANGE_NOTICE_CREATED_AT:
//         return { ...state, noticeCreatedAt: action.payload };
//       case CHANGE_NOTICE_UPDATED_AT:
//         return { ...state, noticeUpdatedAt: action.payload };
//       case CHANGE_IMPOSSIBLE_REASON:
//         return { ...state, impossibleReason: action.payload };
//       case CHANGE_ADOPTION_AUTHOR:
//         return { ...state, adoptionAuthor: action.payload };
//       // case LOAD_JSON_DATA:
//       //   return { ...state, jsonData: action.payload };
//       case RESET_STATE:
//         return initialState;
//       default:
//         return state;
//     }
//   };
import { 
  FETCH_NOTICES, 
  CREATE_NOTICE, 
  UPDATE_NOTICE, 
  DELETE_NOTICE, 
  FETCH_NOTICE_BY_UID, 
  FETCH_NOTICES_BY_CATEGORY, 
  UPLOAD_NOTICE_IMAGE, 
  SET_ERROR 
} from './actions';

const initialState = {
  notices: [],
  currentNotice: null,
  error: null,  // 오류 메시지를 저장할 상태
};

function reducer(state = initialState, action) {
  switch (action.type) {
      case FETCH_NOTICES:
          return { ...state, notices: action.payload };
      case CREATE_NOTICE:
          return { ...state, notices: [...state.notices, action.payload] };
      case UPDATE_NOTICE:
          return {
              ...state,
              notices: state.notices.map(notice =>
                  notice.uid === action.payload.uid ? action.payload : notice
              )
          };
      case DELETE_NOTICE:
          return { ...state, notices: state.notices.filter(notice => notice.uid !== action.payload) };
      case FETCH_NOTICE_BY_UID:
          return { ...state, currentNotice: action.payload };
      case FETCH_NOTICES_BY_CATEGORY:
          return { ...state, notices: action.payload };
      case UPLOAD_NOTICE_IMAGE:
          return { ...state, currentNotice: { ...state.currentNotice, image: action.payload } };
      case SET_ERROR:
          return { ...state, error: action.payload };  // 오류 상태를 업데이트
      default:
          return state;
  }
}

export { initialState, reducer };
