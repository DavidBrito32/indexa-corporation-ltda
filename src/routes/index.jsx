import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutPage from "../layouts/Public";

const Ways = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LayoutPage />}>
                        
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Ways;