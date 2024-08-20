

const SmallPicCommodityItem = ({id, img}: {
    id: string,
    img: string
}) => {

    return (
        <a href={`/commodity?id=${id}`}>
            <div
                className="relative cursor-pointer size-[100px] overflow-hidden rounded-lg group/picCommodityItem">
                <img className="w-full h-full object-cover object-center duration-200 group-hover/picCommodityItem:scale-[105%]"
                     src={img} alt="SmallPicCommodityItem" />
                <div className="absolute inset-0 w-full h-full bg-[#0000000a]"></div>
            </div>
        </a>
    )
}

export default SmallPicCommodityItem;