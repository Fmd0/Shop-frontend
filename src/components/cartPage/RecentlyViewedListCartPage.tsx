import {getRecentlyViewedInfoFromLocalStorage} from "../../utils/localStorage.ts";
import CommodityItemRecentlyViewed from "../recentlyViewedPage/CommodityItemRecentlyViewed.tsx";
import {RecentlyViewedItemInfoType} from "../../utils/type.ts";

const RecentlyViewedListCartPage = () => {
    const data = getRecentlyViewedInfoFromLocalStorage();
    console.log(data);


    return (
        <div className="w-[90%] max-w-[1144px] mx-auto tracking-[0.15px] font-medium mt-12">

            {/*top part */}
            <a href="/recently-viewed">
                <div className="flex items-center gap-2">
                    <p className="text-[24px]">Recently Viewed</p>
                    <div className="size-8 bg-neutral-100  rounded-[999px] grid place-items-center">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                             data-testid="icon-bold-right-chevron" stroke="none"
                             style={{width: "20px", height: "20px"}}>
                            <path d="M10 16L14 12L10 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                  strokeLinejoin="round"></path>
                        </svg>
                    </div>
                </div>
            </a>


            <div className="grid grid-cols-6 gap-2 mt-6">
                {
                    getRecentlyViewedInfoFromLocalStorage().map((r:RecentlyViewedItemInfoType, i:number) => (
                        <CommodityItemRecentlyViewed key={i} {...r}  hasDelete={false} />
                    ))
                }
            </div>


        </div>
    )
}

export default RecentlyViewedListCartPage;