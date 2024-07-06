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
    addedToLikeModalOpen: boolean;
    addedToLikeModalTimeId: number;
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
    setAddedToLikeModalOpen: (open: boolean) => void;
    setAddedToLikeModalTimeId: (timeId: number) => void;
}

const initialState = {
    email: getEmailFromLocalStorage(),
    signInModalOpen: false,
    like: [],
    addedToLikeModalOpen: false,
    addedToLikeModalTimeId: 0,
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
    handleClickLike: (id, checked) => set(state => {
        if(state.email === "") {
            state.signInModalOpen = true;
            return {};
        }

        fetch(`${import.meta.env.VITE_AUTH_API_ADDRESS}/api/session/user/like`, {
            method: checked?"DELETE":"POST",
            body: new URLSearchParams("id="+id),
            credentials: "include",
        }).then((res) => {
            if (res.status !== 200) {
                throw res.json()
            }
            mutateUserLikeList();
            if(!checked) {
                clearTimeout(state.addedToLikeModalTimeId);
                state.setAddedToLikeModalOpen(true);
                state.setAddedToLikeModalTimeId(setTimeout(() => state.setAddedToLikeModalOpen(false), 3000))
            }
        }).catch((err) => {
            console.log(err);
        })

        return {};
    }),
    setAddedToLikeModalOpen: (open) => set({addedToLikeModalOpen: open}),
    setAddedToLikeModalTimeId: (timeId) => set({addedToLikeModalTimeId: timeId}),
}))

export default useUserInfoStore;