
import useSWR from "swr";
import fetcher from "../utils/fetcher.ts";
import {HomeShopStartedType} from "../utils/type.ts";


const useMarketInfo = (id: string) => {
    const {data, error}: {
        data: {msg: string, data: HomeShopStartedType[]},
        error: boolean|undefined
    } = useSWR(`http://localhost:3000/api/market/${id}`, fetcher);
    return {data, error};
}


export default useMarketInfo;