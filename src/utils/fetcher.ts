import {getTokenFromLocalStorage} from "./localStorage.ts";


const fetcher = (url: string) => fetch(url).then((res) => res.json());

const credentialFetcher = (url: string) => fetch(url, {headers: {
    authorization: `Bearer ${getTokenFromLocalStorage()}`,
    }}).then((res) => res.json());


export {
    fetcher,
    credentialFetcher
};