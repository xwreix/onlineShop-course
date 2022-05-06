import React, {useState} from 'react';
import Navbar from "../components/Navbar";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {categories} from "../data";
import {addItem} from "../redux/apiCalls";

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
const Select = styled.select`
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

const Admin = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [author, setAuthor] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [genre, setGenre] = useState("");
    const [image, setImage] = useState();
    const {isFetching, error} = useSelector(state => state.user);

    const handleClick = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', image);
        formData.append('name', name);
        formData.append('author', author);
        formData.append('description', description);
        formData.append('price', price);
        formData.append('genre', genre);
        addItem(dispatch, formData);
    };

    return (
        <>
            <Navbar/>
            <Container>
                <Wrapper>
                    <Title> ADD NEW ITEM </Title>
                    <Form>
                        <Input
                            placeholder="name"
                            onChange={(e) => setName(e.target.value)}/>
                        <Input
                            placeholder="author"
                            onChange={(e) => setAuthor(e.target.value)}/>
                        <Input
                            placeholder="image"
                            type="file"
                            onChange={(e) => setImage(e.target.files[0])}
                        />
                        <Input
                            placeholder="description"
                            onChange={(e) => setDescription(e.target.value)}/>
                        <Input
                            placeholder="price"
                            type="number" step="0.01"
                            onChange={(e) => setPrice(e.target.value)}/>
                        <Select value={genre} onChange={(e) => setGenre(e.target.value)}>
                            {categories.map((option) => (
                                <option value={option.title}>{option.title}</option>
                            ))}
                        </Select>
                        <Button
                            onClick={handleClick}
                            disabled={isFetching}
                        >ADD</Button>
                    </Form>
                </Wrapper>
            </Container>
        </>
    );
};

export default Admin;