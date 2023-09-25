import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutPage from "../layouts/Public";
import ErrorPage from '../pages/Error/index';
import Home from '../pages/Public/Home';
import Consultar from "../pages/Public/Consultas";

const Ways = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LayoutPage />}>
                        <Route index element={<Home />} />
                        <Route path="/consultas" element={<Consultar />} />
                        <Route path="*" element={<ErrorPage />} />                        
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Ways;