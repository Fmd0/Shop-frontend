

const FormControlSearchPage = ({name, hasArrow}: {
    name: string;
    hasArrow: boolean;
}) => {
    return (
        <div className={`cursor-pointer h-8 ${hasArrow?"pl-4 pr-2":"px-4"} py-2 flex items-center gap-1 rounded-[8px] border-neutral-300 border-[1px] duration-300 bg-white hover:bg-neutral-300`}>
            <span className="text-[12px] font-medium">{name}</span>
            {
                hasArrow &&
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                     className="text-text" data-testid="icon-down-chevron" stroke="none"
                     style={{width: "15px", height: "16px"}}>
                    <path d="M18 9L12 15L6 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                          strokeLinejoin="round"></path>
                </svg>
            }
        </div>
    )
}

export default FormControlSearchPage