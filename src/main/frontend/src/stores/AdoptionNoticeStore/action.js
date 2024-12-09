import { 
    fetchNotices, 
    createNotice, 
    updateNotice, 
    deleteNotice, 
    fetchNoticeByUid, 
    fetchNoticesByCategory, 
    uploadNoticeImage 
} from '../service/apiService'; // apiService에서 함수들을 가져옵니다.

export const FETCH_NOTICES = 'FETCH_NOTICES';
export const CREATE_NOTICE = 'CREATE_NOTICE';
export const UPDATE_NOTICE = 'UPDATE_NOTICE';
export const DELETE_NOTICE = 'DELETE_NOTICE';
export const FETCH_NOTICE_BY_UID = 'FETCH_NOTICE_BY_UID';
export const FETCH_NOTICES_BY_CATEGORY = 'FETCH_NOTICES_BY_CATEGORY';
export const UPLOAD_NOTICE_IMAGE = 'UPLOAD_NOTICE_IMAGE';
export const SET_ERROR = 'SET_ERROR';  // 오류 처리 액션 추가

// 게시물 목록 불러오기
export const getNotices = () => async (dispatch) => {
    try {
        const data = await fetchNotices(); // api에서 데이터를 가져옵니다.
        dispatch({ type: FETCH_NOTICES, payload: data });
    } catch (error) {
        dispatch({ type: SET_ERROR, payload: error.message }); // 오류 처리
    }
};

// 게시물 추가
export const addNotice = (noticeData) => async (dispatch) => {
    try {
        const data = await createNotice(noticeData); // api에서 게시물 추가
        dispatch({ type: CREATE_NOTICE, payload: data });
    } catch (error) {
        dispatch({ type: SET_ERROR, payload: error.message }); // 오류 처리
    }
};

// 게시물 수정
export const updateNoticeAction = (noticeUid, updatedData) => async (dispatch) => {
    try {
        const data = await updateNotice(noticeUid, updatedData); // api에서 게시물 수정
        dispatch({ type: UPDATE_NOTICE, payload: data });
    } catch (error) {
        dispatch({ type: SET_ERROR, payload: error.message }); // 오류 처리
    }
};

// 게시물 삭제
export const deleteNoticeAction = (noticeUid) => async (dispatch) => {
    try {
        await deleteNotice(noticeUid); // api에서 게시물 삭제
        dispatch({ type: DELETE_NOTICE, payload: noticeUid });
    } catch (error) {
        dispatch({ type: SET_ERROR, payload: error.message }); // 오류 처리
    }
};

// 특정 게시물 상세 보기
export const getNoticeByUid = (noticeUid) => async (dispatch) => {
    try {
        const data = await fetchNoticeByUid(noticeUid); // api에서 상세 보기
        dispatch({ type: FETCH_NOTICE_BY_UID, payload: data });
    } catch (error) {
        dispatch({ type: SET_ERROR, payload: error.message }); // 오류 처리
    }
};

// 특정 카테고리의 게시물 불러오기
export const getNoticesByCategory = (category) => async (dispatch) => {
    try {
        const data = await fetchNoticesByCategory(category); // api에서 카테고리별 게시물 불러오기
        dispatch({ type: FETCH_NOTICES_BY_CATEGORY, payload: data });
    } catch (error) {
        dispatch({ type: SET_ERROR, payload: error.message }); // 오류 처리
    }
};

// 이미지 업로드
export const uploadNoticeImageAction = (formData) => async (dispatch) => {
    try {
        const data = await uploadNoticeImage(formData); // api에서 이미지 업로드
        dispatch({ type: UPLOAD_NOTICE_IMAGE, payload: data });
    } catch (error) {
        dispatch({ type: SET_ERROR, payload: error.message }); // 오류 처리
    }
};
