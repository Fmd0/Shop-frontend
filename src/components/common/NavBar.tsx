import navCart from "../../assets/HomePage/navCart.svg"
import navLogo from "../../assets/HomePage/navLogo.svg"
import Search from "../../assets/HomePage/Search.svg";
import {useEffect, useState} from "react";
import {searchPlaceholderList} from "../../utils/data.ts";
import useCartInfoStore from "../../hooks/useCartInfoStore.ts";
import LogoutModal from "./LogoutModal.tsx";
import useUserInfoStore from "../../hooks/useUserInfoStore.ts";
import LikeAnchor from "./LikeAnchor.tsx";


const NavBar = () => {

    const [searchValue, setSearchValue] = useState("");
    const [placeholderListIndex, setPlaceholderListIndex] = useState<number>(0);
    const {email, toggleLogoutModalOpen, openSignInModal, logoutModalOpen} = useUserInfoStore();
    const {cartAmount} = useCartInfoStore();


    useEffect(() => {
        const timeId = setInterval(() => {
            setPlaceholderListIndex(i => {
                if(i===searchPlaceholderList.length-1) {
                    setTimeout(() => {
                        setPlaceholderListIndex(0);
                    }, 350)
                }
                return i + 1;
            })
        }, 2000)
        return () => clearInterval(timeId);
    }, []);

    return (
        <header className="hidden md:flex sticky top-0 left-0 z-50 bg-white justify-between items-center p-4">

            {/*shop logo*/}
            <a href="/">
                <img src={navLogo} alt="navLogo" className={`h-[30px] text-purple-600 transition-all duration-200`}/>
            </a>

            {/*like and cart link*/}
            <div className="flex items-center gap-1">
                <LikeAnchor/>
                <a href="/cart" className="relative p-[10px] rounded-[22px] hover:bg-neutral-100">
                    <img src={navCart} alt="navCart" className="w-6"/>
                    {
                        cartAmount !== 0 &&
                        <p className="absolute right-1 top-1 w-4 h-4 rounded-[999px] bg-[rgb(84_51_235)] text-white text-[10px] grid place-items-center">{cartAmount}</p>
                    }
                </a>
                {
                    email !== ""
                        ? <div className="relative" onClick={e => e.stopPropagation()}>

                            <div
                                className={`cursor-pointer size-11 ml-2 rounded-[999px] grid place-items-center bg-white hover:bg-[rgb(242_244_245)] ${logoutModalOpen ? "outline outline-2 outline-blue-600 -outline-offset-1" : ""}`}>
                                <div
                                    className="w-8 h-8 bg-[rgb(242_244_245)] rounded-[999px] grid place-items-center border-[rgb(225_228_229)] border-[1px]"
                                    onClick={toggleLogoutModalOpen}>
                                    {email[0]}
                                </div>
                            </div>

                            <LogoutModal/>
                        </div>
                        : <div
                            className="cursor-pointer ml-4 bg-neutral-100 text-black text-[14px] py-2 px-3 rounded-lg font-semibold hover:bg-neutral-200"
                            onClick={openSignInModal}>
                            Sign In
                        </div>
                }
            </div>

            {/*center search and placeholder list*/}
            <div
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[25%] flex items-center  bg-neutral-100 rounded-2xl p-3 transition-all duration-200`}>
                <img src={Search} alt="Search" className="w-5 mr-2"/>
                <form method="GET" action="/search" className="relative z-10 flex-1">
                    <input type="search" autoComplete="off"
                           className="w-full bg-transparent focus:outline-none"
                           value={searchValue}
                           name="query"
                           onChange={(e) => setSearchValue(e.target.value)}
                    />
                </form>

                {/*placeholder list animation*/}
                <div className={`absolute text-[16px] text-gray-400 left-10 pointer-events-none
                       ${placeholderListIndex === 0 ? "" : "duration-300"}
                        ${searchValue !== "" ? "hidden" : ""}`}
                     style={{top: `calc(-12px - ${placeholderListIndex * 24}px)`}}
                >
                    <p className="opacity-0">{searchPlaceholderList[searchPlaceholderList.length - 1]}</p>
                    {
                        searchPlaceholderList.map((s, i) => (
                            <p key={i}
                               className={`text-nowrap ${placeholderListIndex === 0 ? "" : "duration-300"} ${placeholderListIndex === i ? "opacity-100" : "opacity-0"}`}>{s}</p>
                        ))
                    }
                    <p className={`${placeholderListIndex === 0 ? "" : "duration-300"} ${placeholderListIndex === searchPlaceholderList.length ? "opacity-100" : "opacity-0"}`}>{searchPlaceholderList[0]}</p>
                    <p className="opacity-0">{searchPlaceholderList[1]}</p>
                </div>
            </div>
        </header>
    )
}

export default NavBar;