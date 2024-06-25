import {CommentType, CommodityInfoType} from "../utils/type.ts";
import {create} from "zustand";


interface State {
    commodityInfo: CommodityInfoType|null,
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
}

interface Actions {
    setCommodityInfo: (state: CommodityInfoType) => void,
    setBestSellingCommodities: (state: CommodityInfoType[]) => void,
    setComment: (comment: CommentType[]) => void,
    setCommentGroup: (commentGroup: {_count: number, rating: number}[]) => void,
    setCommentTotalAmount: (commentTotalAmount: number) => void,
    setCommentHasMore: (commentHasMore: boolean) => void,
    addCommentPage: () => void,
    setImageModalOpen: (state: boolean) => void,
    setImageIndex: (index: number) => void,
    addImageIndex: () => void,
    subtractImageIndex: () => void,
    setSkuItemKey: (key: string) => void,
    toggleMoreInfoModalOpen: () => void,
    openContactModal: () => void,
    closeContactModal: () => void,
    openDescriptionModal: () => void,
    closeDescriptionModal: () => void,
    openCommentModal: () => void,
    closeCommentModal: () => void,
}

const initialModalState = {
    moreInfoModalOpen: false,
}

const useCommodityPageStore = create<State & Actions>((set) => ({
    commodityInfo: null,
    bestSellingCommodities: [],
    comment: [],
    commentGroup: [],
    commentTotalAmount: 1,
    commentHasMore: false,
    commentPage: 1,
    imageModalOpen: false,
    imageIndex: 0,
    skuItemKey: '',
    ...initialModalState,
    contactModalOpen: false,
    descriptionModalOpen: false,
    commentModalOpen: false,
    commentModalRowDisplay: false,
    setCommodityInfo: (state) => set({commodityInfo: state}),
    setBestSellingCommodities: (state) => set({bestSellingCommodities: state}),
    setComment: (comment: CommentType[]) => set({comment}),
    setCommentGroup: (commentGroup) => set({commentGroup}),
    setCommentTotalAmount: (commentTotalAmount: number) => set({commentTotalAmount}),
    setCommentHasMore: (commentHasMore) => set({commentHasMore: commentHasMore}),
    addCommentPage: () => set(state => ({commentPage: state.commentPage + 1})),
    setImageModalOpen: (state) => set({imageModalOpen: state}),
    setImageIndex: (index) => set(({imageIndex: index})),
    addImageIndex: () => set(state => ({imageIndex: (state.imageIndex + 1)%(state?.commodityInfo?.images?.length||0)})),
    subtractImageIndex: () => set(state => ({imageIndex: (state.imageIndex - 1 + (state?.commodityInfo?.images?.length||0))%(state?.commodityInfo?.images?.length||0)})),
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
    }
}))

export default useCommodityPageStore;