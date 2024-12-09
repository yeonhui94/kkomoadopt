import axios from 'axios';

// API 기본 설정
const apiClient = axios.create({
    baseURL: 'http://localhost:5173', 
    timeout: 5000, // 요청 타임아웃 설정
    headers: { 'Content-Type': 'application/json' }
});

// 입양 가능한 동물 게시판의 데이터를 처리하는 함수들

// 게시물 목록 불러오기
export const fetchNotices = async () => {
    try {
        const response = await apiClient.get('/data/adoptNoticeAll.json'); // 게시물 목록을 가져오는 GET 요청
        return response.data;
    } catch (error) {
        console.error('Failed to fetch notices', error);
        throw error; // 오류 처리
    }
};

// 게시물 추가
export const createNotice = async (noticeData) => {
    try {
        const response = await apiClient.post('/notices', noticeData); // 게시물 데이터를 서버에 POST 요청
        return response.data;
    } catch (error) {
        console.error('Failed to create notice', error);
        throw error;
    }
};

// 게시물 수정
export const updateNotice = async (noticeUid, updatedData) => {
    try {
        const response = await apiClient.put(`/notices/${noticeUid}`, updatedData); // 특정 게시물을 수정하는 PUT 요청
        return response.data;
    } catch (error) {
        console.error('Failed to update notice', error);
        throw error;
    }
};


// 게시물 삭제
export const deleteNotice = async (noticeUid) => {
    try {
        await apiClient.delete(`/notices/${noticeUid}`); // 게시물을 삭제하는 DELETE 요청
    } catch (error) {
        console.error('Failed to delete notice', error);
        throw error;
    }
};

// 특정 게시물 상세 보기
export const fetchNoticeByUid = async (noticeUid) => {
    try {
        const response = await apiClient.get(`/notices/${noticeUid}`); // 특정 게시물의 상세 정보를 가져오는 GET 요청
        return response.data;
    } catch (error) {
        console.error('Failed to fetch notice by UID', error);
        throw error;
    }
};

// 특정 카테고리의 게시물 불러오기 ?
export const fetchNoticesByCategory = async (category) => {
    try {
        const response = await apiClient.get(`/notices/category/${category}`); // 카테고리별 게시물을 가져오는 GET 요청
        return response.data;
    } catch (error) {
        console.error('Failed to fetch notices by category', error);
        throw error;
    }
};

// 이미지 업로드 (예시, 실제 업로드 URL 및 파라미터에 맞게 수정)
export const uploadNoticeImage = async (formData) => {
    try {
        const response = await apiClient.post('/notices/upload-image', formData, {
            headers: {
                'Content-Type': 'multipart/form-data' // 파일 업로드를 위한 헤더 설정
            }
        });
        return response.data;
    } catch (error) {
        console.error('Failed to upload image', error);
        throw error;
    }
};
