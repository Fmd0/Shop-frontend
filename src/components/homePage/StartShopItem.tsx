import {MutableRefObject} from "react";


const StartShopItem = ({relativeId, logo, imageLeft, imageRight, name, rating, ratingAmount, hadMoved}: {
    relativeId: string,
    logo: string,
    imageLeft: string,
    imageRight: string,
    name: string,
    rating: string,
    ratingAmount: string,
    hadMoved: MutableRefObject<boolean>,
}) => {
    return (
        <a href={`/market?id=${relativeId}`} className="flex-[1_1_0]" onClick={(event) => {
            if(hadMoved.current) {
                event.preventDefault();
            }
        }}>
            <div
                className="relative rounded-xl bg-white overflow-hidden border-[1px] border-neutral-200 group/startShopItem">

                <div className="relative flex flex-row">
                    <div className="flex-[1_1_0] aspect-square">
                        <img src={imageLeft} alt="imgLeft" className="w-full h-full object-cover"/>
                    </div>
                    <div className="flex-[1_1_0] aspect-square">
                        <img src={imageRight} alt="imgRight" className="w-full h-full object-cover"/>
                    </div>
                    <div
                        className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 size-11 bg-white rounded-lg overflow-hidden">
                        <img src={logo} alt="logo" className="w-full h-full object-contain"/>
                    </div>
                </div>

                <div
                    className="absolute top-0 left-0 w-full h-full bg-neutral-500 bg-opacity-0 duration-300 group-hover/startShopItem:bg-opacity-20 cursor-pointer"></div>

                <div className="w-full h-1/2 p-3">
                    <h5 className="text-[14px] font-medium">{name.length > 12 ? name.slice(0, 12) + "..." : name}</h5>
                    <p className="text-[12px]">★{rating}({ratingAmount}K)</p>
                    <button
                        className="relative z-10 bg-black block w-full text-white rounded-lg py-1.5 mt-2 text-[14px] hover:bg-neutral-800 duration-300"
                        type="button"
                    >
                        Follow
                    </button>
                </div>

            </div>
        </a>
    )
}

export default StartShopItem