import React from 'react'
import ReactDOM from 'react-dom/client'
import MarketPage from "../pages/MarketPage.tsx";
import "../index.css"

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <MarketPage />
    </React.StrictMode>,
)
