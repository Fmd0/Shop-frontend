import {create} from "zustand";
import {MarketPageCommodityInfoType} from "../utils/type.ts";


interface State {
    page: number,
    query: string,
    tag: string,
    sortBy: string,
    onSale: boolean,
    inStock: boolean,
    startPrice: number,
    endPrice: number,
    commodityList: MarketPageCommodityInfoType[],
    sortByModalOpen: boolean,
    priceModalOpen: boolean,
    moreInfoModalOpen: boolean,

}


interface Actions {
    addPage: () => void,
    setQuery: (query: string) => void,
    setTag: (tag: string) => void,
    setSortBy: (sortBy: string) => void,
    toggleOnSale: () => void,
    toggleInStock: () => void,
    setStartPrice: (startPrice: number) => void,
    setEndPrice: (endPrice: number) => void,
    setCommodityList: (commodityList: MarketPageCommodityInfoType[]) => void,
    toggleSortByModalOpen: () => void,
    togglePriceModalOpen: () => void,
    toggleMoreInfoModalOpen: () => void,
    closeAllModal: () => void,
}

const initialState: State = {
    page: 1,
    query: "",
    tag: "All",
    sortBy: "",
    onSale: false,
    inStock: true,
    startPrice: 0,
    endPrice: 2000,
    commodityList: [],
    sortByModalOpen: false,
    priceModalOpen: false,
    moreInfoModalOpen: false,
}

const modalGroupState = {
    sortByModalOpen: false,
    priceModalOpen: false,
    moreInfoModalOpen: false,
}

const useMarketPageCommodityInfoStore = create<State & Actions>((set) => ({
    ...initialState,
    addPage: () => set(state => ({page: state.page+1 })),
    setQuery: (query: string) => set({query, page: 1}),
    setTag: (tag) => set({tag, page: 1}),
    setSortBy: (sortBy) => set({sortBy, page: 1}),
    setStartPrice: (startPrice) => set({startPrice, page: 1}),
    setEndPrice: (endPrice) => set({endPrice, page: 1}),
    toggleOnSale: () => set(state => ({onSale: !state.onSale, page: 1})),
    toggleInStock: () => set(state => ({inStock: !state.inStock, page: 1})),
    setCommodityList: (commodityList) => set({commodityList}),
    toggleSortByModalOpen: () => set(state => ({...modalGroupState, sortByModalOpen: !state.sortByModalOpen})),
    togglePriceModalOpen: () => set(state => ({...modalGroupState, priceModalOpen: !state.priceModalOpen})),
    toggleMoreInfoModalOpen: () => set(state => ({...modalGroupState, moreInfoModalOpen: !state.moreInfoModalOpen})),
    closeAllModal: () => set(({...modalGroupState})),
}))

export default useMarketPageCommodityInfoStore