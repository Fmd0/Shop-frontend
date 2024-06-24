import React from 'react'
import ReactDOM from 'react-dom/client'
import "../index.css"
import CartPage from "../pages/CartPage.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <CartPage />
    </React.StrictMode>,
)
