import StartShopItem from "./StartShopItem.tsx";
import leftArrow from "../../assets/HomePage/startShop/leftArrow.svg"
import rightArrow from "../../assets/HomePage/startShop/rightArrow.svg"
import React, { useEffect, useRef, useState} from "react";
import useHomeShopStarted from "../../hooks/useHomeShopStarted.ts";


const StartShopList = () => {

    const [showRight, setShowRight] = useState(false);
    const {data={msg: "", data: []}} = useHomeShopStarted();
    const startShopListRef = useRef<HTMLDivElement>(null);

    const prePosition = useRef<number>(0);
    const totalOffset = useRef<number>(0);


    const startMove = useRef<boolean>(false);


    const handlePointMove = (() => {
        let isThrottle = false;
        return (e: PointerEvent) => {
            if(!startMove.current || isThrottle) {
                return;
            }
            isThrottle = true;
            setTimeout(() => {
                isThrottle = false;
            }, 16);
            if(startShopListRef.current) {
                const currentOffset = e.clientX - prePosition.current;
                totalOffset.current += currentOffset;
                window.requestAnimationFrame(() => {
                    if(startShopListRef.current) {
                        startShopListRef.current.style.transform = `translate3d(${totalOffset.current}px, 0, 0)`;
                    }
                })
                prePosition.current = e.clientX;
            }
        }
    })();

    const handlePointUp = () => {
        if(!startMove.current) {
            return;
        }
        startMove.current = false;
        if(startShopListRef.current) {
            if(totalOffset.current > -560) {
                totalOffset.current = 0;
                startShopListRef.current.style.transform = `translate3d(0, 0, 0)`;
                setShowRight(false);
            }
            else {
                totalOffset.current = -1128;
                startShopListRef.current.style.transform = `translate3d(-1128px, 0, 0)`;
                setShowRight(true);
            }
            startShopListRef.current.style.transitionDuration = '200ms';
        }
    }

    const handlePointDown = (e:  React.PointerEvent<HTMLDivElement>) => {
        startMove.current = true;
        prePosition.current = e.clientX;
        if(startShopListRef.current) {
            startShopListRef.current.style.transitionDuration = '0ms';
        }
    }

    useEffect(() => {
        window.addEventListener("pointermove", handlePointMove);
        window.addEventListener("pointerup", handlePointUp);
        return () => {
            window.removeEventListener("pointermove", handlePointMove);
            window.removeEventListener("pointerup", handlePointUp);
        }
    }, []);



    return (
        <div className="mt-28 max-w-[1144px] mx-auto px-4 overflow-hidden select-none">
            <div className="flex items-center justify-between">

                <h3 className="text-[20px] font-semibold mb-8">Shops to get you started</h3>

                <div className="flex items-center gap-1">
                    <button type="button"
                            className="relative p-2 grid place-items-center border-neutral-300 border-[1px] rounded-[999px] overflow-hidden hover:bg-neutral-200 duration-200"
                            onClick={() => {
                                setShowRight(false);
                                totalOffset.current = 0;
                            }}
                            disabled={!showRight}
                    >
                        <img src={leftArrow} alt="leftArrow" className="w-4"/>
                        <div className={`absolute inset-0 w-full h-full bg-neutral-300 bg-opacity-80
                        ${!showRight ? "opacity-100" : "opacity-0"}
                        `}></div>
                    </button>
                    <button type="button"
                            className="relative p-2 grid place-items-center border-neutral-300 border-[1px] rounded-[999px] overflow-hidden hover:bg-neutral-200 duration-200"
                            onClick={() => {
                                setShowRight(true);
                                totalOffset.current = -1128;
                            }}
                            disabled={showRight}
                    >
                        <img src={rightArrow} alt="rightArrow" className="w-4"/>
                        <div className={`absolute inset-0 w-full h-full bg-neutral-300 bg-opacity-80
                        ${showRight?"opacity-100":"opacity-0"}`}></div>
                    </button>
                </div>

            </div>


            <div className="overflow-hidden no-scrollbar max-w-[1112px] touch-pan-y">
                <div className={`flex w-[calc(200%+16px)] gap-4 duration-200`}
                     style={{transform: `translate3d(${(showRight ? -1128 : 0)}px, 0, 0)`}}
                     onPointerDown={handlePointDown}
                     ref={startShopListRef}
                >
                    {
                        data.data.map((d, i) => (
                            <StartShopItem {...d} key={i}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default StartShopList;