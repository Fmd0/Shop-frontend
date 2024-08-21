import {getRecentlyViewedInfoFromLocalStorage} from "../../utils/localStorage.ts";
import CommodityItemRecentlyViewedPage from "../recentlyViewedPage/CommodityItemRecentlyViewedPage.tsx";
import {RecentlyViewedItemInfoType} from "../../utils/type.ts";
import {useUserLikeList} from "../../hooks/useUserLikeList.ts";
import useUserInfoStore from "../../hooks/useUserInfoStore.ts";

const RecentlyViewedListCartPage = () => {

    const {userLikeList={msg: "", data: []}} = useUserLikeList();
    const {handleClickLike} = useUserInfoStore();
    const recentlyViewedList = getRecentlyViewedInfoFromLocalStorage();

    return (
        <div className="max-w-[1144px] mx-auto px-2 tracking-[0.15px] font-medium mt-6 md:mt-12">

            {
                recentlyViewedList.length > 0 &&
                <div>
                    {/*top part */}
                    <a href="/recently-viewed">
                        <div className="flex items-center gap-2">
                            <p className="text-lg md:text-2xl">Recently Viewed</p>
                            <div className="size-6 md:size-8 bg-neutral-100  rounded-[999px] grid place-items-center">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                     data-testid="icon-bold-right-chevron" stroke="none" className="size-4 md:size-5">
                                    <path d="M10 16L14 12L10 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                          strokeLinejoin="round"></path>
                                </svg>
                            </div>
                        </div>
                    </a>


                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-4 mt-3 md:mt-6">
                        {
                            recentlyViewedList.slice(0, 6).map((r: RecentlyViewedItemInfoType, i:number) => (
                                <CommodityItemRecentlyViewedPage key={i} {...r} hasDelete={false} checked={userLikeList?.data?.includes(r.id)} handleClickLike={handleClickLike} />
                            ))
                        }
                    </div>
                </div>
            }


        </div>
    )
}

export default RecentlyViewedListCartPage;