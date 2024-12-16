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
  createAdoptionPostAction,
  updateAdoptionPostAction,
  deleteAdoptionPostAction,
  getAdoptionPostListAction,
  getAdoptionSearchPostListAction,
  getAdoptionPostDetailAction,
  changeMyScrapAction,
  getAdoptionAdminListAction,
  getSearchAdoptionAdminListAction
} from "./action"; // action.js에서 액션들 임포트

export const useStore = () => {
  const [state, dispatch] = useReducer(reducer, initialState); // useReducer로 상태 관리

  const actions = {

    // 입양 공지 카테고리별 조회(12개)
    getAdoptionPostListAction: (page, noticeCategory, sortBy, sortOrder) => getAdoptionPostListAction(page, noticeCategory, sortBy, sortOrder)(dispatch),

    // 입양 공지 카테고리별 조회(8개)
    getAdoptionAdminListAction: (page, noticeCategory, sortBy) => getAdoptionAdminListAction(page, noticeCategory, sortBy)(dispatch),

    // 입양 공지 검색(12개)
    getAdoptionSearchPostListAction: (page, noticeCategory, sortBy, sortOrder, search) => getAdoptionSearchPostListAction(page, noticeCategory, sortBy, sortOrder, search)(dispatch),

    // 입양 공지 검색(8개)
    getSearchAdoptionAdminListAction: (page, noticeCategory, sortBy, search) => getSearchAdoptionAdminListAction(page, noticeCategory, sortBy, sortOrder, search)(dispatch),

    // 입양 공지 게시물 상세조회
    getAdoptionPostDetailAction: (announcementNum) => getAdoptionPostDetailAction(announcementNum)(dispatch),

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
    createAdoptionPostAction: (adoptionData) => createAdoptionPostAction(adoptionData)(dispatch),
    updateAdoptionPostAction: (noticeUid, updatedData) => updateAdoptionPostAction(noticeUid, updatedData)(dispatch),
    deleteAdoptionPostAction: (noticeUid) => deleteAdoptionPostAction(noticeUid)(dispatch),
    changeMyScrap: (adoptNum) => changeMyScrapAction(adoptNum)(dispatch),

    // 상태 초기화
    resetAdoptionState: () => dispatch(resetAdoptionState()),
  };

  return { state, actions }; // 상태와 액션들을 반환
};
