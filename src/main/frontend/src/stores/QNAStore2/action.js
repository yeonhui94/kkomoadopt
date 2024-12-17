// QNA 관련 API 메서드 임포트
import {
    getQnaPosts,
    getQnaPostDetail,
    createQnaPost,
    updateQnaPost,
    deleteQnaPost
} from '../../service/apiService';

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

// CRUD 관련 액션 타입들 추가
export const READ_QNA_POSTS = "READ_QNA_POSTS";
export const READ_QNA_POST_DETAIL = "READ_QNA_POST_DETAIL";
export const CREATE_QNA_POST = "CREATE_QNA_POST";
export const UPDATE_QNA_POST = "UPDATE_QNA_POST";
export const DELETE_QNA_POST = "DELETE_QNA_POST";

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

// CRUD 관련 액션 생성자

// 1. QNA 게시물 목록 조회
export const readQnaPosts = (page,size,sortBy,sortOrder) => async (dispatch) => {
    try {
        const response = await getQnaPosts(page,size,sortBy,sortOrder);  // API 호출: QNA 게시물 목록 조회
        console.log(response);
        if (response.status === 200 ){
        dispatch({
            type: READ_QNA_POSTS,
            payload: response.data,  // 반환된 QNA 게시물 목록
        });
        return "ok"
    };
    } catch (error) {
        console.error("QNA 게시물 목록을 불러올 수 없습니다.", error);
    }
};

// 2. 특정 QNA 게시물 상세 조회
export const readQnaPostDetail = (qnaUid) => async (dispatch) => {
    try {
        const response = await getQnaPostDetail(qnaUid);  // API 호출: 특정 QNA 게시물 상세 조회
        dispatch({
            type: READ_QNA_POST_DETAIL,
            payload: response,  // 반환된 QNA 게시물 상세 정보
        });
        
    } catch (error) {
        console.error("QNA 게시물 상세 정보를 불러올 수 없습니다.", error);
    }
};

// 3. QNA 게시물 생성
export const createQnaPostAction = (qnaData) => async (dispatch) => {
    try {
        const response = await createQnaPost(qnaData);  // API 호출: 새로운 QNA 게시물 생성
        dispatch({
            type: CREATE_QNA_POST,
            payload: response.data,  // 생성된 QNA 게시물 데이터
        });
    } catch (error) {
        console.error("QNA 게시물을 생성할 수 없습니다.", error);
    }
};

// 4. QNA 게시물 수정
export const updateQnaPostAction = (qnaUid, updatedData) => async (dispatch) => {
    try {
        const response = await updateQnaPost(qnaUid, updatedData);  // API 호출: QNA 게시물 수정
        dispatch({
            type: UPDATE_QNA_POST,
            payload: response.data,  // 수정된 QNA 게시물 데이터
        });
    } catch (error) {
        console.error("QNA 게시물을 수정할 수 없습니다.", error);
    }
};

// 5. QNA 게시물 삭제
export const deleteQnaPostAction = (qnaUid) => async (dispatch) => {
    try {
      return  await deleteQnaPost(qnaUid);  // API 호출: QNA 게시물 삭제
      
    } catch (error) {
        console.error("QNA 게시물을 삭제할 수 없습니다.", error);
    }
};