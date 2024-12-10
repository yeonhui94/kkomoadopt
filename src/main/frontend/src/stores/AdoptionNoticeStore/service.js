import axios from 'axios';

// API 기본 설정
const apiClientJson = axios.create({
  baseURL: 'http://localhost:8080', // 백엔드 서버의 URL
  timeout: 10000,  // 요청 타임아웃 설정
  headers: { 'Content-Type': 'application/json' }
});

const apiClientFormData = axios.create({
  baseURL: 'http://localhost:8080', // 백엔드 서버의 URL
  timeout: 10000,  // 요청 타임아웃 설정
});

// 입양공지 API
// 입양공지 전체 목록 불러오기
export const getAllNotices = (pageNum) => apiClientJson.get(`/api/adopt/${pageNum}`);

// 게시물 추가
export const createNotice = (noticeData) => apiClient.post('/adoption', noticeData);

// 게시물 수정
export const updateNotice = (noticeUid, updatedData) => apiClient.put(`/adoption/${noticeUid}`, updatedData);

// 게시물 삭제
export const deleteNotice = (noticeUid) => apiClient.delete(`/adoption/${noticeUid}`);

// 게시물 상세 조회 (noticeUid 사용)
export const fetchNoticeByUid = (noticeUid) => apiClient.get(`/adoption/${noticeUid}`);

// 카테고리별 게시물 조회
export const fetchNoticesByCategory = (category) => apiClient.get(`/adoption/category/${category}`);

// 이미지 업로드
export const uploadNoticeImage = (formData) => apiClient.post('/adoption/upload', formData);
