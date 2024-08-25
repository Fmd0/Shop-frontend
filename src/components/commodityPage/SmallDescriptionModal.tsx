import useCommodityPageStore from "../../hooks/useCommodityPageStore.ts";
import SvgIcons from "../common/SvgIcons.tsx";

const SmallDescriptionModal = () => {

    const {
        closeDescriptionModal: closeModal,
        descriptionModalOpen: modalOpen,
        commodityInfo
    } = useCommodityPageStore();

    const description = commodityInfo?.description||"";

    return (
        <div className={`md:hidden fixed inset-0 z-[100] bg-white flex flex-col
        ${modalOpen ? "opacity-100 duration-300" : "opacity-0 pointer-events-none"}`}
             onClick={e => {
                 e.stopPropagation();
             }}
        >

            <p className="p-5 text-[20px] text-center">Description</p>
            <div className="px-5 pt-2 text-[14px] font-normal">
                {description}
            </div>

            <button type="button" className="absolute top-5 right-5" onClick={closeModal}>
                <SvgIcons.Close className="size-6 text-neutral-500" />
            </button>
        </div>

    )
}

export default SmallDescriptionModal;
