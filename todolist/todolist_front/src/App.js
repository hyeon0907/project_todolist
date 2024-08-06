import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import NotFound from "./pages/NotFound/NotFound";
import { Global } from "@emotion/react";
import { reset } from "./styles/common";
import DandP from "./pages/DandP/DandP";

// path안에 *는 우선순위가 가장 낮음
function App() {
    return (
        <>
            <Global styles={reset}/>
            <Routes>
                <Route path="/" element={<Dashboard />}/>
                <Route path="/login" element={<></>}/>
                <Route path="/join" element={<></>}/>
                <Route path="/dp" element={<DandP/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </>
    );
}

export default App;
