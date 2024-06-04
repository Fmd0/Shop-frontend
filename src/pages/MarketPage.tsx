import MarketPageMainContent from "../components/MarketPage/MarketPageMainContent.tsx";
import NavBar from "../components/NavBar.tsx";
import ContactModal from "../components/MarketPage/ContactModal.tsx";
import PrivacyModal from "../components/MarketPage/PrivacyModal.tsx";


const MarketPage = () => {

    const urlSearchParams = new URLSearchParams(window.location.search);
    const id = urlSearchParams.get('id');

    if (id == null) {
        return (
            <div className="text-center text-5xl mt-8">
                404 id not found
            </div>
        )
    }

    return (
        <>
            <NavBar />
            <MarketPageMainContent id={id} />
            <ContactModal />
            <PrivacyModal />
        </>
    )
}

export default MarketPage;