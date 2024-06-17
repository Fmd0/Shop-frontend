

export const replaceURL = (key: string, value: string) => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set(key, value);
    const newURL = window.location.origin + window.location.pathname + "?"+ searchParams.toString();
    window.history.replaceState({}, "", newURL);
}