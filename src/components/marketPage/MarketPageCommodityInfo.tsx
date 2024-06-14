import useMarketInfoStore from "../../hooks/useMarketInfoStore.ts";
import CommodityList from "./CommodityList.tsx";
import {useEffect, useState} from "react";
import useMarketPageCommodityInfoStore from "../../hooks/useMarketPageCommodityInfoStore.ts";
import SortByModal from "./SortByModal.tsx";
import PriceModal from "./PriceModal.tsx";


const MarketPageCommodityInfo = () => {

    const {marketInfo} = useMarketInfoStore();
    const {
        commodityList,
        setCommodityList,
        page,
        addPage,
        query,
        setQuery,
        tag,
        setTag,
        sortBy,
        onSale,
        inStock,
        startPrice,
        endPrice,
        sortByModalOpen,
        toggleSortByModalOpen,
        priceModalOpen,
        togglePriceModalOpen,
        toggleInStock,
        toggleOnSale,
    } = useMarketPageCommodityInfoStore();
    const marketId = (new URLSearchParams(window.location.search)).get('id')||"";

    const [hasMore, setHasMore] = useState<boolean>(false);
    const [amount, setAmount] = useState<number>(0);
    const [queryFormControl, setQueryFormControl] = useState("");

    useEffect(() => {
        let ignore = false;
        fetch(`${import.meta.env.VITE_API_ADDRESS}/api/market/commodity?page=${page}&query=${query}&pageSize=10&marketId=${marketId}&sortBy=${sortBy}&onSale=${onSale?onSale:""}&inStock=${inStock?inStock:""}&startPrice=${startPrice}&endPrice=${endPrice}&tag=${tag}`)
            .then(res => res.json())
            .then(data => {
                if(!ignore) {
                    if(page === 1) {
                        setCommodityList(data?.data||[]);
                        setAmount(data?.totalAmount||0);
                        setHasMore(data?.hasMore||false)
                    }
                    else {
                        setCommodityList([...commodityList, ...data?.data||[]]);
                        setAmount(data?.totalAmount||0);
                        setHasMore(data?.hasMore||false)
                    }
                }
            })
            .catch(err => console.log(err));
        return () => {ignore = true;}
    }, [page, marketId, sortBy, onSale, inStock, startPrice, endPrice, tag, query, setCommodityList]);

    return (
        <div className="max-w-[1144px] mx-auto w-[80%] flex flex-col gap-8 mt-8 mb-10">

            <h1 className="text-[20px] font-semibold tracking-[0.15px]">Products</h1>

            {/*first line form control button*/}
            <div className="flex items-center gap-6 text-[rgb(111_112_113)] text-[17px] tracking-[0.15px]">
                <p className={`${tag==="All"?"text-black":""} cursor-pointer duration-300 hover:text-black`}
                   onClick={() => setTag("All")}>
                    All
                </p>
                {
                    marketInfo?.marketTag?.tags&& marketInfo.marketTag.tags.map(t => (
                        <p key={t} className={`${tag===t?"text-black":""} cursor-pointer duration-300 hover:text-black`}
                           onClick={() => setTag(t)}>
                            {t}
                        </p>
                    ))
                }
            </div>

            {/*second line form control button*/}
            <div className="flex items-center justify-between text-[12px]">

                <div className="flex items-center gap-2 text-[12px]">


                    {/*sortBy button and modal*/}
                    <div className="relative" onClick={(e) => e.stopPropagation()}>
                        <div className={`flex items-center gap-2 cursor-pointer py-1.5 pr-2 pl-4 rounded-[8px] border-[1px] duration-200
                        ${sortByModalOpen||sortBy!==""? "bg-black text-white hover:bg-neutral-800 border-black" : "bg-white text-black hover:bg-neutral-200 border-neutral-300"}`}
                             onClick={toggleSortByModalOpen}>
                            Sort by
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg"
                                 data-testid="icon-down-chevron" stroke="none"
                                 style={{width: "15px", height: "16px"}}>
                                <path d="M18 9L12 15L6 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                      strokeLinejoin="round"></path>
                            </svg>
                        </div>
                        <SortByModal />
                    </div>


                    {/*on sale button*/}
                    <div className={`cursor-pointer py-1.5 px-4 rounded-[8px] border-[1px] duration-200
                    ${onSale ? "bg-black text-white hover:bg-neutral-800 border-black" : "bg-white text-black hover:bg-neutral-200 border-neutral-300"}`}
                         onClick={toggleOnSale}>
                        On sale
                    </div>


                    {/*price button and modal*/}
                    <div className="relative" onClick={(e) => {e.stopPropagation()}}>
                        <div className={`flex items-center gap-2 cursor-pointer py-1.5 pl-4 pr-2 rounded-[8px] border-[1px] duration-200
                        ${priceModalOpen || startPrice!==0 || endPrice!==2000 ? "bg-black text-white hover:bg-neutral-800 border-black" : "bg-white text-black hover:bg-neutral-200 border-neutral-300"}`}
                             onClick={togglePriceModalOpen}>
                            Price
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg"
                                 data-testid="icon-down-chevron" stroke="none"
                                 style={{width: "15px", height: "16px"}}>
                                <path d="M18 9L12 15L6 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                      strokeLinejoin="round"></path>
                            </svg>
                        </div>
                        <PriceModal/>
                    </div>


                    {/*in stock button*/}
                    <div className={`cursor-pointer py-1.5 px-4 rounded-[8px] border-[1px] duration-200
                    ${inStock ? "bg-black text-white hover:bg-neutral-800 border-black" : "bg-white text-black hover:bg-neutral-200 border-neutral-300"}`}
                         onClick={toggleInStock}>
                        In-stock
                    </div>


                    {/*product amount*/}
                    <p className="text-[rgb(111_112_113)]">{amount} products</p>
                </div>


                {/*search input*/}
                <form className="bg-neutral-100 flex items-center gap-1 py-3 px-4 rounded-xl"
                      onSubmit={(e) => {
                          e.preventDefault();
                          setQuery(queryFormControl);
                      }}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                         color="rgb(111 112 113)"
                         data-testid="icon-search" stroke="none"
                         style={{width: "20px", height: "20px"}}>
                        <path
                            d="M20 20L16.05 16.05M18 11C18 14.866 14.866 18 11 18C7.13401 18 4 14.866 4 11C4 7.13401 7.13401 4 11 4C14.866 4 18 7.13401 18 11Z"
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                    </svg>
                    <input type="text"
                           placeholder={`Search ${marketInfo?.name}...`}
                           className="bg-transparent outline-none focus:outline-none text-[16px]"
                           value={queryFormControl}
                           onChange={(e) => {setQueryFormControl(e.target.value)}}
                    />
                </form>

            </div>

            <CommodityList/>


            {/*view more products button*/}
            {
                hasMore &&
                <div className="text-center">
                    <button type="button"
                            className="rounded-lg bg-neutral-100 py-2 px-3 text-[14px] font-semibold duration-200 hover:bg-neutral-200"
                            onClick={addPage}
                    >
                        View more products
                    </button>
                </div>
            }


        </div>
    )
}


export default MarketPageCommodityInfo;