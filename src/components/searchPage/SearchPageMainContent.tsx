import {useSearchInfoStore} from "../../hooks/useSearchInfoStore.ts";
import FormControlSearchPage from "./FormControlSearchPage.tsx";
import {useEffect, useState} from "react";
import CommodityItem from "../marketPage/CommodityItem.tsx";
import SortByModal from "../marketPage/SortByModal.tsx";
import PriceModal from "../marketPage/PriceModal.tsx";
import RatingsModal from "./RatingsModal.tsx";
import SizeModal from "./SizeModal.tsx";
import ColorModal from "./ColorModal.tsx";
import ShipToModal from "./ShipToModal.tsx";
import useUserInfoStore from "../../hooks/useUserInfoStore.ts";
import {useUserLikeList} from "../../hooks/useUserLikeList.ts";
import SmallSearchInputSearchPage from "./SmallSearchInputSearchPage.tsx";
import Spinner from "../common/Spinner.tsx";
import SmallRatingsModal from "./SmallRatingsModal.tsx";
import SmallSizeModal from "./SmallSizeModal.tsx";
import SmallShipToModal from "./SmallShipToModal.tsx";
import SmallColorModal from "./SmallColorModal.tsx";
import SmallPriceModal from "./SmallPriceModal.tsx";
import SmallSortByModal from "./SmallSortByModal.tsx";
import SvgIcons from "../common/SvgIcons.tsx";

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

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        searchParams.set("pageSize", "5");
        searchParams.set("page", String(searchPage));
        let ignore = false;
        setIsLoading(true);
        fetch(import.meta.env.VITE_AUTH_API_ADDRESS+"/api/search?"+searchParams.toString())
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
                    setIsLoading(false);
                }
            })
        return () => { ignore = true; }
    }, [searchPage, query, onSale, ratings, size, color, startPrice, endPrice, sortBy])

    useEffect(() => {
        window.addEventListener("click", closeAllModal);
        return () => window.removeEventListener("click", closeAllModal);
    }, []);


    const {userLikeList={msg: "", data: []}} = useUserLikeList();
    const {handleClickLike} = useUserInfoStore();

    return (
        <div className="select-none">

            <SmallSearchInputSearchPage />

            <div
                className="overflow-auto md:overflow-visible no-scrollbar max-w-[1144px] mx-auto pl-3 pr-4 py-3 md:p-4 mt-2 md:mt-4 flex items-center justify-start md:justify-center flex-nowrap gap-2 text-black tracking-[0.15px] text-[SuisseIntl-Medium,sans-serif]">

                {/*filter button*/}
                <div className="flex-shrink-0 cursor-pointer w-8 h-8 grid place-items-center rounded-[999px] border-neutral-300 border-[1px] duration-300 bg-white hover:bg-neutral-300">
                    <SvgIcons.Filter className="size-4" />
                </div>

                {/*category button*/}
                {/*<FormControlSearchPage checked={false} onClick={undefined} name="Category" hasArrow={true} />*/}

                {/*onSale button*/}
                <FormControlSearchPage checked={onSale} onClick={toggleOnSale} name="On sale" hasArrow={false} />

                {/*ratings button*/}
                <div className="relative flex-shrink-0" onClick={(e) => {e.stopPropagation()}}>
                    <FormControlSearchPage checked={ratingsModalOpen || ratings!==0} onClick={toggleRatingsModalOpen} name="Ratings" hasArrow={true} />
                    <RatingsModal modalOpen={ratingsModalOpen} toggleModalOpen={toggleRatingsModalOpen} setState={setRatings} />
                </div>

                {/*size button*/}
                <div className="relative flex-shrink-0" onClick={(e) => {e.stopPropagation()}}>
                    <FormControlSearchPage checked={sizeModalOpen||size.length!==0} onClick={toggleSizeModalOpen} name="Size" hasArrow={true} />
                    <SizeModal modalOpen={sizeModalOpen} toggleModalOpen={toggleSizeModalOpen} setState={setSize} />
                </div>

                {/*shipsTo button*/}
                <div className="relative flex-shrink-0" onClick={(e) => {e.stopPropagation()}}>
                    <FormControlSearchPage checked={shipToModalOpen || shipsTo!==""} onClick={toggleShipToModalOpen} name={`Ships to${shipsTo!==""?" - "+shipsTo:""}`} hasArrow={true} />
                    <ShipToModal modalOpen={shipToModalOpen} toggleModalOpen={toggleShipToModalOpen} setState={setShipsTo} />
                </div>

                {/*color button*/}
                <div className="relative flex-shrink-0" onClick={(e) => {e.stopPropagation()}}>
                    <FormControlSearchPage checked={colorModalOpen || color.length!==0} onClick={toggleColorModalOpen} name="Color" hasArrow={true} />
                    <ColorModal modalOpen={colorModalOpen} toggleModalOpen={toggleColorModalOpen} setState={setColor} />
                </div>

                {/*price button*/}
                <div className="relative flex-shrink-0" onClick={e => e.stopPropagation()}>
                    <FormControlSearchPage checked={priceModalOpen || startPrice!==0 || endPrice!== 2000} onClick={togglePriceModalOpen} name="Price" hasArrow={true} />
                    <PriceModal modalOpen={priceModalOpen} togglePriceModalOpen={togglePriceModalOpen} setStartPrice={setStartPrice} setEndPrice={setEndPrice} />
                </div>

                {/*sortBy button*/}
                <div className="relative flex-shrink-0" onClick={e => e.stopPropagation()}>
                    <FormControlSearchPage checked={sortByModalOpen || sortBy!==""} onClick={toggleSortByModalOpen} name="Sort by" hasArrow={true} />
                    <SortByModal modalOpen={sortByModalOpen} setSortBy={setSortBy} toggleSortByModalOpen={toggleSortByModalOpen}/>
                </div>

                <SmallRatingsModal />
                <SmallSizeModal />
                <SmallShipToModal />
                <SmallColorModal />
                <SmallPriceModal />
                <SmallSortByModal />
            </div>

            <div>
                {
                    searchCommodityList.length == 0 &&
                    <div className="h-[calc(100vh-80px-440px)] grid place-items-center text-[20px] font-medium">
                        No matching results
                    </div>
                }

                {
                    searchCommodityList.length > 0 &&
                    <div className="max-w-[1144px] mx-auto px-2 md:px-4">
                        <h3 className="text-[20px] font-medium">Results</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-4 mt-3 md:mt-6">
                            {
                                searchCommodityList.map(c => (
                                    <CommodityItem key={c.id} {...c} image={c.images[0]} checked={userLikeList?.data?.includes(c.id)} handleClickLike={handleClickLike}/>
                                ))
                            }
                        </div>
                        {
                            !isLoading && searchHasMore &&
                            <div className="grid place-items-center mt-8">
                                <div className="cursor-pointer font-semibold text-[14px] md:text-[16px] p-3 rounded-[12px] bg-neutral-100 duration-300 hover:bg-neutral-300"
                                     onClick={addSearchPage}>
                                    More results
                                </div>
                            </div>
                        }
                        {
                            isLoading && <Spinner size={32} borderWidth={4} />
                        }
                    </div>
                }
            </div>
        </div>
    )
}

export default SearchPageMainContent;