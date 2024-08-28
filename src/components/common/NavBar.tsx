import {useState} from "react";
import useCartInfoStore from "../../hooks/useCartInfoStore.ts";
import LogoutModal from "./LogoutModal.tsx";
import useUserInfoStore from "../../hooks/useUserInfoStore.ts";
import LikeAnchor from "./LikeAnchor.tsx";
import PlaceholderList from "./PlaceholderList.tsx";
import SvgIcons from "./SvgIcons.tsx";


const NavBar = () => {

    const [searchValue, setSearchValue] = useState("");
    const {email, toggleLogoutModalOpen, openSignInModal, logoutModalOpen} = useUserInfoStore();
    const {cartAmount} = useCartInfoStore();


    return (
        <header className="hidden md:flex sticky top-0 left-0 z-50 bg-white justify-between items-center p-4">

            {/*shop logo*/}
            <a href="./">
                <SvgIcons.NavLogo className="h-[30px]" />
            </a>

            {/*like and cart link*/}
            <div className="flex items-center gap-1">
                <LikeAnchor/>
                <a href="./cart" className="relative p-[10px] rounded-[22px] hover:bg-neutral-100">
                    <SvgIcons.Cart className="size-6" />
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
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 overflow-hidden flex items-center  bg-neutral-100 rounded-2xl p-3 transition-all duration-200`}>
                <SvgIcons.Search className="size-5 mr-2 text-neutral-400" />
                <form method="GET" action="search" className="relative z-10 flex-1">
                    <input type="search" autoComplete="off"
                           className="w-full bg-transparent focus:outline-none"
                           value={searchValue}
                           name="query"
                           onChange={(e) => setSearchValue(e.target.value)}
                    />
                </form>

                <PlaceholderList isVisible={searchValue===""} left={40} />

            </div>
        </header>
    )
}

export default NavBar;