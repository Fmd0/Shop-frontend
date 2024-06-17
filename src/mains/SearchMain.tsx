import React from 'react'
import ReactDOM from 'react-dom/client'
import "../index.css"
import SearchPage from "../pages/SearchPage.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <SearchPage />
    </React.StrictMode>,
)
