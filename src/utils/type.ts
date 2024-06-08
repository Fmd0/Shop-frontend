
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