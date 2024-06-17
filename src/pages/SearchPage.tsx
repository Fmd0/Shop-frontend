import Footer from "../components/Footer.tsx";
import SearchPageMainContent from "../components/searchPage/SearchPageMainContent.tsx";
import NavBarSearchPage from "../components/searchPage/NavBarSearchPage.tsx";


const SearchPage = () => {
    return (
        <>
            <NavBarSearchPage />
            <SearchPageMainContent />
            <Footer />
        </>
    )
}

export default SearchPage