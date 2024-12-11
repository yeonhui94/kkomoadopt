// // // import {
// // //     CHANGE_NOTICE_UID,
// // //     CHANGE_NOTICE_CATEGORY,
// // //     CHANGE_NOTICE_TITLE,
// // //     CHANGE_NOTICE_VIEW_COUNT,
// // //     CHANGE_ANIMAL_TYPE,
// // //     CHANGE_ADOPT_STATUS,
// // //     CHANGE_ANNOUNCEMENT_NUM,
// // //     CHANGE_UNIQUE_NUM,
// // //     CHANGE_NOTICE_IMG_URL,
// // //     CHANGE_EUTHANASIA_DATE,
// // //     CHANGE_NOTICE_CONTENT,
// // //     CHANGE_NOTICE_CREATED_AT,
// // //     CHANGE_NOTICE_UPDATED_AT,
// // //     CHANGE_IMPOSSIBLE_REASON,
// // //     CHANGE_ADOPTION_AUTHOR,
// // //     // LOAD_JSON_DATA,
// // //     RESET_STATE
// // //   } from "./action";
  
// //   // export const initialState = {
// //   //   noticeUid: "",
// //   //   noticeCategory: "",
// //   //   noticeTitle: "",
// //   //   noticeViewCount: 0,
// //   //   animalType: "",
// //   //   adoptStatus: "",
// //   //   announcementNum: "",
// //   //   uniqueNum: null,
// //   //   noticeImgUrl: [],
// //   //   euthanasiaDate: null,
// //   //   noticeContent: "",
// //   //   noticeCreatedAt: null,
// //   //   noticeUpdatedAt: null,
// //   //   impossibleReason: "",
// //   //   adoptionAuthor: "",
    
// //   //   // jsonData: []
// //   // };
  
// // //   export const reducer = (state, action) => {
// // //     switch (action.type) {
// // //       case CHANGE_NOTICE_UID:
// // //         return { ...state, noticeUid: action.payload };
// // //       case CHANGE_NOTICE_CATEGORY:
// // //         return { ...state, noticeCategory: action.payload };
// // //       case CHANGE_NOTICE_TITLE:
// // //         return { ...state, noticeTitle: action.payload };
// // //       case CHANGE_NOTICE_VIEW_COUNT:
// // //         return { ...state, noticeViewCount: action.payload };
// // //       case CHANGE_ANIMAL_TYPE:
// // //         return { ...state, animalType: action.payload };
// // //       case CHANGE_ADOPT_STATUS:
// // //         return { ...state, adoptStatus: action.payload };
// // //       case CHANGE_ANNOUNCEMENT_NUM:
// // //         return { ...state, announcementNum: action.payload };
// // //       case CHANGE_UNIQUE_NUM:
// // //         return { ...state, uniqueNum: action.payload };
// // //       case CHANGE_NOTICE_IMG_URL:
// // //         return { ...state, noticeImgUrl: action.payload };
// // //       case CHANGE_EUTHANASIA_DATE:
// // //         return { ...state, euthanasiaDate: action.payload };
// // //       case CHANGE_NOTICE_CONTENT:
// // //         return { ...state, noticeContent: action.payload };
// // //       case CHANGE_NOTICE_CREATED_AT:
// // //         return { ...state, noticeCreatedAt: action.payload };
// // //       case CHANGE_NOTICE_UPDATED_AT:
// // //         return { ...state, noticeUpdatedAt: action.payload };
// // //       case CHANGE_IMPOSSIBLE_REASON:
// // //         return { ...state, impossibleReason: action.payload };
// // //       case CHANGE_ADOPTION_AUTHOR:
// // //         return { ...state, adoptionAuthor: action.payload };
// // //       // case LOAD_JSON_DATA:
// // //       //   return { ...state, jsonData: action.payload };
// // //       case RESET_STATE:
// // //         return initialState;
// // //       default:
// // //         return state;
// // //     }
// // //   };
// // import { 
// //   FETCH_NOTICES, 
// //   CREATE_NOTICE, 
// //   UPDATE_NOTICE, 
// //   DELETE_NOTICE, 
// //   FETCH_NOTICE_BY_UID, 
// //   FETCH_NOTICES_BY_CATEGORY, 
// //   UPLOAD_NOTICE_IMAGE, 
// //   SET_ERROR 
// // } from './actions';

