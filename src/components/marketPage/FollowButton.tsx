import {mutateFollowingIdList, useFollowingIdList} from "../../hooks/useFollowingIdList.ts";
import useUserInfoStore from "../../hooks/useUserInfoStore.ts";
import {getTokenFromLocalStorage} from "../../utils/localStorage.ts";


const FollowButton = ({bgColor, textColor, isSmallCase}: {
    bgColor: string;
    textColor: string;
    isSmallCase: boolean;
}) => {

    const id = new URLSearchParams(window.location.search).get('id')||"";
    const {data: {data: followList} = {data: []}}: {data: {data : string[]}} = useFollowingIdList();
    const {email, openSignInModal} = useUserInfoStore();

    const hasFollowed = followList && followList.length > 0 && followList.includes(id);

    const finalBgColor = isSmallCase
        ? hasFollowed ? "transparent" : "black"
        : hasFollowed ? "transparent" : bgColor;

    const finalTextColor = isSmallCase
        ? hasFollowed ? "black" : "white"
        : hasFollowed ? textColor==="black"?"white":"black" : textColor;

    const borderColor = isSmallCase
        ? hasFollowed ? "rgb(163 163 163)" : "transparent"
        : hasFollowed ? textColor==="black"?"rgba(245, 245, 245, 0.5)":"rgba(10, 10, 10, 0.5)" : "transparent";

    // console.log("isSmallCase", isSmallCase);
    // console.log("bgColor",bgColor);
    // console.log("textColor",textColor);
    // console.log("finalBgColor", finalBgColor);
    // console.log("finalTextColor", finalTextColor);
    // console.log("borderColor", borderColor);


    const handleClick = () => {
        if(email === "") {
            openSignInModal();
            return;
        }
        fetch(`${import.meta.env.VITE_AUTH_API_ADDRESS}/api/session/user/follow`, {
            method: hasFollowed?"DELETE":"POST",
            headers: {
                authorization: "Bearer " + getTokenFromLocalStorage(),
                contentType: "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams("id="+id),
        })
            .then(res => {
                if (res.status !== 200) {
                    throw res.json()
                }
                res.json()
            })
            .then(() => {
                mutateFollowingIdList();
            })
            .catch((err) => {
                console.error(err);
            })
    }

    return (
        <button type="button"
                className={`px-5 py-2 text-center rounded-[10px] border-[1px] font-medium duration-200 ${isSmallCase? hasFollowed?"hover:!bg-[#0000001a]":"hover:!bg-[rgb(42,42,42)]": hasFollowed? textColor==="black"?"hover:!bg-[#ffffff1a]":"hover:!bg-[#0000001a]":textColor==="black"?"hover:!bg-[rgb(225,228,229)]":"hover:!bg-[rgb(42,42,42)]"}`}
                style={{backgroundColor: finalBgColor, color: finalTextColor, borderColor: borderColor}}
                onClick={handleClick}
        >
            {
                hasFollowed
                    ? "Following"
                    : "Follow"
            }
        </button>
    )
}

export default FollowButton;