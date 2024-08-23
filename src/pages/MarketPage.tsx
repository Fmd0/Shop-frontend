import MarketPageMainContent from "../components/marketPage/MarketPageMainContent.tsx";
import ContactModal from "../components/marketPage/ContactModal.tsx";
import PrivacyModal from "../components/marketPage/PrivacyModal.tsx";
import MarketPageCommodityInfo from "../components/marketPage/MarketPageCommodityInfo.tsx";
import {useEffect} from "react";
import useMarketPageCommodityInfoStore from "../hooks/useMarketPageCommodityInfoStore.ts";
import Layout from "../components/common/Layout.tsx";
import RefundModal from "../components/marketPage/RefundModal.tsx";
import ShippingModal from "../components/marketPage/ShippingModal.tsx";
import SmallMarketPageMainContent from "../components/marketPage/SmallMarketPageMainContent.tsx";


const MarketPage = () => {

    const id = (new URLSearchParams(window.location.search)).get('id')||"";
    const {closeAllModal: closeMarketPageAllModal} = useMarketPageCommodityInfoStore();


    useEffect(() => {
        window.addEventListener("click", closeMarketPageAllModal);
        return () => {
            window.removeEventListener("click", closeMarketPageAllModal);
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
        <Layout>
            <MarketPageMainContent />
            <SmallMarketPageMainContent />
            <MarketPageCommodityInfo/>
            <ContactModal />
            <PrivacyModal />
            <RefundModal />
            <ShippingModal />
        </Layout>
    )
}

export default MarketPage;