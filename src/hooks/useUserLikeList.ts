
import {credentialFetcher} from "../utils/fetcher.ts";
import {getEmailFromLocalStorage} from "../utils/localStorage.ts";
import useSWRImmutable from "swr/immutable";


const useUserLikeList = () => {
    const {data, error}: {
        data: {msg: string, data: {
                id: string,
                name: string,
                image: string,
                rating: string,
                ratingAmount: string,
                price: number,
                promotingPrice: number,
            }[]},
        error: boolean|undefined
    } = useSWRImmutable(
        getEmailFromLocalStorage() === ""
            ? null
            :`${import.meta.env.VITE_AUTH_API_ADDRESS}/api/session/user/like`
        , credentialFetcher
    );
    if(data?.msg === "Not auth") {
        data.data = [];
    }
    return {data, error};
}


export default useUserLikeList;
