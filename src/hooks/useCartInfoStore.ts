import {create} from "zustand";
import {
    getCartAmountFromLocalStorage,
    getCartInfoFromLocalStorage, setCartInfoToLocalStorage,
} from "../utils/localStorage.ts";
import {CartInfoType} from "../utils/type.ts";

interface State {
    cartInfo: CartInfoType,
    cartAmount: number,
    addToCartStatus: string,
}

interface Actions {
    setCartInfo: (cartInfo: CartInfoType) => void,
    updateCartAmount: () => void,
    addCartAmount: (marketName: string, commodityName: string) => void,
    subtractCartAmount: (marketName: string, commodityName: string) => void,
    addToCartSuccess: () => void,
    addToCartInit: () => void,
    updateCartAmountCommodityPage: () => void,
}

const initialState = {
    cartInfo: getCartInfoFromLocalStorage(),
    cartAmount: getCartAmountFromLocalStorage(),
    addToCartStatus: "init",
}

const useCartInfoStore = create<State & Actions>(set => ({
    ...initialState,
    setCartInfo: (cartInfo) => set(({cartInfo})),
    updateCartAmount: () => set(({cartAmount: getCartAmountFromLocalStorage()})),
    updateCartAmountCommodityPage: () => set( state => {

        window.setTimeout(() => {
            state.addToCartSuccess();
            state.updateCartAmount();
            window.setTimeout(() => {
                state.addToCartInit();
            }, 3000)
        }, 3000);

        return {
            addToCartStatus: "loading",
        }
    }),
    addCartAmount: (marketName, commodityName) => {
        set(state => {
            state.cartInfo[marketName]["commodity"][commodityName].count++;
                const newCartInfo = {...state.cartInfo};
            setCartInfoToLocalStorage(newCartInfo)
            return {cartInfo: newCartInfo}
        })
    },
    subtractCartAmount: (marketName, commodityName) => {
        set(state => {
            const amount = state.cartInfo[marketName]["commodity"][commodityName].count;
            if(amount === 1) {
                delete state.cartInfo[marketName]["commodity"][commodityName]
                if(Object.keys(state.cartInfo[marketName]["commodity"]).length === 0) {
                    delete state.cartInfo[marketName]
                }
            }
            else {
                state.cartInfo[marketName]["commodity"][commodityName].count--;
            }
            const newCartInfo = {...state.cartInfo};
            setCartInfoToLocalStorage(newCartInfo)
            return {cartInfo: newCartInfo}
        })
    },
    addToCartSuccess: () => set({addToCartStatus: "success"}),
    addToCartInit: () => set({addToCartStatus: "init"}),

}))


export default useCartInfoStore;