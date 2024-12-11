// useStore.jsx

import { useReducer } from "react";
import { reducer, initialState } from "./reducer";  
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
  resetState,
  readQnaPosts,
  readQnaPostDetail,
  createQnaPostAction,
  updateQnaPostAction,
  deleteQnaPostAction
} from "./action";  

export const useStore = () => {
  const [state, dispatch] = useReducer(reducer, initialState);  

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
    resetState: () => dispatch(resetState()),  

    // CRUD 액션들
    readQnaPosts: () => dispatch(readQnaPosts()),  
    readQnaPostDetail: (qnaUid) => dispatch(readQnaPostDetail(qnaUid)),  
    createQnaPostAction: (qnaData) => dispatch(createQnaPostAction(qnaData)),  
    updateQnaPostAction: (qnaUid, updatedData) => dispatch(updateQnaPostAction(qnaUid, updatedData)),  
    deleteQnaPostAction: (qnaUid) => dispatch(deleteQnaPostAction(qnaUid)),  
  };

  return { state, actions };  
};
