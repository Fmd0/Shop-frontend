import useSWR from "swr";
import fetcher from "../utils/fetcher.ts";
import {HomeShopStartedType} from "../utils/type.ts";


const useHomeShopStarted = () => {
    const {data, error}: {
        data: {msg: string, data: HomeShopStartedType[]},
        error: boolean|undefined
    } = useSWR("http://localhost:3000/api/home/started", fetcher);
    return {data, error};
}

export default useHomeShopStarted;