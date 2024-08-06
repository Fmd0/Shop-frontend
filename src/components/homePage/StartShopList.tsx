import StartShopItem from "./StartShopItem.tsx";
import leftArrow from "../../assets/HomePage/startShop/leftArrow.svg"
import rightArrow from "../../assets/HomePage/startShop/rightArrow.svg"
import React, {useEffect, useRef, useState} from "react";
import useHomeShopStarted from "../../hooks/useHomeShopStarted.ts";
import {throttle} from "../../utils/wrapper.ts";


const StartShopList = () => {

    const [showRight, setShowRight] = useState(false);
    const {data={msg: "", data: []}, error} = useHomeShopStarted();
    const startShopListRef = useRef<HTMLDivElement>(null);
    const startShopListOffsetRef = useRef<number>(0);
    const startShopListOffsetOnRef = useRef<boolean>(false);


    const handlePointMove = (e: React.PointerEvent<HTMLDivElement>) => {
        if(!startShopListOffsetOnRef.current) return;
        if(startShopListRef.current) {
            const offset = e.clientX - startShopListOffsetRef.current;
            if(startShopListRef.current.style.left === "") {
                startShopListRef.current.style.left = offset + "px";
            }
            else {
                startShopListRef.current.style.left = Number(startShopListRef.current.style.left.slice(0, -2)) + offset + "px";
            }
            // console.log(startShopListRef.current.style.left);
            startShopListOffsetRef.current = e.clientX;
        }
    }

    const handlePointUp = () => {
        startShopListOffsetOnRef.current = false;
        if(startShopListRef.current) {
            if(Number(startShopListRef.current.style.left.slice(0, -2)) > -560) {
                startShopListRef.current.style.left = "0";
                setShowRight(false);
                return;
            }

            if(Number(startShopListRef.current.style.left.slice(0, -2)) < -560) {
                startShopListRef.current.style.left = "-1128px";
                setShowRight(true);
                return;
            }
        }
    }

    const handlePointDown = (e:  React.PointerEvent<HTMLDivElement>) => {
        startShopListOffsetOnRef.current = true;
        startShopListOffsetRef.current = e.clientX;
    }

    useEffect(() => {
        const throttleHandlePointMove = throttle(handlePointMove);
        window.addEventListener("pointerup", handlePointUp);
        window.addEventListener("pointermove", throttleHandlePointMove);
        window.addEventListener("touchend", handlePointUp);
        return () => {
            window.removeEventListener("pointerup", handlePointUp);
            window.removeEventListener("pointermove", throttleHandlePointMove);
            window.addEventListener("touchend", handlePointUp);
        }
    }, []);


    if(error) {
        return null;
    }

    // console.log(startShopListRef.current?.style);

    return (
        <div className="mt-28 w-[1144px] mx-auto overflow-hidden select-none">
            <div className="flex items-center justify-between">

                <h3 className="text-[20px] font-semibold mb-8">Shops to get you started</h3>

                <div className="flex items-center gap-1">
                    <button type="button"
                            className="relative p-2 grid place-items-center border-neutral-300 border-[1px] rounded-[999px] overflow-hidden hover:bg-neutral-200 duration-200"
                            onClick={() => setShowRight(false)}
                            disabled={!showRight}
                    >
                        <img src={leftArrow} alt="leftArrow" className="w-4"/>
                        <div className={`absolute inset-0 w-full h-full bg-neutral-300 bg-opacity-80
                        ${!showRight ? "opacity-100" : "opacity-0"}
                        `}></div>
                    </button>
                    <button type="button"
                            className="relative p-2 grid place-items-center border-neutral-300 border-[1px] rounded-[999px] overflow-hidden hover:bg-neutral-200 duration-200"
                            onClick={() => setShowRight(true)}
                            disabled={showRight}
                    >
                        <img src={rightArrow} alt="rightArrow" className="w-4"/>
                        <div className={`absolute inset-0 w-full h-full bg-neutral-300 bg-opacity-80
                        ${showRight?"opacity-100":"opacity-0"}
                        `}></div>
                    </button>
                </div>

            </div>


            <div className="overflow-hidden w-[1112px] touch-pan-x">
                {/*${showRight?"-translate-x-1/2":""}`}*/}
                <div className={`relative flex items-center w-[calc(200%+16px)] duration-200 gap-4 touch-pan-x`}
                     style={{left: `${(showRight ? -1128 : 0)}px`}}
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