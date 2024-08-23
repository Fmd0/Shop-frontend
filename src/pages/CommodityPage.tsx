import CommodityPageMainContent from "../components/commodityPage/CommodityPageMainContent.tsx";
import ImageModal from "../components/commodityPage/ImageModal.tsx";
import BestSellersCommodityPage from "../components/commodityPage/BestSellersCommodityPage.tsx";
import ContactModal from "../components/marketPage/ContactModal.tsx";
import DescriptionModalCommodityPage from "../components/commodityPage/DescriptionModalCommodityPage.tsx";
import CommentModalCommodityPage from "../components/commodityPage/CommentModalCommodityPage.tsx";
import Layout from "../components/common/Layout.tsx";
import ShippingModal from "../components/marketPage/ShippingModal.tsx";
import RefundModal from "../components/marketPage/RefundModal.tsx";
import {useEffect} from "react";
import useCommodityPageStore from "../hooks/useCommodityPageStore.ts";


const CommodityPage = () => {

    const id = new URLSearchParams(window.location.search).get("id");
    const {closeAllModal} = useCommodityPageStore();

    useEffect(() => {
        window.addEventListener("click", closeAllModal);
        return () => window.removeEventListener("click", closeAllModal);
    }, []);


    if( id === null) {
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
            <ContactModal />
            <DescriptionModalCommodityPage />
            <CommentModalCommodityPage />
            <RefundModal />
            <ShippingModal />
        </Layout>
    )
}

export default CommodityPage;