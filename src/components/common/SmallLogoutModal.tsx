import useUserInfoStore from "../../hooks/useUserInfoStore.ts";
import {mutateUserLikeList} from "../../hooks/useUserLikeIdList.ts";


const SmallLogoutModal = () => {

    const {
        email,
        smallLogoutModalOpen,
        closeSmallLogoutModal,
        clearSignInfo
    } = useUserInfoStore();

    const handleClick = () => {
        // fetch(`${import.meta.env.VITE_AUTH_API_ADDRESS}/api/session/user/logout`, {
        //     method: "POST",
        //     credentials: "include",
        // })
        //     .then(res => {
        //         if(res.status !== 200) {
        //             throw res.json()
        //         }
        //         return res.json();
        //     })
        //     .then(() => {
        //         closeSmallLogoutModal();
        //         clearSignInfo();
        //         mutateUserLikeList();
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     })
        closeSmallLogoutModal();
        clearSignInfo();
        mutateUserLikeList();

    }

    return (
        <>
            {
                email !== "" &&
                <div
                    className={`${smallLogoutModalOpen ? "opacity-100" : "pointer-events-none opacity-0"} fixed inset-0 z-50 bg-[rgba(0,0,0,0.4)] duration-[250ms]`}
                    onClick={(event) => {
                        event.stopPropagation();
                        closeSmallLogoutModal();
                    }}>
                    <div
                        className={`${smallLogoutModalOpen ? "translate-y-0" : "translate-y-full"} duration-[250ms] flex flex-col gap-5 fixed left-4 right-4 bottom-4 bg-white p-5 rounded-[28px]`}
                        onClick={e => e.stopPropagation()}>

                        {/*first line*/}
                        <div className="flex flex-row items-center justify-between">

                            <div className="flex items-center gap-2">
                                <div
                                    className="size-8 bg-[rgb(242_244_245)] rounded-[999px] grid place-items-center border-[rgb(225_228_229)] border-[1px]">
                                    {email[0]}
                                </div>
                                <p className="text-sm text-neutral-600">{email}</p>
                            </div>

                            <button onClick={closeSmallLogoutModal}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg" className="size-5 text-neutral-500"
                                     data-testid="icon-cross-circle-filled" stroke="none">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM9.70711 8.29289C9.31658 7.90237 8.68342 7.90237 8.29289 8.29289C7.90237 8.68342 7.90237 9.31658 8.29289 9.70711L10.5858 12L8.29289 14.2929C7.90237 14.6834 7.90237 15.3166 8.29289 15.7071C8.68342 16.0976 9.31658 16.0976 9.70711 15.7071L12 13.4142L14.2929 15.7071C14.6834 16.0976 15.3166 16.0976 15.7071 15.7071C16.0976 15.3166 16.0976 14.6834 15.7071 14.2929L13.4142 12L15.7071 9.70711C16.0976 9.31658 16.0976 8.68342 15.7071 8.29289C15.3166 7.90237 14.6834 7.90237 14.2929 8.29289L12 10.5858L9.70711 8.29289Z"
                                          fill="currentColor"></path>
                                </svg>
                            </button>


                        </div>

                        <a data-discover="true" href="/like">
                            <div className="flex flex-row items-center gap-2">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg" className="size-6"
                                     data-testid="icon-favorites" stroke="none">
                                    <path
                                        d="M10.7966 4.30255L11.9999 5.53674L13.2034 4.30255C15.3006 2.15177 18.6827 2.1219 20.8156 4.21294L20.905 4.30255C23.0021 6.45334 23.0313 9.92188 20.9923 12.1093L20.905 12.2009L12 21.3334L3.09505 12.2009C0.968317 10.0199 0.968317 6.48363 3.09505 4.30255C5.22178 2.12148 8.6699 2.12148 10.7966 4.30255Z"
                                        stroke="currentColor" strokeWidth="2" strokeLinejoin="round"></path>
                                </svg>
                                <p>Favorites</p>
                            </div>
                        </a>

                        <button onClick={handleClick}>
                            <div className="flex flex-row items-center gap-2">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                     xmlns="http://www.w3.org/2000/svg" className="size-6"
                                     data-testid="icon-sign-out" stroke="none">
                                    <path
                                        d="M9.37508 16.6668L3.33341 16.6668L3.33342 3.3335L9.37508 3.3335M16.6667 10.0002L7.29175 10.0002M16.6667 10.0002L12.9167 13.7502M16.6667 10.0002L12.9167 6.25016"
                                        stroke="currentColor" strokeWidth="1.667" strokeLinecap="round"
                                        strokeLinejoin="round"></path>
                                </svg>
                                Sign out
                            </div>
                        </button>



                    </div>
                </div>
            }
        </>
    )
}

export default SmallLogoutModal;