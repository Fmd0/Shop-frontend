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
            // console.log("window.scrollY", window.scrollY);
            // console.log(window.scrollY - scrollY);
            // console.log(window.document.documentElement.scrollHeight - window.innerHeight);
            if(window.scrollY>0 && window.scrollY<window.document.documentElement.scrollHeight - window.innerHeight) {
                if(window.scrollY - scrollY > 10) {
                    setShowSmallNavBar(false);
                }
                else if(window.scrollY - scrollY < -10) {
                    setShowSmallNavBar(true);
                }
            }
            scrollY = window.scrollY;
        }
        window.addEventListener("scroll",handleScroll);

        return () => {
            window.removeEventListener("wheel", handleScroll);
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
            {children}
            <Footer />
            <SmallBottomSideBar />
            <SmallLogoutModal />
            <SignInFormModal />
            <AddToLikeNotificationModal />
        </>
    )
}

export default Layout;