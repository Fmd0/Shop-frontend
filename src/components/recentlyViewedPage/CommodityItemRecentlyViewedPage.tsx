import AddToLikeButton from "../homePage/AddToLikeButton.tsx";
import useRecentlyViewedInfoStore from "../../hooks/useRecentlyViewedInfoStore.ts";


const CommodityItemRecentlyViewedPage = ({id, name, image, price, promotingPrice, hasDelete, checked, handleClickLike}: {
    id: string,
    name: string,
    image: string,
    price: number,
    promotingPrice: number,
    hasDelete: boolean,
    handleClickLike: (id: string, checked: boolean) => void,
    checked: boolean,
}) => {

    const {deleteRecentlyViewedInfoItem} = useRecentlyViewedInfoStore();

    return (
        <a href={`./commodity?id=${id}`}>
            <div className="cursor-pointer  group/CommodityItem tracking-[0.15px] text-[12px]">
                <div className="relative overflow-hidden rounded-xl">
                    <img src={image} alt="picItem"
                         className="w-full aspect-square object-cover object-center duration-200 group-hover/CommodityItem:scale-[105%]"/>

                    <div className="absolute inset-0 bg-[#0000000a]"></div>
                    {
                        !!promotingPrice && promotingPrice !== 0 && (
                            <div
                                className="absolute top-3 left-3 flex gap-0.5 items-center bg-red-600 text-white rounded-[4px] py-0.5 px-1">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg"
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
                    {
                        hasDelete &&
                        <div className="absolute right-3 top-3 size-8 rounded-[999px] duration-200 bg-neutral-500 bg-opacity-35 hover:bg-opacity-70 grid place-items-center"
                             onClick={(e) => {
                                 e.preventDefault();
                                 deleteRecentlyViewedInfoItem(id);
                             }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg" color="white"
                                 data-testid="icon-cross" stroke="none" style={{width: "16px", height: "16px"}}>
                                <path d="M5 5L19 19M19 5L5 19" stroke="currentColor" strokeWidth="2"
                                      strokeLinecap="round"></path>
                            </svg>
                        </div>
                    }


                    <div className="absolute bottom-3 right-3 duration-200"
                         onClick={e => {
                             e.preventDefault();
                             handleClickLike(id, checked)
                         }}>
                        <AddToLikeButton checked={checked}/>
                    </div>
                </div>

                <p className="mt-1.5 text-[rgb(64_64_64)] font-normal">{name.length>30?name.slice(0, 30)+"...":name}</p>

                {
                    promotingPrice && promotingPrice !== 0
                        ? <p>
                            <span className="text-red-600">${(promotingPrice/100).toFixed(2)}</span>
                            <span className="text-[rgb(111,112,113)] line-through ml-1">${(price/100).toFixed(2)}</span>
                        </p>
                        : <p className="text-black">${(price/100).toFixed(2)}</p>
                }
            </div>
        </a>
    )
}

export default CommodityItemRecentlyViewedPage;