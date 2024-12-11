import axios from "axios";

const apiClient = axios.create({
    baseURL : 'http://localhost:8080',
    timeout: 10000,
    headers : {'Content-Type' : 'application/json'}
});

// 입양 게시판 관련 API

// 1. 전체 입양 게시물 조회
// export const fetchAdoptionPosts = () => apiClient.get('/api/adoption/posts');
export const getAdoptionPosts = () => apiClient.get('/api/adoption/posts');

// 2. 특정 입양 게시물 상세 조회
export const getAdoptionPostDetail = (noticeUid) => apiClient.get(`/api/adoption/posts/${noticeUid}`);
// export const fetchAdoptionPostDetail = (noticeUid) => apiClient.get(`/api/adoption/posts/${noticeUid}`);

// // export const fetchAdoptionPostsByCategory = (category) => apiClient.get(`/api/adoption/posts/category/${category}`);
// export const getAdoptionPostsByCategory = (category) => apiClient.get(`/api/adoption/posts/category/${category}`);

// 4. 입양 게시물 생성
export const createAdoptionPost = (adoptionData) => apiClient.post('/api/adoption/posts', adoptionData);

// 5. 입양 게시물 수정
export const updateAdoptionPost = (noticeUid, updatedData) => apiClient.patch(`/api/adoption/posts/${noticeUid}`, updatedData);

// 6. 입양 게시물 삭제
export const deleteAdoptionPost = (noticeUid) => apiClient.delete(`/api/adoption/posts/${noticeUid}`);

// // 7. 입양 게시물 이미지 업로드
// export const uploadAdoptionPostImage = (imageData) => apiClient.post('/api/adoption/posts/upload-image', imageData);


// 댓글 관련 API 요청 메서드

// 1. 댓글 목록 조회
export const getComments = () => apiClient.get('/api/comments');

// 2. 특정 댓글 상세 조회
export const getCommentDetail = (commentId) => apiClient.get(`/api/comments/${commentId}`);

// 3. 댓글 생성
export const createCommentAPI = (commentData) => apiClient.post('/api/comments', commentData);

// 4. 댓글 수정
export const updateCommentAPI = (commentId, updatedData) => apiClient.patch(`/api/comments/${commentId}`, updatedData);

// 5. 댓글 삭제
export const deleteCommentAPI = (commentId) => apiClient.delete(`/api/comments/${commentId}`);


// 1. 전체 커뮤니티 게시물 조회
export const getCommunityPosts = () => apiClient.get('/api/community/posts');

// 2. 특정 커뮤니티 게시물 상세 조회
export const getCommunityPostDetail = (postUid) => apiClient.get(`/api/community/posts/${postUid}`);

// 3. 커뮤니티 게시물 생성
export const createCommunityPost = (postData) => apiClient.post('/api/community/posts', postData);

// 4. 커뮤니티 게시물 수정
export const updateCommunityPost = (postUid, updatedData) => apiClient.patch(`/api/community/posts/${postUid}`, updatedData);

// 5. 커뮤니티 게시물 삭제
export const deleteCommunityPost = (postUid) => apiClient.delete(`/api/community/posts/${postUid}`);


// QNA 관련 API 요청 메서드 추가

// 1. 전체 QNA 게시물 조회
export const getQnaPosts = () => apiClient.get('/api/qna/posts');

// 2. 특정 QNA 게시물 상세 조회
export const getQnaPostDetail = (qnaUid) => apiClient.get(`/api/qna/posts/${qnaUid}`);

// 3. QNA 게시물 생성
export const createQnaPost = (qnaData) => apiClient.post('/api/qna/posts', qnaData);

// 4. QNA 게시물 수정
export const updateQnaPost = (qnaUid, updatedData) => apiClient.patch(`/api/qna/posts/${qnaUid}`, updatedData);

// 5. QNA 게시물 삭제
export const deleteQnaPost = (qnaUid) => apiClient.delete(`/api/qna/posts/${qnaUid}`);


// 방문 요청 관련 API 요청 메서드 추가

// 1. 전체 방문 요청 조회
export const getVisitRequests = () => apiClient.get('/api/visit-requests');

// 2. 특정 방문 요청 상세 조회
export const getVisitRequestDetail = (requestUid) => apiClient.get(`/api/visit-requests/${requestUid}`);

// 3. 방문 요청 생성
export const createVisitRequest = (visitRequestData) => apiClient.post('/api/visit-requests', visitRequestData);

// 4. 방문 요청 수정
export const updateVisitRequest = (requestUid, updatedData) => apiClient.patch(`/api/visit-requests/${requestUid}`, updatedData);

// 5. 방문 요청 삭제
export const deleteVisitRequest = (requestUid) => apiClient.delete(`/api/visit-requests/${requestUid}`);


export default apiClient;