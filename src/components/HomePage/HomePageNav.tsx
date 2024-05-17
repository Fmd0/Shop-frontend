import navLike from "../../assets/HomePage/navLike.svg"
import navCart from "../../assets/HomePage/navCart.svg"


const HomePageNav = () => {
    return (
        <header className="sticky top-0 left-0 z-50 bg-white flex justify-end items-center p-4">
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
        </header>
    )
}

export default HomePageNav;