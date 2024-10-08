import useCommodityPageStore from "../../hooks/useCommodityPageStore.ts";
import { useState} from "react";

const ImageModal = () => {

    const {
        imageModalOpen,
        commodityInfoImageLength,
        setImageModalOpen,
        imageIndex,
        setImageIndex,
        images,
    } = useCommodityPageStore();
    const [isZoomIn, setIsZoomIn] = useState<boolean>(true);

    return (
        <div className={`overflow-scroll select-none fixed z-50 inset-0 touch-none bg-white ${imageModalOpen ? "" : "hidden"} ${isZoomIn ? "md:cursor-zoom-in" : "md:cursor-zoom-out"}`}
            onClick={() => {
                if(window.innerWidth >= 768 ) {
                    setIsZoomIn(z => !z);
                }
            }}>
            <img src={images[imageIndex]} alt="commodity" className={`${isZoomIn?"w-full h-full object-contain":"w-full"}`}/>

            {/*close button*/}
            <div className="cursor-pointer absolute right-10 top-10 w-10 h-10 grid place-items-center rounded-[999px] bg-neutral-400"
                onClick={(e) => {
                    e.stopPropagation();
                    setImageModalOpen(false);
                }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                     data-testid="icon-cross" stroke="none" color="white"
                     style={{width: "24px", height: "24px"}}>
                    <path d="M5 5L19 19M19 5L5 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                </svg>
            </div>


            {/*left right button*/}
            <div className="fixed left-1/2 -translate-x-1/2 bottom-10 flex gap-1">
                <div
                    className="cursor-pointer w-11 h-11 grid place-items-center rounded-[999px] bg-neutral-400 duration-300 hover:bg-neutral-500"
                    onClick={(event) => {
                        event.stopPropagation();
                        if(imageIndex === 0) return;
                        setImageIndex(imageIndex-1);
                    }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" color="white"
                         xmlns="http://www.w3.org/2000/svg" data-testid="icon-left-chevron" stroke="none"
                         style={{width: "20px", height: "20px"}}>
                        <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                              strokeLinejoin="round"></path>
                    </svg>
                </div>
                <div className="cursor-pointer w-11 h-11 grid place-items-center rounded-[999px] bg-neutral-400 duration-300 hover:bg-neutral-500"
                     onClick={(event) => {
                         event.stopPropagation();
                         if(imageIndex === commodityInfoImageLength-1) return;
                         setImageIndex(imageIndex+1);
                     }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                         xmlns="http://www.w3.org/2000/svg" color="white"
                         data-testid="icon-right-chevron" stroke="none" style={{width: "20px", height: "20px"}}>
                        <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                              strokeLinejoin="round"></path>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default ImageModal