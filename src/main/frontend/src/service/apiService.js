import axios from "axios";

// API 기본 설정
const apiClient = axios.create({
    baseURL: 'http://localhost:8080', // 백엔드 서버의 URL
    timeout: 10000,  // 요청 타임아웃 설정
    headers: { 'Content-Type': 'application/json' }
  });
  


// 입양 게시판 관련 API

// 1. 전체 입양 게시물 조회
export const getAdoptionPosts = (pageNum) => apiClient.get(`/api/adopt/${pageNum}`);

// 2. 특정 입양 게시물 상세 조회
export const getAdoptionPostDetail = (noticeUid) => apiClient.get(`/api/adopt/${noticeUid}`);

// 3. 입양 게시물 생성
export const createAdoptionPost = (adoptionData) => apiClient.post('/api/adoption/posts', adoptionData);

// 5. 입양 게시물 수정
export const updateAdoptionPost = (noticeUid, updatedData) => apiClient.patch(`/api/adoption/posts/${noticeUid}`, updatedData);

// 6. 입양 게시물 삭제
export const deleteAdoptionPost = (noticeUid) => apiClient.delete(`/api/adoption/posts/${noticeUid}`);

// // 7. 입양 게시물 이미지 업로드
// export const uploadAdoptionPostImage = (imageData) => apiClient.post('/api/adoption/posts/upload-image', imageData);

// 1. 마이 페이지 정보 가져오기
export const getMyPageInfo = () => apiClient.get('/api/mypage/user');

// 2. 특정 사용자 프로필 정보 가져오기
export const getUserProfile = (userId) => apiClient.get(`/api/mypage/user/${userId}/change-profile`);

// 3. 사용자 프로필 수정하기
export const updateUserProfile = (userId, profileData) => apiClient.patch(`/api/mypage/user/${userId}/change-profile`, profileData);

// 4. 회원 가입
export const registerUser = (userData) => apiClient.post('/api/auth/register', userData);

// 5. 로그인
export const loginUser = (email, password) => apiClient.post('/api/user/login', { email, password });

// 6. 로그아웃
export const logout = () => apiClient.post('/api/user/logout');

// 7. 유저 삭제 (회원 탈퇴)
export const deleteUser = (userId) => apiClient.delete(`/api/mypage/user/${userId}`);

// 8. 비밀번호 변경 요청
export const changeUserPassword = (newPassword) => apiClient.patch('/api/mypage/user/change-password', { newPassword });

// 9. 이메일 찾기 (이름과 전화번호로)
export const findUserId = (name, phoneNumber) => apiClient.post('/api/auth/find-email', { name, phoneNumber });

// 10. 비밀번호 검증
export const verifyPassword = (password) => apiClient.post('/api/mypage/user/verify-password', { password });

// 1. 프로필 이미지 업로드
export const uploadProfileImage = (imageData) => apiClient.post('/api/mypage/user/upload-image', imageData);


export default apiClient;