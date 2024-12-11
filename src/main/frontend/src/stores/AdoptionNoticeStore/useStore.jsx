// // import { useReducer } from "react";
// // import { initialState, reducer } from "./reducer";
// // import {
// //   changeNoticeUid,
// //   changeNoticeCategory,
// //   changeNoticeTitle,
// //   changeNoticeViewCount,
// //   changeAnimalType,
// //   changeAdoptStatus,
// //   changeAnnouncementNum,
// //   changeUniqueNum,
// //   changeNoticeImgUrl,
// //   changeEuthanasiaDate,
// //   changeNoticeContent,
// //   changeNoticeCreatedAt,
// //   changeNoticeUpdatedAt,
// //   changeImpossibleReason,
// //   changeAdoptionAuthor,
// //   // loadJsonData,
// //   resetState
// // } from "./action";

// // export const useStore = () => {
// //   const [state, dispatch] = useReducer(reducer, initialState);

// //   const actions = {
// //     changeNoticeUid: (noticeUid) => dispatch(changeNoticeUid(noticeUid)),
// //     changeNoticeCategory: (noticeCategory) => dispatch(changeNoticeCategory(noticeCategory)),
// //     changeNoticeTitle: (noticeTitle) => dispatch(changeNoticeTitle(noticeTitle)),
// //     changeNoticeViewCount: (noticeViewCount) => dispatch(changeNoticeViewCount(noticeViewCount)),
// //     changeAnimalType: (animalType) => dispatch(changeAnimalType(animalType)),
// //     changeAdoptStatus: (adoptStatus) => dispatch(changeAdoptStatus(adoptStatus)),
// //     changeAnnouncementNum: (announcementNum) => dispatch(changeAnnouncementNum(announcementNum)),
// //     changeUniqueNum: (uniqueNum) => dispatch(changeUniqueNum(uniqueNum)),
// //     changeNoticeImgUrl: (noticeImgUrl) => dispatch(changeNoticeImgUrl(noticeImgUrl)),
// //     changeEuthanasiaDate: (euthanasiaDate) => dispatch(changeEuthanasiaDate(euthanasiaDate)),
// //     changeNoticeContent: (noticeContent) => dispatch(changeNoticeContent(noticeContent)),
// //     changeNoticeCreatedAt: (noticeCreatedAt) => dispatch(changeNoticeCreatedAt(noticeCreatedAt)),
// //     changeNoticeUpdatedAt: (noticeUpdatedAt) => dispatch(changeNoticeUpdatedAt(noticeUpdatedAt)),
// //     changeImpossibleReason: (impossibleReason) => dispatch(changeImpossibleReason(impossibleReason)),
// //     changeAdoptionAuthor: (adoptionAuthor) => dispatch(changeAdoptionAuthor(adoptionAuthor)),

// //     // loadJsonData: (jsonData) => dispatch(loadJsonData(jsonData)),
// //     resetState: () => dispatch(resetState())
// //   };
  
// //   return { state, actions };
// // };

// import { useReducer } from 'react';
// import { initialState, reducer } from './reducer';  // 리듀서와 초기 상태 가져오기
// import { 
//     fetchNoticesAction, 
//     addNotice, 
//     updateNoticeAction, 
//     deleteNoticeAction, 
//     getNoticeByUid, 
//     getNoticesByCategory, 
//     uploadNoticeImageAction 
// } from './actions';  // 액션 함수들 가져오기

// export function useStore() {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   const actions = {
//     // 게시물 관련
//     fetchNotices: () => dispatch(fetchNoticesAction()),  // 게시물 목록 불러오기
//     addNotice: (noticeData) => dispatch(addNotice(noticeData)),  // 게시물 추가
//     updateNotice: (noticeUid, updatedData) => dispatch(updateNoticeAction(noticeUid, updatedData)),  // 게시물 수정
//     deleteNotice: (noticeUid) => dispatch(deleteNoticeAction(noticeUid)),  // 게시물 삭제
//     getNoticeByUid: (noticeUid) => dispatch(getNoticeByUid(noticeUid)),  // 게시물 상세 보기
//     getNoticesByCategory: (category) => dispatch(getNoticesByCategory(category)),  // 카테고리별 게시물 불러오기
//     uploadNoticeImage: (formData) => dispatch(uploadNoticeImageAction(formData)),  // 이미지 업로드
//   };

//   return { state, actions };
// }

