import {searchPlaceholderList} from "../../utils/data.ts";
import {useEffect, useState} from "react";
import {useHomeBanner} from "../../hooks/useHomeBanner.ts";
import SmallPicRow from "./SmallPicRow.tsx";
import SvgIcons from "../common/SvgIcons.tsx";
import ShopPay from "../../assets/ShopPay.svg"


const SmallHomePageMainContent = () => {

    const [data, setData] = useState("");

    const [searchIndex, setSearchIndex] = useState<number>(0);

    const {data: homeBannerData={msg: "", data: []}} = useHomeBanner();

    useEffect(() => {
        const timeId = setInterval(() => {
            setSearchIndex(i => {
                if(i===searchPlaceholderList.length-1) {
                    setTimeout(() => {
                        setSearchIndex(0);
                    }, 350)
                }
                return i + 1;
            })
        }, 2000)
        return () => clearInterval(timeId);
    }, []);

    return (
        <div className="md:hidden">
            <div className="mt-12 flex flex-col gap-6">

                <SvgIcons.MainContentLogo className="w-32 h-12 self-center" />

                <form className="px-4 rounded-3xl"
                      method="GET" action="search">

                    <div className="relative flex items-center p-3 bg-[rgb(242_244_245)] rounded-2xl overflow-hidden">
                        <SvgIcons.Search className="size-5 mr-2 text-neutral-500" />
                        <input type="search" autoComplete="off"
                               className="relative z-10 flex-grow-[1] bg-transparent focus:outline-none"
                               value={data} name="query"
                               onChange={(e) => setData(e.target.value)}
                        />

                        {/*very huge height placeholder list*/}
                        <div className={`absolute text-[18px] text-gray-400 left-10
                            ${searchIndex === 0 ? "" : "duration-300"}
                            ${data !== "" ? "hidden" : ""}`}
                             style={{top: `calc(-16.5px - ${searchIndex * 27}px)`}}
                        >
                            <p className="opacity-0">{searchPlaceholderList[searchPlaceholderList.length - 1]}</p>
                            {
                                searchPlaceholderList.map((s, i) => (
                                    <p key={i}
                                       className={`${searchIndex === 0 ? "" : "duration-300"} ${searchIndex === i ? "opacity-100" : "opacity-0"}`}>{s}</p>
                                ))
                            }
                            <p className={`${searchIndex === 0 ? "" : "duration-300"} ${searchIndex === searchPlaceholderList.length ? "opacity-100" : "opacity-0"}`}>{searchPlaceholderList[0]}</p>
                            <p className="opacity-0">{searchPlaceholderList[1]}</p>

                        </div>
                    </div>
                </form>
                <div className="flex justify-center gap-1">
                    <p className="text-[rgb(111_112_113)] text-[12px] font-medium">Fast & secure checkout with</p>
                    <img src={ShopPay} alt="ShopPay" className="mt-[2px]"/>
                </div>

                <div className="flex flex-col gap-3 overflow-hidden">
                    <SmallPicRow data={{
                        data: homeBannerData?.data.slice(0, Math.floor(homeBannerData?.data.length/2)),
                        isDirectionToRight: true,
                    }}/>
                    <SmallPicRow data={{
                        data: homeBannerData?.data.slice(Math.floor(homeBannerData?.data.length/2)),
                        isDirectionToRight: false,
                    }}/>
                </div>
            </div>
        </div>
    )
}

export default SmallHomePageMainContent;