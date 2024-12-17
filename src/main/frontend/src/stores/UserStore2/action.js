import {
    getMyPageInfo,
    getUserProfile,
    updateUserProfile,
    registerUser,
    loginUser,
    logout,
    deleteUser,
    findUserId,
    changeUserPassword,
    getUserList,
    // saveBlackList,
    // delBlackList,
    // getBlackList
} from '../../service/apiService'; // apiService에서 함수 import

// action.js
export const CHANGE_USER_ID = "CHANGE_USER_ID";
export const CHANGE_EMAIL = "CHANGE_EMAIL";
export const CHANGE_NAME = "CHANGE_NAME";
export const CHANGE_PHONE_NUMBER = "CHANGE_PHONE_NUMBER";
export const CHANGE_NICKNAME = "CHANGE_NICKNAME";
export const CHANGE_PASSWORD = "CHANGE_PASSWORD";
export const CHANGE_USER_CREATE = "CHANGE_USER_CREATE";
export const CHANGE_USER_IMG_URL = "CHANGE_USER_IMG_URL";
export const CHANGE_PROFILE_TEXT = "CHANGE_PROFILE_TEXT";
export const CHANGE_USER_LAST_LOGIN = "CHANGE_USER_LAST_LOGIN";
export const CHANGE_IS_BLACKLISTED = "CHANGE_IS_BLACKLISTED";
export const CHANGE_SCRAPS = "CHANGE_SCRAPS"
export const CHANGE_PROVIDER = "CHANGE_PROVIDER";
export const CHANGE_AUTHORITY = "CHANGE_AUTHORITY";
export const RESET_STATE = "RESET_STATE";
//스크랩
export const ADD_SCRAP = "ADD_SCRAP";
export const REMOVE_SCRAP = "REMOVE_SCRAP";
export const GET_USER_SCRAP = "GET_USER_SCRAP";


// 액션 생성자
export const changeUserId = (userId) => ({ type: CHANGE_USER_ID, payload: userId });
export const changeEmail = (email) => ({ type: CHANGE_EMAIL, payload: email });
export const changeName = (name) => ({ type: CHANGE_NAME, payload: name });
export const changePhoneNumber = (phoneNumber) => ({ type: CHANGE_PHONE_NUMBER, payload: phoneNumber });
export const changeNickname = (nickname) => ({ type: CHANGE_NICKNAME, payload: nickname });
export const changePassword = (password) => ({ type: CHANGE_PASSWORD, payload: password });
export const changeUserCreate = (userCreate) => ({ type: CHANGE_USER_CREATE, payload: userCreate });
export const changeUserImgUrl = (userImgUrl) => ({ type: CHANGE_USER_IMG_URL, payload: userImgUrl });
export const changeProfileText = (profileText) => ({ type: CHANGE_PROFILE_TEXT, payload: profileText });
export const changeUserLastLogin = (userLastLogin) => ({ type: CHANGE_USER_LAST_LOGIN, payload: userLastLogin });
export const changeIsBlacklisted = (isBlacklisted) => ({ type: CHANGE_IS_BLACKLISTED, payload: isBlacklisted });
export const changeScraps = (scraps) => ({ type: CHANGE_SCRAPS, payload: scraps });
export const changeProvider = (provider) => ({ type: CHANGE_PROVIDER, payload: provider });
export const changeAuthority = (authority) => ({ type: CHANGE_AUTHORITY, payload: authority });
export const resetState = () => ({ type: RESET_STATE });
//스크랩
export const addScrap = (noticeUid) => ({
    type: ADD_SCRAP,
    payload: noticeUid
});
export const removeScrap = (noticeUid) => ({
    type: REMOVE_SCRAP,
    payload: noticeUid
});
export const getUserScraps = (scraps) => ({
    type: GET_USER_SCRAP,
    payload: scraps
});

export const READ_USER_LIST = "READ_USER_LIST";
export const READ_USER = "READ_USER";
export const CREATE_USER = "CREATE_USER";
export const UPDATE_USER = "UPDATE_USER";
export const DELETE_USER = "DELETE_USER";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT_USER = "LOGOUT_USER";
export const CHANGE_PASSWORD_SUCCESS = 'CHANGE_PASSWORD_SUCCESS';
export const VERIFY_PASSWORD = 'VERIFY_PASSWORD' // 비밀번호 검증

//export const createUser = (userData) => ({
//    type: CREATE_USER,
//    payload: userData
//});

export const readUser = (userId) => ({
    type: READ_USER,
    payload: userId
});

export const updateUser = (userId, updatedData) => ({
    type: UPDATE_USER,
    payload: { userId, updatedData }
});

//export const deleteUser = (userId) => ({
//    type: DELETE_USER,
//    payload: userId
//});

// 마이 페이지 정보 가져오기
export const fetchMyPageInfo = () => async (dispatch) => {
    try {
        const response = await getMyPageInfo();
        dispatch({
            type: READ_USER,
            payload: response.data
        }); // 상태에 전체 데이터 업데이트
    } catch (error) {
        console.error('마이페이지 정보 가져오기 실패:', error);
    }
};

// 특정 사용자 프로필 가져오기
export const fetchUserProfile = (userId) => async(dispatch) => {
    try {
        const response = await getUserProfile(userId);
        dispatch({
              type: READ_USER,
              payload: response.data
        });
    } catch (error) {
        console.error('사용자 프로필 가져오기 실패:', error);
    }
};
// 특정 사용자 프로필 가져오기
export const getUserListAction = (page,query) => async(dispatch) => {
    try {
        const response = await getUserList(page,query);
        dispatch({
              type: READ_USER_LIST,
              payload: response.data
        });
    } catch (error) {
        console.error('사용자 리스트 가져오기 실패:', error);
    }
};

