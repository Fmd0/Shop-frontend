import HomePageBanner from "../components/homePage/HomePageBanner.tsx";
import HomePageNav from "../components/homePage/HomePageNav.tsx";
import HomePageMainContent from "../components/homePage/HomePageMainContent.tsx";
import RewardingWay from "../components/homePage/RewardingWay.tsx";
import StartShopList from "../components/homePage/StartShopList.tsx";
import Footer from "../components/Footer.tsx";
import SignInGlobalModal from "../components/SignInGlobalModal.tsx";

const HomePage = () => {

    return (
        <>
            <HomePageBanner />
            <HomePageNav />
            <HomePageMainContent />
            <StartShopList />
            <RewardingWay />
            <Footer />
            <SignInGlobalModal />
        </>
    )
}

export default HomePage