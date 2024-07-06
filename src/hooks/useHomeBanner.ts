
import useSWR from "swr";
import {fetcher} from "../utils/fetcher.ts";
import {HomeBannerType} from "../utils/type.ts";


const useHomeBanner = () => {
    const {data, error}: {
        data: {msg: string, data: HomeBannerType[]},
        error: boolean|undefined
    }
    // = useSWR(`${import.meta.env.VITE_API_ADDRESS}/api/home/banner?getAll=true`, fetcher);
    = useSWR(`${import.meta.env.VITE_AUTH_API_ADDRESS}/api/home/banner`, fetcher);
    return {data, error};
}


// const mutateHomeBanner = () => {
//     mutate(`${import.meta.env.VITE_API_ADDRESS}/api/home/banner`);
// }

export {
    useHomeBanner,
}