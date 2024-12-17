import {
  getAdoptionPostDetail,
  createAdoptionPost,
  updateAdoptionPost,
  deleteAdoptionPost,
  getAdoptionPostList,
  getSearchAdoptionPostList,
  changeMyScrap,
  getUserList,
  getAdoptionAdminList,
  getSearchAdoptionAdminList,
} from '../../service/apiService'

// 액션 타입 정의
export const CHANGE_ADOPTION_NOTICE_UID = "CHANGE_ADOPTION_NOTICE_UID";
export const CHANGE_ADOPTION_NOTICE_CATEGORY = "CHANGE_ADOPTION_NOTICE_CATEGORY";
export const CHANGE_ADOPTION_NOTICE_TITLE = "CHANGE_ADOPTION_NOTICE_TITLE";
export const CHANGE_ADOPTION_NOTICE_VIEW_COUNT = "CHANGE_ADOPTION_NOTICE_VIEW_COUNT";
export const CHANGE_ADOPTION_ANIMAL_TYPE = "CHANGE_ADOPTION_ANIMAL_TYPE";
export const CHANGE_ADOPTION_STATUS = "CHANGE_ADOPTION_STATUS";
export const CHANGE_ADOPTION_NOTICE_NUM = "CHANGE_ADOPTION_NOTICE_NUM";
export const CHANGE_ADOPTION_UNIQUE_NUM = "CHANGE_ADOPTION_UNIQUE_NUM";
export const CHANGE_ADOPTION_NOTICE_IMG_URL = "CHANGE_ADOPTION_NOTICE_IMG_URL";
export const CHANGE_ADOPTION_EUTHANASIA_DATE = "CHANGE_ADOPTION_EUTHANASIA_DATE";
export const CHANGE_ADOPTION_NOTICE_CONTENT = "CHANGE_ADOPTION_NOTICE_CONTENT";
export const CHANGE_ADOPTION_NOTICE_CREATED_AT = "CHANGE_ADOPTION_NOTICE_CREATED_AT";
export const CHANGE_ADOPTION_NOTICE_UPDATED_AT = "CHANGE_ADOPTION_NOTICE_UPDATED_AT";
export const CHANGE_ADOPTION_IMPOSSIBLE_REASON = "CHANGE_ADOPTION_IMPOSSIBLE_REASON";
export const CHANGE_ADOPTION_AUTHOR = "CHANGE_ADOPTION_AUTHOR";
export const RESET_ADOPTION_STATE = "RESET_ADOPTION_STATE";
export const CREATE_ADOPTION_POST = "CREATE_ADOPTION_POST";
export const READ_ADOPTION_POSTS = "READ_ADOPTION_POSTS";
export const READ_ADOPTION_POST_DETAIL = "READ_ADOPTION_POST_DETAIL";
export const UPDATE_ADOPTION_POST = "UPDATE_ADOPTION_POST";
export const DELETE_ADOPTION_POST = "DELETE_ADOPTION_POST";

// 액션 생성자들
export const changeAdoptionNoticeUid = (noticeUid) => ({
  type: CHANGE_ADOPTION_NOTICE_UID,
  payload: noticeUid,
});

export const changeAdoptionNoticeCategory = (noticeCategory) => ({
  type: CHANGE_ADOPTION_NOTICE_CATEGORY,
  payload: noticeCategory,
});

export const changeAdoptionNoticeTitle = (noticeTitle) => ({
  type: CHANGE_ADOPTION_NOTICE_TITLE,
  payload: noticeTitle,
});

export const changeAdoptionNoticeViewCount = (noticeViewCount) => ({
  type: CHANGE_ADOPTION_NOTICE_VIEW_COUNT,
  payload: noticeViewCount,
});

export const changeAdoptionAnimalType = (animalType) => ({
  type: CHANGE_ADOPTION_ANIMAL_TYPE,
  payload: animalType,
});

export const changeAdoptionStatus = (adoptStatus) => ({
  type: CHANGE_ADOPTION_STATUS,
  payload: adoptStatus,
});

export const changeAdoptionNoticeNum = (announcementNum) => ({
  type: CHANGE_ADOPTION_NOTICE_NUM,
  payload: announcementNum,
});

export const changeAdoptionUniqueNum = (uniqueNum) => ({
  type: CHANGE_ADOPTION_UNIQUE_NUM,
  payload: uniqueNum,
});

export const changeAdoptionNoticeImgUrl = (noticeImgUrl) => ({
  type: CHANGE_ADOPTION_NOTICE_IMG_URL,
  payload: noticeImgUrl,
});

export const changeAdoptionEuthanasiaDate = (euthanasiaDate) => ({
  type: CHANGE_ADOPTION_EUTHANASIA_DATE,
  payload: euthanasiaDate,
});

export const changeAdoptionNoticeContent = (noticeContent) => ({
  type: CHANGE_ADOPTION_NOTICE_CONTENT,
  payload: noticeContent,
});

export const changeAdoptionNoticeCreatedAt = (noticeCreatedAt) => ({
  type: CHANGE_ADOPTION_NOTICE_CREATED_AT,
  payload: noticeCreatedAt,
});

