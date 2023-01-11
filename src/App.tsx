import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";

export default function App() {
    return (
        <div className='App'>
            <Router>
                <Routes>
                    <Route
                        path='/'
                        element={<Home></Home>}
                    />
                </Routes>
            </Router>
        </div>
    );
}
