
import useSWR, {mutate} from "swr";
import fetcher from "../utils/fetcher.ts";


const useUserLikeList = () => {
    const {data: userLikeList, error}: {
        data: {msg: string, data: string[]},
        error: boolean|undefined
    } = useSWR(`${import.meta.env.VITE_AUTH_API_ADDRESS}/api/session/user/like/id`, fetcher);
    return {userLikeList, error};
}


const mutateUserLikeList = () => {
    mutate(`${import.meta.env.VITE_AUTH_API_ADDRESS}/api/session/user/like/id`);
}

export {
    useUserLikeList,
    mutateUserLikeList,
}