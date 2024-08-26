import MoreInfoModal from "./MoreInfoModal.tsx";
import useMarketPageCommodityInfoStore from "../../hooks/useMarketPageCommodityInfoStore.ts";
import useMarketInfo from "../../hooks/useMarketInfo.ts";
import ContactModal from "../commonModal/ContactModal.tsx";
import useMarketInfoStore from "../../hooks/useMarketInfoStore.ts";
import PrivacyModal from "../commonModal/PrivacyModal.tsx";
import RefundModal from "../commonModal/RefundModal.tsx";
import ShippingModal from "../commonModal/ShippingModal.tsx";
import SvgIcons from "../common/SvgIcons.tsx";


const MarketPageMainContent = () => {

    const {
        toggleMoreInfoModalOpen,
    } = useMarketPageCommodityInfoStore();

    const {
        contactModalOpen,
        closeContactModalOpen,
        privacyModalOpen,
        closePrivacyModalOpen,
        refundModalOpen,
        closeRefundModalOpen,
        shippingModalOpen,
        closeShippingModalOpen
    } = useMarketInfoStore();

    const id = new URLSearchParams(window.location.search).get('id')||"";
    const {data:{data: marketInfo}={data: null}} = useMarketInfo(id);

    if((!marketInfo?.bigLogo || marketInfo?.bigLogo === "") && (
        !marketInfo?.bigPic || marketInfo?.bigPic === ""
    )) {
        return (
            <main className="hidden md:block max-w-[1144px] mx-auto p-4 rounded-3xl items-center mt-8">
                <div className="max-w-[800px] flex flex-col gap-4 text-[14px]">
                    <div className="flex flex-row items-center gap-4">
                        <div className="relative w-[56px] h-[56px] rounded-xl overflow-hidden">
                            {
                                marketInfo?.icon && marketInfo.icon !== "" &&
                                <img src={marketInfo.icon} alt="icon" className="w-full h-full object-contain"/>
                            }
                            <div className="absolute inset-0 bg-[#0000000a]"></div>
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold">{marketInfo?.name || ""}</h3>
                            <p className="cursor-pointer text-[12px] font-semibold">{marketInfo?.rating || ""}★({marketInfo?.ratingAmount || ""})</p>
                        </div>
                    </div>
                    <p className="tracking-[0.15px]">{marketInfo?.description || ""}</p>
                    <div className="flex flex-row gap-2 items-center flex-wrap">
                        <button type="button" className="bg-black text-white px-3 py-2 text-center w-[88px] rounded-[10px] duration-200 hover:bg-[rgba(0,0,0,.8)]">
                            Follow
                        </button>
                        <a className="border-neutral-400 border-[1px] px-3 text-center py-2 rounded-[10px] font-semibold flex items-center gap-[2px] duration-200 hover:bg-[rgba(0,0,0,.1)]"
                           href={marketInfo?.website||""} target="_blank">
                            <SvgIcons.Link className="size-4 text-black" />
                            {marketInfo?.website?.replace("https://", "").replace("/", "") || ""}
                        </a>

                        <div className="relative" onClick={e => e.stopPropagation()}>
                            <button type="button"
                                    className="border-neutral-400 border-[1px] px-3 text-center py-2 font-extrabold rounded-xl duration-200 hover:bg-[rgba(0,0,0,.1)]"
                                    onClick={toggleMoreInfoModalOpen}>
                                ···
                            </button>
                            <MoreInfoModal/>
                        </div>
                    </div>
                </div>
                <ContactModal data={marketInfo} modalOpen={contactModalOpen} closeModal={closeContactModalOpen} />
                <PrivacyModal data={marketInfo} modalOpen={privacyModalOpen} closeModal={closePrivacyModalOpen} />
                <RefundModal data={marketInfo} modalOpen={refundModalOpen} closeModal={closeRefundModalOpen} />
                <ShippingModal data={marketInfo} modalOpen={shippingModalOpen} closeModal={closeShippingModalOpen} />
             </main>
        )
    }


    return (
        <main className={`hidden md:block max-w-[1144px] mx-auto px-4 mt-4`}>

            <div className={`pl-10 py-10 pr-8 grid ${marketInfo.bigPic === "" ? "grid-cols-[65fr_35fr]" : "grid-cols-[45fr_55fr]"} items-center gap-10 rounded-[36px]`}
                 style={{
                     backgroundColor: marketInfo?.bigLogoBgColor || "",
                     color: marketInfo?.bigLogoFontColor || "",
                 }}
            >
                <div className="flex flex-col gap-4 text-[14px]">
                    {
                        marketInfo?.bigLogo && marketInfo?.bigLogo !== "" ?
                            <img src={marketInfo.bigLogo || ""} alt="logo"
                                 className="max-h-20 min-h-xl max-w-40 object-contain object-left"/> :
                            marketInfo?.icon && marketInfo.icon !== "" &&
                            <img src={marketInfo.icon} alt="icon"
                                 className="w-[56px] h-[56px] rounded-xl object-contain"/>
                    }
                    <p className="cursor-pointer text-[12px] font-semibold">{marketInfo?.rating || ""}★({marketInfo?.ratingAmount || ""})</p>
                    {
                        marketInfo?.description && marketInfo.description !== "" &&
                        <p className="tracking-[0.15px]">{marketInfo.description}</p>
                    }
                    <div className="flex flex-row gap-3 flex-wrap">
                        <div
                            className="relative cursor-pointer px-3 text-center w-[88px] py-2 font-semibold rounded-xl group/link"
                            style={{
                                backgroundColor: marketInfo.bigLogoFontColor,
                                color: marketInfo.bigLogoFontColor === "black" ? "white" : "black"
                            }}
                        >
                            Follow
                            <div
                                className={`absolute inset-0 rounded-xl ${marketInfo.bigLogoFontColor !== "black" ? "bg-[rgba(0,0,0,.1)]" : "bg-[rgba(255,255,255,.18)]"} duration-300 opacity-0 group-hover/link:opacity-100`}></div>
                        </div>

                        {/*website link*/}
                        <a className="relative border-[1px] px-3 text-center py-2 rounded-xl font-semibold flex items-center gap-[2px] group/link"
                           href={marketInfo?.website || ""} target="_blank"
                           style={{
                               borderColor: marketInfo.bigLogoFontColor === "black" ? "rgb(10 10 10 / 0.5)" : "rgb(245 245 245 / 0.5)"
                           }}>
                            {
                                marketInfo.bigLogoFontColor === "black"
                                    ? <SvgIcons.Link className="size-4 text-black" />
                                    : <SvgIcons.Link className="size-4 text-white" />

                            }
                            {marketInfo?.website?.replace("https://", "").replace("/", "") || ""}
                            <div
                                className={`absolute rounded-xl inset-0 ${marketInfo.bigLogoFontColor === "black" ? "bg-[rgba(0,0,0,.08)]" : "bg-[rgba(255,255,255,.08)]"} duration-200 opacity-0 group-hover/link:opacity-100`}></div>
                        </a>


                        {/*more info*/}
                        <div className="relative" onClick={e => e.stopPropagation()}>
                            <div className="relative cursor-pointer group/link">
                                <div onClick={toggleMoreInfoModalOpen}
                                     className="border-[1px] border-opacity-30 px-3 text-center rounded-xl py-2 duration-300 font-extrabold"
                                     style={{borderColor: marketInfo.bigLogoFontColor === "black" ? "rgb(10 10 10 / 0.5)" : "rgb(245 245 245 / 0.5)"}}
                                >
                                    ···
                                </div>
                                <div onClick={toggleMoreInfoModalOpen}
                                     className={`absolute inset-0 rounded-xl ${marketInfo.bigLogoFontColor === "black" ? "bg-[rgba(0,0,0,.08)]" : "bg-[rgba(255,255,255,.08)]"} duration-200 opacity-0 group-hover/link:opacity-100`}>
                                </div>
                            </div>
                            <MoreInfoModal/>
                        </div>


                    </div>
                </div>
                <div className="rounded-2xl overflow-hidden">
                    {
                        marketInfo?.bigPic && marketInfo.bigPic !== "" &&
                        <img src={marketInfo.bigPic} alt="bigPic" className="w-full h-[350px] object-cover"/>
                    }
                </div>
            </div>
            <ContactModal data={marketInfo} modalOpen={contactModalOpen} closeModal={closeContactModalOpen} />
            <PrivacyModal data={marketInfo} modalOpen={privacyModalOpen} closeModal={closePrivacyModalOpen} />
            <RefundModal data={marketInfo} modalOpen={refundModalOpen} closeModal={closeRefundModalOpen} />
            <ShippingModal data={marketInfo} modalOpen={shippingModalOpen} closeModal={closeShippingModalOpen} />
        </main>
    )
}


export default MarketPageMainContent