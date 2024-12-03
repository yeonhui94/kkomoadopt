import {
    CHANGE_NOTICE_UID,
    CHANGE_NOTICE_CATEGORY,
    CHANGE_NOTICE_TITLE,
    CHANGE_NOTICE_VIEW_COUNT,
    CHANGE_ANIMAL_TYPE,
    CHANGE_ADOPT_STATUS,
    CHANGE_ANNOUNCEMENT_NUM,
    CHANGE_UNIQUE_NUM,
    CHANGE_NOTICE_IMG_URL,
    CHANGE_EUTHANASIA_DATE,
    CHANGE_NOTICE_CONTENT,
    CHANGE_NOTICE_CREATED_AT,
    CHANGE_NOTICE_UPDATED_AT,
    CHANGE_IMPOSSIBLE_REASON,
    CHANGE_ADOPTION_AUTHOR,
    RESET_STATE
  } from "./action";
  
  export const initialState = {
    noticeUid: "",
    noticeCategory: "",
    noticeTitle: "",
    noticeViewCount: 0,
    animalType: "",
    adoptStatus: "",
    announcementNum: "",
    uniqueNum: null,
    noticeImgUrl: [],
    euthanasiaDate: null,
    noticeContent: "",
    noticeCreatedAt: null,
    noticeUpdatedAt: null,
    impossibleReason: "",
    adoptionAuthor: ""
  };
  
  export const reducer = (state, action) => {
    switch (action.type) {
      case CHANGE_NOTICE_UID:
        return { ...state, noticeUid: action.payload };
      case CHANGE_NOTICE_CATEGORY:
        return { ...state, noticeCategory: action.payload };
      case CHANGE_NOTICE_TITLE:
        return { ...state, noticeTitle: action.payload };
      case CHANGE_NOTICE_VIEW_COUNT:
        return { ...state, noticeViewCount: action.payload };
      case CHANGE_ANIMAL_TYPE:
        return { ...state, animalType: action.payload };
      case CHANGE_ADOPT_STATUS:
        return { ...state, adoptStatus: action.payload };
      case CHANGE_ANNOUNCEMENT_NUM:
        return { ...state, announcementNum: action.payload };
      case CHANGE_UNIQUE_NUM:
        return { ...state, uniqueNum: action.payload };
      case CHANGE_NOTICE_IMG_URL:
        return { ...state, noticeImgUrl: action.payload };
      case CHANGE_EUTHANASIA_DATE:
        return { ...state, euthanasiaDate: action.payload };
      case CHANGE_NOTICE_CONTENT:
        return { ...state, noticeContent: action.payload };
      case CHANGE_NOTICE_CREATED_AT:
        return { ...state, noticeCreatedAt: action.payload };
      case CHANGE_NOTICE_UPDATED_AT:
        return { ...state, noticeUpdatedAt: action.payload };
      case CHANGE_IMPOSSIBLE_REASON:
        return { ...state, impossibleReason: action.payload };
      case CHANGE_ADOPTION_AUTHOR:
        return { ...state, adoptionAuthor: action.payload };
      case RESET_STATE:
        return initialState;
      default:
        return state;
    }
  };
  