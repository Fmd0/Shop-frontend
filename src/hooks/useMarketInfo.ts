import useSWR from "swr";
import fetcher from "../utils/fetcher.ts";
import {MarketInfoType} from "../utils/type.ts";


const useMarketInfo = (id: string) => {
    const {data:marketInfoData, error}: {
        data: {msg: string, data: MarketInfoType},
        error: boolean|undefined
    } = useSWR(`${import.meta.env.VITE_API_ADDRESS}/api/market/${id}`, fetcher);
    return {marketInfoData, error};
}


export default useMarketInfo;