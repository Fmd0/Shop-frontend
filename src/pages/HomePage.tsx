import HomePageBanner from "../components/homePage/HomePageBanner.tsx";
import NavBarHomePage from "../components/homePage/NavBarHomePage.tsx";
import HomePageMainContent from "../components/homePage/HomePageMainContent.tsx";
import RewardingWay from "../components/homePage/RewardingWay.tsx";
import Footer from "../components/common/Footer.tsx";
import SignInFormModal from "../components/common/SignInFormModal.tsx";
import AddToLikeNotificationModal from "../components/common/AddToLikeNotificationModal.tsx";
import useUserInfoStore from "../hooks/useUserInfoStore.ts";
import {useEffect} from "react";
import SmallNavBar from "../components/common/SmallNavBar.tsx";
import SmallBottomSideBar from "../components/common/SmallBottomSideBar.tsx";
import SmallLogoutModal from "../components/common/SmallLogoutModal.tsx";
import SmallHomePageMainContent from "../components/homePage/SmallHomePageMainContent.tsx";
import StartShopList from "../components/homePage/StartShopList.tsx";

const HomePage = () => {

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
            window.removeEventListener("wheel", handleScroll);
        }
    }, []);


    useEffect(() => {
        window.addEventListener("click", closeAllModal);
        return () => window.removeEventListener("click", closeAllModal);
    }, []);

    return (
        <>
            <HomePageBanner />
            <NavBarHomePage />
            <SmallNavBar />
            <HomePageMainContent />
            <SmallHomePageMainContent />
            <StartShopList />
            <RewardingWay />
            <SmallBottomSideBar />
            <SmallLogoutModal />
            <Footer />
            <SignInFormModal />
            <AddToLikeNotificationModal />
        </>
    )
}

export default HomePage