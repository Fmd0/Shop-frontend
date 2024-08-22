import useMarketInfoStore from "../../hooks/useMarketInfoStore.ts";
import useMarketPageCommodityInfoStore from "../../hooks/useMarketPageCommodityInfoStore.ts";
import useMarketInfo from "../../hooks/useMarketInfo.ts";
import SvgIcons from "../common/SvgIcons.tsx";



const SmallMoreInfoModal = () => {
    const id = new URLSearchParams(window.location.search).get('id')||"";
    const {data:{data: marketInfo}={data: null}} = useMarketInfo(id);

    const { openContactModalOpen, openPrivacyModalOpen, openRefundModalOpen, openShippingModalOpen} = useMarketInfoStore();
    const {
        moreInfoModalOpen: modalOpen,
        toggleMoreInfoModalOpen: toggleModalOpen
    } = useMarketPageCommodityInfoStore();


    return (
        <div
            className={`touch-none fixed z-50 inset-0 bg-[rgba(0,0,0,0.4)] text-[16px] text-nowrap font-medium duration-200 transform-gpu md:hidden ${modalOpen ? "opacity-100" : "opacity-0 pointer-events-none"} font-normal`}
            onClick={(event) => {
                event.stopPropagation();
                toggleModalOpen();}}>
            <div
                className={`fixed bottom-4 left-4 right-4 bg-white px-2 py-6 rounded-3xl transform-gpu duration-200 ${modalOpen ? "translate-y-0" : "translate-y-full"}`}
                onClick={e => e.stopPropagation()}>


                <div className="px-3 flex flex-row items-center justify-between">

                    <div className="flex flex-row items-center gap-3">
                        {
                            marketInfo?.icon && marketInfo.icon !== "" &&
                            <div className="relative size-11 rounded-xl overflow-hidden">
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

                    <button type="button" onClick={toggleModalOpen}>
                        <SvgIcons.Close className="size-5 text-[rgb(111_112_113)]" />
                    </button>
                </div>

                <p className="text-[14px] font-normal px-3 py-4 text-wrap">{marketInfo?.description || ""}</p>


                {
                    marketInfo?.website && marketInfo.website !== "" &&
                    <a className="p-3 rounded-[10px] flex items-center gap-2 duration-200 hover:bg-[rgba(0,0,0,.1)]"
                       href={marketInfo.website} target="_blank">
                        <SvgIcons.Link className="size-5" />
                        {marketInfo.website.replace("https://", "").replace("/", "")}
                    </a>

                }


                {
                    marketInfo?.privacyPolicy && marketInfo.privacyPolicy !== "" && (
                        <button type="button" className="w-full flex flex-row items-center gap-2 p-3 rounded-xl duration-300 hover:bg-[#0000001a]"
                                onClick={openPrivacyModalOpen}>
                            <SvgIcons.PrivacyPolicy className="object-contain size-5"/>
                            <p>Privacy policy</p>
                        </button>
                    )
                }
                {
                    marketInfo?.refundPolicy && marketInfo.refundPolicy !== "" && (
                        <button type="button" className="w-full flex flex-row items-center gap-2 p-3 rounded-xl duration-300 hover:bg-[#0000001a]"
                                onClick={openRefundModalOpen}>
                            <SvgIcons.RefundPolicy className="object-contain size-5"/>
                            <p>Refund policy</p>
                        </button>
                    )
                }
                {
                    marketInfo?.shippingPolicy && marketInfo.shippingPolicy !== "" && (
                        <button type="button" className="w-full flex flex-row items-center gap-2 p-3 rounded-xl duration-300 hover:bg-[#0000001a]"
                                onClick={openShippingModalOpen}>
                            <SvgIcons.ShippingPolicy className="object-contain size-5"/>
                            <p>Shipping policy</p>
                        </button>
                    )
                }

                <button type="button"
                        className="w-full flex flex-row items-center gap-2 p-3 rounded-xl duration-300 hover:bg-[#0000001a]"
                        onClick={openContactModalOpen}
                >
                    <SvgIcons.Contact className="object-contain size-5"/>
                    <p>Contact {marketInfo?.name || ""}</p>
                </button>
            </div>


        </div>
    )
}

export default SmallMoreInfoModal;