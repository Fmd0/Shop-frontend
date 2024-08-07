import useCartInfoStore from "../../hooks/useCartInfoStore.ts";


const CommodityItemCartPage = ({id, name, price, promotingPrice, image, skuKey, count, marketName}: {
    id: string;
    name: string;
    price: number;
    promotingPrice: number;
    image: string;
    skuKey: string;
    count: number;
    marketName: string;
}) => {

    const {addCartAmount, subtractCartAmount, updateCartAmount} = useCartInfoStore();
    return (
        <a href={`/commodity?id=${id}`}>
            <div className="grid grid-cols-[auto_1fr] gap-6">

                {/*left part an image*/}
                <div className="relative w-[112px] h-[112px] rounded-lg overflow-hidden">
                    <img className="w-full h-full object-cover" src={image} alt="commodity"/>
                    <div className="absolute inset-0 bg-[#0000000a]"></div>
                </div>


                {/*right part*/}
                <div className="flex flex-col justify-between">

                    {/*top part*/}
                    <div className="flex items-center justify-between gap-4">
                        <div>
                            <p className="text-sm md:text-base">{name.length>30?name.slice(0, 30)+"...":name}</p>
                            <p className="text-neutral-500 text-[10px] md:text-[12px]">{skuKey.split("_").slice(1).join("/")}</p>
                        </div>
                        <div>
                            {
                                promotingPrice !== 0
                                    ? <>
                                        <p>${(promotingPrice / 100).toFixed(2)}</p>
                                        <p className="text-[12px] md:text-[14px] line-through text-neutral-500 text-end">${(price / 100).toFixed(2)}</p>
                                    </>
                                    : <p>${(price / 100).toFixed(2)}</p>
                            }
                        </div>
                    </div>


                    {/*add subtract button*/}
                    <div className="cursor-pointer flex items-center bg-neutral-100 rounded-lg w-max px-[2px]"
                         onClick={e => e.preventDefault()}>
                        <div className="w-8 h-8 grid place-items-center" onClick={() => {
                            subtractCartAmount(marketName, skuKey);
                            updateCartAmount();
                        }}>
                            {
                                count === 1 ?
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg" className="transition"
                                         data-testid="icon-delete" stroke="none"
                                         style={{width: "20px", height: "20px"}}>
                                        <path
                                            d="M6 21L5.00221 21.0665C5.03723 21.5918 5.47354 22 6 22V21ZM18 21V22C18.5265 22 18.9628 21.5918 18.9978 21.0665L18 21ZM3 5C2.44772 5 2 5.44772 2 6C2 6.55228 2.44772 7 3 7V5ZM21 7C21.5523 7 22 6.55228 22 6C22 5.44772 21.5523 5 21 5V7ZM11 11C11 10.4477 10.5523 10 10 10C9.44772 10 9 10.4477 9 11H11ZM9 16C9 16.5523 9.44772 17 10 17C10.5523 17 11 16.5523 11 16H9ZM15 11C15 10.4477 14.5523 10 14 10C13.4477 10 13 10.4477 13 11H15ZM13 16C13 16.5523 13.4477 17 14 17C14.5523 17 15 16.5523 15 16H13ZM14.9056 6.24926C15.0432 6.78411 15.5884 7.1061 16.1233 6.96844C16.6581 6.83078 16.9801 6.28559 16.8424 5.75074L14.9056 6.24926ZM4.00221 6.06652L5.00221 21.0665L6.99779 20.9335L5.99779 5.93348L4.00221 6.06652ZM6 22H18V20H6V22ZM18.9978 21.0665L19.9978 6.06652L18.0022 5.93348L17.0022 20.9335L18.9978 21.0665ZM19 5H5V7H19V5ZM3 7H5V5H3V7ZM19 7H21V5H19V7ZM9 11V16H11V11H9ZM13 11V16H15V11H13ZM12 4C13.3965 4 14.5725 4.95512 14.9056 6.24926L16.8424 5.75074C16.2874 3.59442 14.3312 2 12 2V4ZM9.09447 6.24926C9.42756 4.95512 10.6035 4 12 4V2C9.66885 2 7.7126 3.59442 7.1576 5.75074L9.09447 6.24926Z"
                                            fill="currentColor"></path>
                                    </svg> :
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg" className="transition"
                                         data-testid="icon-minus-sign" stroke="none"
                                         style={{width: "20px", height: "20px"}}>
                                        <path d="M7 12H12H17" stroke="currentColor" strokeWidth="2"
                                              strokeLinecap="round"></path>
                                    </svg>
                            }
                        </div>
                        <div className="w-8 text-center">{count}</div>
                        <div className="w-8 h-8 grid place-items-center"
                             onClick={() => {
                                 addCartAmount(marketName, skuKey);
                                 updateCartAmount();
                             }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg" className="transition"
                                 data-testid="icon-plus-sign" stroke="none"
                                 style={{width: "20px", height: "20px"}}>
                                <path d="M12 7V12M12 12V17M12 12H7M12 12H17" stroke="currentColor"
                                      strokeWidth="2" strokeLinecap="round"></path>
                            </svg>
                        </div>
                    </div>
                </div>

            </div>
        </a>
    )
}

export default CommodityItemCartPage;