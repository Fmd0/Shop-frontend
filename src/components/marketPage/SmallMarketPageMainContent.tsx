import useMarketInfo from "../../hooks/useMarketInfo.ts";
import useMarketPageCommodityInfoStore from "../../hooks/useMarketPageCommodityInfoStore.ts";
import SmallMoreInfoModal from "./SmallMoreInfoModal.tsx";
import SmallContactModal from "./SmallContactModal.tsx";
import SmallPrivacyModal from "./SmallPrivacyModal.tsx";
import SmallRefundModal from "./SmallRefundModal.tsx";
import SmallShippingModal from "./SmallShippingModal.tsx";
import SvgIcons from "../common/SvgIcons.tsx";


const SmallMarketPageMainContent = () => {

    const id = new URLSearchParams(window.location.search).get('id')||"";
    const {data:{data: marketInfo}={data: null}} = useMarketInfo(id);
    const {toggleMoreInfoModalOpen} = useMarketPageCommodityInfoStore();


    return (
        <div
            className="md:hidden tracking-[0.15px] leading-[normal] line-clamp-2 font-[SuisseIntl-Medium,sans-serif]">

            {
                marketInfo?.bigPic && marketInfo.bigPic !== "" &&
                <div className="md:hidden relative h-[200px]">
                    <img src={marketInfo.bigPic} alt="bigPic" className="w-full h-full object-cover"/>
                    <div className="absolute inset-0 bg-[#0006]"></div>
                    {
                        marketInfo?.bigLogo && marketInfo.bigLogo !== "" &&
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px]">
                            <img src={marketInfo.bigLogo} alt="icon" className="w-full object-contain"/>
                        </div>
                    }
                </div>
            }

            <div className="pt-4 px-4">
                <div className="flex items-center justify-between">
                    <div className="flex flex-row items-center gap-3">

                        {
                            (!marketInfo?.bigPic || marketInfo.bigPic === "") && marketInfo?.icon && marketInfo.icon !== "" &&
                            <div className="relative size-14 rounded-xl overflow-hidden">
                                <img src={marketInfo.icon} alt="icon" className="w-full h-full object-contain"/>
                                <div className="absolute inset-0 bg-[#0000001a]"></div>
                            </div>
                        }

                        <div className="font-semibold">
                            {/*name*/}
                            <p>{marketInfo?.name || ""}</p>

                            {/*rating, star, rating count */}
                            <div className="flex flex-row items-center gap-[2px] text-[12px]">
                                <span>{marketInfo?.rating || ""}</span>
                                <SvgIcons.Star className="size-3" />
                                <span>({marketInfo?.ratingAmount || ""})</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">

                        {/*follow button*/}
                        <button type="button" className="bg-[rgb(18,18,18)] duration-200 hover:bg-[rgb(42,42,42)] text-white py-2 px-[25px] font-medium text-[14px] rounded-lg">Follow</button>

                        {/*more info button*/}
                        <button type="button" className="size-7 duration-200 hover:bg-[#0000001a] rounded-[999px] flex items-center justify-center"
                                onClick={e => {e.stopPropagation(); toggleMoreInfoModalOpen() }}>
                            <SvgIcons.MoreInfo className="size-5" />
                        </button>
                    </div>
                </div>
                <p className="font-normal text-[14px] mt-4">{marketInfo?.description || ""}</p>

                <SmallMoreInfoModal />

                <SmallPrivacyModal />
                <SmallRefundModal />
                <SmallShippingModal />
                <SmallContactModal />
            </div>


        </div>
    )
}

export default SmallMarketPageMainContent;