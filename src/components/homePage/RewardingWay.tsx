import shopPay from "../../assets/shopPay.png"
import trackTop from "../../assets/trackTop.png"
import trackBottom from "../../assets/trackBottom.png"
import coinTop from "../../assets/coinTop.png"
import coinMiddle from "../../assets/coinMiddle.png"
import coinBottom from "../../assets/coinBottom.png"
import qrCode from "../../assets/qrCode.svg"
import appCorner from "../../assets/appCorner.png"
import aiShopping from "../../assets/aiShopping.svg"




const RewardingWay = () => {
    return (
        <div className="w-[96%] max-w-[1144px] mx-auto my-28">
            <h1 className="text-[36px] sm:text-[40px] md:text-[48px] mx-auto text-center font-light mb-14">The most rewarding way to <br/> shop</h1>

            <div className="flex flex-col md:flex-row gap-8">

                {/*left column*/}
                <div className="md:flex-1 flex flex-col gap-8">

                    {/*shop pay div*/}
                    <div
                        className="grid auto-rows-auto lg:grid-cols-2 bg-neutral-100 rounded-3xl border-neutral-200 border-[1px]">
                        <div className="lg:hidden h-[1px] bg-gray-300"></div>
                        <div className="px-8 py-4 flex flex-col justify-between items-start gap-4">
                            <div>
                                <h3 className="text-[24px] font-semibold mb-2">Shop Pay</h3>
                                <p className="text-sm text-neutral-500">Shop Pay is the one-tap checkout you crave.
                                    Enjoy interest-free payments up to 12
                                    months and instant rewards with every order.
                                </p>
                            </div>
                            <a href="https://shop.app/shop-pay" target="_blank">
                                <div className="border-neutral-300 border-[1px] py-2 text-[16px] px-4 rounded-xl">
                                    Learn More
                                </div>
                            </a>
                        </div>


                        <img src={shopPay} alt="shopPay"
                             className="order-first lg:order-last w-1/2 mx-auto px-4 lg:px-8 py-2 lg:py-4 lg:w-full object-cover lg:scale-[120%] relative -top-10"/>
                    </div>


                    {/*Real-time tracking div*/}
                    <div className="grid auto-rows-auto lg:grid-cols-2 gap-2 bg-neutral-100 rounded-3xl border-neutral-200 border-[1px]">
                        <div className="lg:hidden h-[1px] bg-gray-300"></div>
                        <div className="px-8 py-4 flex flex-col justify-between items-start gap-4">
                            <div>
                                <h3 className="text-[24px] font-semibold mb-2">Real-time tracking</h3>
                                <p className="text-sm text-neutral-500">Keep track all your orders in one, convenient
                                    place. Stay up-to-date with
                                    notifications and real-time tracking from delivery to door step.
                                </p>
                            </div>
                            <a href="https://shop.app/download" target="_blank">
                                <div className="border-neutral-300 border-[1px] py-2 text-[16px] px-4 rounded-xl">
                                    Download App
                                </div>
                            </a>
                        </div>

                        <div className="px-8 py-4 order-first lg:order-last flex flex-col items-center">
                            <img src={trackTop} alt="trackTop" className="w-20 lg:w-[120px]"/>
                            <img src={trackBottom} alt="trackBottom" className="w-40 lg:w-[230px]"/>
                        </div>
                    </div>
                </div>

                {/*right column*/}
                <div className="md:flex-1 grid grid-rows-[1fr_auto] gap-8">

                    {/*Shop Cash div*/}
                    <div
                        className="grid auto-rows-auto lg:grid-cols-2 bg-neutral-100 rounded-3xl border-neutral-200 border-[1px]">
                        <div className="lg:hidden h-[1px] bg-gray-300"></div>
                        <div className="flex flex-col justify-between items-start gap-2 px-8 py-4">
                            <div>
                                <h3 className="text-[24px] font-semibold mb-2">Shop Cash</h3>
                                <p className="text-sm text-neutral-500">Earn 1% Shop Cash every time you checkout with
                                    Shop Pay. Spend it on Shop and boost it with offers.*
                                </p>
                            </div>
                            <a href="https://shop.app/shop-pay/#cash" target="_blank">
                                <div className="border-neutral-300 border-[1px] py-2 text-[16px] px-4 rounded-xl">
                                    Learn More
                                </div>
                            </a>
                        </div>
                        <div className="order-first lg:order-last flex flex-col justify-between items-center">
                            <img src={coinTop} alt="coinTop" className="w-[160px] relative -top-8"/>
                            <img src={coinMiddle} alt="coinMiddle" className="hidden lg:inline lg:w-[170px]"/>
                            <img src={coinBottom} alt="coinBottom" className="w-[180px]"/>
                        </div>
                    </div>

                    {/*AI Shopping Assistant div*/}
                    <div className="bg-neutral-100 rounded-3xl border-[1px] border-neutral-200 grid auto-rows-auto lg:grid-cols-2 gap-4">
                        <div className="lg:hidden h-[1px] bg-gray-300"></div>
                        <div className="px-8 py-4 flex flex-col justify-between items-start gap-2">
                            <div>
                                <h3 className="text-[24px] font-semibold mb-2">AI Shopping Assistant</h3>
                                <p className="text-sm text-neutral-500">Get personalized shopping support from Shop's
                                    AI-powered shopping assistant. Find exactly what you're looking for in a flash.
                                </p>
                            </div>
                            <a href="https://shop.app/" target="_blank">
                                <div className="border-neutral-300 border-[1px] py-2 text-[16px] px-4 rounded-xl">
                                    Try it
                                </div>
                            </a>
                        </div>

                        <div className="order-first lg:order-last p-4 flex flex-col items-center text-white">
                            <div
                                className="relative z-10 flex rounded-lg w-[165px] items-start p-3 gap-2 backdrop-blur-[8.07px] bg-[rgba(115,102,102,0.44)]">
                                <img src={aiShopping} alt="aiShopping" className="w-5"/>
                                <p className="text-sm">Hi, I am your shopping assistant. How can I help you?</p>
                            </div>
                            <div
                                className=" translate-x-[25%] rounded-lg p-3 text-sm w-[165px] bg-[linear-gradient(156deg,rgba(90,49,244,0.88)_23.67%,rgba(90,49,244,0.56)89.11%)]">
                                I’m training for a marathon, what should I buy?
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div
                className="mt-8 bg-neutral-100 rounded-3xl p-8 border-neutral-200 border-[1px] mb-6 flex flex-col items-center gap-8">
                <p className="relative text-[36px] sm:text-[40px] md:text-[48px] font-light text-center">
                    Get the app with <br/>
                    500K 5-star reviews
                    <img src={appCorner} alt="appCorner" className="hidden md:inline absolute top-0 -right-[72px] w-[110px]"/>
                </p>
                <img src={qrCode} alt="qrCode" className="hidden md:inline w-[180px]"/>
            </div>
        </div>
    )
}


export default RewardingWay;