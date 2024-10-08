import MoreInfoModalCommodityPage from "./MoreInfoModalCommodityPage.tsx";
import BigAddToLikeButton from "./BigAddToLikeButton.tsx";
import {setCartInfoItemToLocalStorage} from "../../utils/localStorage.ts";
import AddToFavorite from "./AddToFavorite.tsx";
import useCommodityPageStore from "../../hooks/useCommodityPageStore.ts";
import {useMemo, useState} from "react";
import useCartInfoStore from "../../hooks/useCartInfoStore.ts";
import useCommodityInfo from "../../hooks/useCommodityInfo.ts";


const CommodityInfo = () => {

    const id = new URLSearchParams(window.location.search).get("id")||"";
    const {data: {data: { bestSellingCommodities}} = {data: {commodity: null, bestSellingCommodities: []}}} = useCommodityInfo(id);

    const {
        commodityInfo,
        skuItemMap,
        setImageIndex,
        setImages,
        images,
        skuItemKey,
        setSkuItemKey,
        toggleMoreInfoModalOpen,
        openDescriptionModal,
        openRefundModal,
        openShippingModal,
    } = useCommodityPageStore();

    const price = useMemo(() => {
        return skuItemMap[skuItemKey]?.price||commodityInfo?.price||0;
    }, [commodityInfo, skuItemMap, skuItemKey]);

    const promotingPrice = useMemo(() => {
        return skuItemMap[skuItemKey]?.promotingPrice||commodityInfo?.promotingPrice||0;
    }, [commodityInfo, skuItemMap, skuItemKey]);

    const stock = useMemo(() => {
        return skuItemMap[skuItemKey]!==undefined?skuItemMap[skuItemKey].stock:commodityInfo?.stock||0;
    }, [commodityInfo, skuItemMap, skuItemKey]);


    const {updateCartAmountCommodityPage, addToCartStatus} = useCartInfoStore();
    const [quantity, setQuantity] = useState<number>(1);


    return (
        <div className="flex flex-col">
            {/*market icon, name and more button*/}
            <div className="flex items-center justify-between">
                <a href={`./market?id=${commodityInfo?.market?.id || ""}`}>
                    <div className="flex items-center gap-1.5">
                        {
                            commodityInfo?.market?.icon && commodityInfo.market.icon!=="" &&
                            <div className="relative w-8 h-8 rounded-lg overflow-hidden">
                                <img src={commodityInfo.market.icon} alt="icon" className="w-full h-full object-contain"/>
                                <div className="absolute inset-0 bg-[#0000000a]"></div>
                            </div>
                        }
                        <p className="text-[14px] font-semibold">{commodityInfo?.market?.name || ""}</p>
                    </div>
                </a>
                <div className="relative" onClick={e => e.stopPropagation()}>
                    <div
                        className="font-extrabold w-11 h-11 grid place-items-center border-neutral-300 border-[1px] rounded-[999px] cursor-pointer duration-300 hover:bg-neutral-300"
                        onClick={toggleMoreInfoModalOpen}
                    >
                        ···
                    </div>
                    <MoreInfoModalCommodityPage />
                </div>
            </div>

            {/*market name, commodity rating and like button*/}
            <div className="flex items-center justify-between mt-3 tracking-[0.15px]">
                <div>
                    <p className="font-semibold">{commodityInfo?.name}</p>
                    <div className="cursor-pointer text-black flex items-center gap-1">
                        <div className="flex items-center gap-[1px]">
                            {
                                Array.from({length: 5}, (_, i) => {
                                    if (Number(commodityInfo?.rating) - i <= 0) {
                                        return 0;
                                    } else if (Number(commodityInfo?.rating) - i >= 1) {
                                        return 100;
                                    }
                                    return (Number(commodityInfo?.rating) - i) * 100;
                                }).map((w, i) => (
                                    <div key={i} className="relative w-4 h-4">
                                        <svg className="absolute inset-0" viewBox="0 0 18 18"
                                             xmlns="http://www.w3.org/2000/svg" fill="#c9cbcc">
                                            <path
                                                d="M9.67642 1.92598C9.55172 1.66566 9.28868 1.5 9.00002 1.5C8.71137 1.5 8.44833 1.66566 8.32363 1.92598L6.34156 6.06361L1.77738 6.66292C1.49045 6.7006 1.2508 6.9 1.16157 7.17529C1.07234 7.45059 1.14945 7.75266 1.35973 7.95149L4.69678 11.107L3.85916 15.6129C3.80636 15.897 3.92143 16.1861 4.15499 16.3563C4.38855 16.5264 4.69905 16.5472 4.95322 16.4098L9.00002 14.2219L13.0468 16.4098C13.301 16.5472 13.6115 16.5264 13.8451 16.3563C14.0786 16.1861 14.1937 15.897 14.1409 15.6129L13.3033 11.107L16.6403 7.95149C16.8506 7.75266 16.9277 7.45059 16.8385 7.17529C16.7493 6.9 16.5096 6.7006 16.2227 6.66292L11.6585 6.06361L9.67642 1.92598Z"></path>
                                        </svg>
                                        <svg className="absolute inset-0" data-testid="review-star"
                                             viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"
                                             clipPath={`polygon(0 0, ${w}% 0, ${w}% 100%, 0 100%)`}>
                                            <path
                                                d="M9.67642 1.92598C9.55172 1.66566 9.28868 1.5 9.00002 1.5C8.71137 1.5 8.44833 1.66566 8.32363 1.92598L6.34156 6.06361L1.77738 6.66292C1.49045 6.7006 1.2508 6.9 1.16157 7.17529C1.07234 7.45059 1.14945 7.75266 1.35973 7.95149L4.69678 11.107L3.85916 15.6129C3.80636 15.897 3.92143 16.1861 4.15499 16.3563C4.38855 16.5264 4.69905 16.5472 4.95322 16.4098L9.00002 14.2219L13.0468 16.4098C13.301 16.5472 13.6115 16.5264 13.8451 16.3563C14.0786 16.1861 14.1937 15.897 14.1409 15.6129L13.3033 11.107L16.6403 7.95149C16.8506 7.75266 16.9277 7.45059 16.8385 7.17529C16.7493 6.9 16.5096 6.7006 16.2227 6.66292L11.6585 6.06361L9.67642 1.92598Z"></path>
                                        </svg>
                                    </div>
                                ))
                            }
                        </div>
                        <p className="text-[12px]">({commodityInfo?.ratingAmount})</p>
                    </div>
                </div>
                <BigAddToLikeButton />
            </div>


            {/*price and promotingPrice*/}
            {
                stock === 0
                    ? promotingPrice !== 0
                        ? <p className="mt-3 font-semibold">
                                <span
                                    className="text-[rgb(111,112,113)] line-through">${(promotingPrice / 100).toFixed(2)}</span>
                            <span className="ml-1">Sold Out</span>
                        </p>
                        : <p className="font-semibold">
                            <span className="text-[rgb(111,112,113)] line-through">${(price / 100).toFixed(2)}</span>
                            <span className="ml-1">Sold Out</span>
                        </p>
                    : promotingPrice !== 0
                        ? <p className="mt-3 font-semibold">
                            <span className="text-red-600">${(promotingPrice / 100).toFixed(2)}</span>
                            <span
                                className="text-[rgb(111,112,113)] line-through ml-1">${(price / 100).toFixed(2)}</span>
                        </p>
                        :
                        <p className="font-semibold text-black mt-3">${(price / 100).toFixed(2)}</p>
            }


            {/*significantly important sku config*/}
            {
                !!skuItemKey && !!commodityInfo?.skuConfigs && commodityInfo.skuConfigs.map((skuConfig, index) => (
                    <div key={index}
                         className="relative mt-2 font-medium flex h-14 border-b-neutral-300 border-b-[0.5px] items-center justify-between">
                        <p>{skuConfig.key}</p>
                        <div className="flex items-center">
                            <p>{skuItemKey.split("_")[index]}{skuItemMap[skuItemKey]?.stock === 0 ? "(Sold Out)" : ""}</p>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg" className="text-text" data-testid="icon-up-down"
                                 style={{width: "24px", height: "24px"}} stroke="none">
                                <path d="M9 9.33333L12.3333 6L15.6667 9.33333" stroke="currentColor"
                                      strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path d="M15.674 15.3333L12.3208 18.6541L9 15.3333" stroke="currentColor"
                                      strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </div>
                        <select className="absolute inset-0 opacity-0" name={skuConfig.key}
                                defaultValue={skuConfig.defaultValue}
                                onChange={(e) => {
                                    const keyArray = skuItemKey.split("_");
                                    keyArray[index] = e.target.value;
                                    const newSkuItemKey = keyArray.join("_");
                                    setSkuItemKey(newSkuItemKey);

                                    let images: string[] = [] ;
                                    images = [...commodityInfo.images];
                                    images[0] = skuItemMap[newSkuItemKey]?.image||"";
                                    setImages(images);
                                    setImageIndex(0);
                                }}>
                            {
                                skuConfig.value.map(v => {
                                    const keyArray = skuItemKey.split("_");
                                    keyArray[index] = v;
                                    const newKey = keyArray.join("_");
                                    if (skuItemMap?.[newKey]) {
                                        if (skuItemMap?.[newKey].stock !== 0) {
                                            return <option key={v} value={v}>{v}</option>
                                        }
                                        return <option key={v} value={v}>{v}(Sold out)</option>;
                                    }
                                    return null;
                                })
                            }
                        </select>
                    </div>
                ))
            }

            {/*quantity control*/}
            {
                stock !== 0 &&
                <div className="flex items-center justify-between font-medium mt-3">
                    <p>Quantity</p>
                    <div className="h-8 flex items-center gap-1 bg-neutral-100 rounded-lg">
                        <div className="cursor-pointer p-2"
                             onClick={() => setQuantity(q => q !== 1 ? q - 1 : q)}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg"
                                 className={`${quantity === 1 ? "text-[rgb(201_203_204)]" : ""}`}
                                 data-testid="icon-minus-sign" stroke="none"
                                 style={{width: "20px", height: "20px"}}>
                                <path d="M7 12H12H17" stroke="currentColor" strokeWidth="2"
                                      strokeLinecap="round"></path>
                            </svg>
                        </div>
                        <div className="w-5 grid place-items-center">
                            {quantity}
                        </div>
                        <div className="cursor-pointer p-2"
                             onClick={() => setQuantity(q => q + 1)}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg" className="transition"
                                 data-testid="icon-plus-sign"
                                 stroke="none" style={{width: "20px", height: "20px"}}>
                                <path d="M12 7V12M12 12V17M12 12H7M12 12H17" stroke="currentColor" strokeWidth="2"
                                      strokeLinecap="round"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            }


            {/*cart, buy or add to favorite button*/}
            {
                stock !== 0
                    ?
                    <div>
                        <div
                            className="relative overflow-hidden mt-6 cursor-pointer h-11 rounded-xl text-white bg-[rgb(84_51_235)] duration-200 hover:bg-[rgb(69_36_219)]"
                            onClick={() => {
                                setCartInfoItemToLocalStorage({
                                    market: {
                                        id: commodityInfo?.market?.id || "",
                                        name: commodityInfo?.market?.name || "",
                                        icon: commodityInfo?.market?.icon || "",
                                    },
                                    commodity: {
                                        id: commodityInfo?.id || "",
                                        name: commodityInfo?.name || "",
                                        price,
                                        promotingPrice,
                                        image: images[0],
                                        skuKey: [commodityInfo?.name || "", skuItemKey].join("_"),
                                        count: quantity,
                                    }
                                });
                                updateCartAmountCommodityPage();
                            }}
                        >
                            {/*extreme big div*/}
                            <div className="duration-300"
                                 style={{translate: addToCartStatus==="success"?"0 -50%":"" }}
                            >
                                <div className="h-11 grid place-items-center">
                                    {
                                        addToCartStatus === "loading"
                                            ? <svg fill="none" width="20" height="20" viewBox="0 0 52 58"
                                                   xmlns="http://www.w3.org/2000/svg"
                                                   startOffset="0" strokeDasharray="0 136"
                                                   stroke="white"
                                                   className="animate-[addToCart_1.3s_ease-in_infinite]"
                                            >
                                                <path
                                                    d="M3 13C5 11.75 10.4968 6.92307 21.5 6.4999C34.5 5.99993 42 13 45 23C48.3 34 42.9211 48.1335 30.5 51C17.5 54 6.6 46 6 37C5.46667 29 10.5 25 14 23"
                                                    strokeWidth="12"></path>
                                            </svg>
                                            : addToCartStatus==="success"? "" : <p>Add to cart</p>
                                    }
                                </div>
                                <div className="h-11 flex items-center justify-center gap-1">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg" className="mr-xxs text-text-fixed-light"
                                         data-testid="icon-checkmark-circle" stroke="none"
                                         style={{width: "24px", height: "24px"}}>
                                        <path
                                            d="M15 9.5L10.5 15L8.5 13M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                                            stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                            strokeLinejoin="round"></path>
                                    </svg>
                                    <p>Added to cart</p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="relative mt-2 cursor-pointer h-11 rounded-xl text-white bg-black duration-200 hover:bg-neutral-900 grid place-items-center">
                            Buy now
                        </div>
                    </div>
                    : <AddToFavorite/>
            }

            {/*description*/}
            {
                commodityInfo?.description &&
                <div className="mt-6 font-[SuisseIntl-Book,sans-serif] leading-5">
                    <p className="font-semibold">Description</p>
                    <p className="text-[13px] font-normal">
                        {
                            commodityInfo.description.length > 250
                                ? <>
                                    <span>{commodityInfo.description.slice(0, 250)}...</span>
                                    <span className="cursor-pointer font-semibold" onClick={openDescriptionModal}>View More</span>
                                </>
                                : commodityInfo.description
                        }
                    </p>
                </div>
            }


            {/*more details at and two policy*/}
            {
                commodityInfo?.officialLink &&
                <a href={commodityInfo.officialLink} target="_blank">
                    <div
                        className="cursor-pointer mt-3 py-2 text-[14px] flex items-center justify-center gap-2 bg-neutral-100 duration-300 hover:bg-neutral-300 rounded-xl">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                             xmlns="http://www.w3.org/2000/svg" className="text-text" data-testid="icon-link"
                             stroke="none" style={{width: "16px", height: "16px"}}>
                            <path
                                d="M17.2206 12.75L17.9706 12C19.6274 10.3431 19.6274 7.65685 17.9706 6V6C16.3137 4.34314 13.6274 4.34314 11.9706 6L11.2206 6.75M12.7206 17.25L11.9706 18C10.3137 19.6568 7.62744 19.6568 5.97059 18V18C4.31374 16.3431 4.31374 13.6568 5.97059 12L6.72059 11.25"
                                stroke="currentColor" strokeWidth="1.771" strokeLinecap="round"></path>
                            <path d="M14.2207 9.75005L9.72071 14.25" stroke="currentColor" strokeWidth="1.771"
                                  strokeLinecap="round"></path>
                        </svg>
                        <span>
                                More details at {commodityInfo.market?.name || ""}
                            </span>
                    </div>
                </a>
            }
            <div className="flex items-center mt-2 gap-2">
                {
                    commodityInfo?.market?.shippingPolicy &&
                    <div
                        className="cursor-pointer flex-1 py-2 rounded-xl text-[14px] bg-neutral-100 duration-300 hover:bg-neutral-300 grid place-items-center"
                        onClick={openShippingModal}
                    >
                        Shipping Policy
                    </div>
                }
                {
                    commodityInfo?.market?.refundPolicy &&
                    <div
                        className="cursor-pointer flex-1 py-2 rounded-xl text-[14px] bg-neutral-100 duration-300 hover:bg-neutral-300 grid place-items-center"
                        onClick={openRefundModal}
                    >
                        Refund Policy
                    </div>
                }
            </div>


            {/*four images market part*/}
            {
                commodityInfo?.market &&
                <a href={`./market?id=${commodityInfo?.market.id || ""}`}>
                    <div
                        className="relative cursor-pointer mt-8 rounded-xl overflow-hidden border-neutral-300 border-[1px] group/commodityPageMarket">
                        <div className="relative grid grid-cols-4">
                            {
                                bestSellingCommodities?.length > 0 &&
                                bestSellingCommodities.slice(0,4).map(b => (
                                    <img key={b.id} className="overflow-hidden aspect-square w-full object-cover"
                                         src={b?.images?.[0]}
                                         alt="commodity"/>
                                ))
                            }

                            {
                                commodityInfo?.market?.icon && commodityInfo.market.icon !== "" &&
                                <div
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-lg overflow-hidden">
                                    <img src={commodityInfo.market.icon} alt="icon"
                                         className="w-full h-full object-contain"/>
                                    <div className="absolute inset-0 bg-[#0000000a]"></div>
                                </div>
                            }
                            <div className="absolute inset-0 bg-[#0000000a]"></div>
                        </div>
                        <div className="flex justify-between p-4">
                            <div>
                                <p className="text-[14px]">{commodityInfo.market.name}</p>
                                <div className="flex items-center text-[12px] leading-4">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg" className="!h-[10px] !w-[11px]"
                                         data-testid="icon-star-filled" style={{width: "24px", height: "24px"}}
                                         stroke="none">
                                        <path
                                            d="M12.9019 1.56798C12.7356 1.22088 12.3849 1 12 1C11.6152 1 11.2644 1.22088 11.0982 1.56798L8.45542 7.08482L2.36984 7.8839C1.98727 7.93413 1.66773 8.2 1.54875 8.56705C1.42978 8.93411 1.5326 9.33687 1.81297 9.60198L6.26237 13.8093L5.14555 19.8172C5.07514 20.196 5.22857 20.5815 5.53998 20.8083C5.85139 21.0351 6.2654 21.0629 6.60429 20.8797L12 17.9625L17.3958 20.8797C17.7347 21.0629 18.1487 21.0351 18.4601 20.8083C18.7715 20.5815 18.9249 20.196 18.8545 19.8172L17.7377 13.8093L22.1871 9.60198C22.4675 9.33687 22.5703 8.93411 22.4513 8.56705C22.3323 8.2 22.0128 7.93413 21.6302 7.8839L15.5446 7.08482L12.9019 1.56798Z"
                                            fill="currentColor"></path>
                                    </svg>
                                    <p>{commodityInfo.market.rating}</p>
                                    <p className="ml-1">({commodityInfo.market.ratingAmount})</p>
                                </div>
                            </div>
                            <div
                                className="relative z-10 bg-black text-white rounded-lg text-[14px] w-[88px] grid place-items-center"
                                onClick={e => e.preventDefault()}>
                                Follow
                            </div>
                        </div>

                        <div
                            className="absolute inset-0 bg-[#0000001a] opacity-0 duration-300 group-hover/commodityPageMarket:opacity-100"></div>
                    </div>
                </a>
            }
        </div>
    )
}

export default CommodityInfo;