import {CartInfoCommodityType} from "../../utils/type.ts";
import CommodityItemCartPage from "./CommodityItemCartPage.tsx";


const MarketListCartPage = ({marketInfo}: {
    marketInfo: {
        id: string,
        name: string,
        icon: string,
        commodity: {
            [_: string]: CartInfoCommodityType,
        }
    }
}) => {
    return (
        <div className="flex flex-col gap-8">

            {/*market item*/}
            <div className="flex flex-col md:flex-row md:border-[1px] md:border-neutral-200 md:rounded-2xl">

                {/*left part market and commodity list info*/}
                <div className="flex-1 p-1 md:p-8 md:border-r-[1px] md:border-neutral-200">

                    {/* top part market info */}
                    <a href={`./market?id=${marketInfo.id}`}>
                        <div className="flex items-center gap-4 mb-5">
                            <div className="relative w-11 h-11 rounded-lg overflow-hidden">
                                <img className="w-full h-full object-contain" src={marketInfo.icon} alt="icon"/>
                                <div className="absolute inset-0 bg-[#0000001a]"></div>
                            </div>
                            <p className="text-[16px] md:text-[18px]">{marketInfo.name}</p>
                        </div>
                    </a>

                    {/*commodity list*/}
                    <div className="flex flex-col gap-6">
                        {
                            Object.entries(marketInfo.commodity).map(([key, value]) => (
                                <CommodityItemCartPage key={key} {...value} marketName={marketInfo.name} />
                            ))
                        }
                    </div>

                </div>

                {/*right part subtotal and checkout*/}
                <div className="flex flex-col gap-2 md:gap-4 px-1 py-2 md:p-8">
                    <div className="flex items-center justify-between">
                        <span className="font-medium">Subtotal</span>
                        <span className="font-semibold">${
                            (Object.entries(marketInfo.commodity).reduce((previousValue, [, currValue]) => {
                                return previousValue+currValue.price*currValue.count;
                            }, 0)/100).toFixed(2)
                        }</span>
                    </div>
                    <div className="cursor-pointer bg-[rgb(84_51_235)] duration-300 hover:bg-[rgb(69_36_219)] p-3 rounded-xl text-white text-center text-[14px] md:text-[16px] ">
                        Continue to checkout
                    </div>
                    <p className="text-[12px] md:text-[14px] text-[rgb(111_112_113)] font-normal text-center">Taxes & shipping calculated at
                        checkout</p>
                </div>

            </div>
        </div>
    )
}

export default MarketListCartPage;