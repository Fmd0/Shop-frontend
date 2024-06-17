import {create} from "zustand";
import {replaceURL} from "../utils/searchPage.ts";
import {MarketPageCommodityInfoType} from "../utils/type.ts";

interface State {
    query: string;
    category: string,
    onSale: boolean,
    ratings : string,
    size: string,
    color: string,
    shipsTo: string,
    startPrice: string,
    endPrice: string,
    sortBy: string,
    searchCommodityList: MarketPageCommodityInfoType[],
    searchHasMore: boolean,
    searchPage: number,
}

interface Actions {
    setQuery: (query: string) => void,
    setCategory: (category: string) => void,
    setOnSale: (onSale: boolean) => void,
    setRatings: (ratings: string) => void,
    setSize: (size: string) => void,
    setColor: (color: string) => void,
    setShipsTo: (shipsTo: string) => void,
    setStartPrice: (startPrice: string) => void,
    setEndPrice: (endPrice: string) => void,
    setSortBy: (sortBy: string) => void,
    setSearchCommodityList: (searchCommodityList: MarketPageCommodityInfoType[]) => void,
    setSearchHasMore: (searchHasMore: boolean) => void,
    addSearchPage: () => void,
}

const searchParams = new URLSearchParams(window.location.search);

const initialState = {
    query: searchParams.get("query")||"",
    category: searchParams.get("category")||"",
    onSale: Boolean(searchParams.get("onSale"))||false,
    ratings: searchParams.get("ratings")||"",
    size: searchParams.get("size")||"",
    color: searchParams.get("color")||"",
    shipsTo: searchParams.get("shipsTo")||"",
    startPrice: searchParams.get("startPrice")||"",
    endPrice: searchParams.get("endPrice")||"",
    sortBy: searchParams.get("sortBy")||"",
    searchCommodityList: [],
    searchHasMore: false,
    searchPage: 1,
}

export const useSearchInfoStore = create<State & Actions>(set => ({
    ...initialState,
    setQuery: (query) => {
        set({query, searchPage: 1});
        replaceURL("query", query);
    },
    setCategory: (category) => set({category}),
    setOnSale: (onSale) => set({onSale}),
    setRatings: (ratings) => set({ratings}),
    setSize: (size) => set({size}),
    setColor: (color: string) => set({color}),
    setShipsTo: (shipsTo) => set({shipsTo}),
    setStartPrice: (startPrice) => set({startPrice}),
    setEndPrice: (endPrice) => set({endPrice}),
    setSortBy: (sortBy) => set({sortBy}),
    setSearchCommodityList: (searchCommodityList) => set({searchCommodityList}),
    setSearchHasMore: (searchHasMore) => set({searchHasMore}),
    addSearchPage: () => set(state => ({searchPage: state.searchPage+1})),
}))