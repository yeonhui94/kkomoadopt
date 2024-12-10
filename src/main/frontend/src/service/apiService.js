import axios from "axios";

const apiClient = axios.create({
    baseURL : 'http://localhost:8080',
    timeout: 10000,
    headers : {'Content-Type' : 'application/json'}
});

// 입양 게시판 관련 API

// 1. 전체 입양 게시물 조회
export const fetchAdoptionPosts = () => apiClient.get('/api/adoption/posts');

// 2. 특정 입양 게시물 상세 조회
export const fetchAdoptionPostDetail = (noticeUid) => apiClient.get(`/api/adoption/posts/${noticeUid}`);

// 3. 입양 게시물 카테고리별 조회
export const fetchAdoptionPostsByCategory = (category) => apiClient.get(`/api/adoption/posts/category/${category}`);

// 4. 입양 게시물 생성
export const createAdoptionPost = (adoptionData) => apiClient.post('/api/adoption/posts', adoptionData);

// 5. 입양 게시물 수정
export const updateAdoptionPost = (noticeUid, updatedData) => apiClient.patch(`/api/adoption/posts/${noticeUid}`, updatedData);

// 6. 입양 게시물 삭제
export const deleteAdoptionPost = (noticeUid) => apiClient.delete(`/api/adoption/posts/${noticeUid}`);

// // 7. 입양 게시물 이미지 업로드
// export const uploadAdoptionPostImage = (imageData) => apiClient.post('/api/adoption/posts/upload-image', imageData);

// export default apiClient;