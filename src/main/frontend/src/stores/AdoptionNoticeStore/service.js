import axios from 'axios';
// API 기본 설정
const apiClient = axios.create({
    baseURL: 'http://localhost:5173', 
    timeout: 5000, // 요청 타임아웃 설정
    headers: { 'Content-Type': 'application/json' }
});

export const getNotices = () => apiClient.get('/adoption');
export const addNotice = (item) => apiClient.post(``);
export const updateNoticeAction = (item) => apiClient.put(``);
export const deleteNoticeAction = (id) => apiClient.delete(``);