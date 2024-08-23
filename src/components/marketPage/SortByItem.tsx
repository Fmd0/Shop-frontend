import {Dispatch, SetStateAction} from "react";

const SortByItem = ({size, textValue, value, sortByFormControl, setSortByFormControl}: {
    size: number,
    textValue: string,
    value: string,
    sortByFormControl: string,
    setSortByFormControl: Dispatch<SetStateAction<string>>|((value: string) => void),
}) => {

    return (
        <div className="flex items-center justify-between py-3 cursor-pointer group/sortByItem"
             onClick={() => setSortByFormControl(value)}
        >
            <div className="text-black text-[16px] tracking-[0.15px] duration-200 group-hover/sortByItem:text-neutral-500">{textValue}</div>
            <div className={`border-[1px] rounded-[999px] ${sortByFormControl===value?"border-black":"border-neutral-400 group-hover/sortByItem:border-black"} grid place-items-center`}
                 style={{width: `${size}px`, height: `${size}px`}}>
                <div className={`size-[10px] ${sortByFormControl===value?"bg-black":"bg-white"} rounded-[999px]`}
                     style={{width: `${size/2}px`, height: `${size/2}px`}}></div>
            </div>
        </div>
    )
}

export default SortByItem;