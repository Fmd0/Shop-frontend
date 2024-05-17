import PicRow from "./PicRow.tsx";
import {row0, row1, row2} from "../../utils/data.ts";
import MainContentLogo from "../../assets/HomePage/MainContentLogo.svg"
import Search from "../../assets/HomePage/Search.svg"


const HomePageMainContent = () => {
    return (
        <div className="overflow-hidden flex flex-col gap-4 relative">
            <PicRow data={row0} />
            <PicRow data={row1} />
            <PicRow data={row2} />

            <div className="absolute top-[calc(50%-72px)] left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-8 items-center justify-center">
                <img src={MainContentLogo} alt="MainContentLogo" className="h-[72px] text-purple-600"/>
                <div className="flex items-center w-[530px] p-3 bg-white rounded-3xl border-neutral-200 border-[10px]">
                    <img src={Search} alt="Search" className="w-5 mr-2"/>
                    <input type="search" autoComplete="off" placeholder="Yoga mats with good grips"
                           className="flex-grow-[1] focus:outline-none"
                    />
                </div>
            </div>
        </div>
    )
}

export default HomePageMainContent;