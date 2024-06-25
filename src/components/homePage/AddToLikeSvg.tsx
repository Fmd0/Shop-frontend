

const AddToLikeSvg = ({checked}: {
    checked: boolean,
}) => {
    return (
        <div className={`w-8 h-8 ${checked?"bg-[rgb(84_51_235)] hover:bg-[rgb(69_36_219)]":"bg-neutral-500 bg-opacity-35 hover:bg-opacity-70"} transition-all ease-[cubic-bezier(.4,0,.2,1)] duration-[150ms] p-2 cursor-pointer rounded-[16px] grid place-items-center`}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill={`${checked?"white":"none"}`} xmlns="http://www.w3.org/2000/svg"
                 data-testid="icon-favorites" stroke="none"
                 style={{width: "16px", height: "16px"}}>
                <path
                    d="M10.7966 4.30255L11.9999 5.53674L13.2034 4.30255C15.3006 2.15177 18.6827 2.1219 20.8156 4.21294L20.905 4.30255C23.0021 6.45334 23.0313 9.92188 20.9923 12.1093L20.905 12.2009L12 21.3334L3.09505 12.2009C0.968317 10.0199 0.968317 6.48363 3.09505 4.30255C5.22178 2.12148 8.6699 2.12148 10.7966 4.30255Z"
                    stroke="#fff" strokeWidth="2" strokeLinejoin="round">
                </path>
            </svg>
        </div>
    )
}

export default AddToLikeSvg;