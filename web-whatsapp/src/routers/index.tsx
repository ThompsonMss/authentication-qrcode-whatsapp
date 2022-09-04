import { BrowserRouter, Routes, Route } from "react-router-dom"

import { AuthQrCode } from "../pages/AuthQrCode";
import { Dashboard } from "../pages/Dashboard";

export function Routers () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AuthQrCode />} />
                <Route path="/home" element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    );
}