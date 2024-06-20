import {useSearchInfoStore} from "../../hooks/useSearchInfoStore.ts";
import FormControlSearchPage from "./FormControlSearchPage.tsx";
import {useEffect} from "react";
import CommodityItem from "../marketPage/CommodityItem.tsx";
import SortByModal from "../marketPage/SortByModal.tsx";
import PriceModal from "../marketPage/PriceModal.tsx";
import RatingsModal from "./RatingsModal.tsx";
import SizeModal from "./SizeModal.tsx";
import ColorModal from "./ColorModal.tsx";
import ShipToModal from "./ShipToModal.tsx";

const SearchPageMainContent = () => {

    const {
        query,
        searchCommodityList,
        searchHasMore,
        setSearchHasMore,
        setSearchCommodityList,
        searchPage,
        addSearchPage,
        closeAllModal,
        sortByModalOpen,
        toggleSortByModalOpen,
        sortBy,
        setSortBy,
        priceModalOpen,
        togglePriceModalOpen,
        startPrice,
        setStartPrice,
        endPrice,
        setEndPrice,
        onSale,
        toggleOnSale,
        ratingsModalOpen,
        toggleRatingsModalOpen,
        ratings,
        setRatings,
        sizeModalOpen,
        toggleSizeModalOpen,
        size,
        setSize,
        colorModalOpen,
        toggleColorModalOpen,
        color,
        setColor,
        shipToModalOpen,
        toggleShipToModalOpen,
        shipsTo,
        setShipsTo
    } = useSearchInfoStore();

    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        searchParams.set("pageSize", "5");
        searchParams.set("page", String(searchPage));
        let ignore = false;
        fetch(import.meta.env.VITE_API_ADDRESS+"/api/search?"+searchParams.toString())
            .then(res => res.json())
            .then(data => {
                if(!ignore) {
                    setSearchHasMore(data?.hasMore||false);
                    if(searchPage === 1) {
                        setSearchCommodityList(data?.data||[]);
                    }
                    else {
                        setSearchCommodityList([...searchCommodityList, ...data?.data||[]]);
                    }
                }
            })
        return () => { ignore = true; }
    }, [searchPage, query, onSale, ratings, size, color, startPrice, endPrice, sortBy])

    useEffect(() => {
        window.addEventListener("click", closeAllModal);
        return () => window.removeEventListener("click", closeAllModal);
    }, []);


    return (
        <div className="select-none">
            <div
                className="w-[1144px] mx-auto p-4 mt-4 flex gap-2 items-center justify-center text-black tracking-[0.15px] text-[SuisseIntl-Medium,sans-serif]">

                {/*filter button*/}
                <div
                    className="cursor-pointer w-8 h-8 grid place-items-center rounded-[999px] border-neutral-300 border-[1px] duration-300 bg-white hover:bg-neutral-300">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                         className="text-text-inverse" data-testid="icon-filter" stroke="none"
                         style={{width: "16px", height: "16px"}}>
                        <path
                            d="M10 17L20 17M10 17C10 18.6575 8.6575 20 7 20C5.3425 20 4 18.6575 4 17C4 15.3425 5.3425 14 7 14C8.6575 14 10 15.3425 10 17ZM4 7L12 7M12 7C12 5.3425 13.3425 4 15 4C16.6575 4 18 5.3425 18 7M12 7C12 8.6575 13.3425 10 15 10C16.6575 10 18 8.6575 18 7M18 7L20 7"
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                </div>

                {/*category button*/}
                <FormControlSearchPage checked={false} onClick={undefined} name="Category" hasArrow={true} />

                {/*onSale button*/}
                <FormControlSearchPage checked={onSale} onClick={toggleOnSale} name="On sale" hasArrow={false} />

                {/*ratings button*/}
                <div className="relative" onClick={(e) => {e.stopPropagation()}}>
                    <FormControlSearchPage checked={ratingsModalOpen || ratings!==0} onClick={toggleRatingsModalOpen} name="Ratings" hasArrow={true} />
                    <RatingsModal modalOpen={ratingsModalOpen} toggleModalOpen={toggleRatingsModalOpen} setState={setRatings} />
                </div>

                {/*size button*/}
                <div className="relative" onClick={(e) => {e.stopPropagation()}}>
                    <FormControlSearchPage checked={sizeModalOpen||size.length!==0} onClick={toggleSizeModalOpen} name="Size" hasArrow={true} />
                    <SizeModal modalOpen={sizeModalOpen} toggleModalOpen={toggleSizeModalOpen} setState={setSize} />
                </div>

                {/*shipsTo button*/}
                <div className="relative" onClick={(e) => {e.stopPropagation()}}>
                    <FormControlSearchPage checked={shipToModalOpen || shipsTo!==""} onClick={toggleShipToModalOpen} name={`Ships to${shipsTo!==""?" - "+shipsTo:""}`} hasArrow={true} />
                    <ShipToModal modalOpen={shipToModalOpen} toggleModalOpen={toggleShipToModalOpen} setState={setShipsTo} />
                </div>

                {/*color button*/}
                <div className="relative" onClick={(e) => {e.stopPropagation()}}>
                    <FormControlSearchPage checked={colorModalOpen || color.length!==0} onClick={toggleColorModalOpen} name="Color" hasArrow={true} />
                    <ColorModal modalOpen={colorModalOpen} toggleModalOpen={toggleColorModalOpen} setState={setColor} />
                </div>

                {/*price button*/}
                <div className="relative" onClick={e => e.stopPropagation()}>
                    <FormControlSearchPage checked={priceModalOpen || startPrice!==0 || endPrice!== 2000} onClick={togglePriceModalOpen} name="Price" hasArrow={true} />
                    <PriceModal priceModalOpen={priceModalOpen} togglePriceModalOpen={togglePriceModalOpen} setStartPrice={setStartPrice} setEndPrice={setEndPrice} />
                </div>

                {/*sortBy button*/}
                <div className="relative" onClick={e => e.stopPropagation()}>
                    <FormControlSearchPage checked={sortByModalOpen || sortBy!==""} onClick={toggleSortByModalOpen} name="Sort by" hasArrow={true} />
                    <SortByModal sortByModalOpen={sortByModalOpen} setSortBy={setSortBy} toggleSortByModalOpen={toggleSortByModalOpen}/>
                </div>

            </div>

            <div >
                {
                    searchCommodityList.length == 0 &&
                    <div className="h-[calc(100vh-80px-440px)] grid place-items-center text-[20px] font-medium">
                        No matching results
                    </div>
                }

                {
                    searchCommodityList.length > 0 &&
                    <div className="w-[1144px] mx-auto">
                        <h3 className="text-[20px] font-medium">Results</h3>
                        <div className="mt-4 grid grid-cols-5 gap-6">
                            {
                                searchCommodityList.map(c => (
                                    <CommodityItem key={c.id} {...c} image={c.images[0]}/>
                                ))
                            }
                        </div>
                    </div>
                }
            </div>
            {
                searchHasMore &&
                <div className="grid place-items-center mt-8">
                    <div className="cursor-pointer font-semibold p-3 rounded-[12px] bg-neutral-100 duration-300 hover:bg-neutral-300"
                        onClick={addSearchPage}>
                        More results
                    </div>
                </div>
            }
        </div>
    )
}

export default SearchPageMainContent;