import useCommodityPageStore from "../../hooks/useCommodityPageStore.ts";
import CommodityItem from "../marketPage/CommodityItem.tsx";

const BestSellers = () => {
    const {
        bestSellingCommodities,
        commodityInfo
    } = useCommodityPageStore();
    return (
        <div className="mt-20 mb-10 max-w-[1440px] w-[90%] mx-auto font-[SuisseIntl-Medium,sans-serif] font-medium">
            <div className="flex items-center gap-4">
                <div className="relative w-11 h-11 rounded-lg overflow-hidden">
                    <img src={commodityInfo?.market?.icon||""} alt="icon"/>
                    <div className="absolute inset-0 bg-[#0000000a]"></div>
                </div>
                <div>
                    <p className="text-[14px]">{commodityInfo?.market?.name||""}</p>
                    <p className="text-[20px]">Best sellers</p>
                </div>
            </div>
            <div className="mt-4 grid grid-cols-6 items-center gap-8">
                {
                    bestSellingCommodities.length > 0 &&
                    bestSellingCommodities.map((b, index) => (
                        <CommodityItem key={index} {...b} image={b.images[0]} />
                    ))
                }
            </div>
        </div>
    )
}

export default BestSellers;