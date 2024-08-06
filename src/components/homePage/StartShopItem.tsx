


const StartShopItem = ({relativeId, logo, imageLeft, imageRight, name, rating,ratingAmount}: {
    relativeId: string,
    logo: string,
    imageLeft: string,
    imageRight: string,
    name: string,
    rating: string,
    ratingAmount: string,
}) => {
    return (
        <div
            className="relative w-full flex-1 rounded-xl bg-white overflow-hidden border-[1px] border-neutral-200 group/startShopItem">
            <div className="w-full flex items-center relative">
                    <img src={imageLeft} alt="imgLeft" className="w-1/2 aspect-square object-cover"/>
                    <img src={imageRight} alt="imgRight" className="w-1/2 aspect-square object-cover"/>
                <div
                    className="w-[44px] h-[44px] bg-white absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-lg overflow-hidden">
                    <img src={logo} alt="logo" className="w-full h-full object-contain"/>
                </div>
            </div>

            <a href={`/market?id=${relativeId}`} className="absolute top-0 left-0 w-full h-full bg-neutral-500 bg-opacity-0 duration-300 group-hover/startShopItem:bg-opacity-20 cursor-pointer"></a>

            <div className="w-full h-1/2 p-3">
                <h5 className="text-[14px] font-semibold">{name}</h5>
                <p className="text-[12px]">★{rating}({ratingAmount}K)</p>
                <button className="relative z-10 bg-black block w-full text-white rounded-lg py-1.5 mt-2 text-[14px] hover:bg-neutral-800 duration-300"
                        type="button"
                >
                    Follow
                </button>
            </div>

        </div>
    )
}

export default StartShopItem