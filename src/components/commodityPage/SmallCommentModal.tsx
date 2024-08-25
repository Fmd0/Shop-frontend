import useCommodityPageStore from "../../hooks/useCommodityPageStore.ts";
import {useEffect, useMemo, useRef} from "react";
import StarList from "./StarList.tsx";
import {convertDateToString} from "../../utils/dateHelper.ts";
import CommentModalPlaceholder from "./CommentModalPlaceholder.tsx";
import SvgIcons from "../common/SvgIcons.tsx";


const SmallCommentModal = () => {

    const {
        comment,
        commentHasMore,
        commentModalOpen: modalOpen,
        closeCommentModal: closeModal,
        addCommentPage,
        commodityInfo,
        commentGroup,
        commentTotalAmount,
    } = useCommodityPageStore();

    const ratingAmountMap = useMemo(() => {
        if(commentGroup.length <= 0) return {};
        const mapArray = commentGroup.map(c => [c.rating, c._count]);
        return Object.fromEntries(mapArray);
    }, [commentGroup])

    const scrollRef = useRef<HTMLDivElement>(null);


    useEffect(() => {
        let isThrottled = false;
        const handleScroll = () => {
            if(isThrottled || !commentHasMore) return;
            isThrottled = true;
            setTimeout(() => {
                isThrottled = false;

                if(scrollRef.current) {
                    if(scrollRef.current.scrollHeight-scrollRef.current.scrollTop-scrollRef.current.clientHeight <= 120.5*3) {
                        addCommentPage();
                    }
                }
            }, 500)
        }
        scrollRef.current?.addEventListener("scroll", handleScroll);
        return () => scrollRef.current?.removeEventListener("scroll", handleScroll);
    }, [commentHasMore]);

    return (
        <div className={`touch-none md:hidden fixed inset-0 z-[100] bg-white flex flex-col
        ${modalOpen ? "opacity-100 duration-300" : "opacity-0 pointer-events-none"}`}
             onClick={e => {
                 e.stopPropagation();
             }}
        >

            <h1 className="p-5 text-[20px] font-medium text-center">Ratings and reviews</h1>

            <div ref={scrollRef} className="px-5 overflow-auto">

                {/*Ratings and reviews header part*/}
                <div className="flex gap-1">

                    {/*left part*/}
                    <div className="bg-[rgb(242,244,245)] p-4 rounded-l-[12px]">
                        <p className="text-[14px] font-medium">Average rating</p>
                        <div className="flex flex-row items-center gap-1">
                            <p className="text-[36px]">{(commodityInfo?.rating || "") + " "}</p>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg" className="h-m"
                                 stroke="none" style={{width: "24px", height: "24px"}}>
                                <path
                                    d="M12.9019 1.56798C12.7356 1.22088 12.3849 1 12 1C11.6152 1 11.2644 1.22088 11.0982 1.56798L8.45542 7.08482L2.36984 7.8839C1.98727 7.93413 1.66773 8.2 1.54875 8.56705C1.42978 8.93411 1.5326 9.33687 1.81297 9.60198L6.26237 13.8093L5.14555 19.8172C5.07514 20.196 5.22857 20.5815 5.53998 20.8083C5.85139 21.0351 6.2654 21.0629 6.60429 20.8797L12 17.9625L17.3958 20.8797C17.7347 21.0629 18.1487 21.0351 18.4601 20.8083C18.7715 20.5815 18.9249 20.196 18.8545 19.8172L17.7377 13.8093L22.1871 9.60198C22.4675 9.33687 22.5703 8.93411 22.4513 8.56705C22.3323 8.2 22.0128 7.93413 21.6302 7.8839L15.5446 7.08482L12.9019 1.56798Z"
                                    fill="currentColor"></path>
                            </svg>
                        </div>
                        <p className="text-[12px] text-[rgb(111_112_113)]">{(Number(commodityInfo?.ratingAmount || 0)) * 3} ratings</p>
                    </div>

                    {/*right part*/}
                    <div
                        className="bg-[rgb(242,244,245)] flex-1 p-4 grid grid-rows-5 items-center rounded-r-[12px]">
                        {
                            Array.from({length: 5}, (_, i) => 5 - i).map(a => (
                                <div key={a} className="flex items-center gap-1.5">
                                    <p className="text-[10px]">{a}</p>
                                    <div className="flex-1 h-2 rounded-[8px] overflow-hidden bg-white">
                                        <div className={`bg-black h-full rounded-[8px] delay-500`}
                                             style={{
                                                 width: modalOpen ? (ratingAmountMap?.[a] || 0) / commentTotalAmount * 100 + "%" : 0,
                                                 transitionDuration: modalOpen ? "700ms" : "0ms",
                                             }}>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className="mt-8 font-medium flex flex-row gap-1 text-[14px]">
                    <p>Reviews</p>
                    <span className="text-[rgb(111_112_113)]">({commodityInfo?.ratingAmount || 0})</span>
                </div>


                {
                    comment.map((c, index) => (
                        <div key={index} className="mt-6 border-b-neutral-300 pb-6 border-b-[0.5px] font-normal">
                            <StarList size={16} rating={c.rating} gap={2}/>
                            <p className="text-[12px] text-[rgb(111_112_113)]">{c.userName} · {convertDateToString(new Date(c.createdAt))}</p>
                            <p className="mt-4 text-[14px]">{c.comment}</p>
                        </div>
                    ))
                }

                {
                    commentHasMore &&
                    Array.from({length: 3}, (_, i) => i).map(a => (
                        <CommentModalPlaceholder key={a}/>
                    ))
                }

            </div>

            <button type="button" className="absolute top-5 right-5" onClick={closeModal}>
                <SvgIcons.Close className="size-6 text-neutral-500"/>
            </button>
        </div>

)
}

export default SmallCommentModal;