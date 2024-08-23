import {useEffect} from "react";
import useCommodityPageStore from "../../hooks/useCommodityPageStore.ts";
import {SkuConfigType} from "../../utils/type.ts";
import CommentListCommodityPage from "./CommentListCommodityPage.tsx";
import ImageGallery from "./ImageGallery.tsx";
import {setRecentlyViewedInfoItemToLocalStorage} from "../../utils/localStorage.ts";
import useCommodityInfo from "../../hooks/useCommodityInfo.ts";
import CommodityInfo from "./CommodityInfo.tsx";


const CommodityPageMainContent = () => {

    const id = new URLSearchParams(window.location.search).get("id")||"";
    const {data: {data: {commodity: commodityInfo}} = {data: {commodity: null, bestSellingCommodities: []}}} = useCommodityInfo(id);

    const {
        setCommodityInfo,
        comment,
        setComment,
        setCommentHasMore,
        setCommentTotalAmount,
        setCommentGroup,
        commentPage,
        setSkuItemKey,
    } = useCommodityPageStore();


    useEffect(() => {
        setCommodityInfo(commodityInfo);
        setSkuItemKey((commodityInfo?.skuConfigs?.map((skuConfig: SkuConfigType) => skuConfig.defaultValue))?.join("_")||"");
    }, [commodityInfo]);


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
        if(!commodityInfo) return;
        setRecentlyViewedInfoItemToLocalStorage({
            id: commodityInfo?.id,
            name: commodityInfo?.name,
            image: commodityInfo.images[0],
            price: commodityInfo.price,
            promotingPrice: commodityInfo.promotingPrice,
        })
    }, [commodityInfo]);



    return (
        <div className="max-w-[1144px] mx-auto px-4 mt-4 font-[SuisseIntl-Medium,sans-serif] font-medium select-none flex flex-col md:flex-row gap-4 md:gap-10">

            {/*left part*/}
            <div className="md:flex-1 overflow-hidden">

                {/*images big gallery and small gallery*/}
                <ImageGallery />

                {/*comments part*/}
                <CommentListCommodityPage/>
            </div>

            {/*right part*/}
            <div className="md:flex-[0_0_344px] ">
                <CommodityInfo />
            </div>
        </div>
    )
}

export default CommodityPageMainContent;