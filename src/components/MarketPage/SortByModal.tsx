import SortByItem from "./SortByItem.tsx";
import UseMarketPageCommodityInfoStore from "../../hooks/useMarketPageCommodityInfoStore.ts";
import {useState} from "react";

const SortByModal = () => {

    const {
        setSortBy,
        sortByModalOpen,
        toggleSortByModalOpen,
    } = UseMarketPageCommodityInfoStore();

    const [sortByFormControl, setSortByFormControl] = useState<string>("");

    return (
        <div className={`absolute z-50 top-[calc(100%+6px)] left-1/2 -translate-x-1/2 w-[300px] bg-white text-nowrap pt-1 pb-5 px-5 rounded-3xl shadow-[0px_0px_8px_#00000026]
        ${sortByModalOpen?"":"hidden"}
        `}>

            {
                [
                    {textValue: "Best selling", value: "bestSelling"},
                    {textValue: "Newest", value: "newest"},
                    {textValue: "Price: Low - High", value: "priceAsc"},
                    {textValue: "Price: High - Low", value: "priceDesc"},
                ].map((item) => (
                    <SortByItem key={item.textValue}
                                textValue={item.textValue}
                                value={item.value}
                                sortByFormControl={sortByFormControl}
                                setSortByFormControl={setSortByFormControl}
                    />
                ))
            }

            <div className="grid grid-cols-2 gap-2 text-center mt-4 text-[16px]">
                <div className="bg-neutral-100 duration-200 hover:bg-neutral-200 text-black py-3 rounded-[12px] cursor-pointer"
                     onClick={() => setSortByFormControl("")}>Reset</div>
                <div className="bg-black duration-200 hover:bg-neutral-800 text-white py-3 rounded-[12px] cursor-pointer"
                     onClick={() => {
                         setSortBy(sortByFormControl);
                         toggleSortByModalOpen();
                     }}
                >Done</div>
            </div>

        </div>
    )
}

export default SortByModal;