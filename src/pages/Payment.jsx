import React, {useState} from 'react';
import Navbar from "../components/Navbar";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Label} from "@material-ui/icons";
import {createPayment} from "../redux/apiCalls";

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
const Link = styled.span`
margin: 5px 0px;
font-size: 18px;
color: inherit;`

const Payment = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const user = useSelector(state => state.user.currentUser);
    const [email, setEmail] = useState(user.email);
    const [cardNumber, setCardNumber] = useState(0);
    const [cvv, setCvv] = useState(0);
    const handleClick = (e) => {
        e.preventDefault();
        const productsList = [];
        cart.products.map(item => (
            productsList.push(item.id))
        );

        createPayment(dispatch, navigate, {
            items: productsList,
            totalPrice: cart.totalPrice,
            email: email,
            cardNumber: cardNumber,
            cvv: cvv,
            userId: user.id
        });
    };
    return (
        <>
            <Navbar/>
            <Container>
                <Wrapper>
                    <Title> PAYMENT </Title>
                    <Form>
                        <Link>
                            Total price: {cart.totalPrice} $
                        </Link>
                        <Input
                            placeholder="email"
                            type="email"
                            defaultValue={user.email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {cart.totalPrice !== 0 &&
                        <Input
                            placeholder="card number"
                            type="number"
                            onChange={(e) => setCardNumber(e.target.value)}
                        />} { cart.totalPrice !== 0 &&
                        <Input
                            placeholder="cvv"
                            type="number"
                            onChange={(e) => setCvv(e.target.value)}
                        />
                        }

                        <Button
                            onClick={handleClick}>
                            PAY</Button>
                    </Form>
                </Wrapper>
            </Container>
        </>
    );
};

export default Payment;