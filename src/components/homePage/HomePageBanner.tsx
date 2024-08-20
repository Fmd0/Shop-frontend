import bannerLogo from "../../assets/HomePage/bannerLogo.svg"
import bannerArrow from "../../assets/HomePage/bannerArrow.svg"


const HomePageBanner = () => {
    return (
        <div className="flex h-8 md:h-10 bg-black justify-center items-center text-[10px] md:text-[12px]">
            <a href="#">
                <div className="flex flex-row items-center gap-1 md:gap-2">
                    <img src={bannerLogo} alt="bannerLogo" className="size-4 md:size-6"/>
                    <p className="text-white font-semibold">Download Shop app.</p>
                    <p className="text-neutral-400">Available on iOS & Android</p>
                    <img src={bannerArrow} alt="bannerArrow" className="size-4 md:size-5"/>
                </div>
            </a>
        </div>
    )
}

export default HomePageBanner;