/**
 * 
 * @param {*} page 
 * @param {*} query 
 * @returns 
 */
export const getBlackListAction = (page,query) => async(dispatch) => {
    try {
        const response = await getBlackList(page,query);
        dispatch({
              type: READ_USER_LIST,
              payload: response.data
        });
    } catch (error) {
        console.error('사용자 리스트 가져오기 실패:', error);
    }
};

//사용자 프로필 업데이트
export const updateProfile = (userId, profileData) => async(dispatch) => {
    try {
        const response = await updateUserProfile(userId, profileData);
        console.log('프로필 업데이트 성공:', response.data);
        dispatch({
                type: UPDATE_USER,
                payload: response.data
        }); // 업데이트 후 최신 정보 가져오기
    } catch (error) {
        console.error('프로필 업데이트 실패:', error);
    }
};

// 회원 가입
export const register = (userData) => async(dispatch) => {
    try {
        const response = await registerUser(userData);
        console.log('회원가입 성공:', response.data);
        dispatch({ type: 'CREATE_USER', payload: response.data });
    } catch (error) {
        console.error('회원가입 실패:', error);
    }
};


// 로그인 및 로그 아웃

export const loginSuccess = (userData) => ({
    type: LOGIN_SUCCESS,
    payload: userData
});

// 로그인 액션 수정
export const login = (email, password) => async (dispatch) => {
  try {
    const response = await loginUser(email, password);
    console.log("로그인 응답:", response);
    console.log("로그인 응답 데이터:", response.data);
    console.log("닉네임",response.data.nickname);
    if (response.status === 200) {
      const userData = {
        userId: response.data.userId || "",
        email: response.data.email || "",
        name: response.data.name || "",
        phoneNumber: response.data.phoneNumber || "",
        nickname: response.data.nickname || "",
        password: response.data.password || "",
        userCreate: response.data.userCreate || "",
        userImgUrl: response.data.userImgUrl || "",
        profileText: response.data.profileText || "",
        userLastLogin: response.data.userLastLogin || "",
        isBlacklisted: response.data.isBlacklisted || false,
        authority: response.data.authority || "USER",
        blacklists: response.data.blacklists || [],
        scraps: response.data.scraps || [],
      };

      // 로그인 후 유저 데이터를 로컬 스토리지에 저장
      localStorage.setItem("user", JSON.stringify(userData));

      // 상태에 로그인 성공한 유저 데이터를 저장
      dispatch({ type: LOGIN_SUCCESS, payload: userData });

    }
  } catch (error) {
    if (error.response && error.response.status === 401) {
      alert("이메일 또는 비밀번호가 잘못되었습니다.");
    } else {
      alert("알 수 없는 오류가 발생했습니다.");
    }
    dispatch({ type: LOGIN_FAILED, payload: "로그인에 실패했습니다. 다시 시도해주세요." });
  }
};


// 로그인 액션 수정
export const saveBlackListAction = (blackInfo) => async (dispatch) => {
  try {
    return await saveBlackList(blackInfo);
    
    } catch (error) {
        console.error(':', error);
    }
};

// 로그인 액션 수정
export const delBlackListAction = (blackInfo) => async (dispatch) => {
    try {
      return await delBlackList(blackInfo);
      
      } catch (error) {
          console.error(':', error);
      }
  };
// 로그아웃
export const logoutUser = () => async (dispatch) => {
    try {
        await logout();
        dispatch({ type: LOGOUT_USER });  // LOGOUT_USER 액션을 디스패치
        console.log('로그아웃 성공');
    } catch (error) {
        console.error('로그아웃 실패:', error);
    }
};

// 사용자 관리 로직
// 회원 탈퇴
export const removeUser = (userId) => async(dispatch) => {
    try {
        const response = await deleteUser(userId);
        console.log('회원 탈퇴 성공');
        dispatch({ type : 'DELETE_USER', payload : response.data}); // 상태 초기화
    } catch (error) {
        console.error('회원 탈퇴 실패:', error);
    }
};

// 이름과 전화번호로 이메일 찾기
export const findEmail = (name, phoneNumber) => async(dispatch) => {
    try {
        const response = await findUserId(name, phoneNumber);
        console.log('이메일 찾기 성공:', response.data);
        dispatch({ type: 'FIND_EMAIL_SUCCESS', payload: response.data });
    } catch (error) {
        console.error('이메일 찾기 실패:', error);
    }
};

// 비밀번호 재설정 및 변경
// export const resetUserPassword = (email) => async(dispatch) => {
//     try {
//         await resetPassword(email);
//         console.log('비밀번호 재설정 요청 성공');
//         dispatch({ type: 'RESET_PASSWORD_REQUEST_SUCCESS' });
//     } catch (error) {
//         console.error('비밀번호 재설정 요청 실패:', error);
//     }
// };

export const updateUserPassword = (newPassword) => async(dispatch) => {
    try {
        await changeUserPassword( newPassword );
        console.log('비밀번호 변경 성공');
        dispatch({ type: 'CHANGE_PASSWORD_SUCCESS' });
    } catch (error) {
        console.error('비밀번호 변경 실패:', error);
    }
};

// 이미지 업로드
export const uploadProfileImage = (imageData) => async(dispatch) => {
    try {
        await uploadProfileImage(imageData);
        dispatch({ type : 'UPDATE_USER', payload : response.data}); // 상태에 업로드된 이미지 URL 저장
        console.log('이미지 업로드 성공:', response.data.url);
    } catch (error) {
        console.error('이미지 업로드 실패:', error);
    }
};