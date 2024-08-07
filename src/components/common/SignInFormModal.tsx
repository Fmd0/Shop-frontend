import useUserInfoStore from "../../hooks/useUserInfoStore.ts";
import {FormEvent, useState} from "react";
import {mutateUserLikeList} from "../../hooks/useUserLikeList.ts";


const SignInFormModal = () => {

    const {signInModalOpen: modalOpen, closeSignInModal: closeModal, setEmail, setLike, email} = useUserInfoStore();
    const [isSignIn, setIsSignIn] = useState<boolean>(true);
    const [fetchStatus, setFetchStatus] = useState<string>("init");

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setFetchStatus("loading")
        const data = new URLSearchParams(new FormData(event.currentTarget));
        fetch(`${import.meta.env.VITE_AUTH_API_ADDRESS}/api/session/user/${isSignIn ? "login" : "register"}`, {
            method: "POST",
            credentials: "include",
            headers: {
                ContentType: "x-www-form-urlencoded",
            },
            body: data
        })
            .then(res => {
                if (res.status !== 200) {
                    throw res.json()
                }
                return res.json();
            })
            .then(data => {
                closeModal();
                mutateUserLikeList();
                setTimeout(() => {

                },)
                setEmail(data.email);
                setLike(data.like)
                setFetchStatus("success");
            })
            .catch(err => {
                console.log(err);
                setFetchStatus("error")
            })
    }

    return (
        <div>
            {
                email === "" &&
                    <div className={`fixed left-0 top-0 w-screen h-screen bg-[rgba(0,0,0,0.4)] z-50 ease-[cubic-bezier(0.32,0.72,0,1)]
                    duration-200 ${modalOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                         onClick={e => {
                             e.stopPropagation();
                             closeModal();
                         }}>

                        <div className={`w-full max-w-[340px] tracking-[.15px] bg-white rounded-3xl overflow-hidden absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                        ${modalOpen ? "opacity-100" : "opacity-0"} duration-200 delay-200`}
                             onClick={e => e.stopPropagation()}>

                            {/*top part shop icon and delete button*/}
                            <div className="flex items-center justify-between px-4 pt-4">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 60 25"
                                         className="h-[18px]" color="rgb(84 51 235)">
                                        <path fill="currentColor"
                                              d="M7.74 11.067c-2.35-.509-3.396-.708-3.396-1.612 0-.85.708-1.274 2.125-1.274 1.246 0 2.157.544 2.828 1.609.05.082.155.11.24.066l2.644-1.334a.186.186 0 0 0 .076-.259c-1.098-1.9-3.125-2.94-5.794-2.94-3.507 0-5.686 1.727-5.686 4.47 0 2.914 2.653 3.65 5.006 4.16 2.353.509 3.403.708 3.403 1.612 0 .904-.765 1.33-2.293 1.33-1.41 0-2.457-.644-3.09-1.896a.185.185 0 0 0-.25-.082L.916 16.222a.188.188 0 0 0-.082.253c1.046 2.102 3.194 3.284 6.062 3.284 3.653 0 5.86-1.697 5.86-4.526 0-2.83-2.666-3.65-5.015-4.16v-.006ZM21.909 5.324c-1.5 0-2.824.53-3.776 1.476a.093.093 0 0 1-.158-.067V.7a.185.185 0 0 0-.187-.186H14.48a.185.185 0 0 0-.187.186v18.728c0 .105.083.187.187.187h3.308a.185.185 0 0 0 .187-.187v-8.215c0-1.586 1.217-2.803 2.859-2.803 1.641 0 2.83 1.191 2.83 2.803v8.215c0 .105.082.187.187.187h3.308a.185.185 0 0 0 .186-.187v-8.215c0-3.451-2.264-5.888-5.436-5.888ZM34.056 4.786c-1.796 0-3.478.55-4.687 1.344a.187.187 0 0 0-.06.25l1.458 2.487c.054.089.168.12.256.066a5.812 5.812 0 0 1 3.04-.834c2.887 0 5.01 2.035 5.01 4.725 0 2.292-1.7 3.99-3.853 3.99-1.755 0-2.973-1.022-2.973-2.463 0-.825.351-1.501 1.265-1.979a.183.183 0 0 0 .073-.259L32.21 9.787a.186.186 0 0 0-.224-.08c-1.844.683-3.137 2.327-3.137 4.533 0 3.338 2.66 5.829 6.369 5.829 4.333 0 7.448-3 7.448-7.302 0-4.611-3.624-7.98-8.609-7.98ZM52.342 5.295c-1.673 0-3.169.62-4.26 1.707a.092.092 0 0 1-.158-.066V5.627a.185.185 0 0 0-.186-.186h-3.223a.185.185 0 0 0-.187.186v18.7c0 .104.082.186.187.186h3.308a.185.185 0 0 0 .187-.187v-6.131c0-.083.098-.124.158-.07 1.088 1.012 2.527 1.602 4.174 1.602 3.88 0 6.907-3.138 6.907-7.216 0-4.077-3.03-7.216-6.907-7.216Zm-.626 11.265c-2.207 0-3.88-1.754-3.88-4.074s1.67-4.074 3.88-4.074 3.877 1.726 3.877 4.074c0 2.349-1.644 4.074-3.88 4.074h.003Z"></path>
                                    </svg>
                                </div>
                                <div className="cursor-pointer" onClick={closeModal}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg"
                                         color="rgb(111 112 113)" data-testid="icon-cross-circle-filled" stroke="none"
                                         style={{width: "24px", height: "24px"}}>
                                        <path fillRule="evenodd" clipRule="evenodd"
                                              d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM9.70711 8.29289C9.31658 7.90237 8.68342 7.90237 8.29289 8.29289C7.90237 8.68342 7.90237 9.31658 8.29289 9.70711L10.5858 12L8.29289 14.2929C7.90237 14.6834 7.90237 15.3166 8.29289 15.7071C8.68342 16.0976 9.31658 16.0976 9.70711 15.7071L12 13.4142L14.2929 15.7071C14.6834 16.0976 15.3166 16.0976 15.7071 15.7071C16.0976 15.3166 16.0976 14.6834 15.7071 14.2929L13.4142 12L15.7071 9.70711C16.0976 9.31658 16.0976 8.68342 15.7071 8.29289C15.3166 7.90237 14.6834 7.90237 14.2929 8.29289L12 10.5858L9.70711 8.29289Z"
                                              fill="currentColor"></path>
                                    </svg>
                                </div>
                            </div>

                            {/*Sign In or Register*/}
                            <div className="text-center text-xl font-medium">{isSignIn ? "Sign In" : "Register"}</div>

                            {/*Sign In or Register form*/}
                            <div className="px-4 py-2">
                                <form className="border-neutral-300 overflow-hidden" onSubmit={handleSubmit}>
                                    {
                                        isSignIn
                                            ? <div key="signIn" className="flex flex-col gap-3">
                                                {
                                                    [
                                                        {
                                                            inputType: "email",
                                                            inputName: "email",
                                                            placeholder: "Enter your email",
                                                        },
                                                        {
                                                            inputType: "password",
                                                            inputName: "password",
                                                            placeholder: "Enter your password",
                                                        }
                                                    ].map((item, index) => (
                                                        <SignInInputItem key={index} {...item} />
                                                    ))
                                                }
                                            </div>
                                            : <div key="register" className="flex flex-col gap-3">
                                                {
                                                    [
                                                        {
                                                            inputType: "email",
                                                            inputName: "email",
                                                            placeholder: "Enter your email",
                                                        },
                                                        {
                                                            inputType: "text",
                                                            inputName: "name",
                                                            placeholder: "Enter your name",
                                                        },
                                                        {
                                                            inputType: "password",
                                                            inputName: "password",
                                                            placeholder: "Enter your password",
                                                        }
                                                    ].map((item, index) => (
                                                        <SignInInputItem key={index} {...item} />
                                                    ))
                                                }
                                            </div>
                                    }
                                    <button type="submit" disabled={fetchStatus === "loading"}
                                            className="cursor-pointer w-full rounded-xl bg-[rgb(94,63,235)] duration-200 hover:bg-[rgb(127,104,233)] text-white py-3 mt-3 grid place-items-center">
                                        {
                                            fetchStatus === "loading"
                                                ? <div className="size-6 animate-spin rounded-[50%] border-t-white border-x-white border-b-transparent border-[3px]"></div>
                                                : isSignIn ? "Sign In" : "Register"
                                        }
                                    </button>
                                </form>
                            </div>

                            <div
                                className="cursor-pointer text-center text-neutral-400 text-[12px] duration-200 hover:text-neutral-600 mb-4"
                                onClick={() => setIsSignIn(s => !s)}>
                                {isSignIn ? "Doesn't have an account now? Register" : "Already have an account? Sign in"}
                            </div>
                        </div>
                    </div>
            }
        </div>
    )
}


const SignInInputItem = ({inputType, inputName, placeholder, key}: {
    inputType: string;
    inputName: string;
    placeholder: string;
    key: number;
}) => {

    return (
        <div key={key} className="relative">
            <input type={inputType}
                   name={inputName}
                   className="focus:pt-6 inputHasText focus:pb-2 py-4 px-5 w-full duration-200 focus:placeholder:text-white placeholder:text-neutral-500 transition-[border] focus:outline-none focus:border-[rgb(84,51,235)] border-neutral-400 border-[1px] rounded-[16px] text-[14px] font-normal peer"
                   placeholder={placeholder}
                   required
            />
            <div
                className="absolute pointer-events-none duration-200 top-1/2 peer-focus:top-[calc(50%-10px)] opacity-0 peer-focus:opacity-100 left-5 -translate-y-1/2 text-neutral-500 text-[12px] ">
                {placeholder}
            </div>
        </div>
    )
}

export default SignInFormModal;