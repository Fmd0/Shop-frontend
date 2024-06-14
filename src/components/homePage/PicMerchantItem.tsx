

const PicMerchantItem = (
    {img, svg}: {img: string, svg: string|undefined}
) => {
    return (
        <div className="relative cursor-pointer w-[200px] h-[200px]">
            <img src={img} alt="picItem" className="w-full h-full object-cover rounded-xl" />

            {svg && <div className="absolute top-0 left-0 w-full h-full p-4 transition-all ease-[cubic-bezier(.4,0,.2,1)] duration-[150ms] bg-opacity-10 bg-[rgb(240_240_240)] hover:bg-opacity-35">
                    <img src={svg} alt="svg" className="w-full h-full object-cover" />
                </div>
            }
        </div>
    )
}

export default PicMerchantItem;