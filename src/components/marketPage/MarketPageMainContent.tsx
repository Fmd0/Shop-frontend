import blackLink from "../../assets/MarketPage/blackLink.svg"
import whiteLink from "../../assets/MarketPage/whiteLink.svg"
import {useEffect} from "react";
import useMarketInfoStore from "../../hooks/useMarketInfoStore.ts";
import MoreInfoModal from "./MoreInfoModal.tsx";
import useMarketPageCommodityInfoStore from "../../hooks/useMarketPageCommodityInfoStore.ts";


const MarketPageMainContent = () => {

    const {marketInfo, setMarketInfo} = useMarketInfoStore();
    const {toggleMoreInfoModalOpen} = useMarketPageCommodityInfoStore();
    const id = (new URLSearchParams(window.location.search)).get('id')||"";


    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_ADDRESS}/api/market/${id}`)
            .then(res => res.json())
            .then(data => {
                setMarketInfo(data?.data||null);
            })
            .catch(error => console.log(error));
    }, [id]);


    if((!marketInfo?.bigLogo || marketInfo?.bigLogo === "") && (
        !marketInfo?.bigPic || marketInfo?.bigPic === ""
    )) {
        return (
            <main className="max-w-[1144px] mx-auto w-[80%] grid grid-cols-[40fr_55fr] gap-10 p-4 rounded-3xl items-center mt-8">
                <div className="flex flex-col gap-4 text-[14px]">
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
                            <img src={blackLink} alt="link" className="text-black w-4 object-cover"/>
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
            </main>
        )
    }


    return (
        <main className="max-w-[1144px] mx-auto w-[80%] grid grid-cols-[40fr_55fr] gap-10 p-8 rounded-[36px] items-center mt-4"
              style={{
                backgroundColor: marketInfo?.bigLogoBgColor || "",
                color: marketInfo?.bigLogoFontColor || "",
              }}>
            <div className="flex flex-col gap-4 p-10 text-[14px]">
                {
                    marketInfo?.bigLogo && marketInfo?.bigLogo !== "" ?
                        <img src={marketInfo.bigLogo || ""} alt="logo"
                             className="max-w-[200px] max-h-[80px] object-contain"/> :
                        marketInfo?.icon && marketInfo.icon !== "" &&
                        <img src={marketInfo.icon} alt="icon"
                             className="w-[56px] h-[56px] rounded-xl object-contain"/>
                }
                <p className="cursor-pointer text-[12px] font-semibold">{marketInfo?.rating || ""}★({marketInfo?.ratingAmount || ""})</p>
                <p className="tracking-[0.15px]">{marketInfo?.description || ""}</p>
                <div className="flex flex-row gap-3 flex-wrap">
                    <div className="relative cursor-pointer px-3 text-center w-[88px] py-2 font-semibold rounded-xl group/link"
                            style={{
                                backgroundColor: marketInfo.bigLogoFontColor,
                                color: marketInfo.bigLogoFontColor==="black" ? "white" : "black"
                            }}
                    >
                        Follow
                        <div className={`absolute inset-0 rounded-xl ${marketInfo.bigLogoFontColor !== "black" ? "bg-[rgba(0,0,0,.1)]" : "bg-[rgba(255,255,255,.18)]"} duration-300 opacity-0 group-hover/link:opacity-100`}></div>
                    </div>

                    {/*website link*/}
                    <a className="relative border-[1px] px-3 text-center py-2 rounded-xl font-semibold flex items-center gap-[2px] group/link"
                       href={marketInfo?.website || ""} target="_blank"
                       style={{
                           borderColor: marketInfo.bigLogoFontColor === "black"?"rgb(10 10 10 / 0.5)":"rgb(245 245 245 / 0.5)"
                       }}>
                        {
                            marketInfo.bigLogoFontColor === "black"
                                ? <img src={blackLink} alt="link" className="w-4 object-cover"/>
                                : <img src={whiteLink} alt="link" className="w-4 object-cover"/>
                        }
                        {marketInfo?.website?.replace("https://", "").replace("/", "") || ""}
                        <div className={`absolute rounded-xl inset-0 ${marketInfo.bigLogoFontColor==="black"?"bg-[rgba(0,0,0,.08)]":"bg-[rgba(255,255,255,.08)]"} duration-200 opacity-0 group-hover/link:opacity-100`}></div>
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
                    marketInfo?.bigPic && marketInfo.bigPic!=="" &&
                    <img src={marketInfo.bigPic} alt="bigPic" className="w-full h-[350px] object-cover"/>
                }
            </div>
        </main>
    )
}


export default MarketPageMainContent