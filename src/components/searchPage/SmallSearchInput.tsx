import Search from "../../assets/HomePage/Search.svg";
import {useSearchInfoStore} from "../../hooks/useSearchInfoStore.ts";
import {useState} from "react";
import {getParamFromURL} from "../../utils/searchPageUtils.ts";
import PlaceholderList from "../common/PlaceholderList.tsx";


const SmallSearchInput = () => {

    const {setQuery} = useSearchInfoStore();
    const [queryFormControl, setQueryFormControl] = useState(getParamFromURL("query")||"");

    return (
        <div
            className="relative flex md:hidden items-center  bg-neutral-100 rounded-2xl p-3 mt-4 mb-2 mx-4 transition-all duration-200">
            <img src={Search} alt="Search" className="w-5 ml-2 mr-3"/>
            <form method="GET" className="flex-1" onSubmit={(e) => {
                e.preventDefault();
                if (queryFormControl !== "") {
                    setQuery(queryFormControl);
                }
            }}>
                <input type="search" autoComplete="off"
                       className="relative w-full z-10 bg-transparent focus:outline-none"
                       value={queryFormControl}
                       onChange={(e) => setQueryFormControl(e.target.value)}
                />
            </form>
            <PlaceholderList isVisible={queryFormControl===""} left={52} />
        </div>
    )
}

export default SmallSearchInput;