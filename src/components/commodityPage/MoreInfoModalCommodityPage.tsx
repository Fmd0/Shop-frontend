import useCommodityPageStore from "../../hooks/useCommodityPageStore.ts";


const MoreInfoModalCommodityPage = () => {

    const {commodityInfo, moreInfoModalOpen, openContactModal} = useCommodityPageStore();

    return (
        <div className={`absolute right-0 top-[calc(100%+4px)] text-nowrap w-max bg-white p-2 border-[0.5px] border-neutral-100 rounded-2xl 
        shadow-[0px_0px_8px_#00000026] ${moreInfoModalOpen?"":"hidden"}`}
             onClick={e => e.stopPropagation()}>
            <div className="cursor-pointer flex items-center gap-2 pl-2 pr-3 py-3 hover:bg-neutral-200 rounded-xl duration-300"
                 onClick={openContactModal}
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                     className="" data-testid="icon-shop-chat" stroke="none" style={{width: "20px", height: "20px"}}>
                    <path d="M3.0022 4H21.0022V18H12.0022L7.0022 21V18H3.0022V4Z" stroke="currentColor" strokeWidth="2"
                          strokeLinecap="square" strokeLinejoin="round"></path>
                </svg>
                <p>Contact {commodityInfo?.market?.name || ""}</p>
            </div>
        </div>
    )
}

export default MoreInfoModalCommodityPage;