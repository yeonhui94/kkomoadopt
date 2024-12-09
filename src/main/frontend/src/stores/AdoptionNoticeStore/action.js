export const CHANGE_NOTICE_UID = "CHANGE_NOTICE_UID";
export const CHANGE_NOTICE_CATEGORY = "CHANGE_NOTICE_CATEGORY";
export const CHANGE_NOTICE_TITLE = "CHANGE_NOTICE_TITLE";
export const CHANGE_NOTICE_VIEW_COUNT = "CHANGE_NOTICE_VIEW_COUNT";
export const CHANGE_ANIMAL_TYPE = "CHANGE_ANIMAL_TYPE";
export const CHANGE_ADOPT_STATUS = "CHANGE_ADOPT_STATUS";
export const CHANGE_ANNOUNCEMENT_NUM = "CHANGE_ANNOUNCEMENT_NUM";
export const CHANGE_UNIQUE_NUM = "CHANGE_UNIQUE_NUM";
export const CHANGE_NOTICE_IMG_URL = "CHANGE_NOTICE_IMG_URL";
export const CHANGE_EUTHANASIA_DATE = "CHANGE_EUTHANASIA_DATE";
export const CHANGE_NOTICE_CONTENT = "CHANGE_NOTICE_CONTENT";
export const CHANGE_NOTICE_CREATED_AT = "CHANGE_NOTICE_CREATED_AT";
export const CHANGE_NOTICE_UPDATED_AT = "CHANGE_NOTICE_UPDATED_AT";
export const CHANGE_IMPOSSIBLE_REASON = "CHANGE_IMPOSSIBLE_REASON";
export const CHANGE_ADOPTION_AUTHOR = "CHANGE_ADOPTION_AUTHOR";

// export const LOAD_JSON_DATA = "LOAD_JSON_DATA";
export const RESET_STATE = "RESET_STATE";

// Action Creators
export const changeNoticeUid = (noticeUid) => ({ type: CHANGE_NOTICE_UID, payload: noticeUid });
export const changeNoticeCategory = (noticeCategory) => ({ type: CHANGE_NOTICE_CATEGORY, payload: noticeCategory });
export const changeNoticeTitle = (noticeTitle) => ({ type: CHANGE_NOTICE_TITLE, payload: noticeTitle });
export const changeNoticeViewCount = (noticeViewCount) => ({ type: CHANGE_NOTICE_VIEW_COUNT, payload: noticeViewCount });
export const changeAnimalType = (animalType) => ({ type: CHANGE_ANIMAL_TYPE, payload: animalType });
export const changeAdoptStatus = (adoptStatus) => ({ type: CHANGE_ADOPT_STATUS, payload: adoptStatus });
export const changeAnnouncementNum = (announcementNum) => ({ type: CHANGE_ANNOUNCEMENT_NUM, payload: announcementNum });
export const changeUniqueNum = (uniqueNum) => ({ type: CHANGE_UNIQUE_NUM, payload: uniqueNum });
export const changeNoticeImgUrl = (noticeImgUrl) => ({ type: CHANGE_NOTICE_IMG_URL, payload: noticeImgUrl });
export const changeEuthanasiaDate = (euthanasiaDate) => ({ type: CHANGE_EUTHANASIA_DATE, payload: euthanasiaDate });
export const changeNoticeContent = (noticeContent) => ({ type: CHANGE_NOTICE_CONTENT, payload: noticeContent });
export const changeNoticeCreatedAt = (noticeCreatedAt) => ({ type: CHANGE_NOTICE_CREATED_AT, payload: noticeCreatedAt });
export const changeNoticeUpdatedAt = (noticeUpdatedAt) => ({ type: CHANGE_NOTICE_UPDATED_AT, payload: noticeUpdatedAt });
export const changeImpossibleReason = (impossibleReason) => ({ type: CHANGE_IMPOSSIBLE_REASON, payload: impossibleReason });
export const changeAdoptionAuthor = (adoptionAuthor) => ({ type: CHANGE_ADOPTION_AUTHOR, payload: adoptionAuthor });

// export const loadJsonData = (jsonData) => ({ type: LOAD_JSON_DATA, payload: jsonData });
export const resetState = () => ({ type: RESET_STATE });