import {itemsReducer, loginFailure, loginStart, loginSuccess, registerEnd, registerStart} from "./userRedux";
import axios from "axios";
import {getItemsReducer, getItemsSuccess} from "./itemRedux";
import {clearCart} from "./cartRedux";

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
        await axios.post("http://localhost:8080/addItem", data);
        alert("Item added successfully.")
        navigate("/");
    } catch (err) {
        alert("Couldn't add item.")
    }
    dispatch(registerEnd());
}

export const getItems = async (dispatch, navigate, title) => {
    const res = await axios.get("http://localhost:8080/getItems/" + title);
    dispatch(itemsReducer(res.data));
    navigate("/items");
}

export const deleteItemById = async (navigate, id) => {
    try {
        await axios.post("http://localhost:8080/deleteItem/" + id);
        alert("Item is deleted.");
        navigate('/');
    } catch (error) {
        alert("Couldn't delete item.")
    }
}

export const createPayment = async (dispatch, navigate, data) => {
    try {
        await axios.post("http://localhost:8080/createPayment", data);
        dispatch(clearCart());
        alert("Payment is successful.")
        navigate('/')
    } catch (err) {
        alert("Payment is not successful.");
    }
}

export const changeUser = async (dispatch, navigate, user) => {
    try {
        const res = await axios.post("http://localhost:8080/changeUser", user);
        dispatch(loginSuccess(res.data));
        alert("Info is changed.");
        navigate('/user');
    } catch (err) {
        alert("Couldn't change your info");
    }
}

