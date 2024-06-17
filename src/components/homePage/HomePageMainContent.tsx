import PicRow from "./PicRow.tsx";
import {row0, row1, row2, searchPlaceholderList} from "../../utils/data.ts";
import MainContentLogo from "../../assets/HomePage/MainContentLogo.svg"
import Search from "../../assets/HomePage/Search.svg"
import {useEffect, useState} from "react";


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


    return (
        <div className="overflow-hidden relative">
            <div className="flex flex-col gap-4">
                <PicRow data={row0} />
                <PicRow data={row1} />
                <PicRow data={row2} />
            </div>

            <div
                className="absolute z-10 left-1/2 top-[calc(24%+2px)] -translate-x-1/2 flex flex-col items-center justify-center pointer-events-none gap-12">

                <div className="z-[-1] absolute top-[-536px] size-[800px]
                bg-[radial-gradient(50%_50%_at_50%_50%,color(display-p3_1_1_1)_55.89%,color(display-p3_1_1_1_/_0.00)_100%)]
                "></div>

                <img src={MainContentLogo} alt="MainContentLogo" className="h-[72px] pointer-events-auto"/>

                <form method="GET" action="/search">

                    <div className="rounded-3xl p-[10px]  pointer-events-auto bg-neutral-300 bg-opacity-70">
                        <div className="relative flex items-center w-[530px] p-3 bg-white rounded-2xl overflow-hidden">
                            <img src={Search} alt="Search" className="w-5 mr-2"/>
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
                    </div>

                </form>
            </div>
        </div>
    )
}

export default HomePageMainContent;