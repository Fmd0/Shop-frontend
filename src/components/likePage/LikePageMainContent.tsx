import CommodityItem from "../marketPage/CommodityItem.tsx";
import {useUserLikeIdList} from "../../hooks/useUserLikeIdList.ts";
import useUserInfoStore from "../../hooks/useUserInfoStore.ts";
import useUserLikeList from "../../hooks/useUserLikeList.ts";

const LikePageMainContent = () => {

    const {handleClickLike, email} = useUserInfoStore();
    const {data:{data} = {data: []}} = useUserLikeList();
    const {userLikeList={msg: "", data: []}} = useUserLikeIdList();

    if(email === "") {
        window.location.href = "/";
        return null;
    }

    if(data.length === 0){
        return (
            <div className="h-[calc(100vh-390px)] text-neutral-600 flex flex-col text-center items-center justify-center px-4 text-[20px] font-medium">
                <p className="text-[20px]">Favorites</p>
                <p className="text-[14px] font-normal">Tap the heart on any product to save it to your favorites.</p>
            </div>
        )
    }

    return (
        <div className="max-w-[1144px] mx-auto px-2 tracking-[0.15px] font-medium mt-3 md:mt-12">
            <h1 className="text-xl md:text-2xl">Favorites</h1>


            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-4 mt-3 md:mt-6">
                {
                    data.map((l, i) => {
                        return (
                            <CommodityItem key={i} {...l} checked={userLikeList?.data?.includes(l.id)} handleClickLike={handleClickLike}  />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default LikePageMainContent;