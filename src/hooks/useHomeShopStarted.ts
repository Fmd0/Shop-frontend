import useSWR from "swr";
import {HomeShopStartedType} from "../utils/type.ts";
import {fetcher} from "../utils/fetcher.ts";


const useHomeShopStarted = () => {
    const {data, error}: {
        data: {msg: string, data: HomeShopStartedType[]},
        error: boolean|undefined
    }
    // = useSWR(`${import.meta.env.VITE_API_ADDRESS}/api/home/started`, fetcher);
    = useSWR(`${import.meta.env.VITE_AUTH_API_ADDRESS}/api/home/started`, fetcher);
    return {data, error};
}

export default useHomeShopStarted;