import {useEffect, useState} from "react";
import RatingsModalItem from "./RatingsModalItem.tsx";
import {getParamFromURL} from "../../utils/searchPageUtils.ts";

const RatingsModal = ({modalOpen, toggleModalOpen, setState}: {
    modalOpen: boolean;
    toggleModalOpen: () => void;
    setState: (state: number) => void;
}) => {

    const [formControlState, setFormControlState] = useState(Number(getParamFromURL("ratings")) || 0)


    useEffect(() => {
        setFormControlState(Number(getParamFromURL("ratings")) || 0);
    }, [modalOpen]);

    return (
        <div className={`absolute z-30 top-[calc(100%+6px)] left-1/2 -translate-x-1/2 font-medium w-[300px] bg-white text-nowrap pt-1 pb-5 px-5 rounded-3xl shadow-[0px_0px_8px_#00000026]
        ${modalOpen ? "hidden md:block" : "hidden"}
        `}>

            <div className="flex items-center justify-between py-3 cursor-pointer group/sortByItem"
                 onClick={() => setFormControlState(0)}>
                <span className="group-hover/sortByItem:text-neutral-500">All ratings</span>
                <div
                    className={`w-[18px] h-[18px] border-[1px] rounded-[999px] ${formControlState === 0 ? "border-black" : "border-neutral-400 group-hover/sortByItem:border-black"} grid place-items-center`}>
                    <div
                        className={`w-[9px] h-[9px] ${formControlState === 0 ? "bg-black" : "bg-white"} rounded-[999px]`}></div>
                </div>
            </div>

            {
                Array.from({length: 4}, (_, i) => 4-i).map(i => (
                    <RatingsModalItem key={i} formControlState={formControlState} setFormControlState={setFormControlState} value={i} textValue={i}/>
                ))
            }

            <div className="grid grid-cols-2 gap-2 text-center mt-4 text-[16px]">
                <div
                    className="bg-neutral-100 duration-200 hover:bg-neutral-200 text-black py-3 rounded-[12px] cursor-pointer"
                    onClick={() => setFormControlState(0)}>Reset
                </div>
                <div
                    className="bg-black duration-200 hover:bg-neutral-800 text-white py-3 rounded-[12px] cursor-pointer"
                    onClick={() => {
                        setState(formControlState);
                        toggleModalOpen();
                    }}
                >Done
                </div>
            </div>
        </div>
    )
}

export default RatingsModal;