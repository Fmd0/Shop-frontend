import MarketPageMainContent from "../components/marketPage/MarketPageMainContent.tsx";
import NavBar from "../components/NavBar.tsx";
import ContactModal from "../components/marketPage/ContactModal.tsx";
import PrivacyModal from "../components/marketPage/PrivacyModal.tsx";
import MarketPageCommodityInfo from "../components/marketPage/MarketPageCommodityInfo.tsx";
import {useEffect} from "react";
import useMarketPageCommodityInfoStore from "../hooks/useMarketPageCommodityInfoStore.ts";
import useMarketInfoStore from "../hooks/useMarketInfoStore.ts";


const MarketPage = () => {

    const id = (new URLSearchParams(window.location.search)).get('id')||"";
    const {closeAllModal} = useMarketPageCommodityInfoStore();
    const {marketInfo, contactModalOpen, closeContactModalOpen} = useMarketInfoStore();

    useEffect(() => {
        window.addEventListener("click", closeAllModal);
        return () => {
            window.removeEventListener("click", closeAllModal);
        }
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
            <ContactModal {...marketInfo} contactModalOpen={contactModalOpen} closeContactModalOpen={closeContactModalOpen} />
            <PrivacyModal />
            <MarketPageCommodityInfo/>
        </>
    )
}

export default MarketPage;