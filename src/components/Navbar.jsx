import React from 'react';
import styled from "styled-components";
import {Search, ShoppingCartOutlined, HomeOutlined} from "@material-ui/icons";
import {Badge} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../redux/userRedux";
import {useNavigate} from "react-router-dom";

const Container = styled.div`
height: 60px;
`
const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
align-items: center;
justify-content: space-between;
`
const Left = styled.div`
flex: 1;
display: flex;
align-items: center;`
const Center = styled.div`
flex: 1;
text-align: center;`
const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end`
const SearchContainer = styled.div`
border: 0.5px solid lightgrey;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;
`
const Logo = styled.h1`
font-weight: bold;
`
const Input = styled.input`
border: none;`
const MenuItem = styled.a`
font-size: 14px;
cursor: pointer;
margin-left: 25px;
text-decoration: none;
color: inherit;`;
const Home = styled.div`
ont-size: 14px;
cursor: pointer;
text-decoration: none;
color: inherit;`

const Navbar = () => {
    const quantity = useSelector(state => state.cart.quantity);
    const user = useSelector(state => state.user.currentUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <Container>
            <Wrapper>
                <Left>
                    <Home onClick={() => navigate('/')}>
                        <HomeOutlined/>
                    </Home>
                    <Home onClick={() => navigate('/')}>
                        HOME
                    </Home>
                </Left>
                <Center>
                    <Logo>
                        Read.
                    </Logo>
                </Center>
                <Right>
                    {user && user.role === 'ADMIN' && <MenuItem href="/admin"> ADMIN </MenuItem>}
                    {user && user.role === 'CUSTOMER' && <MenuItem href="/user"> {user.name} {user.lastName} </MenuItem>}
                    {user && <MenuItem onClick={handleLogout} href="/"> LOGOUT </MenuItem>}
                    {!user && <MenuItem href="/login"> LOGIN </MenuItem>}
                    {!user && <MenuItem href="/register"> REGISTER </MenuItem>}
                    <MenuItem onClick={() => navigate('/cart')}>
                        <Badge badgeContent={quantity} color="primary">
                            <ShoppingCartOutlined/>
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    );
};

export default Navbar;