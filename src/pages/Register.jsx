import React from 'react';
import styled from "styled-components";
import Navbar from "../components/Navbar";

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
    return (
        <>
            <Navbar/>
            <Container>
                <Wrapper>
                    <Title> CREATE AN ACCOUNT </Title>
                    <Form>
                        <Input placeholder="name"/>
                        <Input placeholder="last name"/>
                        <Input placeholder="email"/>
                        <Input placeholder="password"/>
                        <Button>CREATE</Button>
                    </Form>
                </Wrapper>
            </Container>
        </>

    );
};

export default Register;