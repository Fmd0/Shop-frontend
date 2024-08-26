import {useEffect, useRef} from "react";
import PicCommodityItem from "./PicCommodityItem.tsx";
import PicMerchantItem from "./PicMerchantItem.tsx";
import {HomeBannerType} from "../../utils/type.ts";
import {useUserLikeList} from "../../hooks/useUserLikeList.ts";
import useUserInfoStore from "../../hooks/useUserInfoStore.ts";


interface picArrayObj {
    data: HomeBannerType[],
    isDirectionToRight: boolean
}

const PicRow = ({data}:{data: picArrayObj}) => {
    const timeIdRef = useRef<number>(0);
    const rowRef = useRef<HTMLDivElement>(null);
    const startPointRef = useRef(0);
    const {handleClickLike} = useUserInfoStore();


    const startPlay = () => {
        return window.setInterval(() => {
            if(rowRef.current){
                startPointRef.current++;
                if(data.isDirectionToRight){
                    rowRef.current.style.transform = `translate3d(${(startPointRef.current%10000/10000-1)*216*9}px,0,0)`;
                }
                else {
                    rowRef.current.style.transform = `translate3d(${(-startPointRef.current%10000/10000)*216*9}px,0,0)`;
                }
            }
        }, 10);

    }

    useEffect(() => {
        const timeId = startPlay();
        timeIdRef.current = timeId;
        return () => clearInterval(timeId);
    }, []);

    const handleMouseOver = () => {
        clearInterval(timeIdRef.current);
    }

    const handleMouseOut = () => {
        timeIdRef.current = startPlay();
    }

    const {userLikeList={msg:"", data:[]}} = useUserLikeList();


    return (
            <div className={`flex gap-4 w-max relative`}
                 onMouseOver={handleMouseOver}
                 onMouseOut={handleMouseOut}
                 ref={rowRef}
            >
                {
                    data.data.map((d, index) =>
                        d.isCommodity
                            ? <PicCommodityItem key={index} img={d.image} id={d.relativeId||""} checked={userLikeList?.data?.includes(d.relativeId)} handleClickLike={handleClickLike} />
                            : <PicMerchantItem key={index} img={d.image} svg={d.logo} id={d.relativeId||""} />
                    )
                }

                {
                    data.data.map((d, index) =>
                        d.isCommodity
                            ? <PicCommodityItem key={index} img={d.image} id={d.relativeId||""} checked={userLikeList?.data?.includes(d.relativeId)} handleClickLike={handleClickLike} />
                            : <PicMerchantItem key={index} img={d.image} svg={d.logo} id={d.relativeId||""} />
                    )
                }

            </div>
    )
}


export default PicRow;