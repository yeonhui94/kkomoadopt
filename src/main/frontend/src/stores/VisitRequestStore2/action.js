import {
  getVisitRequests,
//   getVisitRequestDetail,
  createVisitRequest 
//   updateVisitRequest,
//   deleteVisitRequest as deleteVisitRequestAPI  // 이름 변경
} from '../../service/apiService'

// // 액션 타입 정의
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
export const CREATE_VISIT_REQUEST = "CREATE_VISIT_REQUEST";
export const READ_VISIT_REQUESTS = "READ_VISIT_REQUESTS";
export const READ_VISIT_REQUEST_DETAIL = "READ_VISIT_REQUEST_DETAIL";
export const UPDATE_VISIT_REQUEST = "UPDATE_VISIT_REQUEST";
export const DELETE_VISIT_REQUEST = "DELETE_VISIT_REQUEST";

// // 액션 생성자들
// export const changeRequestUid = (requestUid) => ({
//   type: CHANGE_REQUEST_UID,
//   payload: requestUid,
// });

// export const changeRequestId = (requestId) => ({
//   type: CHANGE_REQUEST_ID,
//   payload: requestId,
// });

// export const changePhoneNum = (phoneNum) => ({
//   type: CHANGE_PHONE_NUM,
//   payload: phoneNum,
// });

// export const changeVisitDate = (visitDate) => ({
//   type: CHANGE_VISIT_DATE,
//   payload: visitDate,
// });

// export const changeVisitTime = (visitTime) => ({
//   type: CHANGE_VISIT_TIME,
//   payload: visitTime,
// });

// export const changeVisitPurpose = (visitPurpose) => ({
//   type: CHANGE_VISIT_PURPOSE,
//   payload: visitPurpose,
// });

// export const changeVisitContent = (visitContent) => ({
//   type: CHANGE_VISIT_CONTENT,
//   payload: visitContent,
// });

// export const changeVisitCreatedAt = (visitCreatedAt) => ({
//   type: CHANGE_VISIT_CREATED_AT,
//   payload: visitCreatedAt,
// });

// export const changeVisitRequestAuthor = (visitRequestAuthor) => ({
//   type: CHANGE_VISIT_REQUEST_AUTHOR,
//   payload: visitRequestAuthor,
// });

// export const resetState = () => ({
//   type: RESET_STATE,
// });

// CRUD API 관련 액션 생성자들
export const getVisitRequestsAction = (page) => async (dispatch) => {
  try {
    const response = await getVisitRequests(page);  // API 호출
    console.log('Notices Data:', response.data);  // 데이터 콘솔에 출력
    if (response.status === 200 ){
    dispatch({
      type: READ_VISIT_REQUESTS,
      payload: response.data,  // 서버로부터 받은 데이터
    });
    return "ok"
  };
  } catch (error) {
    console.error("방문 요청 목록을 불러올 수 없습니다.", error);
  }
};

// export const readVisitRequestDetail = (requestId) => async (dispatch) => {
//   try {
//     const response = await getVisitRequestDetail(requestId);  // 특정 방문 요청 상세 정보 API 호출
//     dispatch({
//       type: READ_VISIT_REQUEST_DETAIL,
//       payload: response.data,  // 상세 정보
//     });
//   } catch (error) {
//     console.error("방문 요청 상세 정보를 불러올 수 없습니다.", error);
//   }
// };

export const createVisitRequestAction = (visitRequestData) => async (dispatch) => {
  try {
    return await createVisitRequest(visitRequestData);  // 새로운 방문 요청 생성 API 호출
 
  } catch (error) {
    console.error("방문 요청을 생성할 수 없습니다.", error);
  }
};

// export const updateVisitRequest = (requestId, updatedData) => async (dispatch) => {
//   try {
//     const response = await updateVisitRequest(requestId, updatedData);  // 방문 요청 업데이트 API 호출
//     dispatch({
//       type: UPDATE_VISIT_REQUEST,
//       payload: response.data,  // 업데이트된 방문 요청 데이터
//     });
//   } catch (error) {
//     console.error("방문 요청을 업데이트할 수 없습니다.", error);
//   }
// };

// export const deleteVisitRequest = (requestId) => async (dispatch) => {
//   try {
//     await deleteVisitRequestAPI(requestId);  // 방문 요청 삭제 API 호출
//     dispatch({
//       type: DELETE_VISIT_REQUEST,
//       payload: requestId,  // 삭제된 요청 ID
//     });
//   } catch (error) {
//     console.error("방문 요청을 삭제할 수 없습니다.", error);
//   }
// };

