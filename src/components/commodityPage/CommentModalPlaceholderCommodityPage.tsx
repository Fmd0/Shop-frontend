import StarList from "./StarList.tsx";

const CommentModalPlaceholderCommodityPage = () => {
    return (
        <div className="mt-6 border-b-neutral-300 pb-6 border-b-[0.5px] flex flex-col gap-3">
            <StarList size={16} rating={0} gap={2}/>
            <div className="bg-neutral-100 w-16 h-4"></div>
            <div className="bg-neutral-100 w-28 h-4"></div>
        </div>
    )
}


export default CommentModalPlaceholderCommodityPage;