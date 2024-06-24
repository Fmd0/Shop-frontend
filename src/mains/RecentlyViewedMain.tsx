import React from 'react'
import ReactDOM from 'react-dom/client'
import "../index.css"
import RecentlyViewedPage from "../pages/RecentlyViewedPage.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RecentlyViewedPage />
    </React.StrictMode>,
)
