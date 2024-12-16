import { useReducer } from "react";
import { initialState, reducer } from "./reducer";
import {
    changeUserId,
    changeEmail,
    changeName,
    changePhoneNumber,
    changeNickname,
    changePassword,
    changeUserCreate,
    changeUserImgUrl,
    changeProfileText,
    changeUserLastLogin,
    changeIsBlacklisted,
    changeProvider,
    changeAuthority,
    resetState,
    login,
    loginSuccess,
    logoutUser,
    register,
    getUserListAction,
    saveBlackListAction,
    delBlackListAction,
    getBlackListAction
//     changePasswordSuccess,
//     verifyPassword
} from "./action";

export const useStore = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const actions = {
        // 사용자 정보 변경
        changeUserId: (userId) => dispatch(changeUserId(userId)),
        changeEmail: (email) => dispatch(changeEmail(email)),
        changeName: (name) => dispatch(changeName(name)),
        changePhoneNumber: (phoneNumber) => dispatch(changePhoneNumber(phoneNumber)),
        changeNickname: (nickname) => dispatch(changeNickname(nickname)),
        changePassword: (password) => dispatch(changePassword(password)),
        changeUserCreate: (userCreate) => dispatch(changeUserCreate(userCreate)),
        changeUserImgUrl: (userImgUrl) => dispatch(changeUserImgUrl(userImgUrl)),
        changeProfileText: (profileText) => dispatch(changeProfileText(profileText)),
        changeUserLastLogin: (userLastLogin) => dispatch(changeUserLastLogin(userLastLogin)),
        changeIsBlacklisted: (isBlacklisted) => dispatch(changeIsBlacklisted(isBlacklisted)),
        changeProvider: (provider) => dispatch(changeProvider(provider)),
        changeAuthority: (authority) => dispatch(changeAuthority(authority)),
        saveBlackList : (blackInfo) => saveBlackListAction(blackInfo)(dispatch),
        delBlackList : (blackInfo) => delBlackListAction(blackInfo)(dispatch),
        // 로그인 상태 관리
        login: (email, password) => login(email, password)(dispatch),
        loginSuccess: (userData) => dispatch(loginSuccess(userData)),
        logoutUser: () => dispatch(logoutUser()),
        register: (RegisterUserDTO) => register(RegisterUserDTO)(dispatch),
        getUserList: (page,query) => getUserListAction(page,query)(dispatch),
        getBlackList: (page,query) => getBlackListAction(page,query)(dispatch),
//         register:(userInDTO) => register(userInDTO)(dispatch),
        // 비밀번호 변경 및 검증
        changePasswordSuccess: (newPassword) => dispatch(changePasswordSuccess(newPassword)),
        verifyPassword: (password) => dispatch(verifyPassword(password)),

        // 상태 초기화
        resetState: () => dispatch(resetState())
    };

    return { state, actions };
};
