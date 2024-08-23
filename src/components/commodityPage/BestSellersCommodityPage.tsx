import CommodityItem from "../marketPage/CommodityItem.tsx";
import useUserInfoStore from "../../hooks/useUserInfoStore.ts";
import {useUserLikeList} from "../../hooks/useUserLikeList.ts";
import useCommodityInfo from "../../hooks/useCommodityInfo.ts";

const BestSellersCommodityPage = () => {

    const id = new URLSearchParams(window.location.search).get("id")||"";
    const {data: {data: {commodity: commodityInfo, bestSellingCommodities}} = {data: {commodity: null, bestSellingCommodities: []}}} = useCommodityInfo(id);
    const {userLikeList={msg: "", data: []}} = useUserLikeList();
    const {handleClickLike} = useUserInfoStore();


    return (
        <div className="mt-20 mb-10 max-w-[1240px] mx-auto px-4 font-[SuisseIntl-Medium,sans-serif] font-medium">
            <div className="flex items-center gap-4">

                {
                    commodityInfo?.market?.icon && commodityInfo.market.icon !== "" &&
                    <div className="relative w-11 h-11 rounded-lg overflow-hidden">
                        <img src={commodityInfo.market.icon} alt="icon" className="w-full h-full object-contain"/>
                        <div className="absolute inset-0 bg-[#0000000a]"></div>
                    </div>
                }
                <div>
                    <p className="text-[14px]">{commodityInfo?.market?.name || ""}</p>
                    <p className="text-[20px]">Best sellers</p>
                </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-4 mt-3 md:mt-6">
                {
                    bestSellingCommodities.length > 0 &&
                    bestSellingCommodities.map((b, index) => (
                        <CommodityItem key={index} {...b} image={b.images[0]}
                                       checked={userLikeList?.data?.includes(b.id)} handleClickLike={handleClickLike}/>
                    ))
                }
            </div>
        </div>
    )
}

export default BestSellersCommodityPage;