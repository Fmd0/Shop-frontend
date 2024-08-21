import {searchPlaceholderList} from "../../utils/data.ts";
import {useEffect, useState} from "react";

const PlaceholderList = ({isVisible, left}: {
    isVisible: boolean;
    left: number;
}) => {

    const [placeholderIndex, setPlaceholderIndex] = useState(0);

    useEffect(() => {
        const timeId = setInterval(() => {
            setPlaceholderIndex(i => {
                if(i===searchPlaceholderList.length-1) {
                    setTimeout(() => {
                        setPlaceholderIndex(0);
                    }, 350)
                }
                return i + 1;
            })
        }, 2000)
        return () => clearInterval(timeId);
    }, []);


    return (
        <div className={`${isVisible ? "" : "hidden"} absolute top-0 left-0 text-[16px] text-gray-400 pointer-events-none ${placeholderIndex === 0 ? "" : "duration-300"}`}
             style={{transform: `translate(${left}px, ${-12-placeholderIndex * 24}px)`}}
        >
            <p className="opacity-0">{searchPlaceholderList[searchPlaceholderList.length - 1]}</p>
            {
                searchPlaceholderList.map((s, i) => (
                    <p key={i} className={`text-nowrap ${placeholderIndex === 0 ? "" : "duration-300"} ${placeholderIndex === i ? "opacity-100" : "opacity-0"}`}>{s}</p>
                ))
            }
            <p className={`${placeholderIndex === 0 ? "" : "duration-300"} ${placeholderIndex === searchPlaceholderList.length ? "opacity-100" : "opacity-0"}`}>{searchPlaceholderList[0]}</p>
            <p className="opacity-0">{searchPlaceholderList[1]}</p>
        </div>
    )
}

export default PlaceholderList;