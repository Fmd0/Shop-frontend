import Footer from "../components/Footer.tsx";
import SearchPageMainContent from "../components/searchPage/SearchPageMainContent.tsx";
import NavBarSearchPage from "../components/searchPage/NavBarSearchPage.tsx";
import SignInGlobalModal from "../components/SignInGlobalModal.tsx";


const SearchPage = () => {
    return (
        <>
            <NavBarSearchPage />
            <SearchPageMainContent />
            <Footer />
            <SignInGlobalModal />
        </>
    )
}

export default SearchPage