import NavBar from "../components/NavBar.tsx";
import Footer from "../components/Footer.tsx";
import RecentlyViewedPageMainContent from "../components/recentlyViewedPage/RecentlyViewedPageMainContent.tsx";
import SignInGlobalModal from "../components/SignInGlobalModal.tsx";


const RecentlyViewedPage = () => {

    return (
        <>
            <NavBar />
            <RecentlyViewedPageMainContent />
            <Footer />
            <SignInGlobalModal />
        </>
    )
}

export default RecentlyViewedPage;