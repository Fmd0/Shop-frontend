import Footer from "../components/common/Footer.tsx";
import SearchPageMainContent from "../components/searchPage/SearchPageMainContent.tsx";
import NavBarSearchPage from "../components/searchPage/NavBarSearchPage.tsx";
import SignInFormModal from "../components/common/SignInFormModal.tsx";
import SmallNavBar from "../components/common/SmallNavBar.tsx";
import SmallBottomSideBar from "../components/common/SmallBottomSideBar.tsx";
import SmallLogoutModal from "../components/common/SmallLogoutModal.tsx";
import AddToLikeNotificationModal from "../components/common/AddToLikeNotificationModal.tsx";
import RecentlyViewedListCartPage from "../components/cartPage/RecentlyViewedListCartPage.tsx";


const SearchPage = () => {
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