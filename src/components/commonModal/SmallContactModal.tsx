import useMarketInfoStore from "../../hooks/useMarketInfoStore.ts";
import SvgIcons from "./SvgIcons.tsx";
import useMarketInfo from "../../hooks/useMarketInfo.ts";


const SmallContactModal = () => {


    const id = new URLSearchParams(window.location.search).get('id')||"";
    const {data:{data: marketInfo}={data: null}} = useMarketInfo(id);
    const {
        contactModalOpen: modalOpen,
        closeContactModalOpen: closeModal
    } = useMarketInfoStore();


    return (
        <div className={`md:hidden fixed inset-0 z-[100] bg-white flex flex-col justify-between
        ${modalOpen? "opacity-100 duration-300" : "opacity-0 pointer-events-none"}`}
             onClick={e => {
                 e.stopPropagation();
             }}
        >

            <div className="p-5 flex flex-col gap-6">
                <div className="flex items-center justify-between">
                    <p className="text-[18px] font-semibold text-center">Contact {marketInfo?.name || ""}</p>

                    <button type="button" onClick={closeModal}>
                        <SvgIcons.Close className="size-6 text-[rgb(111,112,113)]"/>
                    </button>
                </div>


                {
                    marketInfo?.website && marketInfo.website !== "" &&
                    <a href={marketInfo.website} target="_blank" className="flex items-center gap-3">
                        <SvgIcons.Website className="size-5"/>
                        <p>{marketInfo.website.replace("https://", "").replace("/", "")}</p>
                    </a>
                }
                {
                    marketInfo?.email && marketInfo.email !== "" &&
                    <a href={`mailto:${marketInfo.email}`} target="_blank" className="flex items-center gap-3">
                        <SvgIcons.Email className="size-5"/>
                        <p>{marketInfo.email}</p>
                    </a>
                }
                {
                    marketInfo?.telephone && marketInfo.telephone !== "" &&
                    <a href={`tel:${marketInfo.telephone}`} target="_blank" className="flex items-center gap-3">
                        <SvgIcons.Telephone className="size-5"/>
                        <p>{marketInfo.telephone}</p>
                    </a>
                }

                {
                    marketInfo?.facebook && marketInfo.facebook !== "" &&
                    <a href={marketInfo.facebook} target="_blank" className="flex items-center gap-3">
                        <SvgIcons.Facebook className="size-5"/>
                        <p>Facebook</p>
                    </a>
                }
                {
                    marketInfo?.twitter && marketInfo.twitter !== "" &&
                    <a href={marketInfo.twitter} target="_blank" className="flex items-center gap-3">
                        <SvgIcons.Twitter className="size-5"/>
                        <p>Twitter</p>
                    </a>
                }
                {
                    marketInfo?.ins && marketInfo.ins !== "" &&
                    <a href={marketInfo.ins} target="_blank" className="flex items-center gap-3">
                        <SvgIcons.Instagram className="size-5"/>
                        <p>Instagram</p>
                    </a>
                }

                {
                    marketInfo?.youtube && marketInfo.youtube !== "" &&
                    <a href={marketInfo.youtube} target="_blank" className="flex items-center gap-3">
                        <SvgIcons.Youtube className="size-5"/>
                        <p>YouTube</p>
                    </a>
                }
            </div>



            {
                marketInfo?.address && marketInfo.address !== "" &&
                <p className="p-5 text-neutral-500">{marketInfo.address}</p>
            }

        </div>
    )
}


export default SmallContactModal;