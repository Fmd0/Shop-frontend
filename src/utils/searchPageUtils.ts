

export const replaceURL = (key: string, value: string|(string[])) => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.delete(key)
    if(typeof value !== 'string') {
        if(value.length !== 0) {
            value.forEach((item) => {
                searchParams.append(key, item);
            })
        }
    }
    else {
        if(value !== "") {
            searchParams.set(key, value);
        }
    }
    const newURL = window.location.origin + window.location.pathname + "?"+ searchParams.toString();
    window.history.replaceState({}, "", newURL);
}


export const getParamFromURL = (key: string) => {
    return new URLSearchParams(window.location.search).get(key);
}


export const getParamArrayFromURL = (key: string) => {
    return new URLSearchParams(window.location.search).getAll(key);
}
