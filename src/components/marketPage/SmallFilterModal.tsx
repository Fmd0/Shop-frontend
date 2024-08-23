import useMarketPageCommodityInfoStore from "../../hooks/useMarketPageCommodityInfoStore.ts";
import SvgIcons from "../common/SvgIcons.tsx";
import {useState} from "react";
import SortByItem from "./SortByItem.tsx";
import {sortByList} from "../../utils/data.ts";

interface FiltersType {
    sortBy: string;
    onSale: boolean,
    startPrice: number,
    endPrice: number,
    inStock: boolean,
}

const defaultFilterState: FiltersType = {
    sortBy: "",
    onSale: false,
    startPrice: 0,
    endPrice: 2000,
    inStock: true,
}


const SmallFilterModal = () => {

    const {
        smallFilterModalOpen: modalOpen,
        toggleSmallFilterModal: toggleModalOpen,
        setSortBy,
        setStartPrice,
        setEndPrice,
        toggleOnSale,
        toggleInStock,
        sortBy,
        startPrice,
        endPrice,
        onSale,
        inStock
    } = useMarketPageCommodityInfoStore();

    const initialFiltersState: FiltersType = {
        sortBy,
        onSale,
        startPrice,
        endPrice,
        inStock,
    }

    const [filters, setFilters] = useState<FiltersType>(initialFiltersState);

    const [showSortByDetail, setShowSortByDetail] = useState<boolean>(false);
    const [showPriceDetail, setShowPriceDetail] = useState<boolean>(false);


    const setFiltersAction = (newFilter: Partial<FiltersType>) => {
        setFilters({
            ...filters,
            ...newFilter,
        })
    }

    const handleClickDone = () => {
        setSortBy(filters.sortBy);
        setStartPrice(filters.startPrice);
        setEndPrice(filters.endPrice);
        if(filters.inStock !== inStock){
            toggleInStock();
        }
        if(filters.onSale !== onSale){
            toggleOnSale();
        }
    }

    return (
        <div className={`touch-none fixed z-50 inset-0 bg-[rgba(0,0,0,0.4)] text-[16px] text-nowrap font-medium duration-200 transform-gpu md:hidden ${modalOpen ? "opacity-100" : "opacity-0 pointer-events-none"} font-normal`}
            onClick={(event) => {
                event.stopPropagation();
                toggleModalOpen();}}>
            <div className={`fixed bottom-4 left-4 right-4 bg-white px-4 rounded-3xl transform-gpu duration-200 ${modalOpen ? "translate-y-0" : "translate-y-full"}`}
                onClick={e => e.stopPropagation()}>

                {/*text Filters and close button*/}
                <div className="py-6 flex items-center justify-between">
                    <p className="text-[18px] font-medium">Filters</p>
                    <button type="button" onClick={toggleModalOpen} className="relative left-[2px]">
                        <SvgIcons.Close className="size-6 text-[rgb(111,112,113)]"/>
                    </button>
                </div>


                <div className="h-[70vh] flex flex-col justify-between">

                    <div className="no-scrollbar overflow-auto flex flex-col">


                        {/*sort by*/}
                        <div className="border-b-[1px] border-[rgb(238,240,241)]">
                            <div className="py-4 flex flex-row items-center justify-between"
                                 onClick={() => setShowSortByDetail(s => !s)}>
                                <span className="text-[14px]">Sort by</span>
                                <div className="flex items-center gap-2">
                                    <span
                                        className="font-medium text-[12px] text-[rgb(111,112,113)]">{sortByList.find(s => s.value === filters.sortBy)?.textValue || ""}</span>
                                    <button type="button">
                                        {
                                            showSortByDetail
                                                ? <SvgIcons.Subtract className="size-5"/>
                                                : <SvgIcons.Add className="size-5"/>
                                        }
                                    </button>
                                </div>
                            </div>

                            {/*sort by detail*/}
                            <div
                                className={`${showSortByDetail ? "block" : "hidden"} mt-2 mb-6`}>
                                {
                                    sortByList.map((item) => (
                                        <SortByItem key={item.textValue}
                                                    size={20}
                                                    textValue={item.textValue}
                                                    value={item.value}
                                                    sortByFormControl={filters.sortBy}
                                                    setSortByFormControl={(sortByValue: string) => {
                                                        setFiltersAction({sortBy: sortByValue!})
                                                    }}
                                        />
                                    ))
                                }
                            </div>
                        </div>


                        {/*on sale*/}
                        <div
                            className="cursor-pointer py-4 flex flex-row items-center justify-between border-b-[1px] border-[rgb(238,240,241)]"
                            onClick={() => setFiltersAction({onSale: !filters.onSale})}>
                            <span className="text-[14px]">On sale</span>
                            <button type="button"
                                    className={`size-5 border-[1px] duration-200 ${filters.onSale ? "border-black" : "border-[rgb(201,203,204)]"} rounded-[4px] overflow-hidden`}>
                                <SvgIcons.Tick
                                    className={`size-[18px] bg-black duration-200 ${filters.onSale ? "opacity-100" : "opacity-0"}`}/>
                            </button>
                        </div>


                        {/*price*/}
                        <div className="border-b-[1px] border-[rgb(238,240,241)]">
                            <div className="py-4 flex flex-row items-center justify-between"
                                 onClick={() => setShowPriceDetail(s => !s)}>
                                <span className="text-[14px]">Price</span>

                                <div className="flex items-center gap-2">
                                    <button type="button"
                                            className={`${filters.startPrice !== defaultFilterState.startPrice || filters.endPrice !== defaultFilterState.endPrice ? "" : "hidden"} text-[rgb(84,51,235)] text-[12px] font-medium`}
                                            onClick={(event) => {
                                                event.stopPropagation();
                                                setFiltersAction({
                                                    startPrice: defaultFilterState.startPrice,
                                                    endPrice: defaultFilterState.endPrice
                                                });
                                            }}
                                    >
                                        Clear
                                    </button>
                                    <button type="button">
                                        {
                                            showPriceDetail
                                                ? <SvgIcons.Subtract className="size-5"/>
                                                : <SvgIcons.Add className="size-5"/>
                                        }
                                    </button>
                                </div>
                            </div>

                            {/*price detail*/}
                            <div
                                className={`${showPriceDetail ? "block" : "hidden"} my-6 grid grid-cols-[1fr_auto_1fr] items-center gap-2 text-[14px] tracking-[0.15px]`}>
                            <input type="number"
                                       min="0"
                                       max="2000"
                                       step="1"
                                       className="w-full outline-none rounded-lg py-1 px-4 border-[1px] border-neutral-200 focus:border-purple-600 inputNumberNoArrow"
                                       value={filters.startPrice}
                                       onChange={(e) => {
                                           setFiltersAction({startPrice: Number(e.target.value)});
                                       }}
                                />
                                <span className="text-neutral-300">-</span>
                                <input type="number"
                                       min="0"
                                       max="2000"
                                       step="1"
                                       className="w-full outline-none rounded-lg py-1 px-4 border-[1px] border-neutral-200 focus:border-purple-600 inputNumberNoArrow"
                                       value={filters.endPrice}
                                       onChange={(e) => {
                                           setFiltersAction({endPrice: Number(e.target.value)});
                                       }}
                                />
                            </div>
                        </div>


                        {/*in stock*/}
                        <div
                            className="py-4 flex flex-row items-center justify-between border-b-[1px] border-[rgb(238,240,241)]"
                            onClick={() => setFiltersAction({inStock: !filters.inStock})}>
                            <span className="text-[14px]">In stock</span>
                            <button type="button"
                                    className={`size-5 border-[1px] duration-200 ${filters.inStock ? "border-black" : "border-[rgb(201,203,204)]"} rounded-[4px] overflow-hidden`}>
                                <SvgIcons.Tick
                                    className={`size-[18px] bg-black duration-200 ${filters.inStock ? "opacity-100" : "opacity-0"}`}/>
                            </button>
                        </div>


                    </div>


                    <div className="relative grid grid-cols-2 gap-2 text-center py-6 text-[16px]">
                        <div
                            className="bg-neutral-100 duration-200 hover:bg-neutral-200 text-black py-3 rounded-[12px] cursor-pointer"
                            onClick={() => setFiltersAction(defaultFilterState)}>
                            Reset
                        </div>
                        <div
                            className="bg-black duration-200 hover:bg-neutral-800 text-white py-3 rounded-[12px] cursor-pointer"
                            onClick={() => {
                                handleClickDone();
                                toggleModalOpen();
                            }}>
                            Done
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default SmallFilterModal;