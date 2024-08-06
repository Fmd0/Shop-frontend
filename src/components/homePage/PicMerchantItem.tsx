

const PicMerchantItem = ({id, img, svg}: {
    id: string,
    img: string,
    svg: string|undefined
}) => {
    return (
        <a href={`/market?id=${id}`}>
            <div className="relative cursor-pointer w-[200px] h-[200px] rounded-xl overflow-hidden">
                <img src={img} alt="picItem" className="w-full h-full object-cover"/>
                <div className="absolute inset-0 bg-[rgba(0,0,0,12%)]"></div>

                <img src={svg} alt="svg" className="absolute inset-0 w-full h-full p-4 object-contain"/>
                {/*<div className="absolute inset-0 bg-[rgba(0,0,0,12%)]"></div>*/}

                <div
                    className="absolute inset-0 transition-all ease-[cubic-bezier(.4,0,.2,1)] duration-[150ms] bg-opacity-10 bg-[rgb(238_240_241)] hover:bg-opacity-30"></div>

            </div>
        </a>
    )
}

export default PicMerchantItem;