import {useEffect, useState} from "react";
import {getParamFromURL} from "../../utils/searchPageUtils.ts";


const PriceModal = ({modalOpen, togglePriceModalOpen, setStartPrice, setEndPrice}: {
    modalOpen: boolean;
    togglePriceModalOpen: () => void;
    setStartPrice: (price: number) => void;
    setEndPrice: (price: number) => void;
}) => {



    const [startPriceFormControl, setStartPriceFormControl] = useState<number>(Number(getParamFromURL("startPrice")) || 0);
    const [endPriceFormControl, setEndPriceFormControl] = useState<number>(Number(getParamFromURL("endPrice")) || 2000);

    useEffect(() => {
        setStartPriceFormControl(Number(getParamFromURL("startPrice")) || 0);
        setEndPriceFormControl(Number(getParamFromURL("endPrice")) || 2000)
    }, [modalOpen]);


    return (
        <div className={`absolute z-30 top-[calc(100%+6px)] left-1/2 -translate-x-1/2 w-[300px] bg-white text-nowrap pt-1 pb-5 px-5 rounded-3xl shadow-[0px_0px_8px_#00000026]
        ${modalOpen ? "hidden md:block" : "hidden"}
        `}>
            <div className="grid grid-cols-[1fr_auto_1fr] gap-2 mt-4 items-center text-[14px] tracking-[0.15px]">
                <input type="number"
                       min="0"
                       max="2000"
                       step="1"
                       className="w-full outline-none rounded-lg py-1 px-4 border-[1px] border-neutral-200 focus:border-purple-600 inputNumberNoArrow"
                       value={startPriceFormControl}
                       onChange={(e) => {
                           setStartPriceFormControl(Number(e.target.value));
                       }}
                />
                <span className="text-neutral-300">-</span>
                <input type="number"
                       min="0"
                       max="2000"
                       step="1"
                       className="w-full outline-none rounded-lg py-1 px-4 border-[1px] border-neutral-200 focus:border-purple-600 inputNumberNoArrow"
                       value={endPriceFormControl}
                       onChange={(e) => {
                           setEndPriceFormControl(Number(e.target.value))
                       }}
                />
            </div>


            <div className="grid grid-cols-2 gap-2 text-center mt-4 text-[16px]">
                <div
                    className="bg-neutral-100 duration-200 hover:bg-neutral-200 text-black py-3 rounded-[12px] cursor-pointer"
                    onClick={() => {
                        setStartPriceFormControl(0);
                        setEndPriceFormControl(2000);
                    }}>Reset
                </div>
                <div
                    className="bg-black duration-200 hover:bg-neutral-800 text-white py-3 rounded-[12px] cursor-pointer"
                    onClick={() => {
                        setStartPrice(startPriceFormControl);
                        setEndPrice(endPriceFormControl);
                        togglePriceModalOpen();
                    }}
                >Done
                </div>
            </div>
        </div>
    )
}

export default PriceModal;