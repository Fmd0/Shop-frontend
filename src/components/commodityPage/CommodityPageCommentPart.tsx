import StarList from "./StarList.tsx";
import useCommodityPageStore from "../../hooks/useCommodityPageStore.ts";
import {convertDateToString} from "../../utils/dateHelper.ts";


const CommodityPageCommentPart = () => {

    const {
        commodityInfo,
        comment,
        openCommentModal
    } = useCommodityPageStore();

    return (
        <div className="mt-6">

            {/*comments head*/}
            <div className="flex items-center">
                <h3 className="text-[20px] mr-4">Reviews</h3>
                <div className="cursor-pointer text-black flex items-center gap-1">
                    <StarList size={20} rating={Number(commodityInfo?.rating || 0)} gap={2}/>
                    <p className="">{commodityInfo?.rating}
                        <span className="text-neutral-500 ml-1">({commodityInfo?.ratingAmount})</span>
                    </p>
                </div>
            </div>


            <div className="mt-5 grid grid-cols-2 gap-x-16 gap-y-8 mb-8">
                {
                    comment.slice(0, 4).map((c, index) => (
                        <div key={index} className="font-[SuisseIntl-Book,sans-serif]">
                            <StarList size={16} rating={c.rating} gap={2}/>
                            <p className="mt-1 text-[12px] font-[460] leading-[normal] tracking-[0.15px] text-[rgb(111_112_113)]">{c.userName} ·
                                {convertDateToString(new Date(c.createdAt))}</p>
                            <p className="mt-3 text-[14px] text-black leading-[normal] tracking-[0.15px]">
                                {
                                    c.comment.length > 150
                                        ? c.comment.slice(0, 150) + '...'
                                        : c.comment
                                }
                            </p>
                        </div>
                    ))
                }
            </div>

            {
                comment.length>4 &&
                <div
                    className="cursor-pointer bg-[rgb(242_244_245)] duration-300 hover:bg-[rgb(225_228_229)] rounded-lg p-2 grid place-items-center"
                    onClick={openCommentModal}
                >
                    Read more reviews
                </div>
            }
        </div>
    )
}

export default CommodityPageCommentPart;