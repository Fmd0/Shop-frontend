import {useUserLikeIdList} from "../../hooks/useUserLikeIdList.ts";
import useCommodityPageStore from "../../hooks/useCommodityPageStore.ts";
import useUserInfoStore from "../../hooks/useUserInfoStore.ts";


const AddToFavorite = () => {

    const {userLikeList = {msg: "", data: []}, error} = useUserLikeIdList();
    const {commodityInfo} = useCommodityPageStore();
    const {handleClickLike} = useUserInfoStore();

    if (error) {
        return null;
    }

    const checked = userLikeList.data.includes(commodityInfo?.id || "");


    return (
        <>
            {
                checked
                    ? <div>
                        <div className="relative mt-2 cursor-pointer h-11 rounded-xl text-white bg-[rgb(84_51_235)] duration-200 hover:bg-[rgb(69_36_219)] grid place-items-center"
                             onClick={() => handleClickLike(commodityInfo?.id||"", checked)}
                        >
                            Added to favorites
                        </div>
                        <div className="mt-4 font-normal flex gap-2 justify-center">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg" data-testid="icon-about"
                                 stroke="none"
                                 style={{width: "16px", height: "16px", minWidth: "16px", minHeight: "16px"}}>
                                <path
                                    d="M11 11H12V16M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round"></path>
                                <rect x="11.25" y="7.25" width="1.5" height="1.5" rx="0.75" fill="currentColor"
                                      stroke="currentColor" strokeWidth="0.5"></rect>
                            </svg>
                            <p className="text-[12px]">We will let you know when this is back in stock</p>
                        </div>
                    </div>
                    : <div>
                        <div
                            className="relative mt-2 cursor-pointer h-11 rounded-xl text-white bg-black duration-200 hover:bg-neutral-900 grid place-items-center"
                            onClick={() => handleClickLike(commodityInfo?.id||"", checked)}
                        >
                            Add to favorites
                        </div>
                        <div className="mt-4 font-normal flex gap-2">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg" data-testid="icon-about"
                                 stroke="none"
                                 style={{width: "16px", height: "16px", minWidth: "16px", minHeight: "16px"}}>
                                <path
                                    d="M11 11H12V16M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round"></path>
                                <rect x="11.25" y="7.25" width="1.5" height="1.5" rx="0.75" fill="currentColor"
                                      stroke="currentColor" strokeWidth="0.5"></rect>
                            </svg>
                            <p className="text-[12px]">Adding this product to favorites will notify you when it’s
                                back in stock</p>
                        </div>
                    </div>
            }
        </>
    )
}

export default AddToFavorite;