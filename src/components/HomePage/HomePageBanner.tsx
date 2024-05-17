import bannerLogo from "../../assets/HomePage/bannerLogo.svg"
import bannerArrow from "../../assets/HomePage/bannerArrow.svg"


const HomePageBanner = () => {
    return (
        <div className="h-[40px] bg-black flex justify-center items-center text-[12px]">
            <a href="#" className="flex items-center">
                <img src={bannerLogo} alt="bannerLogo" className="mr-2"/>
                <p className="text-white font-semibold mr-1">Download Shop app.</p>
                <p className="text-neutral-400 mr-2">Available on iOS & Android</p>
                <img src={bannerArrow} alt="bannerArrow" className="w-5 h-5" />
            </a>
        </div>
    )
}

export default HomePageBanner;