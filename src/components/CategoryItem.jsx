import React from 'react';
import styled from "styled-components";
import {getItems} from "../redux/apiCalls";
import {useDispatch} from "react-redux";
import {setGenre} from "../redux/itemRedux";
import {useNavigate} from "react-router-dom";

const Container = styled.div`
flex: 1;
margin: 3px;
height: 70vh;
position: relative;`;
const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover`;
const Info = styled.div`
width: 100%;
height: 100%;
top: 0;
left: 0;
display: flex;
position: absolute;
flex-direction: column;
align-items: center;
justify-content: center;`;
const Title = styled.h3`
`;
const Button = styled.button`
padding: 10px;
font-size: 20px;
font-color: black;
cursor: pointer;`;

const CategoryItem = ({item}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = () => {
        getItems(dispatch, navigate, item.title);
    };

    return (
        <Container>
            <Image src={item.img}/>
            <Info>
                {/*<Title>{item.title}</Title>*/}
                <Button onClick={handleClick}>{item.title}</Button>
            </Info>
        </Container>
    );
};

export default CategoryItem;