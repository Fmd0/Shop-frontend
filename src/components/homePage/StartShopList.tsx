import StartShopItem from "./StartShopItem.tsx";
import React, { useEffect, useRef, useState} from "react";
import useHomeShopStarted from "../../hooks/useHomeShopStarted.ts";
import SvgIcons from "../common/SvgIcons.tsx";


const StartShopList = () => {

    const [showShopListPart, setShowShopListPart] = useState<number>(0);
    const {data={msg: "", data: []}} = useHomeShopStarted();
    const startShopListRef = useRef<HTMLDivElement>(null);

    const prePosition = useRef<number>(0);
    const totalOffset = useRef<number>(0);
    const startMove = useRef<boolean>(false);
    const animationFrameTimeId = useRef<number>(0);
    const containerWidth = useRef<number>(0);
    const containerPartAmount = useRef<number>(0);
    const hadMoved = useRef<boolean>(false);

    const handlePointerDown = (e:  React.PointerEvent<HTMLDivElement>) => {
        e.preventDefault();
        hadMoved.current = false;
        startMove.current = true;
        prePosition.current = e.clientX;
        if(startShopListRef.current) {
            startShopListRef.current.style.transitionDuration = '0ms';
        }
    }


    const handlePointerMove = (() => {
        let isThrottle = false;
        return (e: PointerEvent) => {
            if(!startMove.current || isThrottle) {
                return;
            }
            isThrottle = true;
            setTimeout(() => {
                isThrottle = false;
            }, 8);
            if(startShopListRef.current) {
                const currentOffset = e.clientX - prePosition.current;
                if(!hadMoved.current && Math.abs(currentOffset)>3) {
                    hadMoved.current = true;
                }

                if(totalOffset.current > 0 || totalOffset.current < -(containerPartAmount.current-1)*(containerWidth.current + 16)) {
                    totalOffset.current += currentOffset/3;
                }
                else {
                    totalOffset.current += currentOffset;
                }
                window.cancelAnimationFrame(animationFrameTimeId.current)
                animationFrameTimeId.current = window.requestAnimationFrame(() => {
                    if(startShopListRef.current) {
                        startShopListRef.current.style.transform = `translate3d(${totalOffset.current}px, 0, 0)`;
                    }
                })
                prePosition.current = e.clientX;
            }
        }
    })();

    const handlePointerUp = (event: PointerEvent) => {
        event.preventDefault();
        event.stopPropagation();

        if(!startMove.current) {
            return;
        }
        startMove.current = false;
        if(startShopListRef.current) {
            let index = Math.round(-totalOffset.current / (containerWidth.current + 16));
            index = index < 0 ? 0 : index;
            totalOffset.current = -(containerWidth.current+16)*index
            startShopListRef.current.style.transform = `translate3d(${totalOffset.current}px, 0, 0)`;
            setShowShopListPart(index);
            startShopListRef.current.style.transitionDuration = '200ms';
        }
    }

    const handlePointerCancel = handlePointerUp;

    useEffect(() => {
        totalOffset.current = -(containerWidth.current+16)*showShopListPart;
    }, [showShopListPart]);

    useEffect(() => {
        if(window.innerWidth < 1144) {
            containerWidth.current = window.innerWidth-32;
        }
        else {
            containerWidth.current = 1112;
        }

        if(window.innerWidth >= 1024) {
            containerPartAmount.current = 2;
        }
        else if(window.innerWidth < 1024 && window.innerWidth >= 768) {
            containerPartAmount.current = 3;
        }
        else if(window.innerWidth < 768 && window.innerWidth >= 640) {
            containerPartAmount.current = 4;
        }
        else {
            containerPartAmount.current = 5;
        }

    }, []);

    useEffect(() => {
        window.addEventListener("pointermove", handlePointerMove);
        window.addEventListener("pointerup", handlePointerUp);
        window.addEventListener("pointercancel", handlePointerCancel);
        return () => {
            window.removeEventListener("pointermove", handlePointerMove);
            window.removeEventListener("pointerup", handlePointerUp);
            window.removeEventListener("pointercancel", handlePointerCancel);
        }
    }, []);



    return (
        <div className="mt-14 md:mt-28 max-w-[1144px] mx-auto px-4 overflow-hidden select-none">
            <div className="flex items-center justify-between mb-4">

                <h3 className="text-[20px] font-semibold">Shops to get you started</h3>

                <div className="flex items-center gap-1">
                    <button type="button"
                            className="relative p-2 grid place-items-center border-neutral-300 border-[1px] rounded-[999px] overflow-hidden hover:bg-neutral-200 duration-200"
                            onClick={() => {
                                setShowShopListPart(s => s===0?0:s-1);
                                totalOffset.current = 0;
                            }}
                    >
                        <SvgIcons.LeftArrow className="size-4" />
                        <div className={`absolute inset-0 w-full h-full bg-neutral-300 bg-opacity-80
                        ${showShopListPart===0 ? "opacity-100" : "opacity-0"}
                        `}></div>
                    </button>
                    <button type="button"
                            className="relative p-2 grid place-items-center border-neutral-300 border-[1px] rounded-[999px] overflow-hidden hover:bg-neutral-200 duration-200"
                            onClick={() => {
                                setShowShopListPart(s => s===containerPartAmount.current-1?containerPartAmount.current-1:s+1);
                                totalOffset.current = -1128;
                            }}
                    >
                        <SvgIcons.RightArrow className="size-4" />
                        <div className={`absolute inset-0 w-full h-full bg-neutral-300 bg-opacity-80
                        ${showShopListPart===containerPartAmount.current-1?"opacity-100":"opacity-0"}`}></div>
                    </button>
                </div>
            </div>


            <div className="overflow-hidden no-scrollbar max-w-[1112px] touch-pan-y">
                <div className={`flex w-[calc(500%+64px)] sm:w-[calc(333.3%+37.3px)] md:w-[calc(250%+24px)] lg:w-[calc(200%+16px)] gap-4 duration-200`}
                     style={{transform: `translate3d(${showShopListPart*(-containerWidth.current-16)}px, 0, 0)`}}
                     onPointerDown={handlePointerDown}
                     ref={startShopListRef}
                >
                    {
                        data.data.map((d, i) => (
                            <StartShopItem {...d} key={i} hadMoved={hadMoved}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default StartShopList;