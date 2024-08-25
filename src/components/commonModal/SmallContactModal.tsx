import SvgIcons from "../common/SvgIcons.tsx";
import {MarketInfoType} from "../../utils/type.ts";


const SmallContactModal = ({data, modalOpen, closeModal}: {
    data: MarketInfoType|null,
    modalOpen: boolean,
    closeModal: () => void,
}) => {


    return (
        <div className={`md:hidden fixed inset-0 z-[100] bg-white flex flex-col justify-between
        ${modalOpen? "opacity-100 duration-300" : "opacity-0 pointer-events-none"}`}
             onClick={e => {
                 e.stopPropagation();
             }}
        >

            <div className="p-5 flex flex-col gap-6">
                <div className="flex items-center justify-between">
                    <p className="text-[18px] font-semibold text-center">Contact {data?.name || ""}</p>

                    <button type="button" onClick={closeModal}>
                        <SvgIcons.Close className="size-6 text-[rgb(111,112,113)]"/>
                    </button>
                </div>


                {
                    data?.website && data.website !== "" &&
                    <a href={data.website} target="_blank" className="flex items-center gap-3">
                        <SvgIcons.Website className="size-5"/>
                        <p>{data.website.replace("https://", "").replace("/", "")}</p>
                    </a>
                }
                {
                    data?.email && data.email !== "" &&
                    <a href={`mailto:${data.email}`} target="_blank" className="flex items-center gap-3">
                        <SvgIcons.Email className="size-5"/>
                        <p>{data.email}</p>
                    </a>
                }
                {
                    data?.telephone && data.telephone !== "" &&
                    <a href={`tel:${data.telephone}`} target="_blank" className="flex items-center gap-3">
                        <SvgIcons.Telephone className="size-5"/>
                        <p>{data.telephone}</p>
                    </a>
                }

                {
                    data?.facebook && data.facebook !== "" &&
                    <a href={data.facebook} target="_blank" className="flex items-center gap-3">
                        <SvgIcons.Facebook className="size-5"/>
                        <p>Facebook</p>
                    </a>
                }
                {
                    data?.twitter && data.twitter !== "" &&
                    <a href={data.twitter} target="_blank" className="flex items-center gap-3">
                        <SvgIcons.Twitter className="size-5"/>
                        <p>Twitter</p>
                    </a>
                }
                {
                    data?.ins && data.ins !== "" &&
                    <a href={data.ins} target="_blank" className="flex items-center gap-3">
                        <SvgIcons.Instagram className="size-5"/>
                        <p>Instagram</p>
                    </a>
                }

                {
                    data?.youtube && data.youtube !== "" &&
                    <a href={data.youtube} target="_blank" className="flex items-center gap-3">
                        <SvgIcons.Youtube className="size-5"/>
                        <p>YouTube</p>
                    </a>
                }
            </div>



            {
                data?.address && data.address !== "" &&
                <p className="p-5 text-neutral-500">{data.address}</p>
            }

        </div>
    )
}


export default SmallContactModal;