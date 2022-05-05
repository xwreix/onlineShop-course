import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";

import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom'
import {useSelector} from "react-redux";
import cors from "cors";

const App = () => {
    const user = useSelector(state => state.user.currentUser);

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