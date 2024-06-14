import useCommodityPageStore from "../../hooks/useCommodityPageStore.ts";
import {useMemo} from "react";

const ImagesGallery = () => {

    const {
        commodityInfo,
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
    }, [commodityInfo]);

    return (
        <>
            {/*big image gallery*/}
            <div className="overflow-hidden cursor-zoom-in aspect-[1.33] mb-4"
                 onClick={() => setImageModalOpen(true)}>

                {/*extra huge element*/}
                <div className={`relative flex h-full duration-300`}
                     style={{left: `-${imageIndex * 100}%`}}>


                    {
                        !!images &&  images.map((image, index) => (
                            <div key={index} className="min-w-full w-full h-full">
                                <div className="relative h-full w-max mx-auto overflow-hidden rounded-2xl">
                                    <img className="h-full object-cover"
                                         src={image}
                                         alt="commodity"
                                    />
                                    <div className="absolute inset-0 bg-[#0000000a]"></div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className="flex justify-between items-center">

                {/*image gallery*/}
                <div className="flex gap-1.5">
                    {
                        !!images && images.map((image, index) => (
                            <div key={index} className={`relative cursor-pointer rounded-[8px] overflow-hidden w-16 h-16 border-[2px]
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

export default ImagesGallery;