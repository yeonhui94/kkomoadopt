import axios from 'axios';

// API 기본 설정
const apiClient = axios.create({
    baseURL: 'http://localhost:5173', // API의 기본 URL
    timeout: 5000,  // 요청 타임아웃 설정
    headers: { 'Content-Type': 'application/json' }
});

// 게시물 목록 불러오기
export const fetchNotices = () => apiClient.get('/adoption');

// 게시물 추가
export const createNotice = (noticeData) => apiClient.post('/adoption', noticeData);

// 게시물 수정
export const updateNotice = (announcementNum, updatedData) => apiClient.put(`/adoption/${announcementNum}`, updatedData);

// 게시물 삭제
export const deleteNotice = (announcementNum) => apiClient.delete(`/adoption/${announcementNum}`);

// 게시물 상세 조회 (announcementNum 사용)
export const fetchNoticeByUid = (announcementNum) => apiClient.get(`/adoption/${announcementNum}`);

// 카테고리별 게시물 조회
export const fetchNoticesByCategory = (category) => apiClient.get(`/adoption/category/${category}`);

// 이미지 업로드
export const uploadNoticeImage = (formData) => apiClient.post('/adoption/upload', formData);

