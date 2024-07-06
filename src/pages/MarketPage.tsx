import MarketPageMainContent from "../components/marketPage/MarketPageMainContent.tsx";
import ContactModal from "../components/marketPage/ContactModal.tsx";
import PrivacyModal from "../components/marketPage/PrivacyModal.tsx";
import MarketPageCommodityInfo from "../components/marketPage/MarketPageCommodityInfo.tsx";
import {useEffect} from "react";
import useMarketPageCommodityInfoStore from "../hooks/useMarketPageCommodityInfoStore.ts";
import useMarketInfoStore from "../hooks/useMarketInfoStore.ts";
import Layout from "../components/Layout.tsx";
import RefundModal from "../components/marketPage/RefundModal.tsx";
import ShippingModal from "../components/marketPage/ShippingModal.tsx";
import useMarketInfo from "../hooks/useMarketInfo.ts";
import useUserInfoStore from "../hooks/useUserInfoStore.ts";


const MarketPage = () => {

    const id = (new URLSearchParams(window.location.search)).get('id')||"";
    const {closeAllModal: closeMarketPageAllModal} = useMarketPageCommodityInfoStore();
    const {closeAllModal: closeUserInfoAllModal} = useUserInfoStore();
    const {data:{data: marketInfo}={data: null}, error} = useMarketInfo(id);

    const {
        contactModalOpen,
        closeContactModalOpen,
        refundModalOpen,
        closeRefundModalOpen,
        shippingModalOpen,
        closeShippingModalOpen
    } = useMarketInfoStore();

    useEffect(() => {
        window.addEventListener("click", closeMarketPageAllModal);
        window.addEventListener("click", closeUserInfoAllModal);
        return () => {
            window.removeEventListener("click", closeMarketPageAllModal);
            window.removeEventListener("click", closeUserInfoAllModal);
        }
    }, []);

    if (id === null) {
        return (
            <div className="text-center text-5xl mt-8">
                404 id not found
            </div>
        )
    }
    if(error) {
        return null;
    }

    return (
        <Layout>
            <MarketPageMainContent />
            <MarketPageCommodityInfo/>
            <ContactModal {...marketInfo} contactModalOpen={contactModalOpen} closeContactModalOpen={closeContactModalOpen} />
            <PrivacyModal />
            <RefundModal url={marketInfo?.refundPolicy} closeModal={closeRefundModalOpen} modalOpen={refundModalOpen}/>
            <ShippingModal url={marketInfo?.shippingPolicy} closeModal={closeShippingModalOpen} modalOpen={shippingModalOpen}/>
        </Layout>
    )
}

export default MarketPage;