import closeModalSvg from "../../assets/MarketPage/closeModal.svg";


const ShippingModal = ({url, modalOpen, closeModal}: {
    url: string|undefined;
    modalOpen: boolean;
    closeModal: () => void;
}) => {

    return (
        <div className={`fixed left-0 top-0 w-screen h-screen bg-neutral-500 z-50
        duration-300 ease-[cubic-bezier(.16,1,.3,1)]
        ${modalOpen ? "visible bg-opacity-50" : "invisible bg-opacity-0"}`}
             onClick={e => {
                 e.stopPropagation();
                 closeModal();
             }}
        >
            <div className={`w-[640px] max-w-full h-4/5  max-h-[600px] tracking-[.15px] bg-white rounded-3xl absolute left-1/2 top-1/2 -translate-x-1/2
            ${modalOpen ? "scale-100 opacity-100 -translate-y-1/2" : "scale-90 -translate-y-[40%] opacity-0"} duration-300 ease-[cubic-bezier(.16,1,.3,1)]`}
                 onClick={(e) => e.stopPropagation()}>
                <h1 className="p-5 text-[20px] font-semibold text-center">Shipping policy</h1>

                {
                    url &&
                    <iframe src={url} className="w-full h-[calc(100%-70px)] p-2 rounded-b-3xl"/>
                }

                <button type="button" className="absolute top-5 right-5" onClick={closeModal}>
                    <img src={closeModalSvg} alt="closeModal" className="w-6"/>
                </button>
            </div>

        </div>

    )
}

export default ShippingModal;