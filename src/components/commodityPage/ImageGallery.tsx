import useCommodityPageStore from "../../hooks/useCommodityPageStore.ts";
import React, {useEffect, useRef} from "react";
import useCommodityInfo from "../../hooks/useCommodityInfo.ts";
import SvgIcons from "../common/SvgIcons.tsx";

const ImageGallery = () => {

    const id = new URLSearchParams(window.location.search).get("id")||"";
    const {data: {data: {commodity: commodityInfo}} = {data: {commodity: null, bestSellingCommodities: []}}} = useCommodityInfo(id);

    const {
        setImageModalOpen,
        imageIndex,
        setImageIndex,
        images,
    } = useCommodityPageStore();

    const imageGalleryRef = useRef<HTMLDivElement>(null);
    const imageGalleryWidthRef = useRef<number>(0);
    const commodityImageLength = useRef<number>(1);
    const prePosition = useRef<number>(0);
    const totalOffset = useRef<number>(0);
    const startMove = useRef<boolean>(false);
    const hasMoved = useRef<boolean>(false);
    const animationFrameId = useRef<number>(0);

    const handlePointDown = (event:  React.PointerEvent<HTMLDivElement>) => {
        hasMoved.current = false;
        startMove.current = true;
        prePosition.current = event.clientX;
        if(imageGalleryRef.current) {
            imageGalleryRef.current.style.transitionDuration = '0ms';
        }
    }


    const handlePointMove = (() => {
        let isThrottle = false;
        return (e: PointerEvent) => {
            if(!startMove.current || isThrottle) {
                return;
            }
            isThrottle = true;
            setTimeout(() => {
                isThrottle = false;
            }, 8);
            if(imageGalleryRef.current) {
                const currentOffset = e.clientX - prePosition.current;
                if(!hasMoved.current && Math.abs(currentOffset)>3) {
                    hasMoved.current = true;
                }
                if(totalOffset.current > 0 || totalOffset.current < -(commodityImageLength.current-1)*imageGalleryWidthRef.current) {
                    totalOffset.current += currentOffset/2;
                }
                else {
                    totalOffset.current += currentOffset;
                }
                window.cancelAnimationFrame(animationFrameId.current);
                animationFrameId.current = window.requestAnimationFrame(() => {
                    if(imageGalleryRef.current) {
                        imageGalleryRef.current.style.transform = `translate3d(${totalOffset.current}px, 0, 0)`;
                    }
                })
                // imageGalleryRef.current.style.transform = `translate3d(${totalOffset.current}px, 0, 0)`;
                prePosition.current = e.clientX;
            }

        }
    })();

    const handlePointUp = () => {
        if(!startMove.current) {
            return;
        }
        startMove.current = false;
        if(imageGalleryRef.current) {
            const commodityImageLength = commodityInfo?.images.length || 0;
            let newImageIndex = Math.round(-totalOffset.current/imageGalleryWidthRef.current);
            newImageIndex = newImageIndex < 0 ? 0 : newImageIndex;
            newImageIndex = newImageIndex > commodityImageLength-1 ? commodityImageLength-1 : newImageIndex;

            totalOffset.current = -newImageIndex * imageGalleryWidthRef.current;

            setImageIndex(newImageIndex);
            imageGalleryRef.current.style.transform = `translate3d(${totalOffset.current}px, 0, 0)`;
            imageGalleryRef.current.style.transitionDuration = '300ms';
        }
    }

    const handlePointerCancel = handlePointUp;

    useEffect(() => {
        if(imageGalleryRef.current) {
            totalOffset.current = -imageIndex * imageGalleryWidthRef.current;
        }
    }, [imageIndex]);

    useEffect(() => {
        if(imageGalleryRef.current) {
            imageGalleryWidthRef.current = imageGalleryRef.current.offsetWidth;
        }
    }, [imageGalleryWidthRef.current]);

    useEffect(() => {
        commodityImageLength.current = commodityInfo?.images.length||1;
        window.addEventListener("pointermove", handlePointMove);
        window.addEventListener("pointerup", handlePointUp);
        window.addEventListener("pointercancel", handlePointerCancel);
        return () => {
            window.removeEventListener("pointermove", handlePointMove);
            window.removeEventListener("pointerup", handlePointUp);
            window.removeEventListener("pointercancel", handlePointerCancel);
        }
    }, [commodityInfo]);



    return (
        <div>
            {/*big image gallery*/}
            <div className="relative cursor-zoom-in md:mb-4"
                 onClick={() => {
                     if(!hasMoved.current) {
                         setImageModalOpen(true);
                     }
                 }}>

                {/*extra huge element*/}
                <div className="flex duration-300 touch-pan-y will-change-transform" style={{transform: `translate3d(-${imageIndex * 100}%, 0, 0)`}}
                     ref={imageGalleryRef}
                     onPointerDown={handlePointDown}
                >
                    {
                        images.length > 0 &&  images.map((image, index) => (
                            <div key={index} className="flex-shrink-0 w-full flex items-center justify-center">
                                    <div className="relative w-full md:w-max mx-auto overflow-hidden md:rounded-2xl">
                                        <img className="h-[65vh] w-full md:max-w-full object-cover"
                                             src={image}
                                             alt="commodity"
                                        />
                                        <div className="absolute inset-0 bg-[#0000000a]"></div>
                                    </div>
                            </div>
                        ))
                    }
                </div>

                {
                    images.length > 0 &&
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 md:hidden flex flex-row items-center gap-2">
                        {
                            Array.from({length: images.length }).map((_, index) =>
                                index === imageIndex
                                    ? <div key={index} className="size-1.5 bg-[#0006] bg-opacity-80 rounded-[999px]"></div>
                                    : <div key={index} className="size-1 bg-[#0003]  rounded-[999px]"></div>
                            )
                        }
                    </div>
                }
            </div>

            {/*small image gallery*/}
            <div className="hidden md:flex justify-between items-center">

                {/*image gallery*/}
                <div className="flex gap-1.5 overflow-auto no-scrollbar">
                    {
                        images.length > 0 && images.map((image, index) => (
                            <div key={index} className={`relative cursor-pointer flex-shrink-0 rounded-[8px] overflow-hidden size-12 lg:size-16 border-[2px]
                                ${imageIndex === index ? "border-black" : "border-transparent duration-300 hover:border-black"}`}
                                 onClick={() => setImageIndex(index)}
                            >
                                <img src={image} alt="commodity" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-[#0000000a]"></div>
                            </div>
                        ))
                    }
                </div>

                {/*two button*/}
                <div className="flex gap-1">
                    <div className="cursor-pointer w-11 h-11 grid place-items-center rounded-[999px] bg-white border-neutral-300 border-[1px] duration-300 hover:bg-neutral-300"
                         onClick={() => {
                             if(imageIndex === 0) {
                                 setImageIndex(commodityImageLength.current-1);
                                 return;
                             }
                             setImageIndex(imageIndex-1);
                         }}>
                        <SvgIcons.LeftArrow className="size-5" />
                    </div>
                    <div className="cursor-pointer w-11 h-11 grid place-items-center rounded-[999px] bg-white border-neutral-300 border-[1px] duration-300 hover:bg-neutral-300"
                         onClick={() => {
                             if(imageIndex === commodityImageLength.current-1) {
                                 setImageIndex(0);
                                 return;
                             }
                             setImageIndex(imageIndex+1);
                         }}>
                        <SvgIcons.RightArrow className="size-5" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ImageGallery;