import {Dispatch, SetStateAction} from "react";

const SortByItem = ({textValue, value, sortByFormControl, setSortByFormControl}: {
    textValue: string,
    value: string,
    sortByFormControl: string,
    setSortByFormControl: Dispatch<SetStateAction<string>>,
}) => {

    return (
        <div className="flex items-center justify-between py-3 cursor-pointer group/sortByItem"
             onClick={() => setSortByFormControl(value)}
        >
            <div className="text-black text-[16px] tracking-[0.15px] duration-200 group-hover/sortByItem:text-neutral-500">{textValue}</div>
            <div className={`w-[18px] h-[18px] border-[1px] rounded-[999px] ${sortByFormControl===value?"border-black":"border-neutral-400 group-hover/sortByItem:border-black"} grid place-items-center`}>
                <div className={`w-[9px] h-[9px] ${sortByFormControl===value?"bg-black":"bg-white"} rounded-[999px]`}></div>
            </div>
        </div>
    )
}

export default SortByItem;