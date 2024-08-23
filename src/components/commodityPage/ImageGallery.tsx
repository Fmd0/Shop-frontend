import useCommodityPageStore from "../../hooks/useCommodityPageStore.ts";
import {useMemo} from "react";
import useCommodityInfo from "../../hooks/useCommodityInfo.ts";

const ImageGallery = () => {

    const id = new URLSearchParams(window.location.search).get("id")||"";
    const {data: {data: {commodity: commodityInfo}} = {data: {commodity: null, bestSellingCommodities: []}}} = useCommodityInfo(id);

    const {
        setImageModalOpen,
        imageIndex,
        setImageIndex,
        addImageIndex,
        subtractImageIndex,
        skuItemKey,
    } = useCommodityPageStore();

    const skuItemMap = useMemo(() => {
        if(!commodityInfo) return {};
        return Object.fromEntries(commodityInfo?.skuItems.map(skuItem => {
            const key = commodityInfo?.skuConfigs.map(skuConfig => {
                return skuItem.sku[skuConfig.key]||skuConfig.defaultValue
            }).join("_");
            return [key, skuItem]
        }))
    }, [commodityInfo]);

    const images = useMemo(() => {
        if(!commodityInfo) {
            return [];
        }
        if(commodityInfo.skuItems.length === 0) {
            return commodityInfo.images;
        }
        const images = commodityInfo.images;
        images[0] = skuItemMap[skuItemKey]?.image||"";
        return images;
    }, [commodityInfo, skuItemKey]);


    return (
        <>
            {/*big image gallery*/}
            <div className="relative overflow-hidden cursor-zoom-in mb-4"
                 onClick={() => setImageModalOpen(true)}>

                {/*extra huge element*/}
                <div className={`flex duration-300`}
                     style={{transform: `translate(-${imageIndex * 100}%, 0)`}}>
                    {
                        images.length > 0 &&  images.map((image, index) => (
                            <div key={index} className="flex-shrink-0 w-full flex items-center justify-center">
                                    <div className="relative w-max mx-auto overflow-hidden rounded-2xl">
                                        <img className="h-[65vh] max-w-full object-contain"
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
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-row items-center gap-2">
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
                         onClick={subtractImageIndex}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                             xmlns="http://www.w3.org/2000/svg" data-testid="icon-left-chevron" stroke="none"
                             style={{width: "20px", height: "20px"}}>
                            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                  strokeLinejoin="round"></path>
                        </svg>
                    </div>
                    <div className="cursor-pointer w-11 h-11 grid place-items-center rounded-[999px] bg-white border-neutral-300 border-[1px] duration-300 hover:bg-neutral-300"
                         onClick={addImageIndex}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                             xmlns="http://www.w3.org/2000/svg" className="text-text"
                             data-testid="icon-right-chevron" stroke="none" style={{width: "20px", height: "20px"}}>
                            <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                  strokeLinejoin="round"></path>
                        </svg>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ImageGallery;