import React, {useState} from 'react';
import styled from "styled-components";
import Navbar from "../components/Navbar";
import {login, register} from "../redux/apiCalls";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

const Container = styled.div`
width: 100vw;
height: 100vh;
background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url("/img/background.png");
background-repeat:no-repeat;
background-position: center center;
display: flex;
align-items: center;
justify-content: center;`;
const Wrapper = styled.div`
width: 40%;
padding:20px;
background-color: white;`;
const Title = styled.h1`
font-size: 24px;
font-weight: 300;`;
const Form = styled.form`
display: flex;
flex-wrap: wrap;`;
const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 20px 10px 0px 0px;
padding: 10px;`;
const Button = styled.button`
width: 40%;
border: none;
margin: 20px;
padding: 15px 20px;
background-color: teal;
font-color: white;
cursor: pointer;`;

const Register = () => {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {isFetching, error} = useSelector(state => state.user);

    const handleClick = (e) => {
        e.preventDefault();
        register(dispatch, navigate, {name, lastName, email, password});
    }

    return (
        <>
            <Navbar/>
            <Container>
                <Wrapper>
                    <Title> CREATE AN ACCOUNT </Title>
                    <Form>
                        <Input placeholder="name"
                               onChange={(e) => setName(e.target.value)}/>
                        <Input placeholder="last name"
                               onChange={(e) => setLastName(e.target.value)}/>
                        <Input placeholder="email"
                               type="email"
                               onChange={(e) => setEmail(e.target.value)}/>
                        <Input placeholder="password"
                               type="password"
                               onChange={(e) => setPassword(e.target.value)}/>
                        <Button onClick={handleClick} disabled={isFetching}>CREATE</Button>
                    </Form>
                </Wrapper>
            </Container>
        </>

    );
};

export default Register;