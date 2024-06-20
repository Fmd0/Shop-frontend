import {create} from "zustand";
import {replaceURL} from "../utils/searchPageUtils.ts";
import {MarketPageCommodityInfoType} from "../utils/type.ts";

interface State {
    query: string;
    category: string,
    onSale: boolean,
    ratings : number,
    size: string[],
    color: string[],
    shipsTo: string,
    startPrice: number,
    endPrice: number,
    sortBy: string,
    searchCommodityList: MarketPageCommodityInfoType[],
    searchHasMore: boolean,
    searchPage: number,
    sortByModalOpen: boolean,
    priceModalOpen: boolean,
    ratingsModalOpen: boolean,
    sizeModalOpen: boolean,
    colorModalOpen: boolean,
    shipToModalOpen: boolean,
}

interface Actions {
    setQuery: (query: string) => void,
    setCategory: (category: string) => void,
    toggleOnSale: () => void,
    setRatings: (ratings: number) => void,
    setSize: (size: string[]) => void,
    setColor: (color: string[]) => void,
    setShipsTo: (shipsTo: string) => void,
    setStartPrice: (startPrice: number) => void,
    setEndPrice: (endPrice: number) => void,
    setSortBy: (sortBy: string) => void,
    setSearchCommodityList: (searchCommodityList: MarketPageCommodityInfoType[]) => void,
    setSearchHasMore: (searchHasMore: boolean) => void,
    addSearchPage: () => void,
    closeAllModal: () => void,
    toggleSortByModalOpen: () => void,
    togglePriceModalOpen: () => void,
    toggleRatingsModalOpen: () => void,
    toggleSizeModalOpen: () => void,
    toggleColorModalOpen: () => void,
    toggleShipToModalOpen: () => void,
}

const searchParams = new URLSearchParams(window.location.search);

const initialState = {
    query: searchParams.get("query")||"",
    category: searchParams.get("category")||"",
    onSale: Boolean(searchParams.get("onSale"))||false,
    ratings: Number(searchParams.get("ratings"))||0,
    size: searchParams.getAll("size"),
    color: searchParams.getAll("color"),
    shipsTo: searchParams.get("shipsTo")||"",
    startPrice: Number(searchParams.get("startPrice"))||0,
    endPrice: Number(searchParams.get("endPrice"))||2000,
    sortBy: searchParams.get("sortBy")||"",
    searchCommodityList: [],
    searchHasMore: false,
    searchPage: 1,
}

const initialModalState = {
    sortByModalOpen: false,
    priceModalOpen: false,
    ratingsModalOpen: false,
    sizeModalOpen: false,
    colorModalOpen: false,
    shipToModalOpen: false,
}

export const useSearchInfoStore = create<State & Actions>(set => ({
    ...initialState,
    ...initialModalState,
    setQuery: (query) => {
        set({query, searchPage: 1});
        replaceURL("query", query);
    },
    setCategory: (category) => set({category}),
    toggleOnSale: () => {
        set(state => {
            replaceURL("onSale", (!state.onSale)?"true":"");
            return {onSale: !state.onSale, searchPage: 1};
        });
    },
    setRatings: (ratings) => {
        set({ratings, searchPage: 1});
        replaceURL("ratings", String(ratings!==0?ratings:""))
    },
    setSize: (size) => {
        set({size, searchPage: 1});
        replaceURL("size", size);
    },
    setColor: (color) => {
        set({color, searchPage: 1});
        replaceURL("color", color);
    },
    setShipsTo: (shipsTo) => {
        set({shipsTo, searchPage: 1});
        replaceURL("shipsTo", shipsTo);
    },
    setStartPrice: (startPrice) => {
        set({startPrice, searchPage: 1});
        replaceURL("startPrice", String(startPrice!==0?startPrice:""));
    },
    setEndPrice: (endPrice) => {
        set({endPrice, searchPage: 1});
        replaceURL("endPrice", String(endPrice!==2000?endPrice:""));
    },
    setSortBy: (sortBy) => {
        set({sortBy, searchPage: 1});
        replaceURL("sortBy", sortBy);
    },
    setSearchCommodityList: (searchCommodityList) => set({searchCommodityList}),
    setSearchHasMore: (searchHasMore) => set({searchHasMore}),
    addSearchPage: () => set(state => ({searchPage: state.searchPage+1})),
    closeAllModal: () => set(({...initialModalState})),
    toggleSortByModalOpen: () => set(state => ({...initialModalState, sortByModalOpen: !state.sortByModalOpen})),
    togglePriceModalOpen: () => set(state => ({...initialModalState, priceModalOpen: !state.priceModalOpen})),
    toggleRatingsModalOpen: () => set(state => ({...initialModalState, ratingsModalOpen: !state.ratingsModalOpen})),
    toggleSizeModalOpen: () => set(state => ({...initialModalState, sizeModalOpen: !state.sizeModalOpen})),
    toggleColorModalOpen: () => set(state => ({...initialModalState, colorModalOpen: !state.colorModalOpen})),
    toggleShipToModalOpen: () => set(state => ({...initialModalState, shipToModalOpen: !state.shipToModalOpen})),
}))