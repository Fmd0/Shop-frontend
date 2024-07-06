

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const credentialFetcher = (url: string) => fetch(url, { credentials: "include"}).then((res) => res.json());


export {
    fetcher,
    credentialFetcher
};