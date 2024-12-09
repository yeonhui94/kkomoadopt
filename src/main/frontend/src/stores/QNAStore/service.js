import axios from 'axios';

// API 기본 설정
const apiClient = axios.create({
  baseURL: '/api/qna', // Q&A 관련 API 기본 URL
  timeout: 5000, // 요청 타임아웃 설정
  headers: { 'Content-Type': 'application/json' }
});

// Q&A 게시글 불러오기 (ID로)
export const fetchQnaById = async (qnaId) => {
  try {
    const response = await apiClient.get(`/${qnaId}`); // 특정 Q&A 게시글 조회
    return response.data; // 게시글 데이터 반환
  } catch (error) {
    console.error('QNA fetch error:', error);
    throw error; // 에러 처리
  }
};

// Q&A 게시글 생성
export const createQna = async (qnaData) => {
  try {
    const response = await apiClient.post('/', qnaData); // Q&A 게시글 생성
    return response.data; // 생성된 게시글 데이터 반환
  } catch (error) {
    console.error('QNA create error:', error);
    throw error; // 에러 처리
  }
};

// Q&A 게시글 수정
export const updateQna = async (qnaId, updatedData) => {
  try {
    const response = await apiClient.put(`/${qnaId}`, updatedData); // Q&A 게시글 수정
    return response.data; // 수정된 게시글 데이터 반환
  } catch (error) {
    console.error('QNA update error:', error);
    throw error; // 에러 처리
  }
};

// Q&A 게시글 삭제
export const deleteQna = async (qnaId) => {
  try {
    await apiClient.delete(`/${qnaId}`); // Q&A 게시글 삭제
  } catch (error) {
    console.error('QNA delete error:', error);
    throw error; // 에러 처리
  }
};

// Q&A 게시글 조회수 업데이트
export const updateQnaViewCount = async (qnaId, viewCount) => {
  try {
    const response = await apiClient.patch(`/${qnaId}/view-count`, { viewCount }); // 조회수 업데이트
    return response.data; // 조회수 업데이트된 게시글 데이터 반환
  } catch (error) {
    console.error('QNA update view count error:', error);
    throw error; // 에러 처리
  }
};



// import { useStore } from './useStore';  // useStore 훅을 import
// import axios from 'axios';  // Axios로 API 요청을 처리

// const useQnaService = () => {
//   const { state, actions } = useStore();

//   // Q&A 게시글을 가져오는 함수
//   const fetchQnaById = async (qnaId) => {
//     try {
//       const response = await axios.get(`/api/qna/${qnaId}`);  // API 호출 (예시: Q&A 게시글 조회)
//       const data = response.data;

//       // 데이터를 store에 저장
//       actions.changeQnaUid(data.qnaUid);
//       actions.changeQnaId(data.qnaId);
//       actions.changeQnaTitle(data.qnaTitle);
//       actions.changeQnaCreatedAt(data.qnaCreatedAt);
//       actions.changeQnaViewCount(data.qnaViewCount);
//       actions.changeQnaPassword(data.qnaPassword);
//       actions.changeQnaContent(data.qnaContent);
//       actions.changeQnaFile(data.qnaFile);
//       actions.changeQnaAnswer(data.qnaAnswer);
//       actions.changeQnaState(data.qnaState);
//       actions.changeQnaAuthor(data.qnaAuthor);
//       actions.changeAnswerAuthor(data.answerAuthor);
//     } catch (error) {
//       console.error('QNA fetch error:', error);
//     }
//   };

//   // Q&A 게시글을 생성하는 함수
//   const createQna = async (qnaData) => {
//     try {
//       const response = await axios.post('/api/qna', qnaData);  // API 호출 (예시: Q&A 게시글 생성)
//       const data = response.data;

//       // 생성된 Q&A 데이터로 상태 업데이트
//       actions.changeQnaUid(data.qnaUid);
//       actions.changeQnaId(data.qnaId);
//       actions.changeQnaTitle(data.qnaTitle);
//       actions.changeQnaCreatedAt(data.qnaCreatedAt);
//       actions.changeQnaViewCount(data.qnaViewCount);
//       actions.changeQnaPassword(data.qnaPassword);
//       actions.changeQnaContent(data.qnaContent);
//       actions.changeQnaFile(data.qnaFile);
//       actions.changeQnaAnswer(data.qnaAnswer);
//       actions.changeQnaState(data.qnaState);
//       actions.changeQnaAuthor(data.qnaAuthor);
//       actions.changeAnswerAuthor(data.answerAuthor);
//     } catch (error) {
//       console.error('QNA create error:', error);
//     }
//   };

//   // Q&A 게시글을 업데이트하는 함수
//   const updateQna = async (qnaId, updatedData) => {
//     try {
//       const response = await axios.put(`/api/qna/${qnaId}`, updatedData);  // API 호출 (예시: Q&A 게시글 수정)
//       const data = response.data;

//       // 업데이트된 Q&A 데이터로 상태 업데이트
//       actions.changeQnaUid(data.qnaUid);
//       actions.changeQnaId(data.qnaId);
//       actions.changeQnaTitle(data.qnaTitle);
//       actions.changeQnaCreatedAt(data.qnaCreatedAt);
//       actions.changeQnaViewCount(data.qnaViewCount);
//       actions.changeQnaPassword(data.qnaPassword);
//       actions.changeQnaContent(data.qnaContent);
//       actions.changeQnaFile(data.qnaFile);
//       actions.changeQnaAnswer(data.qnaAnswer);
//       actions.changeQnaState(data.qnaState);
//       actions.changeQnaAuthor(data.qnaAuthor);
//       actions.changeAnswerAuthor(data.answerAuthor);
//     } catch (error) {
//       console.error('QNA update error:', error);
//     }
//   };

//   // Q&A 게시글을 삭제하는 함수
//   const deleteQna = async (qnaId) => {
//     try {
//       await axios.delete(`/api/qna/${qnaId}`);  // API 호출 (예시: Q&A 게시글 삭제)
//       actions.resetState();  // 상태 초기화
//     } catch (error) {
//       console.error('QNA delete error:', error);
//     }
//   };

//   return {
//     fetchQnaById,
//     createQna,
//     updateQna,
//     deleteQna
//   };
// };

// export default useQnaService;
