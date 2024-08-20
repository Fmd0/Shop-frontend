import CommodityItem from "../marketPage/CommodityItem.tsx";
import {useEffect, useState} from "react";
import {useUserLikeList} from "../../hooks/useUserLikeList.ts";
import useUserInfoStore from "../../hooks/useUserInfoStore.ts";

const LikePageMainContent = () => {
    const [like, setLike] = useState<{
        id: string,
        name: string,
        image: string,
        rating: string,
        ratingAmount: string,
        price: number,
        promotingPrice: number,
    }[]>([]);

    const {handleClickLike, email} = useUserInfoStore();

    useEffect(() => {
        let ignore = false;
        fetch(`${import.meta.env.VITE_AUTH_API_ADDRESS}/api/session/user/like`, {
            credentials: 'include',
        })
            .then(res => {
                if(res.status !== 200) {
                    throw res.json();
                }
                return res.json();
            })
            .then(data => {
                if(!ignore) {
                    setLike(data.data);
                }})
            .catch(err => console.log(err))

        return () => { ignore = true; };
    }, []);

    const {userLikeList={msg: "", data: []}, error} = useUserLikeList();

    if(email === "") {
        window.location.href = "/";
        return null;
    }

    if(error) {
        return null;
    }

    if(like.length === 0){
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
                    like.map((l, i) => {
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