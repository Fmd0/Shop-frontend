import {useState} from "react";
import ColorModalItem from "./ColorModalItem.tsx";
import {getParamArrayFromURL} from "../../utils/searchPageUtils.ts";


const ColorModal = ({modalOpen, toggleModalOpen, setState}: {
    modalOpen: boolean;
    toggleModalOpen: () => void;
    setState: (state: string[]) => void;
}) => {

    const [formControlState, setFormControlState] = useState<string[]>(getParamArrayFromURL("color"))

    return (
        <div className={`absolute z-30 top-[calc(100%+6px)] left-1/2 -translate-x-1/2 font-medium w-[300px] bg-white text-nowrap pt-1 pb-5 px-5 rounded-3xl shadow-[0px_0px_8px_#00000026]
        ${modalOpen ? "" : "hidden"}`}>

            <div className="max-h-[310px] overflow-auto no-scrollbar">
                {
                    [
                        {
                            text: "Black",
                            color: "rgb(11,11,12)",
                        },
                        {
                            text: "Silver",
                            color: "rgb(224,224,224)",
                        },
                        {
                            text: "White",
                            color: "rgb(255,255,255)",
                        },
                        {
                            text: "Blue",
                            color: "rgb(32,98,198)",
                        },
                        {
                            text: "Gray",
                            color: "rgb(166,166,166)",
                        },
                        {
                            text: "Red",
                            color: "rgb(206,18,18)",
                        },
                        {
                            text: "Gold",
                            color: "rgb(212,175,55)",
                        },
                        {
                            text: "Green",
                            color: "rgb(32,198,68)",
                        },
                    ].map((item) => (
                        <ColorModalItem key={item.text} formControlState={formControlState} setFormControlState={setFormControlState} value={item.text} textValue={item.text} color={item.color} />
                    ))
                }
            </div>

            {/*reset and done button*/}
            <div className="relative grid grid-cols-2 gap-2 text-center mt-4 text-[16px]">
                <div className="absolute h-4 left-0 right-0 -top-8 bg-[linear-gradient(rgba(255,255,255,0)_0%,rgb(255,255,255)_100%)]"></div>
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

export default ColorModal;