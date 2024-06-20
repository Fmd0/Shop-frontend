
const ColorModalItem = ({formControlState, setFormControlState, value, textValue, color}: {
    formControlState: string[],
    setFormControlState: (state: string[]) => void,
    value: string,
    textValue: string,
    color: string,
}) => {

    return (
        <div className="flex items-center justify-between py-3 cursor-pointer group/sortByItem"
             onClick={() => {
                 if(formControlState.includes(value)) {
                     setFormControlState(formControlState.filter(f => f !== value))
                 }
                 else {
                     setFormControlState([...formControlState, value]);
                 }
             }}
        >

            {/*left side text*/}
            <div className="relative text-black text-[16px] tracking-[0.15px] font-medium flex items-center gap-3">
                <div className="w-4 h-4 border-neutral-300 border-[1px] rounded-[4px]" style={{backgroundColor: color}}></div>
                <span className="group-hover/sortByItem:text-neutral-500">{textValue}</span>
            </div>


            {/*right side check*/}
            <div className={`w-5 h-5 border-[1px] rounded-[4px] overflow-hidden ${formControlState.includes(value) ? "border-black" : "border-neutral-400 group-hover/sortByItem:border-black"} grid place-items-center`}>
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"
                     className={`w-full h-full bg-black duration-200 ${formControlState.includes(value)?"opacity-100":"opacity-0"}`}>
                    <path d="M2.72369 11.7031L7.2695 16.0243L17.5 3.33334" stroke="#FFFFFF" strokeWidth="1.66667"
                          strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
            </div>
        </div>
    )
}

export default ColorModalItem;