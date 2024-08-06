import AddToLikeSvg from "./AddToLikeSvg.tsx";
import SearchSvg from "./SearchSvg.tsx";


const PicCommodityItem = ({id, img, handleClickLike, checked}: {
    id: string,
    img: string,
    handleClickLike: (id: string, checked: boolean) => void
    checked: boolean,
}) => {

    return (
        <a href={`/commodity?id=${id}`}>
            <div
                className="relative cursor-pointer w-[200px] h-[200px] overflow-hidden rounded-xl group/picCommodityItem">
                <img src={img} alt="picItem"
                     className="w-full h-full object-cover object-center duration-200 group-hover/picCommodityItem:scale-[105%]"/>
                <div className="absolute inset-0 w-full h-full bg-black bg-opacity-[0.04]"></div>

                <div className="absolute bottom-14 right-3 transition-all duration-200 opacity-0 group-hover/picCommodityItem:opacity-100"
                     onClick={e => {
                         e.preventDefault();
                         handleClickLike(id, checked);
                     }}>
                    <AddToLikeSvg checked={checked}/>
                </div>
                <div className="absolute bottom-3 right-3 transition-all duration-200 opacity-0 group-hover/picCommodityItem:opacity-100">
                    <SearchSvg/>
                </div>
            </div>
        </a>
    )
}

export default PicCommodityItem;