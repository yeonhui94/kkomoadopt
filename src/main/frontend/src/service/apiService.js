import axios from "axios";

// API 기본 설정
const apiClient = axios.create({
    baseURL: 'http://localhost:8080', // 백엔드 서버의 URL
    timeout: 10000,  // 요청 타임아웃 설정
    headers: { 'Content-Type': 'application/json' }
  });

  const apiClientForm = axios.create({
    baseURL: 'http://localhost:8080', // 백엔드 서버의 URL
    timeout: 10000,  // 요청 타임아웃 설정
    headers: { 'Content-Type': 'multipart/form-data' }
  });



// 입양 게시판 관련 API
// 전체, 카테고리별 입양 게시물 조회(12개)
export const getAdoptionPostList = (page, noticeCategory, sortBy, sortOrder) => apiClient.get('/api/adopt/list', {
  params: {
    page: page - 1,
    noticeCategory: noticeCategory,  // 'ALL', 'DOG', 'CAT', 'OTHERS'
    sortBy: sortBy,                 // 'euthanasiaDate', 'noticeCreatedAt', noticeViewCount
    sortOrder: sortOrder            // 'asc', 'desc'
  }
});

// 전체, 카테고리별 입양 게시물 조회(8개)
export const getAdoptionAdminList = (page, noticeCategory, sortBy) => apiClient.get('/api/adopt/list8', {
  params: {
    page: page - 1,
    noticeCategory: noticeCategory,  // 'ALL', 'DOG', 'CAT', 'OTHERS'
    sortBy: sortBy,                 // 'euthanasiaDate', 'noticeCreatedAt', noticeViewCount
  }
});

export const getUserList = (page,query) => apiClient.get('api/user/user/list', {
  params : {
    page : page,
    query : query
  }
})

export const changeMyScrap = (adoptNum) => apiClient.post('/api/user/scrap/save', {
  adoptNum: adoptNum
})

// 마이페이지 입양데이터 전체 불러오기
export const getMypageAdoptList = () => apiClient.get('/api/adopt/mypage');

// 2. 전체, 카테고리별 품종 검색어 적용(12개)
export const getSearchAdoptionPostList = (page, noticeCategory,sortBy,  sortOrder, search) => apiClient.get('/api/adopt/search', {
  params: {
    page: page ,
    noticeCategory: noticeCategory,  // 'ALL', 'DOG', 'CAT', 'OTHERS'
    search : search ,
    sortBy: sortBy,                 // 'euthanasiaDate', 'noticeCreatedAt', noticeViewCount
    sortOrder: sortOrder            // 'asc', 'desc'
  }
});

// 2. 전체, 카테고리별 품종 검색어 적용(8개)
export const getSearchAdoptionAdminList = (page, noticeCategory, sortBy, search) => apiClient.get('/api/adopt/search', {
  params: {
    page: page ,
    noticeCategory: noticeCategory,  // 'ALL', 'DOG', 'CAT', 'OTHERS'
    search : search ,
    sortBy: sortBy,                 // 'euthanasiaDate', 'noticeCreatedAt', noticeViewCount
  }
});

// 3. 특정 입양 게시물 상세 조회
export const getAdoptionPostDetail = (announcementNum) => apiClient.get(`/api/adopt/${announcementNum}`);

// 3. 입양 게시물 생성
export const createAdoptionPost = (adoptionData) => apiClientForm.post('/api/adopt/save', adoptionData);

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
//export const registerUser = (userData) => apiClient.post('/api/user/register', userData);
export const registerUser = (RegisterUserDTO) => apiClient.post('/api/user/register', RegisterUserDTO);

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



// 아직 백이랑 맞추지 않음

// 1. 댓글 목록 조회
export const getComments = () => apiClient.get('/api/comments');


// 2. 페이지 별, 특정 댓글 상세 조회
export const getCommentDetail = (commentId) => apiClient.get(`/api/comments/${commentId}`);

// 3. 댓글 생성
export const createCommentAPI = (commentData) => apiClient.post('/api/comments', commentData);

// 4. 댓글 수정
export const updateCommentAPI = (commentId, updatedData) => apiClient.patch(`/api/comments/${commentId}`, updatedData);

// 5. 댓글 삭제
export const deleteCommentAPI = (commentId) => apiClient.delete(`/api/comments/${commentId}`);


// 1. 전체 커뮤니티 게시물 조회 (admin 글관리)
export const getCommunityPosts = () => apiClient.get('/api/community/posts');

// 2. 카테고리별 게시물 조회
export const getCommunityPostsByCategory = (category) => apiClient.get(`/api/community/posts?category=${category}`)

// 2. 특정 커뮤니티 게시물 상세 조회

// 3. 특정 커뮤니티 게시물 상세 조회
export const getCommunityPostDetail = (postUid) => apiClient.get(`/api/community/posts/${postUid}`);

// 4. 커뮤니티 게시물 생성
export const createCommunityPost = async (postData) => {
  try {
    const response = await apiClientForm.post('/api/community/posts', postData, {
      headers: {
        'Content-Type': 'application/json',  // JSON으로 보내는 데이터임을 명시
      },
    });
    console.log('게시물 작성 성공:', response.data);
  } catch (error) {
    console.error('게시물 작성 실패:', error);
  }
};
// 5. 커뮤니티 게시물 수정
export const updateCommunityPost = (postUid, updatedData) => apiClient.patch(`/api/community/posts/${postUid}`, updatedData);

// 6. 커뮤니티 게시물 삭제
export const deleteCommunityPost = (postUid) => apiClient.delete(`/api/community/posts/${postUid}`);


// QNA 관련 API 요청 메서드 추가

// 1. 전체 QNA 게시물 조회
export const getQnaPosts = (page,size) => apiClient.get('/api/qna/posts', {
  params : {
    page : page,
    size : size
  }
});

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
export const getVisitRequests = () => apiClient.get('../../../');

// 2. 특정 방문 요청 상세 조회
export const getVisitRequestDetail = (requestUid) => apiClient.get(`/api/visit-requests/${requestUid}`);

// 3. 방문 요청 생성
export const createVisitRequest = (visitRequestData) => apiClient.post('/api/visit-requests', visitRequestData);

// 4. 방문 요청 수정
export const updateVisitRequest = (requestUid, updatedData) => apiClient.patch(`/api/visit-requests/${requestUid}`, updatedData);

// 5. 방문 요청 삭제
export const deleteVisitRequest = (requestUid) => apiClient.delete(`/api/visit-requests/${requestUid}`);



export default apiClient;