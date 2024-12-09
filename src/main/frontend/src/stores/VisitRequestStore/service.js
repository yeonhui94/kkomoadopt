import axios from "axios";

// API 클라이언트 설정
const apiClient = axios.create({
  baseURL: "https://your-api-url.com", // 실제 API URL로 변경해야 함
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

// 방문 요청 정보 가져오기
export const fetchVisitRequest = async (setVisitRequest, requestUid) => {
  try {
    const response = await apiClient.get(`/visit-requests/${requestUid}`);
    const visitRequest = response.data;

    // 방문 요청 정보 상태에 반영
    setVisitRequest(visitRequest);
    return visitRequest; // 가져온 방문 요청 정보 반환
  } catch (error) {
    console.error("Failed to fetch visit request:", error);
    throw error;
  }
};

// 방문 요청 생성
export const createVisitRequest = async (setVisitRequest, requestData) => {
  try {
    const response = await apiClient.post("/visit-requests", requestData);
    const createdVisitRequest = response.data;

    // 생성된 방문 요청 정보 상태에 반영
    setVisitRequest((prevVisitRequest) => ({
      ...prevVisitRequest,
      ...createdVisitRequest,
    }));
    return createdVisitRequest;
  } catch (error) {
    console.error("Failed to create visit request:", error);
    throw error;
  }
};

// 방문 요청 수정
export const updateVisitRequest = async (setVisitRequest, requestUid, updatedData) => {
  try {
    const response = await apiClient.put(`/visit-requests/${requestUid}`, updatedData);
    const updatedVisitRequest = response.data;

    // 수정된 방문 요청 정보 상태에 반영
    setVisitRequest((prevVisitRequest) => ({
      ...prevVisitRequest,
      ...updatedVisitRequest,
    }));
    return updatedVisitRequest;
  } catch (error) {
    console.error("Failed to update visit request:", error);
    throw error;
  }
};

// 방문 요청 삭제
export const deleteVisitRequest = async (setVisitRequest, requestUid) => {
  try {
    await apiClient.delete(`/visit-requests/${requestUid}`);

    // 방문 요청 삭제 후 상태에서 해당 요청 제거
    setVisitRequest(null); // 상태 초기화 또는 null 설정
    return true; // 삭제 성공
  } catch (error) {
    console.error("Failed to delete visit request:", error);
    throw error;
  }
};

// 방문 요청 상태 업데이트
export const changeVisitRequestStatus = async (setVisitRequest, requestUid, newStatus) => {
  try {
    const response = await apiClient.put(`/visit-requests/${requestUid}/status`, { status: newStatus });
    const updatedVisitRequest = response.data;

    // 상태 업데이트 후 방문 요청 정보 상태에 반영
    setVisitRequest((prevVisitRequest) => ({
      ...prevVisitRequest,
      status: newStatus,
    }));
    return updatedVisitRequest;
  } catch (error) {
    console.error("Failed to change visit request status:", error);
    throw error;
  }
};
