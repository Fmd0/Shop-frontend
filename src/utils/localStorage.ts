import {CartInfoCommodityType, CartInfoMarketType, CartInfoType, RecentlyViewedItemInfoType} from "./type.ts";


export const getCartInfoFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem("cartInfo")||"{}")
}

export const getCartAmountFromLocalStorage = () => {
    let amount = 0;
    Object.entries(JSON.parse(localStorage.getItem("cartInfo")||"{}")).forEach(([, value]) => {
        Object.entries(value.commodity).forEach(([, value]) => {
            amount += value.count;
        })
    })
    return amount;
}


export const setCartInfoItemToLocalStorage = ({market, commodity}: {market: CartInfoMarketType, commodity: CartInfoCommodityType}) => {
    const cartInfo = getCartInfoFromLocalStorage();

    if(market.name in cartInfo) {
        if(commodity.skuKey in cartInfo[market.name]["commodity"]){
            cartInfo[market.name]["commodity"][commodity.skuKey].count += commodity.count;
        }
        else {
            cartInfo[market.name]["commodity"][commodity.skuKey] = commodity;
        }
    }
    else {
        cartInfo[market.name] = {
            ...market,
            commodity: {
                [commodity.skuKey]: commodity
            }
        }
    }
    localStorage.setItem("cartInfo", JSON.stringify(cartInfo));
}


export const setCartInfoToLocalStorage = (cartInfo: CartInfoType) => {
    localStorage.setItem("cartInfo", JSON.stringify(cartInfo));
}

export const getRecentlyViewedInfoFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem("recentlyViewed")||"[]")
}

export const setRecentlyViewedInfoItemToLocalStorage = (newData: RecentlyViewedItemInfoType) => {
    let data: RecentlyViewedItemInfoType[] = JSON.parse(localStorage.getItem("recentlyViewed")||"[]");
    data = data.filter((d) => d.id !== newData.id);
    data.unshift(newData);
    localStorage.setItem("recentlyViewed", JSON.stringify(data));
}

export const setRecentlyViewedInfoToLocalStorage = (newData: RecentlyViewedItemInfoType[]) => {
    localStorage.setItem("recentlyViewed", JSON.stringify(newData));
}

export const setEmailToLocalStorage = (email: string) => {
    localStorage.setItem("email", email);
}

export const getEmailFromLocalStorage = () => {
    return String(localStorage.getItem("email")||"");
}

export const setTokenToLocalStorage = (token: string) => {
    localStorage.setItem("token", token);
}

export const getTokenFromLocalStorage = () => {
    return String(localStorage.getItem("token")||"");
}