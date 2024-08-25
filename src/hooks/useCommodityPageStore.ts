import {CommentType, CommodityInfoType, SkuItemType} from "../utils/type.ts";
import {create} from "zustand";


interface State {
    commodityInfo: CommodityInfoType|null,
    commodityInfoImageLength: number,
    images: string[],
    skuItemMap: { [key: string]: SkuItemType },
    bestSellingCommodities: CommodityInfoType[],
    comment: CommentType[],
    commentGroup: {_count: number, rating: number}[],
    commentTotalAmount: number,
    commentHasMore: boolean,
    commentPage: number,
    imageModalOpen: boolean,
    imageIndex: number,
    skuItemKey: string,
    moreInfoModalOpen: boolean,
    contactModalOpen: boolean,
    descriptionModalOpen: boolean,
    commentModalOpen: boolean,
    refundModalOpen: boolean,
    shippingModalOpen: boolean,
}

interface Actions {
    setCommodityInfo: (state: CommodityInfoType|null) => void,
    setCommodityInfoImageLength: (commodityInfoImageLength: number) => void,
    setImages: (state: string[]) => void,
    setSkuItemMap: (map: { [key: string]: SkuItemType }) => void,
    setBestSellingCommodities: (state: CommodityInfoType[]) => void,
    setComment: (comment: CommentType[]) => void,
    setCommentGroup: (commentGroup: {_count: number, rating: number}[]) => void,
    setCommentTotalAmount: (commentTotalAmount: number) => void,
    setCommentHasMore: (commentHasMore: boolean) => void,
    addCommentPage: () => void,
    setImageModalOpen: (state: boolean) => void,
    setImageIndex: (index: number) => void,
    setSkuItemKey: (key: string) => void,
    toggleMoreInfoModalOpen: () => void,
    openContactModal: () => void,
    closeContactModal: () => void,
    openDescriptionModal: () => void,
    closeDescriptionModal: () => void,
    openCommentModal: () => void,
    closeCommentModal: () => void,
    openRefundModal: () => void,
    closeRefundModal: () => void,
    openShippingModal: () => void,
    closeShippingModal: () => void,
    closeAllModal: () => void,
}

const initialState = {
    commodityInfo: null,
    commodityInfoImageLength: 1,
    images: [],
    skuItemMap: {},
    bestSellingCommodities: [],
    comment: [],
    commentGroup: [],
    commentTotalAmount: 1,
    commentHasMore: false,
    commentPage: 1,
    imageModalOpen: false,
    imageIndex: 0,
    skuItemKey: '',
    refundModalOpen: false,
    shippingModalOpen: false,
}

const initialModalState = {
    moreInfoModalOpen: false,
}

const useCommodityPageStore = create<State & Actions>((set) => ({
    ...initialState,
    ...initialModalState,
    contactModalOpen: false,
    descriptionModalOpen: false,
    commentModalOpen: false,
    commentModalRowDisplay: false,
    setCommodityInfo: (state) => set({commodityInfo: state}),
    setCommodityInfoImageLength: (state) => set({commodityInfoImageLength: state}),
    setImages: (state) => set({images: state}),
    setSkuItemMap: (map) => set({skuItemMap: map}),
    setBestSellingCommodities: (state) => set({bestSellingCommodities: state}),
    setComment: (comment: CommentType[]) => set({comment}),
    setCommentGroup: (commentGroup) => set({commentGroup}),
    setCommentTotalAmount: (commentTotalAmount: number) => set({commentTotalAmount}),
    setCommentHasMore: (commentHasMore) => set({commentHasMore: commentHasMore}),
    addCommentPage: () => set(state => ({commentPage: state.commentPage + 1})),
    setImageModalOpen: (state) => {
        if(state) {
            window.document.body.style.overflow="hidden";
        }
        else {
            window.document.body.style.overflow="visible";
        }
        set({imageModalOpen: state})
    },
    setImageIndex: (index) => set(({imageIndex: index})),
    setSkuItemKey: (key) => set({skuItemKey: key}),
    toggleMoreInfoModalOpen: () => set(state => ({...initialModalState, moreInfoModalOpen: !state.moreInfoModalOpen})),
    openContactModal: () => {
        window.document.body.style.overflow="hidden";
        set(({contactModalOpen: true}));
    },
    closeContactModal: () => {
        window.document.body.style.overflow="visible";
        set(({contactModalOpen: false}));
    },
    openDescriptionModal: () => {
        window.document.body.style.overflow="hidden";
        set(({descriptionModalOpen: true}));
    },
    closeDescriptionModal: () => {
        window.document.body.style.overflow="visible";
        set(({descriptionModalOpen: false}));
    },
    openCommentModal: () => {
        window.document.body.style.overflow="hidden";
        set(({commentModalOpen: true}));
    },
    closeCommentModal: () => {
        window.document.body.style.overflow="visible";
        set(({commentModalOpen: false}));
    },
    openRefundModal: () => {
        window.document.body.style.overflow="hidden";
        set(({refundModalOpen: true}));
    },
    closeRefundModal: () => {
        window.document.body.style.overflow="visible";
        set(({refundModalOpen: false}));
    },
    openShippingModal: () => {
        window.document.body.style.overflow="hidden";
        set(({shippingModalOpen: true}));
    },
    closeShippingModal: () => {
        window.document.body.style.overflow="visible";
        set(({shippingModalOpen: false}));
    },
    closeAllModal: () => set({...initialModalState}),
}))

export default useCommodityPageStore;