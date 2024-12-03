// action.js

// Action Types
export const CHANGE_QNA_UID = "CHANGE_QNA_UID";
export const CHANGE_QNA_ID = "CHANGE_QNA_ID";
export const CHANGE_QNA_TITLE = "CHANGE_QNA_TITLE";
export const CHANGE_QNA_CREATED_AT = "CHANGE_QNA_CREATED_AT";
export const CHANGE_QNA_VIEW_COUNT = "CHANGE_QNA_VIEW_COUNT";
export const CHANGE_QNA_PASSWORD = "CHANGE_QNA_PASSWORD";
export const CHANGE_QNA_CONTENT = "CHANGE_QNA_CONTENT";
export const CHANGE_QNA_FILE = "CHANGE_QNA_FILE";
export const CHANGE_QNA_ANSWER = "CHANGE_QNA_ANSWER";
export const CHANGE_QNA_STATE = "CHANGE_QNA_STATE";
export const CHANGE_QNA_AUTHOR = "CHANGE_QNA_AUTHOR";
export const CHANGE_ANSWER_AUTHOR = "CHANGE_ANSWER_AUTHOR";
export const RESET_STATE = "RESET_STATE";

// Action Creators
export const changeQnaUid = (qnaUid) => ({ type: CHANGE_QNA_UID, payload: qnaUid });
export const changeQnaId = (qnaId) => ({ type: CHANGE_QNA_ID, payload: qnaId });
export const changeQnaTitle = (qnaTitle) => ({ type: CHANGE_QNA_TITLE, payload: qnaTitle });
export const changeQnaCreatedAt = (qnaCreatedAt) => ({ type: CHANGE_QNA_CREATED_AT, payload: qnaCreatedAt });
export const changeQnaViewCount = (qnaViewCount) => ({ type: CHANGE_QNA_VIEW_COUNT, payload: qnaViewCount });
export const changeQnaPassword = (qnaPassword) => ({ type: CHANGE_QNA_PASSWORD, payload: qnaPassword });
export const changeQnaContent = (qnaContent) => ({ type: CHANGE_QNA_CONTENT, payload: qnaContent });
export const changeQnaFile = (qnaFile) => ({ type: CHANGE_QNA_FILE, payload: qnaFile });
export const changeQnaAnswer = (qnaAnswer) => ({ type: CHANGE_QNA_ANSWER, payload: qnaAnswer });
export const changeQnaState = (qnaState) => ({ type: CHANGE_QNA_STATE, payload: qnaState });
export const changeQnaAuthor = (qnaAuthor) => ({ type: CHANGE_QNA_AUTHOR, payload: qnaAuthor });
export const changeAnswerAuthor = (answerAuthor) => ({ type: CHANGE_ANSWER_AUTHOR, payload: answerAuthor });
export const resetState = () => ({ type: RESET_STATE });
