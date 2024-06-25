import NavBar from "../components/NavBar.tsx";
import CommodityPageMainContent from "../components/commodityPage/CommodityPageMainContent.tsx";
import ImageModal from "../components/commodityPage/ImageModal.tsx";
import BestSellersCommodityPage from "../components/commodityPage/BestSellersCommodityPage.tsx";
import ContactModal from "../components/marketPage/ContactModal.tsx";
import useCommodityPageStore from "../hooks/useCommodityPageStore.ts";
import CommodityPageDescriptionModal from "../components/commodityPage/CommodityPageDescriptionModal.tsx";
import CommodityPageCommentModal from "../components/commodityPage/CommodityPageCommentModal.tsx";
import Footer from "../components/Footer.tsx";
import SignInGlobalModal from "../components/SignInGlobalModal.tsx";


const CommodityPage = () => {

    const searchParams = new URLSearchParams(window.location.search);
    const {
        commodityInfo,
        contactModalOpen,
        closeContactModal,
    } = useCommodityPageStore();

    if( searchParams.get("id")===null) {
        return (
            <div className="text-center text-5xl mt-6">
                404 id not found
            </div>
        )
    }

    return (
        <>
            <NavBar />
            <CommodityPageMainContent />
            <BestSellersCommodityPage />
            <ImageModal />
            <ContactModal {...commodityInfo?.market} closeContactModalOpen={closeContactModal} contactModalOpen={contactModalOpen} />
            <CommodityPageDescriptionModal />
            <CommodityPageCommentModal />
            <Footer />
            <SignInGlobalModal />
        </>
    )
}

export default CommodityPage;