import navCart from "../../assets/HomePage/navCart.svg"
import navLogo from "../../assets/HomePage/navLogo.svg"
import Search from "../../assets/HomePage/Search.svg";
import {useEffect, useState} from "react";
import {searchPlaceholderList} from "../../utils/data.ts";
import {useSearchInfoStore} from "../../hooks/useSearchInfoStore.ts";
import {getParamFromURL} from "../../utils/searchPageUtils.ts";
import LikeAnchor from "../common/LikeAnchor.tsx";
import LogoutModal from "../LogoutModal.tsx";
import useCartInfoStore from "../../hooks/useCartInfoStore.ts";
import useUserInfoStore from "../../hooks/useUserInfoStore.ts";


const NavBarSearchPage = () => {

    const [searchIndex, setSearchIndex] = useState<number>(0);
    const [queryFormControl, setQueryFormControl] = useState(getParamFromURL("query")||"");

    const {setQuery} = useSearchInfoStore();
    const {cartAmount} = useCartInfoStore();
    const {email, toggleLogoutModalOpen, openSignInModal} = useUserInfoStore();

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
                                className="cursor-pointer size-11 ml-2 rounded-[999px] grid place-items-center bg-white hover:bg-[rgb(242_244_245)]">
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
            <div
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[25%] flex items-center  bg-neutral-100 rounded-2xl p-3 transition-all duration-200`}>
                <img src={Search} alt="Search" className="w-5 mr-2"/>
                <form method="GET" className="flex-1" onSubmit={(e) => {
                    e.preventDefault();
                    if (queryFormControl !== "") {
                        setQuery(queryFormControl);
                    }
                }}>
                    <input type="search" autoComplete="off"
                           className="relative w-full z-10 bg-transparent focus:outline-none"
                           value={queryFormControl}
                           onChange={(e) => setQueryFormControl(e.target.value)}
                    />
                </form>
                <div className={`absolute text-[16px] text-gray-400 left-10 pointer-events-none
                       ${searchIndex === 0 ? "" : "duration-300"}
                        ${queryFormControl !== "" ? "hidden" : ""}`}
                     style={{top: `calc(-12px - ${searchIndex * 24}px)`}}
                >
                    <p className="opacity-0">{searchPlaceholderList[searchPlaceholderList.length - 1]}</p>
                    {
                        searchPlaceholderList.map((s, i) => (
                            <p key={i}
                               className={`text-nowrap ${searchIndex === 0 ? "" : "duration-300"} ${searchIndex === i ? "opacity-100" : "opacity-0"}`}>{s}</p>
                        ))
                    }
                    <p className={`${searchIndex === 0 ? "" : "duration-300"} ${searchIndex === searchPlaceholderList.length ? "opacity-100" : "opacity-0"}`}>{searchPlaceholderList[0]}</p>
                    <p className="opacity-0">{searchPlaceholderList[1]}</p>

                </div>
            </div>
        </header>
    )
}


export default NavBarSearchPage;