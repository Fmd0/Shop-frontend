import MarketPageMainContent from "../components/MarketPage/MarketPageMainContent.tsx";


const MarketPage = () => {

    const urlSearchParams = new URLSearchParams(window.location.search);
    const id = urlSearchParams.get('id');

    if (id == null) {
        return (
            <div className="text-center text-5xl mt-8">
                404 id not found
            </div>
        )
    }

    return (
        <>
            <MarketPageMainContent id={id} />
        </>
    )
}

export default MarketPage;