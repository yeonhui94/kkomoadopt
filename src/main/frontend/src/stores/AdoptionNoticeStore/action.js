import { 
  fetchNotices, 
  createNotice, 
  updateNotice, 
  deleteNotice, 
  fetchNoticeByUid, 
  fetchNoticesByCategory, 
  uploadNoticeImage 
} from './service';  // 서비스에서 API 호출 함수들 가져오기

export const FETCH_NOTICES = "FETCH_NOTICES";
export const CREATE_NOTICE = "CREATE_NOTICE";
export const UPDATE_NOTICE = "UPDATE_NOTICE";
export const DELETE_NOTICE = "DELETE_NOTICE";
export const FETCH_NOTICE_BY_UID = "FETCH_NOTICE_BY_UID";
export const FETCH_NOTICES_BY_CATEGORY = "FETCH_NOTICES_BY_CATEGORY";
export const UPLOAD_NOTICE_IMAGE = "UPLOAD_NOTICE_IMAGE";
export const SET_ERROR = "SET_ERROR";

// 게시물 목록 불러오기
export const fetchNoticesAction = () => async (dispatch) => {
try {
  const response = await fetchNotices();
  dispatch({ type: FETCH_NOTICES, payload: response.data });
} catch (error) {
  dispatch({ type: SET_ERROR, payload: error.message });
}
};

// 게시물 추가
export const addNotice = (noticeData) => async (dispatch) => {
try {
  const response = await createNotice(noticeData);
  dispatch({ type: CREATE_NOTICE, payload: response.data });
} catch (error) {
  dispatch({ type: SET_ERROR, payload: error.message });
}
};

// 게시물 수정
export const updateNoticeAction = (noticeUid, updatedData) => async (dispatch) => {
try {
  const response = await updateNotice(noticeUid, updatedData);
  dispatch({ type: UPDATE_NOTICE, payload: response.data });
} catch (error) {
  dispatch({ type: SET_ERROR, payload: error.message });
}
};

// 게시물 삭제
export const deleteNoticeAction = (noticeUid) => async (dispatch) => {
try {
  await deleteNotice(noticeUid);
  dispatch({ type: DELETE_NOTICE, payload: noticeUid });
} catch (error) {
  dispatch({ type: SET_ERROR, payload: error.message });
}
};

// 게시물 상세 조회
export const getNoticeByUid = (noticeUid) => async (dispatch) => {
try {
  const response = await fetchNoticeByUid(noticeUid);
  dispatch({ type: FETCH_NOTICE_BY_UID, payload: response.data });
} catch (error) {
  dispatch({ type: SET_ERROR, payload: error.message });
}
};

// 카테고리별 게시물 조회
export const getNoticesByCategory = (category) => async (dispatch) => {
try {
  const response = await fetchNoticesByCategory(category);
  dispatch({ type: FETCH_NOTICES_BY_CATEGORY, payload: response.data });
} catch (error) {
  dispatch({ type: SET_ERROR, payload: error.message });
}
};

// 이미지 업로드
export const uploadNoticeImageAction = (formData) => async (dispatch) => {
try {
  const response = await uploadNoticeImage(formData);
  dispatch({ type: UPLOAD_NOTICE_IMAGE, payload: response.data });
} catch (error) {
  dispatch({ type: SET_ERROR, payload: error.message });
}
};
