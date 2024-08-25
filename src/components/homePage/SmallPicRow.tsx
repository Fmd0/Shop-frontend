import {useEffect, useRef} from "react";
import {HomeBannerType} from "../../utils/type.ts";
import SmallPicCommodityItem from "./SmallPicCommodityItem.tsx";
import SmallPicMerchantItem from "./SmallPicMerchantItem.tsx";


interface picArrayObj {
    data: HomeBannerType[],
    isDirectionToRight: boolean
}

const SmallPicRow = ({data}:{data: picArrayObj}) => {

    const timeIdRef = useRef<number>(0);
    const rowRef = useRef<HTMLDivElement>(null);
    const startPointRef = useRef(0);


    const startPlay = () => {
        return setInterval(() => {
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


    return (
            <div className={`flex gap-2 w-max relative`}
                 onMouseOver={handleMouseOver}
                 onMouseOut={handleMouseOut}
                 ref={rowRef}
            >
                {
                    data.data.map((d, index) =>
                        d.isCommodity
                            ? <SmallPicCommodityItem key={index} img={d.image} id={d.relativeId||""} />
                            : <SmallPicMerchantItem key={index} img={d.image} svg={d.logo} id={d.relativeId||""} />
                    )
                }

                {
                    data.data.map((d, index) =>
                        d.isCommodity
                            ? <SmallPicCommodityItem key={index} img={d.image} id={d.relativeId||""} />
                            : <SmallPicMerchantItem key={index} img={d.image} svg={d.logo} id={d.relativeId||""} />
                    )
                }
            </div>
    )
}

export default SmallPicRow;
