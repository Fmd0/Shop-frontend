import useMarketInfoStore from "../../hooks/useMarketInfoStore.ts";
import privacyPolicy from "../../assets/MarketPage/privacyPolicy.svg"
import refundPolicy from "../../assets/MarketPage/refundPolicy.svg"
import shippingPolicy from "../../assets/MarketPage/shippingPolicy.svg"
import contact from "../../assets/MarketPage/contact.svg"
import useMarketPageCommodityInfoStore from "../../hooks/useMarketPageCommodityInfoStore.ts";
import useMarketInfo from "../../hooks/useMarketInfo.ts";



const MoreInfoModal = () => {
    const id = new URLSearchParams(window.location.search).get('id')||"";
    const {data:{data: marketInfo}={data: null}, error} = useMarketInfo(id);

    const { openContactModalOpen, openPrivacyModalOpen, openRefundModalOpen, openShippingModalOpen} = useMarketInfoStore();
    const {moreInfoModalOpen} = useMarketPageCommodityInfoStore();

    if(error) {
        return null;
    }

    return (
        <div className={`bg-white text-black rounded-xl absolute z-10 top-[calc(100%+5px)] left-1/2 -translate-x-1/2 p-2 text-nowrap min-w-max w-48
        border-[#0000001a] border-[0.5px] text-[16px] tracking-[0.15px] font-normal flex flex-col
        shadow-[0px_0px_16px_rgba(0,0,0,0.1)]
        ${moreInfoModalOpen?"":"hidden"}
        `}>
            {
                marketInfo?.privacyPolicy&&marketInfo.privacyPolicy!==""&& (
                    <button type="button" className="flex flex-row items-center gap-2 p-3 rounded-xl duration-300 hover:bg-[#0000001a]"
                            onClick={openPrivacyModalOpen}
                    >
                        <img src={privacyPolicy} alt="privacyPolicy" className="w-5 h-5 object-cover"/>
                        <p>Privacy policy</p>
                    </button>
                )
            }
            {
                marketInfo?.refundPolicy && marketInfo.refundPolicy!==""&& (
                    <button type="button" className="flex flex-row items-center gap-2 p-3 rounded-xl duration-300 hover:bg-[#0000001a]"
                            onClick={openRefundModalOpen}
                    >
                        <img src={refundPolicy} alt="refundPolicy" className="w-5 h-5 object-cover"/>
                        <p>Refund policy</p>
                    </button>
                )
            }
            {
                marketInfo?.shippingPolicy && marketInfo.shippingPolicy!==""&& (
                    <button type="button" className="flex flex-row items-center gap-2 p-3 rounded-xl duration-300 hover:bg-[#0000001a]"
                            onClick={openShippingModalOpen}
                    >
                        <img src={shippingPolicy} alt="shippingPolicy" className="w-5 h-5 object-cover"/>
                        <p>Shipping policy</p>
                    </button>
                )
            }

            <button type="button" className="flex flex-row items-center gap-2 p-3 rounded-xl duration-300 hover:bg-[#0000001a]"
                    onClick={openContactModalOpen}
            >
                <img src={contact} alt="contact" className="w-5 h-5 object-cover"/>
                <p>Contact {marketInfo?.name||""}</p>
            </button>
        </div>
    )
}

export default MoreInfoModal