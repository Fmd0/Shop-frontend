import {RecentlyViewedItemInfoType} from "../../utils/type.ts";
import CommodityItemRecentlyViewed from "./CommodityItemRecentlyViewed.tsx";
import useRecentlyViewedInfoStore from "../../hooks/useRecentlyViewedInfoStore.ts";
import {useUserLikeList} from "../../hooks/useUserLikeList.ts";
import useUserInfoStore from "../../hooks/useUserInfoStore.ts";
import {l} from "vite/dist/node/types.d-aGj9QkWt";


const RecentlyViewedPageMainContent = () => {

    const {recentlyViewedInfo} = useRecentlyViewedInfoStore();
    const {handleClickLike} = useUserInfoStore();

    const {userLikeList={msg: "", data: []}, error} = useUserLikeList();

    if(error) {
        return null;
    }
    return (
        <div className="w-[90%] max-w-[1144px] mx-auto tracking-[0.15px] font-medium mt-12">

            {/*top part */}
            <a href="/recently-viewed">
                <div className="flex items-center gap-2">
                    <p className="text-[24px]">Recently Viewed</p>
                </div>
            </a>


            <div className="grid grid-cols-5 gap-x-4 gap-y-8 mt-6">
                {
                    recentlyViewedInfo?.map((r: RecentlyViewedItemInfoType, i: number) => (
                        <CommodityItemRecentlyViewed key={i} {...r} hasDelete={true} checked={userLikeList?.data?.includes(r.id)} handleClickLike={handleClickLike} />
                    ))
                }
            </div>


        </div>
    )
}

export default RecentlyViewedPageMainContent;