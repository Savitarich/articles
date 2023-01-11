import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Article } from "./pages/Article";

export default function App() {
    return (
        <div className='App'>
            <Router>
                <Routes>
                    <Route
                        path='/'
                        element={<Home></Home>}
                    />
                    <Route
                        path='/article'
                        element={<Article></Article>}
                    />
                </Routes>
            </Router>
        </div>
    );
}
