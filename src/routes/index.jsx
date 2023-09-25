import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutPage from "../layouts/Public";
import Home from '../pages/Public/Home'

const Ways = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LayoutPage />}>
                    <Route index element={<Home />} />                        
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Ways;