import navLike from "../assets/HomePage/navLike.svg"
import navCart from "../assets/HomePage/navCart.svg"
import navLogo from "../assets/HomePage/navLogo.svg"
import Search from "../assets/HomePage/Search.svg";


import {useEffect, useState} from "react";
import {searchPlaceholderList} from "../utils/data.ts";


const HomePageNav = () => {

    const [data, setData] = useState("");
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
        <header className="sticky top-0 left-0 z-50 bg-white flex justify-between items-center p-4">

            <a href="/">
                <img src={navLogo} alt="navLogo" className={`h-[30px] text-purple-600 transition-all duration-200`}/>
            </a>

            <div className="flex items-center">
                <a href="#" className="p-[10px] mr-1 rounded-[22px] hover:bg-neutral-100">
                    <img src={navLike} alt="navLike" className="w-6"/>
                </a>
                <a href="#" className="p-[10px] mr-4 rounded-[22px] hover:bg-neutral-100">
                    <img src={navCart} alt="navCart" className="w-6"/>
                </a>
                <a className="cursor-pointer bg-neutral-100 text-black text-[14px] py-2 px-3 rounded-lg font-semibold
                    hover:bg-neutral-200">
                    Sign In
                </a>
            </div>

            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[25%] flex items-center  bg-neutral-100 rounded-2xl p-3 transition-all duration-200`}>
                <img src={Search} alt="Search" className="w-5 mr-2"/>
                <input type="search" autoComplete="off" className="relative z-10 flex-grow-[1] bg-transparent focus:outline-none"
                       value={data}
                       onChange={(e) => setData(e.target.value)}
                />
                <div className={`absolute text-[16px] text-gray-400 left-10
                       ${searchIndex === 0 ? "" : "duration-300"}
                        ${data !== "" ? "hidden" : ""}`}
                     style={{top: `calc(-12px - ${searchIndex * 24}px)`}}
                >
                    <p className="opacity-0">{searchPlaceholderList[searchPlaceholderList.length - 1]}</p>
                    {
                        searchPlaceholderList.map((s, i) => (
                            <p key={i} className={`${searchIndex === 0 ? "" : "duration-300"} ${searchIndex === i ? "opacity-100" : "opacity-0"}`}>{s}</p>
                        ))
                    }
                    <p className={`${searchIndex === 0 ? "" : "duration-300"} ${searchIndex === searchPlaceholderList.length ? "opacity-100" : "opacity-0"}`}>{searchPlaceholderList[0]}</p>
                    <p className="opacity-0">{searchPlaceholderList[1]}</p>

                </div>
            </div>
        </header>
    )
}

export default HomePageNav;