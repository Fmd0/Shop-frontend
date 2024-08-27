
import useSWR, {mutate} from "swr";
import {credentialFetcher} from "../utils/fetcher.ts";
import {getEmailFromLocalStorage} from "../utils/localStorage.ts";


const useFollowingIdList = () => {
    const {data, error}: {
        data: {msg: string, data: string[]},
        error: boolean|undefined
    } = useSWR(
        getEmailFromLocalStorage() === ""
            ? null
            :`${import.meta.env.VITE_AUTH_API_ADDRESS}/api/session/user/follow/id`
        , credentialFetcher
    );
    if(data?.msg === "Not auth") {
        data.data = [];
    }
    return {data, error};
}

const mutateFollowingIdList = () => {
    mutate(`${import.meta.env.VITE_AUTH_API_ADDRESS}/api/session/user/follow/id`);
}


export {
    useFollowingIdList,
    mutateFollowingIdList
}