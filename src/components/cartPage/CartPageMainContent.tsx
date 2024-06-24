import useCartInfoStore from "../../hooks/useCartInfoStore.ts";
import MarketListCartPage from "./MarketListCartPage.tsx";


const CartPageMainContent = () => {
    const {cartInfo} = useCartInfoStore();

    if(Object.keys(cartInfo).length === 0){
        return (
            <div className="h-[calc(100vh-80px-390px)] text-neutral-600 flex flex-col gap-4 items-center justify-center text-[20px] font-medium">
                <p className="text-[20px]">Your cart is empty</p>
                <p className="text-[14px] font-normal">Add products while you shop, so they'll be ready for checkout later.</p>
            </div>
        )
    }

    return (
        <div className="w-[90%] max-w-[1144px] mx-auto tracking-[0.15px] font-medium">
            <h1 className="text-[28px] mt-12 mb-8">Cart</h1>
            {
                Object.entries(cartInfo).map(([key, value]) => (
                    <MarketListCartPage key={key} marketInfo={value} />
                ))
            }
        </div>
    )
}

export default CartPageMainContent;