// action.js

// Action Types
export const CHANGE_REQUEST_UID = "CHANGE_REQUEST_UID";
export const CHANGE_REQUEST_ID = "CHANGE_REQUEST_ID";
export const CHANGE_PHONE_NUM = "CHANGE_PHONE_NUM";
export const CHANGE_VISIT_DATE = "CHANGE_VISIT_DATE";
export const CHANGE_VISIT_TIME = "CHANGE_VISIT_TIME";
export const CHANGE_VISIT_PURPOSE = "CHANGE_VISIT_PURPOSE";
export const CHANGE_VISIT_CONTENT = "CHANGE_VISIT_CONTENT";
export const CHANGE_VISIT_CREATED_AT = "CHANGE_VISIT_CREATED_AT";
export const CHANGE_VISIT_REQUEST_AUTHOR = "CHANGE_VISIT_REQUEST_AUTHOR";
export const RESET_STATE = "RESET_STATE";

// Action Creators
export const changeRequestUid = (requestUid) => ({ type: CHANGE_REQUEST_UID, payload: requestUid });
export const changeRequestId = (requestId) => ({ type: CHANGE_REQUEST_ID, payload: requestId });
export const changePhoneNum = (phoneNum) => ({ type: CHANGE_PHONE_NUM, payload: phoneNum });
export const changeVisitDate = (visitDate) => ({ type: CHANGE_VISIT_DATE, payload: visitDate });
export const changeVisitTime = (visitTime) => ({ type: CHANGE_VISIT_TIME, payload: visitTime });
export const changeVisitPurpose = (visitPurpose) => ({ type: CHANGE_VISIT_PURPOSE, payload: visitPurpose });
export const changeVisitContent = (visitContent) => ({ type: CHANGE_VISIT_CONTENT, payload: visitContent });
export const changeVisitCreatedAt = (visitCreatedAt) => ({ type: CHANGE_VISIT_CREATED_AT, payload: visitCreatedAt });
export const changeVisitRequestAuthor = (visitRequestAuthor) => ({ type: CHANGE_VISIT_REQUEST_AUTHOR, payload: visitRequestAuthor });
export const resetState = () => ({ type: RESET_STATE });
