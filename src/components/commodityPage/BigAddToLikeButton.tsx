import {useUserLikeIdList} from "../../hooks/useUserLikeIdList.ts";
import useCommodityPageStore from "../../hooks/useCommodityPageStore.ts";
import useUserInfoStore from "../../hooks/useUserInfoStore.ts";


const BigAddToLikeButton = () => {

    const {userLikeList={msg: "", data: []}, error} = useUserLikeIdList();
    const {commodityInfo} = useCommodityPageStore();
    const {handleClickLike} = useUserInfoStore();

    if(error) {
        return null;
    }

    const checked = userLikeList.data.includes(commodityInfo?.id || "");

    return (
        <div
            className={`${checked?"bg-[rgb(84_51_235)] hover:bg-[rgb(69_36_219)]":"bg-white hover:bg-neutral-300"} cursor-pointer w-11 h-11 grid place-items-center border-neutral-300 border-[1px] rounded-[999px] duration-300`}
            onClick={() => handleClickLike(commodityInfo?.id||"", checked)}
        >
            {
                checked
                    ? <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                           className="text-text-fixed-light" data-testid="icon-favorites-filled" stroke="none"
                           style={{width: "20px", height: "20px"}} color="white">
                        <path
                            d="M10.9685 5.40212L11.9999 6.45999L13.0315 5.40212C14.8291 3.55859 17.728 3.53299 19.5562 5.32531L19.6328 5.40212C21.4304 7.24565 21.4554 10.2187 19.7077 12.0936L19.6328 12.1722L12 20L4.36718 12.1722C2.54427 10.3027 2.54427 7.27161 4.36718 5.40212C6.1901 3.53263 9.14562 3.53263 10.9685 5.40212Z"
                            fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"></path>
                    </svg>
                    : <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                           data-testid="icon-favorites" stroke="none"
                           style={{width: "20px", height: "20px"}} color="black">
                        <path
                            d="M10.7966 4.30255L11.9999 5.53674L13.2034 4.30255C15.3006 2.15177 18.6827 2.1219 20.8156 4.21294L20.905 4.30255C23.0021 6.45334 23.0313 9.92188 20.9923 12.1093L20.905 12.2009L12 21.3334L3.09505 12.2009C0.968317 10.0199 0.968317 6.48363 3.09505 4.30255C5.22178 2.12148 8.6699 2.12148 10.7966 4.30255Z"
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                    </svg>
            }

        </div>
    )
}

export default BigAddToLikeButton;