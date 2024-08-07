import CartPageMainContent from "../components/cartPage/CartPageMainContent.tsx";
import RecentlyViewedListCartPage from "../components/cartPage/RecentlyViewedListCartPage.tsx";
import Layout from "../components/common/Layout.tsx";


const CartPage = () => {

    return (
        <Layout>
            <CartPageMainContent />
            <RecentlyViewedListCartPage />
        </Layout>
    )
}

export default CartPage