import NavBar from "./NavBar.tsx";
import Footer from "./Footer.tsx";
import SignInFormModal from "./SignInFormModal.tsx";
import React, {useEffect} from "react";
import AddToLikeNotificationModal from "./AddToLikeNotificationModal.tsx";
import SmallNavBar from "./SmallNavBar.tsx";
import SmallBottomSideBar from "./SmallBottomSideBar.tsx";
import useUserInfoStore from "../../hooks/useUserInfoStore.ts";
import SmallLogoutModal from "./SmallLogoutModal.tsx";

const Layout = ({children}: {
    children: React.ReactNode;
}) => {

    const { setShowSmallNavBar, closeAllModal} = useUserInfoStore();

    useEffect(() => {
        let isThrottled = false;
        let scrollY = 0;
        const handleScroll = () => {
            if(isThrottled) {
                return;
            }
            isThrottled = true;
            setTimeout(() => {
                isThrottled = false;
            }, 30)
            if(window.scrollY > scrollY) {
                setShowSmallNavBar(false);
            }
            else {
                setShowSmallNavBar(true);
            }
            scrollY = window.scrollY;
        }
        window.addEventListener("scroll",handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    useEffect(() => {
        window.addEventListener("click", closeAllModal);
        return () => {
            window.removeEventListener("click", closeAllModal);
        }
    }, []);


    return (
        <>
            <NavBar />
            <SmallNavBar />
            <div className="relative top-12 md:static md:top-0">
                {children}
            </div>
            <Footer />
            <SmallBottomSideBar />
            <SmallLogoutModal />
            <SignInFormModal />
            <AddToLikeNotificationModal />
        </>
    )
}

export default Layout;