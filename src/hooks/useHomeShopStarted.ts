import useSWR from "swr";
import fetcher from "../utils/fetcher.ts";
import {HomeShopStartedType} from "../utils/type.ts";


const useHomeShopStarted = () => {
    const {data, error}: {
        data: {msg: string, data: HomeShopStartedType[]},
        error: boolean|undefined
    } = useSWR(`${import.meta.env.VITE_API_ADDRESS}/api/home/started`, fetcher);
    return {data, error};
}

export default useHomeShopStarted;