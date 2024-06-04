import useMarketInfoStore from "../../hooks/useMarketInfoStore.ts";
import closeModal from "../../assets/MarketPage/closeModal.svg";


const PrivacyModal = () => {

    const {marketInfo, privacyModalOpen, closePrivacyModalOpen} = useMarketInfoStore();

    return (
        <div className={`fixed left-0 top-0 w-screen h-screen bg-neutral-500 bg-opacity-50 z-50
        duration-100 ${privacyModalOpen?"visible":"invisible"}`}
             onClick={closePrivacyModalOpen}
        >
            <div className={`w-[640px] max-w-full h-[400px] tracking-[.15px] bg-white rounded-3xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
            ${privacyModalOpen ? "scale-100 opacity-100" : "scale-75 opacity-0"} duration-100 origin-bottom`}
                 onClick={(e) => e.stopPropagation()}>
                <h1 className="p-5 text-[20px] font-semibold text-center">Privacy policy</h1>

                {
                    marketInfo?.privacyPolicy&&
                    <iframe src={marketInfo.privacyPolicy} className="w-full" />
                }

                <button type="button" className="absolute top-5 right-5" onClick={closePrivacyModalOpen}>
                    <img src={closeModal} alt="closeModal" className="w-6"/>
                </button>
            </div>

        </div>

    )
}

export default PrivacyModal;