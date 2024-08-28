import PicRow from "./PicRow.tsx";
import { searchPlaceholderList} from "../../utils/data.ts";
import {useEffect, useState} from "react";
import {useHomeBanner} from "../../hooks/useHomeBanner.ts";
import SvgIcons from "../common/SvgIcons.tsx";


const HomePageMainContent = () => {

    const [data, setData] = useState('')
    const [searchIndex, setSearchIndex] = useState<number>(0);

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

    const {data: homeBannerData={msg: "", data: []}} = useHomeBanner();

    return (
        <div className="hidden md:block overflow-hidden min-h-64 relative">
            <div className="flex flex-col gap-4 overflow-hidden">
                <PicRow data={{
                    data: homeBannerData?.data.filter(d => d.row === "ROW0"),
                    isDirectionToRight: true,
                }} />
                <PicRow data={{
                    data: homeBannerData?.data.filter(d => d.row === "ROW1"),
                    isDirectionToRight: false,
                }} />
                <PicRow data={{
                    data: homeBannerData?.data.filter(d => d.row === "ROW2"),
                    isDirectionToRight: true,
                }} />
            </div>

            <div className="pointer-events-none absolute z-10 left-0 right-0 top-[calc(24%+2px)] flex flex-col gap-12">

                {/*white fog*/}
                <div className="z-[-1] absolute top-[-536px] size-[800px] left-1/2 -translate-x-1/2
                bg-[radial-gradient(50%_50%_at_50%_50%,color(display-p3_1_1_1)_55.89%,color(display-p3_1_1_1_/_0.00)_100%)]
                "></div>

                <SvgIcons.MainContentLogo className="w-[173.14px] h-[72px] self-center pointer-events-auto" />

                <form method="GET" action="search" className="pointer-events-auto self-center bg-neutral-300 bg-opacity-70 w-full max-w-[530px] mx-4 p-3 rounded-3xl">

                        <div className="relative flex items-center p-3 bg-white rounded-2xl overflow-hidden">
                            <SvgIcons.Search className="size-5 mr-2 text-neutral-500" />
                            <input type="search" autoComplete="off"
                                   className="relative z-10 flex-grow-[1] bg-transparent focus:outline-none"
                                   value={data} name="query"
                                   onChange={(e) => setData(e.target.value)}
                            />

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
            </div>
        </div>
    )
}

export default HomePageMainContent;