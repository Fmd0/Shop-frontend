import Footer from "../components/common/Footer.tsx";
import SearchPageMainContent from "../components/searchPage/SearchPageMainContent.tsx";
import NavBarSearchPage from "../components/searchPage/NavBarSearchPage.tsx";
import SignInFormModal from "../components/common/SignInFormModal.tsx";


const SearchPage = () => {
    return (
        <>
            <NavBarSearchPage />
            <SearchPageMainContent />
            <Footer />
            <SignInFormModal />
        </>
    )
}

export default SearchPage