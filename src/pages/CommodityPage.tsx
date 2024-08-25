import CommodityPageMainContent from "../components/commodityPage/CommodityPageMainContent.tsx";
import BestSellersCommodityPage from "../components/commodityPage/BestSellersCommodityPage.tsx";
import Layout from "../components/common/Layout.tsx";
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
        </Layout>
    )
}

export default CommodityPage;