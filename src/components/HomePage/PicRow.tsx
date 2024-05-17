import {useEffect, useRef, useState} from "react";
import PicCommodityItem from "./PicCommodityItem.tsx";
import PicMerchantItem from "./PicMerchantItem.tsx";

interface picArrayItem {
    isCommodity: boolean,
    img: string,
    svg?: string
}

interface picArrayObj {
    data: picArrayItem[],
    isDirectionToRight: boolean
}

const PicItem = ({data}:{data: picArrayObj}) => {
    const [index, setIndex] = useState(0);
    const timeIdRef = useRef<number>(0);

    const startPlay = () => {
        return setInterval(() => setIndex(i => i + 1), 10);
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
            <div className={`flex gap-4 w-max relative`}
                 style={{
                     transform: data.isDirectionToRight? `translate3d(${(index%10000/10000-1)*216*9}px,0,0`
                         :`translate3d(${(-index%10000/10000)*216*9}px,0,0`,
            }}
                 onMouseOver={handleMouseOver}
                 onMouseOut={handleMouseOut}
            >
                {
                    data.data.map((d, index) => {
                        if(d.isCommodity) {
                            return (
                                <PicCommodityItem key={index} img={d.img} />
                            )
                        }
                        else {
                            return (
                                <PicMerchantItem key={index} img={d.img} svg={d.svg} />
                            )
                        }
                    })
                }

                {
                    data.data.map((d, index) => {
                        if(d.isCommodity) {
                            return (
                                <PicCommodityItem key={index} img={d.img} />
                            )
                        }
                        else {
                            return (
                                <PicMerchantItem key={index} img={d.img} svg={d.svg} />
                            )
                        }
                    })
                }

            </div>
    )
}

export default PicItem;