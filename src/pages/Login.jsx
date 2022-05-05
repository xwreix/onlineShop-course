import React, {useState} from 'react';
import styled from "styled-components";
import Navbar from "../components/Navbar";
import {login} from "../redux/apiCalls";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

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
width: 25%;
padding:20px;
background-color: white;`;
const Title = styled.h1`
font-size: 24px;
font-weight: 300;`;
const Form = styled.form`
display: flex;
flex-direction: column;`;
const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 20px 10px 0px 0px;
padding: 10px;`;
const Button = styled.button`
width: 40%;
border: none;
margin: 20px 0px;
padding: 15px 20px;
background-color: teal;
font-color: white;
cursor: pointer;
&:disabled{color: green;
cursor: not-allowed}`;
const Link = styled.a`
margin: 5px 0px;
font-size: 12px;
text-decoration: underline;
cursor: pointer;
color: inherit;`
const Error = styled.span`
color: red;`
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {isFetching, error} = useSelector(state => state.user);


    const handleClick = (e) => {
        e.preventDefault();
        login(dispatch, {email, password}, navigate);
    }

    return (<>
            <Navbar/>
            <Container>
                <Wrapper>
                    <Title> SIGN IN </Title>
                    <Form>
                        <Input
                            placeholder="email"
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}/>
                        <Input
                            placeholder="password"
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}/>
                        <Button
                            onClick={handleClick}
                            disabled={isFetching}
                        >LOGIN</Button>
                        {/*{error && <Error>Something went wrong!</Error>}*/}
                        <Link href="/register">CREATE A NEW ACCOUNT</Link>
                    </Form>
                </Wrapper>
            </Container>
        </>
    );
};

export default Login;