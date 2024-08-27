import {RecentlyViewedItemInfoType} from "../../utils/type.ts";
import CommodityItemRecentlyViewedPage from "./CommodityItemRecentlyViewedPage.tsx";
import useRecentlyViewedInfoStore from "../../hooks/useRecentlyViewedInfoStore.ts";
import {useUserLikeIdList} from "../../hooks/useUserLikeIdList.ts";
import useUserInfoStore from "../../hooks/useUserInfoStore.ts";


const RecentlyViewedPageMainContent = () => {

    const {recentlyViewedInfo} = useRecentlyViewedInfoStore();
    const {handleClickLike} = useUserInfoStore();
    const {userLikeList={msg: "", data: []}} = useUserLikeIdList();

    return (
        <div className="max-w-[1144px] mx-auto px-2 tracking-[0.15px] font-medium mt-3 md:mt-12">

            {/*top part */}
            <p className="text-xl md:text-2xl">Recently Viewed</p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-4 mt-3 md:mt-6">
                {
                    recentlyViewedInfo?.map((r: RecentlyViewedItemInfoType, i: number) => (
                        <CommodityItemRecentlyViewedPage key={i} {...r} hasDelete={true} checked={userLikeList?.data?.includes(r.id)} handleClickLike={handleClickLike} />
                    ))
                }
            </div>


        </div>
    )
}

export default RecentlyViewedPageMainContent;