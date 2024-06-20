import {useState} from "react";
import {getParamArrayFromURL} from "../../utils/searchPageUtils.ts";
import SizeModalItem from "./SizeModalItem.tsx";


const SizeModal = ({modalOpen, toggleModalOpen, setState}: {
    modalOpen: boolean;
    toggleModalOpen: () => void;
    setState: (state: string[]) => void;
}) => {

    const [formControlState, setFormControlState] = useState<string[]>(getParamArrayFromURL("size"))

    return (
        <div className={`absolute z-30 top-[calc(100%+6px)] left-1/2 -translate-x-1/2 font-medium w-[300px] bg-white text-nowrap pt-1 pb-5 px-5 rounded-3xl shadow-[0px_0px_8px_#00000026]
        ${modalOpen ? "" : "hidden"}
        `}>
            {
                ["S", "M", "L", "XL", "2XL"].map((item) => (
                    <SizeModalItem key={item} formControlState={formControlState} setFormControlState={setFormControlState} value={item} textValue={item} />
                ))
            }

            {/*reset and done button*/}
            <div className="grid grid-cols-2 gap-2 text-center mt-4 text-[16px]">
                <div className="bg-neutral-100 duration-200 hover:bg-neutral-200 text-black py-3 rounded-[12px] cursor-pointer"
                    onClick={() => setFormControlState([])}>
                    Reset
                </div>
                <div className="bg-black duration-200 hover:bg-neutral-800 text-white py-3 rounded-[12px] cursor-pointer"
                    onClick={() => { setState(formControlState); toggleModalOpen(); }}>
                    Done
                </div>
            </div>
        </div>
    )
}

export default SizeModal;