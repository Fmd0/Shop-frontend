import useCommodityPageStore from "../../hooks/useCommodityPageStore.ts";
import SvgIcons from "../common/SvgIcons.tsx";

const DescriptionModal = () => {

    const {
        closeDescriptionModal: closeModal,
        descriptionModalOpen: modalOpen,
        commodityInfo
    } = useCommodityPageStore();

    const description = commodityInfo?.description||"";

    return (
        <div className={`hidden md:block fixed left-0 top-0 w-screen h-screen z-50 bg-[#0006]
        ${modalOpen ? "opacity-100 duration-300" : "opacity-0 pointer-events-none"}`}
             onClick={e => {
                 e.stopPropagation();
                 closeModal();
             }}>

            <div className={`w-[640px] max-w-full h-[400px] tracking-[.15px] bg-white rounded-3xl absolute left-1/2 top-1/2 -translate-x-1/2
            ${modalOpen ? "scale-100 opacity-100 -translate-y-1/2" : "scale-90 -translate-y-[40%] opacity-0"} duration-300 ease-[cubic-bezier(.16,1,.3,1)]`}
                 onClick={(e) => e.stopPropagation()}
            >
                <h1 className="p-5 text-[20px] font-semibold text-center">Description</h1>
                <div className={`px-5 pt-2 text-[14px] font-normal`}>
                    {description}
                </div>

                <button type="button" className="absolute top-5 right-5" onClick={closeModal}>
                    <SvgIcons.Close className="size-6 text-neutral-500" />
                </button>
            </div>

        </div>
    )
}

export default DescriptionModal;