import StarList from "../commodityPage/StarList.tsx";

const RatingsModalItem = ({formControlState, setFormControlState, value, textValue}: {
    formControlState: number,
    setFormControlState: (state: number) => void,
    value: number,
    textValue: number,
}) => {


    return (
        <div className="flex items-center justify-between py-3 cursor-pointer group/sortByItem"
             onClick={() => setFormControlState(value)}
        >
            <div className="relative text-black text-[16px] tracking-[0.15px] font-medium flex items-center">
                <StarList size={16} rating={textValue} gap={2} />
                <span className="ml-1">& Up</span>
                <div className="absolute inset-0 bg-transparent duration-200 group-hover/sortByItem:bg-[#ffffff7a]"></div>
            </div>
            <div
                className={`w-[18px] h-[18px] border-[1px] rounded-[999px] ${formControlState === value ? "border-black" : "border-neutral-400 group-hover/sortByItem:border-black"} grid place-items-center`}>
                <div
                    className={`w-[9px] h-[9px] ${formControlState === value ? "bg-black" : "bg-white"} rounded-[999px]`}></div>
            </div>
        </div>
    )
}

export default RatingsModalItem;