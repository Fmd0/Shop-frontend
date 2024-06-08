import MarketPageMainContent from "../components/MarketPage/MarketPageMainContent.tsx";
import NavBar from "../components/NavBar.tsx";
import ContactModal from "../components/MarketPage/ContactModal.tsx";
import PrivacyModal from "../components/MarketPage/PrivacyModal.tsx";
import MarketPageCommodityInfo from "../components/MarketPage/MarketPageCommodityInfo.tsx";
import {useEffect} from "react";
import useMarketPageCommodityInfoStore from "../hooks/useMarketPageCommodityInfoStore.ts";


const MarketPage = () => {

    const id = (new URLSearchParams(window.location.search)).get('id')||"";
    const {closeAllModal} = useMarketPageCommodityInfoStore();

    useEffect(() => {
        window.addEventListener("click", closeAllModal);
        return () => window.removeEventListener("click", closeAllModal);
    }, []);

    if (id === null) {
        return (
            <div className="text-center text-5xl mt-8">
                404 id not found
            </div>
        )
    }

    return (
        <>
            <NavBar />
            <MarketPageMainContent />
            <ContactModal />
            <PrivacyModal />
            <MarketPageCommodityInfo/>
        </>
    )
}

export default MarketPage;