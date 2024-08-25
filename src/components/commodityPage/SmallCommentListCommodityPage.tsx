import StarList from "./StarList.tsx";
import useCommodityPageStore from "../../hooks/useCommodityPageStore.ts";
import {convertDateToString} from "../../utils/dateHelper.ts";


const CommentListCommodityPage = () => {

    const {
        commodityInfo,
        comment,
        openCommentModal
    } = useCommodityPageStore();

    return (
        <div className="md:hidden p-4 font-[SuisseIntl-Book,sans-serif] font-normal">

            {/*comments header*/}
            <div className="flex items-center">
                <h3 className="text-[18px] mr-4">Reviews</h3>
                <div className="cursor-pointer text-black flex items-center gap-1">
                    <StarList size={18} rating={Number(commodityInfo?.rating || 0)} gap={2}/>
                    <p className="text-[14px]">
                        {commodityInfo?.rating}
                        <span className="text-neutral-500 ml-1">({commodityInfo?.ratingAmount})</span>
                    </p>
                </div>
            </div>


            {/*four reviews*/}
            <div className="mt-4 grid grid-cols-2 gap-4">
                {
                    comment.slice(0, 4).map((c, index) => (
                        <div key={index} className="flex flex-col gap-2">
                            <StarList size={16} rating={c.rating} gap={2}/>
                            <p className="text-[12px] text-[rgb(111_112_113)]">
                                {c.userName} · {convertDateToString(new Date(c.createdAt))}</p>
                            <p className="text-[14px] text-black">
                                {
                                    c.comment.length > 60
                                        ? c.comment.slice(0, 60) + '...'
                                        : c.comment
                                }
                            </p>
                        </div>
                    ))
                }
            </div>

            {/*Read more reviews button*/}
            {
                comment.length>4 &&
                <div
                    className="cursor-pointer bg-[rgb(242_244_245)] mt-4 duration-300 hover:bg-[rgb(225_228_229)] rounded-lg p-2 grid place-items-center"
                    onClick={openCommentModal}
                >
                    Read more reviews
                </div>
            }
        </div>
    )
}

export default CommentListCommodityPage;