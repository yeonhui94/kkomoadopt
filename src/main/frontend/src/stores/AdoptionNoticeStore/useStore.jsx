import { useReducer } from "react";
import { initialState, reducer } from "./reducer";
import {
  changeNoticeUid,
  changeNoticeCategory,
  changeNoticeTitle,
  changeNoticeViewCount,
  changeAnimalType,
  changeAdoptStatus,
  changeAnnouncementNum,
  changeUniqueNum,
  changeNoticeImgUrl,
  changeEuthanasiaDate,
  changeNoticeContent,
  changeNoticeCreatedAt,
  changeNoticeUpdatedAt,
  changeImpossibleReason,
  changeAdoptionAuthor,
  // loadJsonData,
  resetState
} from "./action";

export const useStore = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const actions = {
    changeNoticeUid: (noticeUid) => dispatch(changeNoticeUid(noticeUid)),
    changeNoticeCategory: (noticeCategory) => dispatch(changeNoticeCategory(noticeCategory)),
    changeNoticeTitle: (noticeTitle) => dispatch(changeNoticeTitle(noticeTitle)),
    changeNoticeViewCount: (noticeViewCount) => dispatch(changeNoticeViewCount(noticeViewCount)),
    changeAnimalType: (animalType) => dispatch(changeAnimalType(animalType)),
    changeAdoptStatus: (adoptStatus) => dispatch(changeAdoptStatus(adoptStatus)),
    changeAnnouncementNum: (announcementNum) => dispatch(changeAnnouncementNum(announcementNum)),
    changeUniqueNum: (uniqueNum) => dispatch(changeUniqueNum(uniqueNum)),
    changeNoticeImgUrl: (noticeImgUrl) => dispatch(changeNoticeImgUrl(noticeImgUrl)),
    changeEuthanasiaDate: (euthanasiaDate) => dispatch(changeEuthanasiaDate(euthanasiaDate)),
    changeNoticeContent: (noticeContent) => dispatch(changeNoticeContent(noticeContent)),
    changeNoticeCreatedAt: (noticeCreatedAt) => dispatch(changeNoticeCreatedAt(noticeCreatedAt)),
    changeNoticeUpdatedAt: (noticeUpdatedAt) => dispatch(changeNoticeUpdatedAt(noticeUpdatedAt)),
    changeImpossibleReason: (impossibleReason) => dispatch(changeImpossibleReason(impossibleReason)),
    changeAdoptionAuthor: (adoptionAuthor) => dispatch(changeAdoptionAuthor(adoptionAuthor)),

    // loadJsonData: (jsonData) => dispatch(loadJsonData(jsonData)),
    resetState: () => dispatch(resetState())
  };
  
  return { state, actions };
};