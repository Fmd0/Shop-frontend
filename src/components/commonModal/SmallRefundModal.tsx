import useMarketInfoStore from "../../hooks/useMarketInfoStore.ts";
import useMarketInfo from "../../hooks/useMarketInfo.ts";
import SvgIcons from "../common/SvgIcons.tsx";


const SmallRefundModal = () => {

    const id = (new URLSearchParams(window.location.search)).get('id')||"";
    const {data:{data: marketInfo}={data: null}} = useMarketInfo(id);

    const {
        refundModalOpen: modalOpen,
        closeRefundModalOpen: closeModal
    } = useMarketInfoStore();


    return (
        <div className={`md:hidden fixed inset-0 z-50 bg-white
        ${modalOpen ? "opacity-100 duration-300" : "opacity-0 pointer-events-none"}`}
             onClick={e => {e.stopPropagation();}}
        >

            <div className="p-5 flex flex-col gap-6">
                <div className="flex items-center justify-between">
                    <p className="text-[18px] font-semibold text-center">Refund policy</p>
                    <button type="button" onClick={closeModal}>
                        <SvgIcons.Close className="size-6 text-[rgb(111,112,113)]"/>
                    </button>
                </div>
                {
                    marketInfo?.refundPolicy && marketInfo.refundPolicy !== "" &&
                    <iframe src={marketInfo.refundPolicy} className="w-full"/>
                }
            </div>


        </div>

    )
}

export default SmallRefundModal;