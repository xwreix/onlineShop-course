import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/login" element={<Login/>}/>
                <Route exact path="/register" element={<Register/>}/>
            </Routes>
        </Router>
    );
};

export default App;