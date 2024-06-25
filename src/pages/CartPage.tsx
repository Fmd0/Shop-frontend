import NavBar from "../components/NavBar.tsx";
import Footer from "../components/Footer.tsx";
import CartPageMainContent from "../components/cartPage/CartPageMainContent.tsx";
import RecentlyViewedListCartPage from "../components/cartPage/RecentlyViewedListCartPage.tsx";
import SignInGlobalModal from "../components/SignInGlobalModal.tsx";


const CartPage = () => {

    return (
        <>
            <NavBar />
            <CartPageMainContent />
            <RecentlyViewedListCartPage />
            <Footer />
            <SignInGlobalModal />
        </>
    )
}

export default CartPage