import {RecentlyViewedItemInfoType} from "../utils/type.ts";
import {create} from "zustand";
import {
    getRecentlyViewedInfoFromLocalStorage,
    setRecentlyViewedInfoToLocalStorage
} from "../utils/localStorage.ts";


interface State {
    recentlyViewedInfo: RecentlyViewedItemInfoType[],
}

interface Actions {
    deleteRecentlyViewedInfoItem: (id: string) => void,
}

const initialState: State = {
    recentlyViewedInfo: getRecentlyViewedInfoFromLocalStorage(),
}


const useRecentlyViewedInfoStore = create<State&Actions>(set => ({
    ...initialState,
    deleteRecentlyViewedInfoItem: (id) => {
        set(state => {
            const newRecentlyViewedInfo =
                state.recentlyViewedInfo.filter(r => r.id !== id);
            setRecentlyViewedInfoToLocalStorage(newRecentlyViewedInfo);
            return {recentlyViewedInfo: newRecentlyViewedInfo}
        })
    }
}))

export default useRecentlyViewedInfoStore;