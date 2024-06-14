import shopPay from "../../assets/HomePage/shopPay.png"
import trackTop from "../../assets/HomePage/trackTop.png"
import trackBottom from "../../assets/HomePage/trackBottom.png"
import coinTop from "../../assets/HomePage/coinTop.png"
import coinMiddle from "../../assets/HomePage/coinMiddle.png"
import coinBottom from "../../assets/HomePage/coinBottom.png"
import qrCode from "../../assets/HomePage/qrCode.svg"
import appCorner from "../../assets/HomePage/appCorner.png"
import aiShopping from "../../assets/HomePage/aiShopping.svg"




const RewardingWay = () => {
    return (
        <div className="my-28 w-[1144px] mx-auto p-4">
            <h1 className="text-[48px] mx-auto text-center font-light mb-14">The most rewarding way to <br/> shop</h1>

            <div className="grid grid-cols-2 gap-6">

                <div>
                    <div className="grid grid-cols-2 bg-neutral-100 rounded-3xl p-8 border-neutral-200 border-[1px] mb-6">
                        <div className="flex flex-col justify-between items-start">
                            <div>
                                <h3 className="text-[24px] font-semibold mb-2">Shop Pay</h3>
                                <p className="text-sm text-neutral-500">Shop Pay is the one-tap checkout you crave. Enjoy interest-free payments up to 12
                                    months and instant rewards with every order.
                                </p>
                            </div>
                            <button className="border-neutral-300 border-[1px] py-2 text-[16px] px-4 rounded-[999px]">
                                Learn More
                            </button>
                        </div>
                        <img src={shopPay} alt="shopPay" className="w-full object-cover scale-[120%] relative top-[-48px]"/>
                    </div>

                    <div className="grid grid-cols-2 bg-neutral-100 rounded-3xl p-8 border-neutral-200 border-[1px]">
                        <div className="flex flex-col justify-between items-start">
                            <div>
                                <h3 className="text-[24px] font-semibold mb-2">Real-time tracking</h3>
                                <p className="text-sm text-neutral-500">Keep track all your orders in one, convenient place. Stay up-to-date with
                                    notifications and real-time tracking from delivery to door step.
                                </p>
                            </div>
                            <button className="border-neutral-300 border-[1px] py-2 text-[16px] px-4 rounded-xl">
                                Download App
                            </button>
                        </div>

                        <div className="flex flex-col items-center">
                            <img src={trackTop} alt="trackTop" className="w-[120px]"/>
                            <img src={trackBottom} alt="trackBottom" className="w-[230px]"/>
                        </div>
                    </div>
                </div>

                <div className="grid grid-rows-[1fr_auto]">
                    <div
                        className="grid grid-cols-2 bg-neutral-100 rounded-3xl border-neutral-200 border-[1px] mb-6">
                        <div className="flex flex-col justify-between items-start py-8 pl-8">
                            <div>
                                <h3 className="text-[24px] font-semibold mb-2">Shop Cash</h3>
                                <p className="text-sm text-neutral-500">Earn 1% Shop Cash every time you checkout with
                                    Shop Pay. Spend it on Shop and boost it with offers.*
                                </p>
                            </div>
                            <button className="border-neutral-300 border-[1px] py-2 text-[16px] px-4 rounded-xl">
                                Learn More
                            </button>
                        </div>
                        <div className="flex flex-col justify-between h-full items-center gap-[12px]">
                            <img src={coinTop} alt="coinTop" className="w-[160px] relative -top-8"/>
                            <img src={coinMiddle} alt="coinMiddle" className="w-[170px]"/>
                            <img src={coinBottom} alt="coinBottom" className="w-[180px]"/>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 bg-neutral-100 rounded-3xl p-8 border-neutral-200 border-[1px]">
                        <div className="flex flex-col justify-between items-start">
                            <div className="mb-8">
                                <h3 className="text-[24px] font-semibold mb-2">AI Shopping Assistant</h3>
                                <p className="text-sm text-neutral-500">Get personalized shopping support from Shop's AI-powered shopping assistant. Find exactly what you're looking for in a flash.
                                </p>
                            </div>
                            <button className="border-neutral-300 border-[1px] py-2 text-[16px] px-4 rounded-xl">
                                Try it
                            </button>
                        </div>

                        <div className="flex flex-col items-center text-white">
                            <div className="relative z-10 flex rounded-lg w-[165px] items-start p-3 gap-2 backdrop-blur-[8.07px] bg-[rgba(115,102,102,0.44)]">
                                <img src={aiShopping} alt="aiShopping" className="w-5"/>
                                <p className="text-sm">Hi, I am your shopping assistant. How can I help you?</p>
                            </div>
                            <div className="relative -top-2 translate-x-[25%] rounded-lg p-3 text-sm w-[165px] bg-[linear-gradient(156deg,rgba(90,49,244,0.88)_23.67%,rgba(90,49,244,0.56)89.11%)]"
                                 // style={{backdropFilter: "blur(8.079375267028809px)"}}
                            >
                                I’m training for a marathon, what should I buy?
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="mt-8 bg-neutral-100 rounded-3xl p-8 border-neutral-200 border-[1px] mb-6 flex flex-col items-center gap-8">
                <p className="relative text-[48px] font-light text-center">
                    Get the app with <br/>
                    500K 5-star reviews
                    <img src={appCorner} alt="appCorner" className="absolute top-0  right-[-72px] w-[110px]"/>
                </p>
                <img src={qrCode} alt="qrCode" className="w-[180px]"/>
            </div>
        </div>
    )
}


export default RewardingWay;