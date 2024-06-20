import {useState} from "react";
import {getParamFromURL} from "../../utils/searchPageUtils.ts";
import {shipToOptions} from "../../utils/data.ts";


const SizeModal = ({modalOpen, toggleModalOpen, setState}: {
    modalOpen: boolean;
    toggleModalOpen: () => void;
    setState: (state: string) => void;
}) => {

    const value = getParamFromURL("shipsTo")||"";
    const [formControlState, setFormControlState] = useState<string>(value)
    const [formControlStateText, setFormControlStateText] = useState<string>(shipToOptions.find(s => s.value===value)?.textValue||"")

    return (
        <div className={`absolute z-30 top-[calc(100%+6px)] left-1/2 -translate-x-1/2 font-medium w-[300px] bg-white text-nowrap pt-1 pb-5 px-5 rounded-3xl shadow-[0px_0px_8px_#00000026]
        ${modalOpen ? "" : "hidden"}
        `}>

            <div className="relative mt-2 flex items-center justify-between font-normal py-2 px-4 border-neutral-200 border-[1px] rounded-lg">

                <p>{formControlStateText}</p>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                     data-testid="icon-down-chevron" stroke="none"
                     style={{width: "15px", height: "16px"}}>
                    <path d="M18 9L12 15L6 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                          strokeLinejoin="round"></path>
                </svg>
                <select className="absolute inset-0 opacity-0"
                        defaultValue={value}
                        onChange={(e) => {
                            setFormControlState(e.currentTarget.value);
                            setFormControlStateText(e.currentTarget.selectedOptions[0].innerText);
                        }}>
                    {
                        shipToOptions.map(shipToOption => (
                            <option key={shipToOption.value}
                                    value={shipToOption.value}>{shipToOption.textValue}</option>
                        ))
                    }
                </select>
            </div>

            {/*reset and done button*/}
            <div className="grid grid-cols-2 gap-2 text-center mt-4 text-[16px]">
                <div
                    className="bg-neutral-100 duration-200 hover:bg-neutral-200 text-black py-3 rounded-[12px] cursor-pointer"
                    onClick={() => {
                        setFormControlStateText("Select a country");
                        setFormControlState("");
                    }}>
                    Reset
                </div>
                <div
                    className="bg-black duration-200 hover:bg-neutral-800 text-white py-3 rounded-[12px] cursor-pointer"
                    onClick={() => {
                        setState(formControlState);
                        toggleModalOpen();
                    }}>
                    Done
                </div>
            </div>
        </div>
    )
}

export default SizeModal;