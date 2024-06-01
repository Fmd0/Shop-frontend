import HomePageBanner from "../components/HomePage/HomePageBanner.tsx";
import HomePageNav from "../components/HomePage/HomePageNav.tsx";
import HomePageMainContent from "../components/HomePage/HomePageMainContent.tsx";
import RewardingWay from "../components/HomePage/RewardingWay.tsx";
import StartShopList from "../components/HomePage/StartShopList.tsx";

const HomePage = () => {

    return (
        <>
            <HomePageBanner />
            <HomePageNav />
            <HomePageMainContent />
            <StartShopList />
            <RewardingWay />
        </>
    )
}

export default HomePage