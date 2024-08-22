import useMarketInfo from "../../hooks/useMarketInfo.ts";
import useMarketPageCommodityInfoStore from "../../hooks/useMarketPageCommodityInfoStore.ts";
import SvgIcons from "../common/SvgIcons.tsx";
import SmallFilterModal from "./SmallFilterModal.tsx";


const SmallFilterBar = () => {


    const id = new URLSearchParams(window.location.search).get('id')||"";
    const {data:{data: marketInfo}={data: null}} = useMarketInfo(id);

    const {
        tag,
        setTag,
        toggleSmallFilterModal
    } = useMarketPageCommodityInfoStore();

    return (
        <div className="flex md:hidden items-center justify-between">

            {/*tag list or text products*/}
            {
                marketInfo?.marketTag?.tags && marketInfo.marketTag.tags.length > 0
                    ? <div className="relative">
                        <div
                            className="w-[calc(100vw-32px-32px)] overflow-auto no-scrollbar flex items-center gap-4 text-[rgb(111_112_113)] text-[17px] tracking-[0.15px]">
                            <p className={`${tag === "All" ? "text-black" : ""} flex-shrink-0 cursor-pointer duration-300 hover:text-black`}
                               onClick={() => setTag("All")}>
                                All
                            </p>
                            {
                                marketInfo.marketTag.tags.map(t => (
                                    <p key={t}
                                       className={`${tag === t ? "text-black" : ""} flex-shrink-0 cursor-pointer duration-300 hover:text-black`}
                                       onClick={() => setTag(t)}>
                                        {t}
                                    </p>
                                ))
                            }
                        </div>
                        <div
                            className="absolute top-0 right-0 w-20 h-full bg-[linear-gradient(to_right,rgba(255,255,255,0)_0%,rgb(255,255,255)_100%)]"></div>

                    </div>
                    : <h1 className="text-[18px] font-medium tracking-[0.15px]">Products</h1>

            }

            <button type="button"
                    className="size-8 rounded-[999px] border-[1px] border-[#0000001a] duration-200 hover:bg-[#0000001a] flex items-center justify-center"
                    onClick={(event) => {
                        event.stopPropagation();
                        toggleSmallFilterModal();
                    }}>
                <SvgIcons.Filter className="size-4"/>
            </button>

            <SmallFilterModal />
        </div>
    )
}

export default SmallFilterBar;