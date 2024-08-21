

const Spinner = ({size, borderWidth}: {
    size: number;
    borderWidth: number;
}) => {
    return (
        <div className="flex items-center justify-center">
            <div className="rounded-[999px] animate-spin border-t-neutral-500 border-x-neutral-500 border-b-transparent"
                 style={{width: `${size}px`, height: `${size}px`, borderWidth: `${borderWidth}px`}}
            ></div>
        </div>
    )
}

export default Spinner;