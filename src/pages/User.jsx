import React, {useState} from 'react';
import Navbar from "../components/Navbar";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {changeUser} from "../redux/apiCalls";
import {useNavigate} from "react-router-dom";

const Wrapper = styled.div`
width: 25%;
padding:20px;
background-color: #F5F5DC;`;
const Form = styled.form`
display: flex;
flex-direction: column;`;
const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 5px 10px 0px 0px;
padding: 10px;`;
const Title = styled.h1`
font-size: 24px;
font-weight: 300;`;
const Label = styled.label``;
const Button = styled.button`
width: 40%;
border: none;
margin: 20px;
padding: 15px 20px;
background-color: teal;
font-color: white;
cursor: pointer;`;

const User = () => {
    const user = useSelector(state => state.user.currentUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [lastName, setLastName] = useState(user.lastName);
    const [email, setEmail] = useState(user.email);
    const [name, setName] = useState(user.name);

    const handleClick = (e) => {
        e.preventDefault();
        changeUser(dispatch, navigate, {
            id: user.id, name: name, lastName: lastName, email: email
        })
    }
    return (
        <>
            <Navbar/>
            <Wrapper>
                <Form>
                    <Title> CHANGE USER INFO</Title>
                    <Label>Name:</Label>
                    <Input
                        placeholder="name"
                        defaultValue={user.name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <Label>Last name:</Label>
                    <Input
                        placeholder="last name"
                        defaultValue={user.lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    <Label>Email:</Label>
                    <Input
                        placeholder="email"
                        defaultValue={user.email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Button onClick={handleClick}>CHANGE</Button>
                </Form>
            </Wrapper>


        </>
    );
};

export default User;