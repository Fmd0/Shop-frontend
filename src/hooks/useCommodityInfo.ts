import {CommodityInfoType} from "../utils/type.ts";
import {fetcher} from "../utils/fetcher.ts";
import useSWRImmutable from "swr/immutable";


const useCommodityInfo = (id: string) => {
    const {data, error}: {
        data: {
            msg: string,
            data: {
                commodity: CommodityInfoType,
                bestSellingCommodities: CommodityInfoType[],
            }},
        error: boolean|undefined
    } = useSWRImmutable(`${import.meta.env.VITE_AUTH_API_ADDRESS}/api/commodity/${id}`, fetcher);
    return {data, error};
}

export default useCommodityInfo;