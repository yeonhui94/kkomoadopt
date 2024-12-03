// useStore.jsx
import { useReducer } from "react";
import { reducer, initialState } from "./reducer";  // reducer와 초기 상태를 import
import {
  changeQnaUid,
  changeQnaId,
  changeQnaTitle,
  changeQnaCreatedAt,
  changeQnaViewCount,
  changeQnaPassword,
  changeQnaContent,
  changeQnaFile,
  changeQnaAnswer,
  changeQnaState,
  changeQnaAuthor,
  changeAnswerAuthor,
  resetState
} from "./action";  // 액션 크리에이터를 import

export const useStore = () => {
  const [state, dispatch] = useReducer(reducer, initialState);  // useReducer 훅을 사용

  // 액션을 디스패치할 수 있도록 하는 함수들
  const actions = {
    changeQnaUid: (qnaUid) => dispatch(changeQnaUid(qnaUid)),
    changeQnaId: (qnaId) => dispatch(changeQnaId(qnaId)),
    changeQnaTitle: (qnaTitle) => dispatch(changeQnaTitle(qnaTitle)),
    changeQnaCreatedAt: (qnaCreatedAt) => dispatch(changeQnaCreatedAt(qnaCreatedAt)),
    changeQnaViewCount: (qnaViewCount) => dispatch(changeQnaViewCount(qnaViewCount)),
    changeQnaPassword: (qnaPassword) => dispatch(changeQnaPassword(qnaPassword)),
    changeQnaContent: (qnaContent) => dispatch(changeQnaContent(qnaContent)),
    changeQnaFile: (qnaFile) => dispatch(changeQnaFile(qnaFile)),
    changeQnaAnswer: (qnaAnswer) => dispatch(changeQnaAnswer(qnaAnswer)),
    changeQnaState: (qnaState) => dispatch(changeQnaState(qnaState)),
    changeQnaAuthor: (qnaAuthor) => dispatch(changeQnaAuthor(qnaAuthor)),
    changeAnswerAuthor: (answerAuthor) => dispatch(changeAnswerAuthor(answerAuthor)),
    resetState: () => dispatch(resetState())  // 상태 초기화
  };

  return { state, actions };  // 상태와 액션들을 반환
};
