import {loginFailure, loginStart, loginSuccess, registerEnd, registerStart} from "./userRedux";
import axios from "axios";

export const login = async (dispatch, user, navigate) => {
    dispatch(loginStart());
    try {
        const res = await axios.post("http://localhost:8080/login", user);
        dispatch(loginSuccess(res.data));
        navigate("/");
    } catch (err) {
        dispatch(loginFailure());
        alert("Couldn't login");
    }
}

export const register = async (dispatch, navigate, user) => {
    dispatch(registerStart());
    try {
        await axios.post("http://localhost:8080/register", user);
        alert("Registration is successful, please login.");
        navigate("/");
    } catch (err) {
        alert("Couldn't register.");
    }

    dispatch(registerEnd());
}

export const addItem = async (dispatch, navigate, data) => {
    dispatch(registerStart());
    try {
        console.log(data);
        await axios.post("http://localhost:8080/addItem", data);
        alert("Item added successfully.")
        navigate("/");
    } catch (err) {
        alert("Couldn't add item.")
    }
    dispatch(registerEnd());
}
