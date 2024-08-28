import useCartInfoStore from "../../hooks/useCartInfoStore.ts";
import useUserInfoStore from "../../hooks/useUserInfoStore.ts";


const SmallBottomSideBar = () => {

    const {cartAmount} = useCartInfoStore();
    const {
        email,
        openSignInModal,
        showSmallNavBar,
        openSmallLogoutModal
    } = useUserInfoStore();

    return (
        <nav className={`md:hidden duration-[250ms] ${showSmallNavBar?"translate-y-0":"translate-y-full"} fixed left-0 right-0 bottom-0 flex items-center justify-center bg-white z-10 border-t-[1px] border-[#0000001a]`}>

            {/*home button*/}
            <div className="cursor-pointer size-14 flex items-center justify-center">
                <a href="./">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                         className="size-6 text-[rgb(111_112_113)]" data-testid="icon-home" stroke="none">
                        <path
                            d="M5.00001 7.76141L12 2.75L19 7.76141M5.00001 7.76141V20H19V7.76141M5.00001 7.76141L2.5 9.55121M19 7.76141L21.5 9.55121"
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                </a>
            </div>

            {/*search button*/}
            <div className="cursor-pointer size-14 flex items-center justify-center">
                <a href="./search">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                         className="size-6 text-[rgb(111_112_113)]" data-testid="icon-search" stroke="none">
                        <path
                            d="M20 20L16.05 16.05M18 11C18 14.866 14.866 18 11 18C7.13401 18 4 14.866 4 11C4 7.13401 7.13401 4 11 4C14.866 4 18 7.13401 18 11Z"
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                    </svg>
                </a>
            </div>

            {/*cart button*/}
            <div className="cursor-pointer size-14 flex items-center justify-center">
                <a href="./cart" className="relative">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                         className="size-6 text-[rgb(111_112_113)]" data-testid="icon-cart-filled" stroke="none">
                        <path d="M19.1297 17.3512L20.7536 6.5249H5.05542L7.10589 17.3512H19.1297Z"></path>
                        <path
                            d="M1.0036 2.19434H4.2515L5.05542 6.5249M5.05542 6.5249L7.10589 17.3512H19.1297L20.7536 6.5249H5.05542Z"
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                            strokeLinejoin="round"></path>
                        <path
                            d="M7.22081 23.5556C8.10629 23.5556 8.82411 22.8378 8.82411 21.9524C8.82411 21.0669 8.10629 20.3491 7.22081 20.3491C6.33534 20.3491 5.61752 21.0669 5.61752 21.9524C5.61752 22.8378 6.33534 23.5556 7.22081 23.5556ZM17.7765 23.5556C18.662 23.5556 19.3798 22.8378 19.3798 21.9524C19.3798 21.0669 18.662 20.3491 17.7765 20.3491C16.891 20.3491 16.1732 21.0669 16.1732 21.9524C16.1732 22.8378 16.891 23.5556 17.7765 23.5556Z"
                            fill="currentColor" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round"
                            strokeLinejoin="round"></path>
                    </svg>
                    {
                        cartAmount !== 0 &&
                        <p className="absolute -right-1 -top-1 w-4 h-4 rounded-[999px] bg-[rgb(84_51_235)] text-white text-[10px] grid place-items-center">{cartAmount}</p>
                    }
                </a>
            </div>

            {/*user button*/}
            {
                email !== ""
                    ? <div className="cursor-pointer size-14 flex items-center justify-center" onClick={openSmallLogoutModal}>
                            <div className="size-8 bg-[rgb(242_244_245)] rounded-[999px] grid place-items-center border-[rgb(225_228_229)] border-[1px]">
                                {email[0]}
                            </div>
                        </div>
                    : <div className="cursor-pointer size-14 flex items-center justify-center" onClick={openSignInModal}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                             className="size-[25px] text-[rgb(111_112_113)]" data-testid="icon-profile-circle"
                             stroke="none">
                            <path
                                d="M6.11594 18.8103C7.44562 17.0943 9.50054 16 12 16C14.4995 16 16.5544 17.0943 17.8841 18.8103M6.11594 18.8103C7.69368 20.1747 9.75046 21 12 21C14.2495 21 16.3063 20.1747 17.8841 18.8103M6.11594 18.8103C4.20753 17.16 3 14.721 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 14.721 19.7925 17.16 17.8841 18.8103M15 10C15 11.6569 13.6569 13 12 13C10.3431 13 9 11.6569 9 10C9 8.34315 10.3431 7 12 7C13.6569 7 15 8.34315 15 10Z"
                                stroke="currentColor" strokeWidth="2" strokeLinejoin="round"></path>
                        </svg>
                    </div>
            }
        </nav>
    )
}

export default SmallBottomSideBar;