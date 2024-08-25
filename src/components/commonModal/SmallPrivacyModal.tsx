import SvgIcons from "../common/SvgIcons.tsx";
import {MarketInfoType} from "../../utils/type.ts";


const SmallPrivacyModal = ({data, modalOpen, closeModal}: {
    data: MarketInfoType|null,
    modalOpen: boolean,
    closeModal: () => void,
}) => {


    return (
        <div className={`md:hidden fixed inset-0 z-50 bg-white
        ${modalOpen ? "opacity-100 duration-300" : "opacity-0 pointer-events-none"}`}
             onClick={e => {e.stopPropagation();}}
        >

            <div className="p-5 flex flex-col gap-6">
                <div className="flex items-center justify-between">
                    <p className="text-[18px] font-semibold text-center">Privacy policy</p>
                    <button type="button" onClick={closeModal}>
                        <SvgIcons.Close className="size-6 text-[rgb(111,112,113)]"/>
                    </button>
                </div>
                {
                    data?.privacyPolicy && data.privacyPolicy !== "" &&
                    <iframe src={data.privacyPolicy} className="w-full"/>
                }
            </div>


        </div>

    )
}

export default SmallPrivacyModal;