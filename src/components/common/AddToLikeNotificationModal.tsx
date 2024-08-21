import useUserInfoStore from "../../hooks/useUserInfoStore.ts";

const AddToLikeNotificationModal = () => {

    const {addedToLikeModalOpen} = useUserInfoStore();

    return (
        <div className={`fixed left-0 right-0 bottom-0 h-20 pointer-events-none flex justify-center duration-300 ${addedToLikeModalOpen?"opacity-100":"opacity-0"}`}>
            <div className={`cursor-pointer absolute bottom-full bg-[rgb(84_51_235)] rounded-xl py-3 px-4 text-white text-[12px] md:text-[14px]
            duration-300 ${addedToLikeModalOpen?"opacity-100":"translate-y-[20%] opacity-0"}
            `}>
                Added To Favorites Successfully
            </div>
        </div>
    )
}

export default AddToLikeNotificationModal;