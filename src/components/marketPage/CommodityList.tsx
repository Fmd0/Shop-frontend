import CommodityItem from "./CommodityItem.tsx";
import useMarketPageCommodityInfoStore from "../../hooks/useMarketPageCommodityInfoStore.ts";
import {useUserLikeList} from "../../hooks/useUserLikeList.ts";
import useUserInfoStore from "../../hooks/useUserInfoStore.ts";

const CommodityList = () => {

    const {commodityList} = useMarketPageCommodityInfoStore();
    const {userLikeList={msg: "", data: []}, error} = useUserLikeList();
    const {handleClickLike} = useUserInfoStore();

    if(error) {
        return null;
    }

    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-4">
            {
                commodityList && commodityList.map(c => (
                    <CommodityItem key={c.id} {...c} image={c.images[0]} checked={userLikeList?.data?.includes(c.id)} handleClickLike={handleClickLike}  />
                ))
            }
        </div>
    )
}

export default CommodityList;