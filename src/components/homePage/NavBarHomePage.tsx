import navCart from "../../assets/HomePage/navCart.svg"
import navLogo from "../../assets/HomePage/navLogo.svg"
import { useEffect, useState} from "react";
import Search from "../../assets/HomePage/Search.svg";
import useUserInfoStore from "../../hooks/useUserInfoStore.ts";
import LogoutModal from "../common/LogoutModal.tsx";
import useCartInfoStore from "../../hooks/useCartInfoStore.ts";
import LikeAnchor from "../common/LikeAnchor.tsx";
import PlaceholderList from "../common/PlaceholderList.tsx";


const NavBarHomePage = () => {

    const [show, setShow] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const {email, openSignInModal, toggleLogoutModalOpen, logoutModalOpen} = useUserInfoStore();
    const {cartAmount} = useCartInfoStore();

    // show search input
    useEffect(() => {
        const TopOffset = 370;
        let ignore = false;
        if(window.scrollY >= TopOffset) {
            setShow(true);
        }
        const  handleScroll = () => {
            if(ignore) return;
            ignore = true;
            setTimeout(() => {
                ignore = false;
                if(window.scrollY >= TopOffset) {
                    setShow(true);
                }
                else {
                    setShow(false);
                }
            }, 300)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <header className="hidden md:flex sticky top-0 left-0 z-50 bg-white justify-between items-center p-4">

            <a href="/">
                <img src={navLogo} alt="navLogo" className={`h-[30px] text-purple-600 transition-all duration-200
                ${show ? "opacity-100" : "opacity-0"}
            `}/>
            </a>

            <div className="flex items-center gap-1">
                <LikeAnchor />
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
                                className={`cursor-pointer size-11 ml-2 rounded-[999px] grid place-items-center bg-white hover:bg-[rgb(242_244_245)] ${logoutModalOpen?"outline outline-2 outline-blue-600 -outline-offset-1":""}`}>
                                <div className="w-8 h-8 bg-[rgb(242_244_245)] rounded-[999px] grid place-items-center border-[rgb(225_228_229)] border-[1px]"
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

            {/*search input and placeholder list*/}
            <div className={`absolute overflow-hidden top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 flex items-center  bg-neutral-100 rounded-2xl p-3 transition-all duration-200
            ${show ? "opacity-100" : "opacity-0"}
            `}>
                <img src={Search} alt="Search" className="w-5 mr-2"/>
                <form action="/search" className="flex-1">
                    <input type="search" autoComplete="off" name="query"
                           className="relative z-10 w-full bg-transparent focus:outline-none"
                           value={searchValue}
                           onChange={(e) => setSearchValue(e.target.value)}
                    />
                </form>
                <PlaceholderList isVisible={searchValue===""} left={40} />
            </div>
        </header>
    )
}

export default NavBarHomePage;