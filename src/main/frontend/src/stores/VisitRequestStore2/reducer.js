import {
  CHANGE_REQUEST_UID,
  CHANGE_REQUEST_ID,
  CHANGE_PHONE_NUM,
  CHANGE_VISIT_DATE,
  CHANGE_VISIT_TIME,
  CHANGE_VISIT_PURPOSE,
  CHANGE_VISIT_CONTENT,
  CHANGE_VISIT_CREATED_AT,
  CHANGE_VISIT_REQUEST_AUTHOR,
  RESET_STATE,
  CREATE_VISIT_REQUEST,
  READ_VISIT_REQUESTS,
  READ_VISIT_REQUEST_DETAIL,
  UPDATE_VISIT_REQUEST,
  DELETE_VISIT_REQUEST
} from './action';

// 초기 상태 정의
export const initialState = {
  requestUid: "",
  requestId: null,
  phoneNum: "",
  visitDate: null,
  visitTime: "", 
  visitPurpose: "", 
  visitContent: "",
  visitCreatedAt: null,
  visitRequestAuthor: "",
  visitRequests: [], // 전체 방문 요청 목록
  visitRequestDetail: null, // 특정 방문 요청 상세 정보
  successMessage: "", // 성공 메시지 추가 (CRUD 관련)
  errorMessage: "" // 오류 메시지 추가
};

// 리듀서 함수
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_REQUEST_UID:
      return { ...state, requestUid: action.payload };
      
    case CHANGE_REQUEST_ID:
      return { ...state, requestId: action.payload };
      
    case CHANGE_PHONE_NUM:
      return { ...state, phoneNum: action.payload };
      
    case CHANGE_VISIT_DATE:
      return { ...state, visitDate: action.payload };
      
    case CHANGE_VISIT_TIME:
      return { ...state, visitTime: action.payload };
      
    case CHANGE_VISIT_PURPOSE:
      return { ...state, visitPurpose: action.payload };
      
    case CHANGE_VISIT_CONTENT:
      return { ...state, visitContent: action.payload };
      
    case CHANGE_VISIT_CREATED_AT:
      return { ...state, visitCreatedAt: action.payload };
      
    case CHANGE_VISIT_REQUEST_AUTHOR:
      return { ...state, visitRequestAuthor: action.payload };
      
    case RESET_STATE:
      return initialState; // 상태 초기화

    case READ_VISIT_REQUESTS:
      return { ...state, visitRequests: action.payload }; // 방문 요청 목록을 상태에 저장

    case READ_VISIT_REQUEST_DETAIL:
      return { ...state, visitRequestDetail: action.payload }; // 특정 방문 요청 상세 정보 저장

    case CREATE_VISIT_REQUEST:
      return { 
        ...state, 
        visitRequests: [...state.visitRequests, action.payload], // 새로운 방문 요청 추가
        successMessage: "방문 요청이 성공적으로 생성되었습니다." // 성공 메시지 추가
      };

    case UPDATE_VISIT_REQUEST:
      return { 
        ...state, 
        visitRequests: state.visitRequests.map(request =>
          request.requestUid === action.payload.requestUid ? action.payload : request
        ), // 업데이트된 요청으로 교체
        successMessage: "방문 요청이 성공적으로 업데이트되었습니다." // 성공 메시지 추가
      };

    case DELETE_VISIT_REQUEST:
      return { 
        ...state, 
        visitRequests: state.visitRequests.filter(request => request.requestUid !== action.payload), // 삭제된 요청을 제외한 나머지 목록
        successMessage: "방문 요청이 성공적으로 삭제되었습니다." // 성공 메시지 추가
      };

    default:
      return state;
  }
};