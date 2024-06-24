
export interface HomeShopStartedType {
    id: string,
    name: string,
    logo: string,
    imageLeft: string,
    imageRight: string,
    rating: string,
    ratingAmount: string,
    relativeId: string
}


export interface MarketInfoType {
    id: string,
    name: string,
    icon: string,
    bigLogo?: string,
    bigLogoBgColor?: string,
    bigLogoFontColor?: string,
    bigPic?: string,
    bigVideo?: string,
    rating?: string,
    ratingAmount?: string,
    description?: string,
    website?: string,
    email?: string,
    telephone?: string,
    facebook?: string,
    twitter?: string,
    ins?: string,
    youtube?: string,
    address?: string,
    privacyPolicy?: string,
    refundPolicy?: string,
    shippingPolicy?: string,

    marketTag?: MarketTagType
}

export interface MarketPageCommodityInfoType {
    id: string,
    name: string,
    price: number,
    promotingPrice: number,
    images: string[],
    rating: string,
    ratingAmount: string,
}

export interface MarketTagType {
    id: string,
    tags: string[]
}

export interface CommodityInfoType {
    id: string,
    name: string,
    price: number,
    promotingPrice: number,
    images: string[],
    rating: string,
    ratingAmount: string,
    description?: string,
    stock?: number,
    marketId?: string,
    officialLink?: string,
    market?: MarketInfoType,
    skuConfigs: SkuConfigType[],
    skuItems: SkuItemType[],
}

export interface SkuConfigType {
    key: string,
    defaultValue: string,
    value: string[],
}

export interface SkuItemType {
    sku: {
        [key: string]: string,
    },
    price: number,
    promotingPrice: number,
    image?: string,
    stock: number,
}


export interface CommentType {
    id: string,
    rating: number,
    comment: string,
    userName: string,
    marketId: string,
    commodityId: string,
    createdAt: string,
    market: {
        name: string,
    },
    commodity: {
        name: string,
    }
}

export interface CartInfoMarketType {
    id: string,
    name: string,
    icon: string,
}

export interface CartInfoCommodityType {
    id: string,
    name: string,
    price: number,
    promotingPrice: number,
    image: string,
    skuKey: string,
    count: number,
}

export interface CartInfoType {
    [key: string]: {
        id: string,
        name: string,
        icon: string,
        commodity: {
            [key: string]: CartInfoCommodityType,
        },
    }
}

export interface RecentlyViewedItemInfoType {
    id: string,
    name: string,
    image: string,
    price: number,
    promotingPrice: number,
}
