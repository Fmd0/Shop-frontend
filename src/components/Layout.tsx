import NavBar from "./NavBar.tsx";
import Footer from "./Footer.tsx";
import SignInGlobalModal from "./SignInGlobalModal.tsx";
import React from "react";
import AddedToLikeGlobalModal from "./AddedToLikeGlobalModal.tsx";

const Layout = ({children}: {
    children: React.ReactNode;
}) => {
    return (
        <>
            <NavBar />
            {children}
            <Footer />
            <SignInGlobalModal />
            <AddedToLikeGlobalModal />
        </>
    )
}

export default Layout;