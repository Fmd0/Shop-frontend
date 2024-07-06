
import useSWR, {mutate} from "swr";
import {credentialFetcher} from "../utils/fetcher.ts";


const useUserLikeList = () => {
    const {data: userLikeList, error}: {
        data: {msg: string, data: string[]},
        error: boolean|undefined
    } = useSWR(`${import.meta.env.VITE_AUTH_API_ADDRESS}/api/session/user/like/id`, credentialFetcher);
    if(userLikeList?.msg === "Not auth") {
        userLikeList.data = [];
    }
    return {userLikeList, error};
}


const mutateUserLikeList = () => {
    mutate(`${import.meta.env.VITE_AUTH_API_ADDRESS}/api/session/user/like/id`);
}

export {
    useUserLikeList,
    mutateUserLikeList,
}