import HomePageBanner from "../components/homePage/HomePageBanner.tsx";
import HomePageNav from "../components/homePage/HomePageNav.tsx";
import HomePageMainContent from "../components/homePage/HomePageMainContent.tsx";
import RewardingWay from "../components/homePage/RewardingWay.tsx";
import StartShopList from "../components/homePage/StartShopList.tsx";
import Footer from "../components/common/Footer.tsx";
import SignInFormModal from "../components/common/SignInFormModal.tsx";
import AddToLikeNotificationModal from "../components/common/AddToLikeNotificationModal.tsx";

const HomePage = () => {

    return (
        <>
            <HomePageBanner />
            <HomePageNav />
            <HomePageMainContent />
            <StartShopList />
            <RewardingWay />
            <Footer />
            <SignInFormModal />
            <AddToLikeNotificationModal />
        </>
    )
}

export default HomePage