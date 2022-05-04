import React from 'react';
import styled from "styled-components";
import {Search, ShoppingCartOutlined} from "@material-ui/icons";
import {Badge} from "@material-ui/core";
import Login from "../pages/Login";

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

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <SearchContainer>
                        <Input/>
                        <Search style={{color: "gray", fontSize:16}}/>
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>
                        Read.
                    </Logo>
                </Center>
                <Right>
                    <MenuItem href="/login"> LOGIN </MenuItem>
                    <MenuItem href="/register"> REGISTER </MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlined/>
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    );
};

export default Navbar;