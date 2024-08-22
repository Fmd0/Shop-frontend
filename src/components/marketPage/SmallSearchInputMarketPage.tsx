import {useState} from "react";
import useMarketPageCommodityInfoStore from "../../hooks/useMarketPageCommodityInfoStore.ts";
import SvgIcons from "../common/SvgIcons.tsx";
import useMarketInfo from "../../hooks/useMarketInfo.ts";


const SmallSearchInputMarketPage = () => {

    const {setQuery} = useMarketPageCommodityInfoStore();
    const [queryFormControl, setQueryFormControl] = useState("");

    const id = new URLSearchParams(window.location.search).get('id')||"";
    const {data:{data: marketInfo}={data: null}} = useMarketInfo(id);


    return (
        <div className="relative flex md:hidden items-center  bg-neutral-100 rounded-xl py-3 px-4 transition-all duration-200">
            <form method="GET" className="flex-1 flex flex-row items-center gap-2" onSubmit={(e) => {
                e.preventDefault();
                if (queryFormControl !== "") {
                    setQuery(queryFormControl);
                }
            }}>
                <SvgIcons.Search className="size-5 text-[rgb(111,112,113)]" />
                <input type="search" autoComplete="off"
                       className="relative w-full z-10 bg-transparent focus:outline-none"
                       placeholder={`Search ${marketInfo?.name||""}`}
                       value={queryFormControl}
                       onChange={(e) => setQueryFormControl(e.target.value)}
                />
            </form>
        </div>
    )
}

export default SmallSearchInputMarketPage;
