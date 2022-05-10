import React from 'react';
import Navbar from "../components/Navbar";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {Remove} from "@material-ui/icons";
import {useNavigate} from "react-router-dom";
import {removeProduct} from "../redux/cartRedux";

const Container = styled.div``;
const Wrapper = styled.div`
padding: 20px;`;
const Title = styled.h1`
font-weight: 300;
text-align: center;`;
const Top = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;`;
const TopButton = styled.button`
padding: 10px;
font-weight: 600;
cursor: pointer;
border: ${props => props.type === "filled" && "none"};
background-color: ${props => props.type ? "filled" && "black" : "transparent"};
color: ${props => props.type === "filled" && "white"}`
const TopTexts = styled.div``;
const TopText = styled.span`
text-decoration: underline;
cursor: pointer;
margin: 0px 10px;`;
const Bottom = styled.div`
display: flex;
justify-content: space-between;`;
const Info = styled.div`
flex: 3;`;
const Hr = styled.br`
background-color: #eee;
border: none;`
const Summary = styled.div`
flex: 1;
border: 0.5px solid lightgrey;
border-radius: 10px;
padding: 20px;
height: 50vh;;
`;
const Product = styled.div`
display: flex;
justify-content: space-between;
margin: 3px;`;
const ProductDetail = styled.div`
flex: 2;
display: flex;`;
const Image = styled.img`
width: 100px;
height: 150px;`;
const Details = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-around;`;
const ProductName = styled.span``;
const ProductAuthor = styled.span``;
const PriceDetail = styled.div`
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;`;
const ProductPrice = styled.div`
font-size: 30px;
font-weight: 200;
margin-top: 20px;`;
const SummaryTitle = styled.h1`
font-weight: 200;`;
const SummaryItem = styled.div`
margin: 30px 0px;
display: flex;
justify-content: space-between;
font-weight: ${props => props.type === "total" && "500"};
font-size: ${props => props.type === "total" && "24px"}`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const Button = styled.button`
width: 100%;
padding: 10px;
background-color: black;
color: white;
cursor: pointer;
font-weight: 600;`;

const Cart = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const user = useSelector(state => state.user.currentUser);

    const handleClick = () => {
        if(cart.quantity === 0) {
            alert("Your cart is empty");
        } else {
            if (!user) {
                alert("For this action you must login!");
                navigate('/login');
            } else {
                navigate('/payment')
            }
        }
    }

    const removeItem = (item) => {
        let filtered = cart.products.filter(current => current !== item);
        dispatch(removeProduct({filtered: filtered, removedPrice: item.price}));
        navigate('/cart');
    }

    return (
        <>
            <Container>
                <Navbar/>
                <Wrapper>
                    <Title>YOUR BAG </Title>
                    <Top>
                        <TopButton onClick={() => navigate('/')}>CONTINUE SHOPPING</TopButton>
                        <TopTexts>
                            <TopText>Your bag({cart.quantity})</TopText>
                            {/*<TopText>Your Wishlist (0)</TopText>*/}
                        </TopTexts>
                        <TopButton type="filled" onClick={() => handleClick()}>CHEKOUT NOW</TopButton>
                    </Top>
                    <Bottom>
                        <Info>
                            {cart.products.map(item => (<>
                                <Product>
                                    <ProductDetail>
                                        <Image src={`data:image/jpeg;base64,${item.image}`}/>
                                        <Details>
                                            <ProductName>Book: {item.name}</ProductName>
                                            <ProductAuthor>Author: {item.author.name}</ProductAuthor>
                                        </Details>
                                    </ProductDetail>
                                    <PriceDetail>
                                        <TopButton onClick={() => removeItem(item)}>remove</TopButton>
                                        <ProductPrice>{item.price} $</ProductPrice>
                                    </PriceDetail>
                                </Product>
                                <hr/>
                            </>))}
                        </Info>
                        <Summary>
                            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                            <SummaryItem type="total">
                                <SummaryItemText>Total: </SummaryItemText>
                                <SummaryItemPrice>{cart.totalPrice} $</SummaryItemPrice>
                            </SummaryItem>
                            <Button onClick={() => handleClick()}>CHECKOUT NOW</Button>
                        </Summary>
                    </Bottom>
                </Wrapper>
            </Container>

        </>
    );
};

export default Cart;