export const changeAdoptionNoticeUpdatedAt = (noticeUpdatedAt) => ({
  type: CHANGE_ADOPTION_NOTICE_UPDATED_AT,
  payload: noticeUpdatedAt,
});

export const changeAdoptionImpossibleReason = (impossibleReason) => ({
  type: CHANGE_ADOPTION_IMPOSSIBLE_REASON,
  payload: impossibleReason,
});

export const changeAdoptionAuthor = (adoptionAuthor) => ({
  type: CHANGE_ADOPTION_AUTHOR,
  payload: adoptionAuthor,
});

export const resetAdoptionState = () => ({
  type: RESET_ADOPTION_STATE,
});

// CRUD API 관련 액션 생성자들
// 전체, 카테고리 list 페이지 불러오기(12개)
export const getAdoptionPostListAction = (page, noticeCategory, sortBy, sortOrder) => async (dispatch) => {
  try {
    const response = await getAdoptionPostList(page, noticeCategory, sortBy, sortOrder);
    console.log('Notices Data:', response.data.notices);  // 데이터 콘솔에 출력
    dispatch({
       type: READ_ADOPTION_POSTS,
       payload: response.data
    });
  } catch (error) {
    console.error("입양 게시물을 불러올 수 없습니다.", error);
  }
} 

// 전체, 카테고리 list 페이지 불러오기(8개)
export const getAdoptionAdminListAction = (page, noticeCategory, sortBy) => async (dispatch) => {
  try {
    const response = await getAdoptionAdminList(page, noticeCategory, sortBy );
    console.log('Notices Data:', response.data.notices);  // 데이터 콘솔에 출력
    dispatch({
       type: READ_ADOPTION_POSTS,
       payload: response.data
    });
  } catch (error) {
    console.error("입양 게시물을 불러올 수 없습니다.", error);
  }
}

// 검색어 적용한 전체, 카테고리 list 페이지 불러오기(12개)
export const getAdoptionSearchPostListAction = (page, noticeCategory, sortBy, sortOrder,search) => async (dispatch) => {
  try {
    const response = await getSearchAdoptionPostList(page, noticeCategory, sortBy, sortOrder,search);
    console.log('Notices Data:', response.data.notices);  // 데이터 콘솔에 출력
    dispatch({
       type: READ_ADOPTION_POSTS,
       payload: response.data
    });
  } catch (error) {
    console.error("입양 게시물을 불러올 수 없습니다.", error);
  }
} 

// 검색어 적용한 전체, 카테고리 list 페이지 불러오기(8개)
export const getSearchAdoptionAdminListAction = (page, noticeCategory, sortBy, search) => async (dispatch) => {
  try {
    const response = await getSearchAdoptionAdminList(page, noticeCategory, sortBy, search);
    console.log('Notices Data:', response.data.notices);  // 데이터 콘솔에 출력
    dispatch({
       type: READ_ADOPTION_POSTS,
       payload: response.data
    });
  } catch (error) {
    console.error("입양 게시물을 불러올 수 없습니다.", error);
  }
} 

// 입양공지 상세불러오기(announcementNum)
export const getAdoptionPostDetailAction = (announcementNum) => async (dispatch) => {
  try {
      const response = await getAdoptionPostDetail(announcementNum);  // 특정 게시물 API 호출
      console.log('NoticeDetila Data:', response.data);  // 데이터 콘솔에 출력
      dispatch({
          type: READ_ADOPTION_POST_DETAIL,
          payload: response.data // 상세 정보
      });
  } catch (error) {
      console.error("입양 게시물 상세 정보를 불러올 수 없습니다.", error);
  }
};

export const createAdoptionPostAction = (adoptionData) => async (dispatch) => {
  try {
       return await createAdoptionPost(adoptionData);  // 새로운 게시물 생성 API 호출
      console.log('Response:', response);  // 데이터 콘솔에 출력
      dispatch({
          type: CREATE_ADOPTION_POST,
          payload: response.data,  // 생성된 게시물 데이터
      });
  } catch (error) {
      console.error("입양 게시물을 생성할 수 없습니다.", error);
  }
};

export const changeMyScrapAction = (adoptNum) => async (dispatch) => {
  try { 
    return await changeMyScrap(adoptNum);
  } catch(e) {
    console.error(e)
  }
};

export const updateAdoptionPostAction = (noticeUid, updatedData) => async (dispatch) => {
  try {
      const response = await updateAdoptionPost(noticeUid, updatedData);  // 게시물 업데이트 API 호출
      dispatch({
          type: UPDATE_ADOPTION_POST,
          payload: response.data,  // 업데이트된 게시물 데이터
      });
  } catch (error) {
      console.error("입양 게시물을 업데이트할 수 없습니다.", error);
  }
};

export const deleteAdoptionPostAction = (noticeUid) => async (dispatch) => {
  try {
      const response = await deleteAdoptionPost(noticeUid);  // 게시물 삭제 API 호출
      dispatch({
          type: DELETE_ADOPTION_POST,
          payload: noticeUid,  // 삭제된 게시물의 UID
      });
  } catch (error) {
      console.error("입양 게시물을 삭제할 수 없습니다.", error);
  }
};
