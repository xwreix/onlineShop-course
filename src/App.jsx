import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {useSelector} from "react-redux";
import Admin from "./pages/Admin";
import Products from "./components/Products";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";
import User from "./pages/User";

const App = () => {
    const user = useSelector(state => state.user.currentUser);

    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/login" element={<Login/>}/>
                <Route exact path="/register" element={<Register/>}/>
                <Route exact path="/admin" element={<Admin/>}/>
                <Route exact path="/items" element={<Products/>}/>
                <Route exact path="/cart" element={<Cart/>}/>
                <Route exact path="/payment" element={<Payment/>}/>
                <Route exact path="/user" element={<User/>}/>
            </Routes>
        </Router>
    );
};

export default App;