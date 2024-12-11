import { useReducer } from "react";
import { initialState, reducer } from "./reducer"; // reducer.js에서 상태 및 리듀서를 임포트
import {
  changeAdoptionNoticeUid,
  changeAdoptionNoticeCategory,
  changeAdoptionNoticeTitle,
  changeAdoptionNoticeViewCount,
  changeAdoptionAnimalType,
  changeAdoptionStatus,
  changeAdoptionNoticeNum,
  changeAdoptionUniqueNum,
  changeAdoptionNoticeImgUrl,
  changeAdoptionEuthanasiaDate,
  changeAdoptionNoticeContent,
  changeAdoptionNoticeCreatedAt,
  changeAdoptionNoticeUpdatedAt,
  changeAdoptionImpossibleReason,
  changeAdoptionAuthor,
  resetAdoptionState,
  createAdoptionPost,
  readAdoptionPosts,
  readAdoptionPostDetail,
  updateAdoptionPost,
  deleteAdoptionPost,
  getAdoptionPostsAction
} from "./action"; // action.js에서 액션들 임포트

export const useStore = () => {
  const [state, dispatch] = useReducer(reducer, initialState); // useReducer로 상태 관리

  const actions = {
    // 입양 공지 게시물 전체조회
    getAdoptionPostsAction: (pageNum) => getAdoptionPostsAction(pageNum)(dispatch),
    // 입양 공지 게시물 상세조회
    getAdoptionPostAction: (noticeUid) => getAdoptionPostAction(noticeUid)(dispatch),

    // 입양 공지 관련 상태 변경
    changeAdoptionNoticeUid: (noticeUid) => dispatch(changeAdoptionNoticeUid(noticeUid)),
    changeAdoptionNoticeCategory: (noticeCategory) => dispatch(changeAdoptionNoticeCategory(noticeCategory)),
    changeAdoptionNoticeTitle: (noticeTitle) => dispatch(changeAdoptionNoticeTitle(noticeTitle)),
    changeAdoptionNoticeViewCount: (noticeViewCount) => dispatch(changeAdoptionNoticeViewCount(noticeViewCount)),
    changeAdoptionAnimalType: (animalType) => dispatch(changeAdoptionAnimalType(animalType)),
    changeAdoptionStatus: (adoptStatus) => dispatch(changeAdoptionStatus(adoptStatus)),
    changeAdoptionNoticeNum: (announcementNum) => dispatch(changeAdoptionNoticeNum(announcementNum)),
    changeAdoptionUniqueNum: (uniqueNum) => dispatch(changeAdoptionUniqueNum(uniqueNum)),
    changeAdoptionNoticeImgUrl: (noticeImgUrl) => dispatch(changeAdoptionNoticeImgUrl(noticeImgUrl)),
    changeAdoptionEuthanasiaDate: (euthanasiaDate) => dispatch(changeAdoptionEuthanasiaDate(euthanasiaDate)),
    changeAdoptionNoticeContent: (noticeContent) => dispatch(changeAdoptionNoticeContent(noticeContent)),
    changeAdoptionNoticeCreatedAt: (noticeCreatedAt) => dispatch(changeAdoptionNoticeCreatedAt(noticeCreatedAt)),
    changeAdoptionNoticeUpdatedAt: (noticeUpdatedAt) => dispatch(changeAdoptionNoticeUpdatedAt(noticeUpdatedAt)),
    changeAdoptionImpossibleReason: (impossibleReason) => dispatch(changeAdoptionImpossibleReason(impossibleReason)),
    changeAdoptionAuthor: (adoptionAuthor) => dispatch(changeAdoptionAuthor(adoptionAuthor)),

    // 입양 게시물 CRUD
    createAdoptionPost: (adoptionData) => createAdoptionPost(adoptionData)(dispatch),
    readAdoptionPosts: () => readAdoptionPosts()(dispatch),
    readAdoptionPostDetail: (noticeUid) => readAdoptionPostDetail(noticeUid)(dispatch),
    updateAdoptionPost: (noticeUid, updatedData) => updateAdoptionPost(noticeUid, updatedData)(dispatch),
    deleteAdoptionPost: (noticeUid) => deleteAdoptionPost(noticeUid)(dispatch),

    // 상태 초기화
    resetAdoptionState: () => dispatch(resetAdoptionState()),
  };

  return { state, actions }; // 상태와 액션들을 반환
};
