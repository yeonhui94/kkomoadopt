// useStore.jsx
import { useReducer } from "react";
import { reducer, initialState } from "./reducer";  // reducer와 초기 상태를 import
import {
  changeRequestUid,
  changeRequestId,
  changePhoneNum,
  changeVisitDate,
  changeVisitTime,
  changeVisitPurpose,
  changeVisitContent,
  changeVisitCreatedAt,
  changeVisitRequestAuthor,
  resetState
} from "./action";  // 액션 크리에이터를 import

export const useStore = () => {
  const [state, dispatch] = useReducer(reducer, initialState);  // useReducer 훅을 사용

  // 액션을 디스패치할 수 있도록 하는 함수들
  const actions = {
    changeRequestUid: (requestUid) => dispatch(changeRequestUid(requestUid)),
    changeRequestId: (requestId) => dispatch(changeRequestId(requestId)),
    changePhoneNum: (phoneNum) => dispatch(changePhoneNum(phoneNum)),
    changeVisitDate: (visitDate) => dispatch(changeVisitDate(visitDate)),
    changeVisitTime: (visitTime) => dispatch(changeVisitTime(visitTime)),
    changeVisitPurpose: (visitPurpose) => dispatch(changeVisitPurpose(visitPurpose)),
    changeVisitContent: (visitContent) => dispatch(changeVisitContent(visitContent)),
    changeVisitCreatedAt: (visitCreatedAt) => dispatch(changeVisitCreatedAt(visitCreatedAt)),
    changeVisitRequestAuthor: (visitRequestAuthor) => dispatch(changeVisitRequestAuthor(visitRequestAuthor)),
    resetState: () => dispatch(resetState())  // 상태 초기화
  };

  return { state, actions };  // 상태와 액션들을 반환
};
