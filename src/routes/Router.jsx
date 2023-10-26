import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicLayout from "../layouts/Public";
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/Error";
import Contabil from "../pages/Contabil";

const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<PublicLayout />}>
                        <Route index element={<HomePage />} />
                        <Route path="/contabil" element={<Contabil />} />
                        <Route path="*" element={<ErrorPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        
        </>
    )
}

export default Router;