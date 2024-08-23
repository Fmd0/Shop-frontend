import {MarketInfoType} from "../utils/type.ts";
import {fetcher} from "../utils/fetcher.ts";
import useSWRImmutable from "swr/immutable";


const useMarketInfo = (id: string) => {
    const {data, error}: {
        data: {msg: string, data: MarketInfoType},
        error: boolean|undefined
    } = useSWRImmutable(`${import.meta.env.VITE_AUTH_API_ADDRESS}/api/market/${id}`, fetcher);
    return {data, error};
}


export default useMarketInfo;