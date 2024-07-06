import StartShopItem from "./StartShopItem.tsx";
import leftArrow from "../../assets/HomePage/startShop/leftArrow.svg"
import rightArrow from "../../assets/HomePage/startShop/rightArrow.svg"
import {useState} from "react";
import useHomeShopStarted from "../../hooks/useHomeShopStarted.ts";


const StartShopList = () => {

    const [showRight, setShowRight] = useState(false);

    const {data={msg: "", data: []}, error} = useHomeShopStarted();

    if(error) {
        return null;
    }


    return (
        <div className="mt-28 w-[1144px] mx-auto overflow-hidden">
            <div className="flex items-center justify-between">

                <h3 className="text-[20px] font-semibold mb-8">Shops to get you started</h3>

                <div className="flex items-center gap-1">
                    <button type="button"
                            className="relative p-2 grid place-items-center border-neutral-300 border-[1px] rounded-[999px] overflow-hidden hover:bg-neutral-200 duration-200"
                            onClick={() => setShowRight(false)}
                            disabled={!showRight}
                    >
                        <img src={leftArrow} alt="leftArrow" className="w-4"/>
                        <div className={`absolute inset-0 w-full h-full bg-neutral-300 bg-opacity-80
                        ${!showRight ? "opacity-100" : "opacity-0"}
                        `}></div>
                    </button>
                    <button type="button"
                            className="relative p-2 grid place-items-center border-neutral-300 border-[1px] rounded-[999px] overflow-hidden hover:bg-neutral-200 duration-200"
                            onClick={() => setShowRight(true)}
                            disabled={showRight}
                    >
                        <img src={rightArrow} alt="rightArrow" className="w-4"/>
                        <div className={`absolute inset-0 w-full h-full bg-neutral-300 bg-opacity-80
                        ${showRight?"opacity-100":"opacity-0"}
                        `}></div>
                    </button>
                </div>

            </div>


            <div className="overflow-hidden w-[1112px]">

                <div className={`flex items-center w-[calc(200%+16px)] duration-300 gap-4
                ${showRight?"-translate-x-1/2":""}`}
                >
                    {
                        data.data.map((d, i) => (
                            <StartShopItem {...d} key={i}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default StartShopList;