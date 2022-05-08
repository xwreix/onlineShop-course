import React from 'react';
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import Navbar from "./Navbar";
import {ShoppingCartOutlined, DeleteOutline} from "@material-ui/icons";
import {useNavigate} from "react-router-dom";
import {deleteItemById} from "../redux/apiCalls";
import {addProduct, deletePrd, removeProduct} from "../redux/cartRedux";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;
const Container = styled.div`
padding: 10px;
display: flex;
flex-wrap: wrap`;
const Wrapper = styled.div`
flex: 1;
margin: 5px;
min-width: 250px;
height: 350px;
display: flex;
flex-direction: column;
align-items: center; 
justify-content: center;
background-color: #f5fbfd;
position: relative;
  &:hover ${Info}{
    opacity: 1;
  }`;
const Image = styled.div`
z-index: 2;`
const Icon = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`
const BookInfo = styled.h3`
background-color: white;`;
const Delete = styled.div`
position: absolute;
top: 0;
right: 0`;


const Products = () => {
    const products = useSelector(state => state.user.currentItems);
    const user = useSelector(state => state.user.currentUser);
    const cart = useSelector(state => state.cart);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const Picture = ({data}) => <img src={`data:image/jpeg;base64,${data}`} height="75%"/>

    const handleClick = (item) => {
        let filtered = cart.products.filter(current => current !== item);
        if (filtered.length === cart.products.length) {
            dispatch(addProduct(item));
        }
    }

    const deleteItem = (id) => {
        deleteItemById(navigate, id);
    }

    return (
        <>
            <Navbar/>
            {products[0] && <h1>GENRE: {products[0].genre.name}</h1>}
            <Container>
                {products.map(item => (
                    <>
                        <Wrapper>
                            <Picture data={item.image}/>
                            <Info>
                                {user && user.role === 'ADMIN' &&
                                <Delete>
                                    <Icon onClick={() => deleteItem(item.id)}>
                                        <DeleteOutline/>
                                    </Icon>
                                </Delete>
                                }
                                <Icon onClick={() => handleClick(item)}>
                                    <ShoppingCartOutlined/>
                                </Icon>
                                <BookInfo>
                                    "{item.name}" by {item.author.name}
                                </BookInfo>
                                <BookInfo>
                                    price: {item.price}
                                </BookInfo>
                            </Info>

                        </Wrapper>

                    </>

                ))}
            </Container>
        </>

    );
};

export default Products;