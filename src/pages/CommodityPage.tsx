import CommodityPageMainContent from "../components/commodityPage/CommodityPageMainContent.tsx";
import ImageModal from "../components/commodityPage/ImageModal.tsx";
import BestSellersCommodityPage from "../components/commodityPage/BestSellersCommodityPage.tsx";
import ContactModal from "../components/marketPage/ContactModal.tsx";
import useCommodityPageStore from "../hooks/useCommodityPageStore.ts";
import CommodityPageDescriptionModal from "../components/commodityPage/CommodityPageDescriptionModal.tsx";
import CommodityPageCommentModal from "../components/commodityPage/CommodityPageCommentModal.tsx";
import Layout from "../components/Layout.tsx";
import ShippingModal from "../components/marketPage/ShippingModal.tsx";
import RefundModal from "../components/marketPage/RefundModal.tsx";
import useUserInfoStore from "../hooks/useUserInfoStore.ts";
import {useEffect} from "react";


const CommodityPage = () => {

    const searchParams = new URLSearchParams(window.location.search);
    const {
        commodityInfo,
        contactModalOpen,
        closeContactModal,
        refundModalOpen,
        closeRefundModal,
        shippingModalOpen,
        closeShippingModal
    } = useCommodityPageStore();
    const {closeAllModal} = useUserInfoStore();

    useEffect(() => {
        window.addEventListener("click", closeAllModal);
        return () => {
            window.removeEventListener("click", closeAllModal);
        }
    }, []);

    if( searchParams.get("id")===null) {
        return (
            <div className="text-center text-5xl mt-6">
                404 id not found
            </div>
        )
    }

    return (
        <Layout>
            <CommodityPageMainContent />
            <BestSellersCommodityPage />
            <ImageModal />
            <ContactModal {...commodityInfo?.market} closeContactModalOpen={closeContactModal} contactModalOpen={contactModalOpen} />
            <CommodityPageDescriptionModal />
            <CommodityPageCommentModal />
            <RefundModal url={commodityInfo?.market?.refundPolicy} closeModal={closeRefundModal} modalOpen={refundModalOpen} />
            <ShippingModal url={commodityInfo?.market?.shippingPolicy} closeModal={closeShippingModal} modalOpen={shippingModalOpen} />
        </Layout>
    )
}

export default CommodityPage;