import useCartInfoStore from "../../hooks/useCartInfoStore.ts";
import MarketListCartPage from "./MarketListCartPage.tsx";


const CartPageMainContent = () => {
    const {cartInfo} = useCartInfoStore();

    if(Object.keys(cartInfo).length === 0){
        return (
            <div className="h-[calc(100vh-390px)] text-neutral-600 text-center content-center px-4 text-[20px] font-medium">
                <p className="text-[20px]">Your cart is empty</p>
                <p className="text-[14px] font-normal">Add products while you shop, so they'll be ready for checkout later.</p>
            </div>
        )
    }

    return (
        <div className=" w-[96%] max-w-[1144px] mx-auto tracking-[0.15px] font-medium">
            <h1 className="hidden md:block text-[28px] mt-4 md:mt-12 mb-4 md:mb-8">Cart</h1>
            <div className="flex flex-col gap-6 mt-4 md:mt-0">
                {
                    Object.entries(cartInfo).map(([key, value]) => (
                        <MarketListCartPage key={key} marketInfo={value} />
                    ))
                }
            </div>
        </div>
    )
}

export default CartPageMainContent;