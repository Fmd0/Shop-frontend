import useMarketInfoStore from "../../hooks/useMarketInfoStore.ts";
import privacyPolicy from "../../assets/MarketPage/privacyPolicy.svg"
import refundPolicy from "../../assets/MarketPage/refundPolicy.svg"
import shippingPolicy from "../../assets/MarketPage/shippingPolicy.svg"
import contact from "../../assets/MarketPage/contact.svg"



const MoreInfoModal = () => {
    const {marketInfo, moreInfoOpen, openContactModalOpen, openPrivacyModalOpen} = useMarketInfoStore();

    return (
        <div className={`bg-white text-black rounded-xl absolute top-[calc(100%+5px)] left-1/2 -translate-x-1/2 p-2 text-nowrap w-max
        border-[#0000001a] border-[0.5px] text-[16px] tracking-[0.15px] font-normal flex flex-col
        shadow-[0_4px_6px_-1px_#0000001a]
        ${moreInfoOpen?"":"hidden"}
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
                    <button type="button" className="flex flex-row items-center gap-2 p-3 rounded-xl duration-300 hover:bg-[#0000001a]">
                        <img src={refundPolicy} alt="refundPolicy" className="w-5 h-5 object-cover"/>
                        <p>Refund policy</p>
                    </button>
                )
            }
            {
                marketInfo?.shippingPolicy && marketInfo.shippingPolicy!==""&& (
                    <button type="button" className="flex flex-row items-center gap-2 p-3 rounded-xl duration-300 hover:bg-[#0000001a]">
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