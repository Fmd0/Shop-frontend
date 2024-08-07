import useUserInfoStore from "../../hooks/useUserInfoStore.ts";
import {mutateUserLikeList} from "../../hooks/useUserLikeList.ts";


const LogoutModal = () => {

    const { logoutModalOpen, clearSignInfo} = useUserInfoStore();

    const handleClick = () => {
        fetch(`${import.meta.env.VITE_AUTH_API_ADDRESS}/api/session/user/logout`, {
            method: "POST",
            credentials: "include",
        })
            .then(res => {
                if(res.status !== 200) {
                    throw res.json()
                }
                return res.json();
            })
            .then(() => {

                clearSignInfo();
                mutateUserLikeList();
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <div className={`absolute top-[calc(100%+6px)] bg-white right-1 p-2 rounded-xl w-48
        ${logoutModalOpen?"hidden md:block":"hidden"} shadow-[0px_0px_8px_#00000026]`}
             onClick={handleClick}
        >
            <p className="cursor-pointer py-1 pl-4 rounded-xl hover:bg-neutral-100 font-medium">Logout</p>
        </div>
    )
}

export default LogoutModal;