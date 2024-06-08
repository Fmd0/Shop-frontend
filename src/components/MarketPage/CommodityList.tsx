import CommodityItem from "./CommodityItem.tsx";
import useMarketPageCommodityInfoStore from "../../hooks/useMarketPageCommodityInfoStore.ts";

const CommodityList = () => {

    const {commodityList} = useMarketPageCommodityInfoStore();
    return (
        <div className="grid grid-cols-5 gap-8">
            {
                commodityList&&commodityList.map(c => (
                    <CommodityItem key={c.id} {...c} image={c.images[0]} />
                ))
            }
        </div>
    )
}

export default CommodityList;