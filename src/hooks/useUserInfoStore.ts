import {create} from "zustand";
import {
    getEmailFromLocalStorage,
    getTokenFromLocalStorage,
    setEmailToLocalStorage,
    setTokenToLocalStorage
} from "../utils/localStorage.ts";
import {mutateUserLikeList} from "./useUserLikeIdList.ts";
import {LikedCommodityInfoType} from "../utils/type.ts";

interface State {
    email: string;
    token: string;
    signInModalOpen: boolean;
    logoutModalOpen: boolean;
    smallLogoutModalOpen: boolean;
    like: LikedCommodityInfoType[];
    addedToLikeModalOpen: boolean;
    addedToLikeModalTimeId: number;
    showSmallNavBar: boolean;
}

interface Actions {
    setEmail: (email: string) => void;
    setToken: (token: string) => void;
    openSignInModal: () => void;
    closeSignInModal: () => void;
    toggleLogoutModalOpen: () => void;
    openSmallLogoutModal: () => void;
    closeSmallLogoutModal: () => void;
    closeAllModal: () => void;
    clearSignInfo: () => void;
    setLike: (like: LikedCommodityInfoType[]) => void;
    handleClickLike: (id: string, checked: boolean) => void;
    setAddedToLikeModalOpen: (open: boolean) => void;
    setAddedToLikeModalTimeId: (timeId: number) => void;
    setShowSmallNavBar: (showSmallNavBar: boolean) => void;
}


const initialState = {
    email: getEmailFromLocalStorage(),
    token: getTokenFromLocalStorage(),
    signInModalOpen: false,
    smallLogoutModalOpen: false,
    like: [],
    addedToLikeModalOpen: false,
    addedToLikeModalTimeId: 0,
    showSmallNavBar: true,
}

const initialModalState = {
    logoutModalOpen: false,
}


const useUserInfoStore = create<State & Actions>(set => ({
    ...initialState,
    ...initialModalState,
    setEmail: (email: string) => {
        set({email});
        setEmailToLocalStorage(email);
    },
    setToken: (token: string) => {
        set({token});
        setTokenToLocalStorage(token);
    },
    openSignInModal: () => {
        set({signInModalOpen: true});
        window.document.body.style.overflow = "hidden";
    },
    closeSignInModal: () => {
        set({signInModalOpen: false});
        window.document.body.style.overflow = "visible";
    },
    toggleLogoutModalOpen: () => set(state => ({...initialModalState, logoutModalOpen: !state.logoutModalOpen})),
    openSmallLogoutModal: () => {
        set({smallLogoutModalOpen: true});
        window.document.body.style.overflow = "hidden";
    },
    closeSmallLogoutModal: () => {
        set({smallLogoutModalOpen: false});
        window.document.body.style.overflow = "visible";
    },
    closeAllModal: () => set({...initialModalState}),
    clearSignInfo: () => {
        set({email: "", token: ""});
        setEmailToLocalStorage("");
        setTokenToLocalStorage("");
    },
    setLike: (like) => set({like}),
    handleClickLike: (id, checked) => set(state => {
        if(state.email === "") {
            state.signInModalOpen = true;
            return {};
        }
        fetch(`${import.meta.env.VITE_AUTH_API_ADDRESS}/api/session/user/like`, {
            method: checked?"DELETE":"POST",
            body: new URLSearchParams("id="+id),
            headers: {
                authorization: "Bearer " + getTokenFromLocalStorage(),
                contentType: "application/x-www-form-urlencoded",
            }
        }).then((res) => {
            if (res.status !== 200) {
                throw res.json()
            }
            mutateUserLikeList();
            if(!checked) {
                clearTimeout(state.addedToLikeModalTimeId);
                state.setAddedToLikeModalOpen(true);
                state.setAddedToLikeModalTimeId(window.setTimeout(() => state.setAddedToLikeModalOpen(false), 3000))
            }
        }).catch((err) => {
            console.log(err);
        })

        return {};
    }),
    setAddedToLikeModalOpen: (open) => set({addedToLikeModalOpen: open}),
    setAddedToLikeModalTimeId: (timeId) => set({addedToLikeModalTimeId: timeId}),
    setShowSmallNavBar: (showSmallNavBar) => set({showSmallNavBar}),
}))

export default useUserInfoStore;