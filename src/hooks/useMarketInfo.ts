import useSWR from "swr";
import {MarketInfoType} from "../utils/type.ts";
import {fetcher} from "../utils/fetcher.ts";


const useMarketInfo = (id: string) => {
    const {data, error}: {
        data: {msg: string, data: MarketInfoType},
        error: boolean|undefined
    } = useSWR(`${import.meta.env.VITE_AUTH_API_ADDRESS}/api/market/${id}`, fetcher);
    return {data, error};
}


export default useMarketInfo;