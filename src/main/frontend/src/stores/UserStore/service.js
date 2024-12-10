import axios from "axios";

// API 클라이언트 설정
const apiClient = axios.create({
  baseURL: "localhost:5173", 
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

// 사용자 정보 가져오기
export const fetchUserInfo = async (setUserInfo, userId) => {
  try {
    // const response = await apiClient.get('/api/user/login');
    // const userInfo = response.data;

    // // 사용자 정보 상태에 반영
    // setUserInfo(userInfo);
    // return userInfo; // 가져온 사용자 정보 반환
  } catch (error) {
    console.error("Failed to fetch user info:", error);
    throw error;
  }
};

// 사용자 정보 수정
export const updateUserInfo = async (setUserInfo, userId, updatedData) => {
  try {
    const response = await apiClient.put(`/users/${userId}`, updatedData);
    const updatedUser = response.data;

    // 수정된 사용자 정보 상태에 반영
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      ...updatedUser,
    }));
    return updatedUser;
  } catch (error) {
    console.error("Failed to update user info:", error);
    throw error;
  }
};

// 사용자 탈퇴
export const deleteUser = async (setUserInfo, userId) => {
  try {
    await apiClient.delete(`/users/${userId}`);

    // 사용자 삭제 후 상태 초기화
    setUserInfo(null); // 또는 상태를 초기값으로 설정
    return true; // 삭제 성공
  } catch (error) {
    console.error("Failed to delete user:", error);
    throw error;
  }
};

// 비밀번호 변경
export const changePassword = async (userId, newPassword) => {
  try {
    const response = await apiClient.put(`/users/${userId}/password`, { newPassword });

    const updatedUser = response.data;
    return updatedUser;
  } catch (error) {
    console.error("Failed to change password:", error);
    throw error;
  }
};

// 사용자 권한 변경
export const changeUserAuthority = async (userId, newAuthority) => {
  try {
    const response = await apiClient.put(`/users/${userId}/authority`, { authority: newAuthority });

    const updatedUser = response.data;
    return updatedUser;
  } catch (error) {
    console.error("Failed to change user authority:", error);
    throw error;
  }
};
