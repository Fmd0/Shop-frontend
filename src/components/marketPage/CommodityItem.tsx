import AddToLikeSvg from "../homePage/AddToLikeSvg.tsx";


const CommodityItem = ({id, name, image, rating, ratingAmount, price, promotingPrice, checked, handleClickLike}: {
    id: string,
    name: string,
    image: string,
    rating: string,
    ratingAmount: string,
    price: number,
    promotingPrice: number,
    checked: boolean,
    handleClickLike: (id: string, checked: boolean) => void
}
) => {

    return (
        <a href={`/commodity?id=${id}`}>
            <div className="cursor-pointer  group/CommodityItem tracking-[0.15px] text-[12px]">
                <div className="relative overflow-hidden rounded-xl">
                    <img src={image} alt="picItem"
                         className="w-full aspect-square object-cover object-center duration-200 group-hover/CommodityItem:scale-[105%]"/>
                    <div className="absolute inset-0 bg-[#0000000a]"></div>


                    <div className="absolute bottom-3 right-3 transition-all duration-200"
                         onClick={e => {
                             e.preventDefault();
                             handleClickLike(id, checked);
                         }}>
                        <AddToLikeSvg checked={checked}/>
                    </div>

                    {/*top left promoting sign*/}
                    {
                        !!promotingPrice && promotingPrice !== 0 && (
                            <div className="absolute top-3 left-3 flex gap-0.5 items-center bg-red-600 text-white rounded-[4px] py-0.5 px-1">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                     data-testid="icon-tag-filled" stroke="none"
                                     style={{width: "12px", height: "12px"}}>
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M5.74747 2C5.21703 2 4.70832 2.21071 4.33325 2.58579L2.41904 4.5C2.04397 4.87507 1.83325 5.38378 1.83325 5.91421V11.5858C1.83325 12.1162 2.04397 12.6249 2.41904 13L11.419 22C12.2001 22.781 13.4664 22.781 14.2475 22L21.8333 14.4142C22.6143 13.6332 22.6143 12.3668 21.8333 11.5858L12.8333 2.58579C12.4582 2.21071 11.9495 2 11.419 2H5.74747ZM8.33301 10.5C9.43758 10.5 10.333 9.60457 10.333 8.5C10.333 7.39543 9.43758 6.5 8.33301 6.5C7.22844 6.5 6.33301 7.39543 6.33301 8.5C6.33301 9.60457 7.22844 10.5 8.33301 10.5Z"
                                          fill="currentColor"></path>
                                </svg>
                                <span className="text-[10px]">{((price - promotingPrice) / price * 100).toFixed(0)}%</span>
                            </div>
                        )
                    }
                </div>

                <p className="mt-1.5 text-[rgb(64_64_64)]">{name}</p>


                <div className="text-black flex items-center gap-1">
                    <div className="flex items-center gap-[1px]">
                        {
                            Array.from({length: 5}, (_, i) => {
                                if(Number(rating) - i<=0) {
                                    return 0;
                                }
                                else if(Number(rating) - i>=1) {
                                    return 100;
                                }
                                return (Number(rating) - i)*100;
                            }).map((w,i) => (
                                <div key={i} className="relative w-3 h-3">
                                    <svg className="absolute inset-0" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" fill="#c9cbcc">
                                        <path d="M9.67642 1.92598C9.55172 1.66566 9.28868 1.5 9.00002 1.5C8.71137 1.5 8.44833 1.66566 8.32363 1.92598L6.34156 6.06361L1.77738 6.66292C1.49045 6.7006 1.2508 6.9 1.16157 7.17529C1.07234 7.45059 1.14945 7.75266 1.35973 7.95149L4.69678 11.107L3.85916 15.6129C3.80636 15.897 3.92143 16.1861 4.15499 16.3563C4.38855 16.5264 4.69905 16.5472 4.95322 16.4098L9.00002 14.2219L13.0468 16.4098C13.301 16.5472 13.6115 16.5264 13.8451 16.3563C14.0786 16.1861 14.1937 15.897 14.1409 15.6129L13.3033 11.107L16.6403 7.95149C16.8506 7.75266 16.9277 7.45059 16.8385 7.17529C16.7493 6.9 16.5096 6.7006 16.2227 6.66292L11.6585 6.06361L9.67642 1.92598Z"></path>
                                    </svg>
                                    <svg className="absolute inset-0" data-testid="review-star" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"
                                         clipPath={`polygon(0 0, ${w}% 0, ${w}% 100%, 0 100%)`}>
                                        <path d="M9.67642 1.92598C9.55172 1.66566 9.28868 1.5 9.00002 1.5C8.71137 1.5 8.44833 1.66566 8.32363 1.92598L6.34156 6.06361L1.77738 6.66292C1.49045 6.7006 1.2508 6.9 1.16157 7.17529C1.07234 7.45059 1.14945 7.75266 1.35973 7.95149L4.69678 11.107L3.85916 15.6129C3.80636 15.897 3.92143 16.1861 4.15499 16.3563C4.38855 16.5264 4.69905 16.5472 4.95322 16.4098L9.00002 14.2219L13.0468 16.4098C13.301 16.5472 13.6115 16.5264 13.8451 16.3563C14.0786 16.1861 14.1937 15.897 14.1409 15.6129L13.3033 11.107L16.6403 7.95149C16.8506 7.75266 16.9277 7.45059 16.8385 7.17529C16.7493 6.9 16.5096 6.7006 16.2227 6.66292L11.6585 6.06361L9.67642 1.92598Z"></path>
                                    </svg>
                                </div>
                            ))
                        }
                    </div>
                    ({ratingAmount})
                </div>

                {
                    promotingPrice && promotingPrice !== 0
                        ? <p className="font-semibold">
                            <span className="text-red-600">${(promotingPrice/100).toFixed(2)}</span>
                            <span className="text-[rgb(111,112,113)] line-through ml-1">${(price/100).toFixed(2)}</span>
                        </p>
                        : <p className="font-semibold text-black">${(price/100).toFixed(2)}</p>
                }
            </div>
        </a>
    )
}

export default CommodityItem;