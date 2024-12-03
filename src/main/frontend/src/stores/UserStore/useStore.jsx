// useStore.jsx
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
    resetState
} from "./action";

export const useStore = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const actions = {
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
        resetState: () => dispatch(resetState())
    };

    return { state, actions };
};
