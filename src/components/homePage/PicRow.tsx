import {useEffect, useRef} from "react";
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

const PicRow = ({data}:{data: picArrayObj}) => {
    const timeIdRef = useRef<number>(0);
    const rowRef = useRef<HTMLDivElement>(null);
    const startPointRef = useRef(0);
    // let startPoint = 0;


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
            <div className={`flex gap-4 w-max relative`}
                 onMouseOver={handleMouseOver}
                 onMouseOut={handleMouseOut}
                 ref={rowRef}
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


export default PicRow;