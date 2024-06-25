import {RecentlyViewedItemInfoType} from "../../utils/type.ts";
import CommodityItemRecentlyViewed from "./CommodityItemRecentlyViewed.tsx";
import useRecentlyViewedInfoStore from "../../hooks/useRecentlyViewedInfoStore.ts";


const RecentlyViewedPageMainContent = () => {

    const {
        recentlyViewedInfo
    } = useRecentlyViewedInfoStore();

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
                        <CommodityItemRecentlyViewed key={i} {...r} hasDelete={true}/>
                    ))
                }
            </div>


        </div>
    )
}

export default RecentlyViewedPageMainContent;