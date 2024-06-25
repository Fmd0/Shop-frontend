import useCommodityPageStore from "../../hooks/useCommodityPageStore.ts";
import CommodityItem from "../marketPage/CommodityItem.tsx";
import useUserInfoStore from "../../hooks/useUserInfoStore.ts";
import {useUserLikeList} from "../../hooks/useUserLikeList.ts";

const BestSellersCommodityPage = () => {
    const {
        bestSellingCommodities,
        commodityInfo
    } = useCommodityPageStore();

    const {userLikeList={msg: "", data: []}, error} = useUserLikeList();
    const {handleClickLike} = useUserInfoStore();

    if(error) {
        return null;
    }

    return (
        <div className="mt-20 mb-10 max-w-[1240px] w-[90%] mx-auto font-[SuisseIntl-Medium,sans-serif] font-medium">
            <div className="flex items-center gap-4">
                <div className="relative w-11 h-11 rounded-lg overflow-hidden">
                    <img src={commodityInfo?.market?.icon||""} alt="icon"/>
                    <div className="absolute inset-0 bg-[#0000000a]"></div>
                </div>
                <div>
                    <p className="text-[14px]">{commodityInfo?.market?.name||""}</p>
                    <p className="text-[20px]">Best sellers</p>
                </div>
            </div>
            <div className="mt-4 grid grid-cols-6 gap-4">
                {
                    bestSellingCommodities.length > 0 &&
                    bestSellingCommodities.map((b, index) => (
                        <CommodityItem key={index} {...b} image={b.images[0]} checked={userLikeList?.data?.includes(b.id)} handleClickLike={handleClickLike}/>
                    ))
                }
            </div>
        </div>
    )
}

export default BestSellersCommodityPage;