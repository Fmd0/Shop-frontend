import {useEffect} from "react";
import useCommodityPageStore from "../../hooks/useCommodityPageStore.ts";
import {SkuConfigType} from "../../utils/type.ts";
import CommentListCommodityPage from "./CommentListCommodityPage.tsx";
import ImageGallery from "./ImageGallery.tsx";
import {setRecentlyViewedInfoItemToLocalStorage} from "../../utils/localStorage.ts";
import useCommodityInfo from "../../hooks/useCommodityInfo.ts";
import CommodityInfo from "./CommodityInfo.tsx";
import SmallCommentListCommodityPage from "./SmallCommentListCommodityPage.tsx";
import ContactModal from "../commonModal/ContactModal.tsx";
import SmallContactModal from "../commonModal/SmallContactModal.tsx";
import RefundModal from "../commonModal/RefundModal.tsx";
import SmallRefundModal from "../commonModal/SmallRefundModal.tsx";
import ShippingModal from "../commonModal/ShippingModal.tsx";
import SmallShippingModal from "../commonModal/SmallShippingModal.tsx";
import ImageModal from "./ImageModal.tsx";
import DescriptionModal from "./DescriptionModal.tsx";
import SmallDescriptionModal from "./SmallDescriptionModal.tsx";
import CommentModal from "./CommentModal.tsx";
import SmallCommentModal from "./SmallCommentModal.tsx";


const CommodityPageMainContent = () => {

    const id = new URLSearchParams(window.location.search).get("id")||"";
    // const {data: {data: {commodity: commodityInfo, bestSellingCommodities}} = {data: {commodity: null, bestSellingCommodities: []}}} = useCommodityInfo(id);
    const {data: {data} = {data: {commodity: null, bestSellingCommodities: []}}} = useCommodityInfo(id);

    const {
        setCommodityInfo,
        setCommodityInfoImageLength,
        setImages,
        setSkuItemMap,
        setSkuItemKey,
        comment,
        setComment,
        setCommentHasMore,
        setCommentTotalAmount,
        setCommentGroup,
        commentPage,
        contactModalOpen,
        closeContactModal,
        refundModalOpen,
        closeRefundModal,
        shippingModalOpen,
        closeShippingModal,
    } = useCommodityPageStore();


    useEffect(() => {
        const skuItemMap = !data.commodity
            ? {}
            : Object.fromEntries(data.commodity?.skuItems.map(skuItem => {
                const key = data.commodity?.skuConfigs.map(skuConfig => {
                    return skuItem.sku[skuConfig.key]||skuConfig.defaultValue
                }).join("_");
                return [key, skuItem]
            }))
        setSkuItemMap(skuItemMap);

        const skuItemKey = (data.commodity?.skuConfigs?.map((skuConfig: SkuConfigType) => skuConfig.defaultValue))?.join("_")||"";
        setSkuItemKey(skuItemKey);

        let images: string[] = [];
        if(!data.commodity) {
            images =  [];
        }
        else if(data.commodity?.skuItems.length === 0) {
             images = [...data.commodity.images];
        }
        else {
            images = [...data.commodity.images];
            images[0] = skuItemMap[skuItemKey]?.image||"";
        }
        setImages(images);

        setCommodityInfo(data.commodity);
        setCommodityInfoImageLength(data.commodity?.images.length||1);
        setImages(data.commodity?.images||[]);
    }, [data.commodity]);


    // fetch comment info
    useEffect(() => {
        let ignore = false;
        fetch(`${import.meta.env.VITE_AUTH_API_ADDRESS}/api/comment?pageSize=6&page=${commentPage}&commodityId=${id}`)
            .then(res => res.json())
            .then(data => {
                if(!ignore) {
                    if(commentPage === 1) {
                        setComment(data?.data||[]);
                        setCommentHasMore(data?.hasMore||false);
                        setCommentTotalAmount(data?.totalAmount||0);
                        setCommentGroup(data?.groupRating||[]);
                    }
                    else {
                        setComment([...comment, ...data?.data||[]]);
                        setCommentHasMore(data?.hasMore||false);
                    }
                }
            })
            .catch(err => console.log(err));
        return () => { ignore = true; };
    }, [commentPage, id]);


    // set recent viewed record
    useEffect(() => {
        if(!data.commodity) return;
        setRecentlyViewedInfoItemToLocalStorage({
            id: data.commodity?.id,
            name: data.commodity?.name,
            image: data.commodity.images[0],
            price: data.commodity.price,
            promotingPrice: data.commodity.promotingPrice,
        })
    }, [data.commodity]);



    return (
        <div className="max-w-[1144px] mx-auto md:px-4 md:mt-4 font-[SuisseIntl-Medium,sans-serif] font-medium select-none flex flex-col md:flex-row gap-4 md:gap-10">

            {/*left part*/}
            <div className="md:flex-1 overflow-hidden">

                {/*images big gallery and small gallery*/}
                <ImageGallery />

                {/*comments part*/}
                <CommentListCommodityPage/>
            </div>

            {/*right part*/}
            <div className="md:flex-[0_0_344px] px-4 md:px-0">
                <CommodityInfo />
            </div>

            <SmallCommentListCommodityPage />

            <ImageModal />
            <ContactModal data={data.commodity?.market||null} modalOpen={contactModalOpen} closeModal={closeContactModal} />
            <SmallContactModal data={data.commodity?.market||null} modalOpen={contactModalOpen} closeModal={closeContactModal} />
            <RefundModal data={data.commodity?.market||null} modalOpen={refundModalOpen} closeModal={closeRefundModal} />
            <SmallRefundModal data={data.commodity?.market||null} modalOpen={refundModalOpen} closeModal={closeRefundModal} />
            <ShippingModal data={data.commodity?.market||null} modalOpen={shippingModalOpen} closeModal={closeShippingModal} />
            <SmallShippingModal data={data.commodity?.market||null} modalOpen={shippingModalOpen} closeModal={closeShippingModal} />

            <DescriptionModal />
            <SmallDescriptionModal />

            <CommentModal />
            <SmallCommentModal />
        </div>
    )
}

export default CommodityPageMainContent;