import {create} from "zustand";
import {getEmailFromLocalStorage, setEmailToLocalStorage} from "../utils/localStorage.ts";
import {mutateUserLikeList} from "./useUserLikeList.ts";

interface State {
    email: string;
    signInModalOpen: boolean;
    logoutModalOpen: boolean;
    like: {
        id: string,
        name: string,
        image: string,
        rating: string,
        ratingAmount: string,
        price: number,
        promotingPrice: number,
    }[];
}

interface Actions {
    setEmail: (email: string) => void;
    openSignInModal: () => void;
    closeSignInModal: () => void;
    toggleLogoutModalOpen: () => void;
    closeAllModal: () => void;
    clearSignInfo: () => void;
    setLike: (like: {
        id: string,
        name: string,
        image: string,
        rating: string,
        ratingAmount: string,
        price: number,
        promotingPrice: number,
    }[]) => void;
    handleClickLike: (id: string, checked: boolean) => void;
}

const initialState = {
    email: getEmailFromLocalStorage(),
    signInModalOpen: false,
    like: [],
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
    openSignInModal: () => {
        set({signInModalOpen: true});
        window.document.body.style.overflow = "hidden";
    },
    closeSignInModal: () => {
        set({signInModalOpen: false});
        window.document.body.style.overflow = "visible";
    },
    toggleLogoutModalOpen: () => set(state => ({...initialModalState, logoutModalOpen: !state.logoutModalOpen})),
    closeAllModal: () => set({...initialModalState}),
    clearSignInfo: () => {
        set({email: ""});
        setEmailToLocalStorage("");
    },
    setLike: (like) => set({like}),
    handleClickLike: (id, checked) => {
        fetch(`${import.meta.env.VITE_AUTH_API_ADDRESS}/api/session/user/like`, {
            method: checked?"DELETE":"POST",
            body: new URLSearchParams("id="+id),
            credentials: "include",
        }).then((res) => {
            if (res.status !== 200) {
                throw res.json()
            }
            mutateUserLikeList();
        }).catch((err) => {
            console.log(err);
        })
    }
}))

export default useUserInfoStore;