// // // export const initialState = {
// // //   noticeUid: "",
// // //   noticeCategory: "",
// // //   noticeTitle: "",
// // //   noticeViewCount: 0,
// // //   animalType: "",
// // //   adoptStatus: "",
// // //   announcementNum: "",
// // //   uniqueNum: null,
// // //   noticeImgUrl: [],
// // //   euthanasiaDate: null,
// // //   noticeContent: "",
// // //   noticeCreatedAt: null,
// // //   noticeUpdatedAt: null,
// // //   impossibleReason: "",
// // //   adoptionAuthor: "",
// // //   error: null,  // 오류 메시지를 저장할 상태
// // // };
// // export const reducer = (state, action) => {
// //     switch(action.type){
// //         //입양 상태 변경
// //         case
// //     }
// // }

// // const reducer = (state = initialState, action) => {
// //   switch (action.type) {
// //       case FETCH_NOTICES:
// //           return { ...state, notices: action.payload };
// //       case CREATE_NOTICE:
// //           return { ...state, notices: [...state.notices, action.payload] };
// //       case UPDATE_NOTICE:
// //           return {
// //               ...state,
// //               notices: state.notices.map(notice =>
// //                   notice.noticeUid === action.payload.noticeUid ? action.payload : notice
// //               ),
// //           };
// //       case DELETE_NOTICE:
// //           return { ...state, notices: state.notices.filter(notice => notice.noticeUid !== action.payload) };
// //       case FETCH_NOTICE_BY_UID:
// //           return { ...state, ...action.payload };  // 특정 게시물 정보를 가져올 때 해당 상태를 덮어씌움
// //       case FETCH_NOTICES_BY_CATEGORY:
// //           return { ...state, notices: action.payload };
// //       case UPLOAD_NOTICE_IMAGE:
// //           return { ...state, noticeImgUrl: action.payload };  // 이미지 URL 업데이트
// //       case SET_ERROR:
// //           return { ...state, error: action.payload };  // 오류 처리
// //       default:
// //           return state;
// //   }
// // };

// // export default reducer;

// import { 
//   GET_ALLNOTICES, 
//   CREATE_NOTICE, 
//   UPDATE_NOTICE, 
//   DELETE_NOTICE, 
//   FETCH_NOTICE_BY_UID, 
//   FETCH_NOTICES_BY_CATEGORY, 
//   UPLOAD_NOTICE_IMAGE, 
//   SET_ERROR,
//   GET_PAGE_NUM
// } from './action';

// export const initialState = {
// notices: [],  // 게시물 목록
// currentNotice: null,  // 현재 선택된 게시물
// noticeImgUrl: [],  // 게시물 이미지 URL
// error: null,  // 오류 메시지 상태
// pageNum: 1,
// };

// export const reducer = (state = initialState, action) => {
// switch (action.type) {
//   // 게시물 목록 불러오기
//   case GET_ALLNOTICES:
//     return { ...state, notices: action.payload,};

//   case GET_PAGE_NUM:
//     return { ...state, notice: action.payload };

//   // 게시물 추가
//   case CREATE_NOTICE:
//     return { ...state, notices: [...state.notices, action.payload] };

//   // 게시물 수정
//   case UPDATE_NOTICE:
//     return {
//       ...state,
//       notices: state.notices.map((notice) =>
//         notice.noticeUid === action.payload.noticeUid ? action.payload : notice
//       ),
//     };

//   // 게시물 삭제
//   case DELETE_NOTICE:
//     return {
//       ...state,
//       notices: state.notices.filter((notice) => notice.noticeUid !== action.payload),
//     };

//   // 특정 게시물 상세 보기 (noticeUid 사용)
//   case FETCH_NOTICE_BY_UID:
//     return { ...state, currentNotice: action.payload };

//   // 특정 카테고리의 게시물 불러오기
//   case FETCH_NOTICES_BY_CATEGORY:
//     return { ...state, notices: action.payload };

//   // 이미지 URL 업데이트
//   case UPLOAD_NOTICE_IMAGE:
//     return { ...state, noticeImgUrl: action.payload };

//   // 오류 처리
//   case SET_ERROR:
//     return { ...state, error: action.payload };

//   default:
//     return state;
// }
// };

// export default reducer;
