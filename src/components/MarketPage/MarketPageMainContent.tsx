import blackLink from "../../assets/MarketPage/blackLink.svg"
import whiteLink from "../../assets/MarketPage/whiteLink.svg"
import {useEffect} from "react";
import useMarketInfoStore from "../../hooks/useMarketInfoStore.ts";
import MoreInfoModal from "./MoreInfoModal.tsx";


const MarketPageMainContent = ({id}: {
    id: string;
}) => {

    const {marketInfo, setMarketInfo, toggleMoreInfoOpen} = useMarketInfoStore();

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
                            <img src={marketInfo?.icon || ""} alt="icon" className="w-full h-full object-contain"/>
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
                        <a className="border-black border-[0.5px] px-3 text-center py-2 rounded-[10px] font-semibold flex items-center gap-[2px] duration-200 hover:bg-[rgba(0,0,0,.1)]"
                           href={marketInfo?.website||""} target="_blank">
                            <img src={blackLink} alt="link" className="text-black w-4 object-cover"/>
                            {marketInfo?.website?.replace("https://", "").replace("/", "") || ""}
                        </a>

                        <div className="relative">
                            <button type="button"
                                    className="border-black border-[0.5px] px-3 text-center py-2 font-extrabold rounded-xl duration-200 hover:bg-[rgba(0,0,0,.1)]"
                                    onClick={toggleMoreInfoOpen}>
                                ···
                            </button>
                            <MoreInfoModal/>
                        </div>
                    </div>
                </div>
                <div className="rounded-2xl overflow-hidden">
                    {
                        marketInfo?.bigPic &&
                        <img src={marketInfo?.bigPic || ""} alt="bigPic" className="w-full object-cover"/>
                    }
                </div>
            </main>
        )
    }


    return (
        <main
            className="max-w-[1144px] mx-auto w-[80%] grid grid-cols-[40fr_55fr] gap-10 p-8 rounded-3xl items-center mt-8"
            style={{
                backgroundColor: marketInfo?.bigLogoBgColor || "",
                color: marketInfo?.bigLogoFontColor || "",
            }}
        >
            <div className="flex flex-col gap-4 p-10 text-[14px]">
                <div className="max-w-[200px] max-h-[80px]">
                    {
                        marketInfo?.bigLogo && marketInfo?.bigLogo !== "" ?
                            <img src={marketInfo.bigLogo || ""} alt="logo"
                                 className="rounded-xl object-contain"/> :
                            <img src={marketInfo?.icon || ""} alt="icon"
                                 className="rounded-xl object-contain"/>
                    }
                </div>
                <p className="cursor-pointer text-[12px] font-semibold">{marketInfo?.rating || ""}★({marketInfo?.ratingAmount || ""})</p>
                <p className="tracking-[0.15px]">{marketInfo?.description || ""}</p>
                <div className="flex flex-row gap-3 flex-wrap">
                    <button type="button"
                            className="bg-white text-black px-3 text-center w-[88px] py-2 font-semibold rounded-xl">Follow
                    </button>
                    <button type="button"
                            className="border-white border-[0.5px] px-3 text-center py-2  rounded-xl flex items-center">
                        <img src={whiteLink} alt="link"/>
                        {marketInfo?.website?.replace("https://", "").replace("/", "") || ""}
                    </button>
                    <button type="button"
                            className="border-white border-[0.5px] px-3 text-center py-2 font-semibold rounded-xl">···
                    </button>
                </div>
            </div>
            <div className="rounded-2xl overflow-hidden">
                {
                    marketInfo?.bigPic &&
                    <img src={marketInfo?.bigPic || ""} alt="bigPic" className="w-full object-cover"/>
                }
            </div>
        </main>
    )
}


export default MarketPageMainContent