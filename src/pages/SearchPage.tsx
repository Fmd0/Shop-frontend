import Footer from "../components/common/Footer.tsx";
import SearchPageMainContent from "../components/searchPage/SearchPageMainContent.tsx";
import NavBarSearchPage from "../components/searchPage/NavBarSearchPage.tsx";
import SignInFormModal from "../components/common/SignInFormModal.tsx";
import SmallNavBar from "../components/common/SmallNavBar.tsx";
import SmallBottomSideBar from "../components/common/SmallBottomSideBar.tsx";
import SmallLogoutModal from "../components/common/SmallLogoutModal.tsx";
import AddToLikeNotificationModal from "../components/common/AddToLikeNotificationModal.tsx";
import RecentlyViewedListCartPage from "../components/cartPage/RecentlyViewedListCartPage.tsx";
import useUserInfoStore from "../hooks/useUserInfoStore.ts";
import {useEffect} from "react";


const SearchPage = () => {

    const { setShowSmallNavBar} = useUserInfoStore();

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


    return (
        <>
            <NavBarSearchPage />
            <SmallNavBar />
            <SearchPageMainContent />
            <RecentlyViewedListCartPage />
            <SmallBottomSideBar />
            <SmallLogoutModal />
            <Footer />
            <SignInFormModal />
            <AddToLikeNotificationModal />
        </>
    )
}

export default SearchPage