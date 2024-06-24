import NavBar from "../components/NavBar.tsx";
import Footer from "../components/Footer.tsx";
import RecentlyViewedPageMainContent from "../components/recentlyViewedPage/RecentlyViewedPageMainContent.tsx";


const RecentlyViewedPage = () => {

    return (
        <>
            <NavBar />
            <RecentlyViewedPageMainContent />
            <Footer />
        </>
    )
}

export default RecentlyViewedPage;